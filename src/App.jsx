import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Editor from './pages/Editor/Editor';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  );
}
