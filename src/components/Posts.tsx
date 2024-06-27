import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Button, List, ListItem, ListItemText, Paper } from '@mui/material';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the posts!', error);
            });
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Posts</Typography>

            <List>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <ListItem button key={post.id} component={Link} to={`/posts/${post.id}`}>
                            <Paper style={{ padding: 16, width: 300 }}>
                                <Typography variant="h4" gutterBottom>{post.title}</Typography>
                                <Typography variant="body1" paragraph><b>Description:</b>{post.content}</Typography>
                            </Paper>
                        </ListItem>
                    ))
                ) : (
                    <Typography variant="body1">No posts available</Typography>
                )}
            </List>
        </Container>
    );
};

export default Posts;
