import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<PostListPage />} />
        <Route
          path="/@:username"
          exact={true}
          element={<PostListPage></PostListPage>}
        />
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        <Route path="/write" element={<WritePage></WritePage>} />
        <Route path="/@:username/:postId" element={<PostPage></PostPage>} />
      </Routes>
    </>
  );
}

export default App;
