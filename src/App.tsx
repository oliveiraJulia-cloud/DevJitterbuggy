import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Projetos from './pages/Projetos'
import SobreMim from './pages/SobreMim'
import Contato from './pages/Contato'
import { useTheme } from './hooks/useTheme'

function App() {
  const { toggleTheme } = useTheme()

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home onToggleTheme={toggleTheme} />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </HashRouter>
  )
}

export default App