import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Paper } from '@mui/material';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${id}/`)
            .then(response => setPost(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <Container>
            <Paper style={{ padding: 16 }}>
                <Typography variant="h4" gutterBottom>{post.title}</Typography>
                <Typography variant="body1" paragraph><b>Description:</b>{post.content}</Typography>
                <Typography variant="subtitle1"><b>Author:</b> {post.author}</Typography>
                <Typography variant="subtitle1"><b>Created at:</b> {new Date(post.created_at).toLocaleString()}</Typography>
            </Paper>
        </Container>
    );
};

export default PostDetail;
