import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Posts />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:id" element={<PostDetail />} />
                    <Route path="posts/create" element={<CreatePost />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
