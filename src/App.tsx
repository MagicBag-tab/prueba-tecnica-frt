import './App.scss'
import { Header } from './components/Header'
import { KpiRow } from './components/KpiRow'

export default function App() {
  return (
    <div className="app">
      <div className="dashboard-layout">
        <Header />
        <KpiRow />
      </div>
    </div>
  )
}
