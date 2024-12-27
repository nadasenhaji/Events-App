import React, { useState } from 'react';
import '../style/Description.css';

const Description = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, { text: newComment, date: new Date().toLocaleString() }]);
            setNewComment('');
        }
    };

    return (
        <div className="page-container">
            <div className="description-container">
                <div className="image-container">
                    <img
                        src="https://via.placeholder.com/600"
                        alt="Event"
                        className="event-image"
                    />
                </div>
                <div className="content-container">
                    <h1 className="event-title">Event Title</h1>
                    <p className="event-time">Date: January 1, 2025</p>
                    <p className="event-time">Time: 10:00 AM</p>
                    <p className="event-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        euismod, nisi vel tincidunt suscipit, ex massa bibendum nisi, vel
                        ultricies nisl eros id est. Donec feugiat urna at enim pretium, sed
                        bibendum elit aliquet.
                    </p>
                    <button className="buy-button">Buy</button>
                </div>
            </div>

            <div className="comment-section">
                <h2>Comments</h2>
                <div className="comments-list">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div className="comment-item" key={index}>
                                <div className="avatar">
                                    <img src="https://via.placeholder.com/45" alt="Avatar" />
                                </div>
                                <div className="comment-content">
                                    <div className="comment-header">
                                        <span className="username">User {index + 1}</span>
                                        <span className="date">{comment.date}</span>
                                    </div>
                                    <p className="comment-text">{comment.text}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-comments">No comments yet. Be the first to comment!</p>
                    )}
                </div>
                <div className="comment-input-section">
                    <textarea
                        className="comment-input"
                        placeholder="Write a comment..."
                        value={newComment}
                        onChange={handleCommentChange}
                    />
                    <button
                        className="submit-comment-btn"
                        onClick={handleAddComment}
                        disabled={!newComment.trim()}
                    >
                        Post Comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Description;