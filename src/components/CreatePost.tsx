import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitting:', { title, content, author });

        axios.post('http://127.0.0.1:8000/api/posts/', { title, content, author })
            .then(response => {
                console.log('Response:', response.data);
                navigate(`/posts/${response.data.id}`);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Container>
            <Paper style={{ padding: 16 }}>
                <Typography variant="h4" gutterBottom>Create New Post</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <TextField
                        label="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">Create Post</Button>
                </form>
            </Paper>
        </Container>
    );
};

export default CreatePost;
