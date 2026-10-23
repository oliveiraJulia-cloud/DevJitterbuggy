import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Projetos from './pages/Projetos'
import SobreMim from './pages/SobreMim'
import Contato from './pages/Contato'

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/sobre-mim">Sobre mim</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </HashRouter>
  )
}

export default App