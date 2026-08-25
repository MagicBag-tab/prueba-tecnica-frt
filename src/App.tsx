import './App.scss'
import { Header } from './components/Header'
import { KpiRow } from './components/KpiRow'
import { LeadsChart } from './components/LeadsChart'
import { InvestmentMix } from './components/InvestmentMix'
import { WhatsappConversionPanel } from './components/WhatsappConversionPanel'
import { MetaPacingPanel } from './components/MetaPacingPanel'

export default function App() {
  return (
    <div className="app">
      <div className="dashboard-layout">
        <Header />
        <KpiRow />
        <div className="dashboard-grid">
          <LeadsChart />
          <InvestmentMix />
          <WhatsappConversionPanel />
          <MetaPacingPanel />
        </div>
      </div>
    </div>
  )
}



