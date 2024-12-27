import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Organisateur.css';

const Organisateur = () => {
    const [events, setEvents] = useState([]);
    const [form, setForm] = useState({ title: '', date: '', time: '', location: '', description: '', image: null });
    const [editingEventId, setEditingEventId] = useState(null);

    // Fetch events
    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/api/events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "image") {
            setForm({ ...form, image: e.target.files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('date', form.date);
        formData.append('time', form.time);
        formData.append('location', form.location);
        formData.append('description', form.description);
        if (form.image) formData.append('image', form.image);

        try {
            if (editingEventId) {
                await axios.put(`/api/events/${editingEventId}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else {
                await axios.post('/api/events', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }
            fetchEvents();
            setForm({ title: '', date: '', time: '', location: '', description: '', image: null });
            setEditingEventId(null);
        } catch (error) {
            console.error('Error saving event:', error);
        }
    };

    const handleEdit = (event) => {
        setForm(event);
        setEditingEventId(event.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/events/${id}`);
            fetchEvents();
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    return (
        <div className="organizer-container">
            <h1>Manage Events</h1>
            <form className="event-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={form.location}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                />
                <button type="submit">{editingEventId ? 'Update Event' : 'Add Event'}</button>
            </form>
            <div className="event-list">
                {events.map((event) => (
                    <div key={event.id} className="event-item">
                        <h3>{event.title}</h3>
                        <p>{event.date} at {event.time}</p>
                        <p>{event.location}</p>
                        <p>{event.description}</p>
                        {event.image && <img src={event.image} alt={event.title} />}
                        <button onClick={() => handleEdit(event)}>Edit</button>
                        <button onClick={() => handleDelete(event.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Organisateur;
