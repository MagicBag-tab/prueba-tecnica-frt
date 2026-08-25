import './App.scss'
import { Header } from './components/Header'

export default function App() {
  return (
    <div className="app">
      <div className="dashboard-layout">
        <Header />
        {/* Resto del dashboard irá aquí */}
      </div>
    </div>
  )
}
