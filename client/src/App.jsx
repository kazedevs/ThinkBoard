import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NotePage from './pages/NotePage';

function App() {
  return (
    <div data-theme="aqua">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id " element={<NotePage />} />
      </Routes>
    </div>
  );
}


export default App
