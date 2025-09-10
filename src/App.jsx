import './global/fonts.scss';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global/visually-hidden.scss';
import './blocks/container/container';
import Main from './pages/main';
import Catalog from './pages/catalog';
import { ModalProvider } from './contexts/modalContext/modalContext.jsx';

function App() {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<div>Страница "О Седоне"</div>} />
        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;
