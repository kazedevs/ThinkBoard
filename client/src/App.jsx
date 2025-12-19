import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NotePage from './pages/NotePage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <div data-theme="aqua">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}


export default App
