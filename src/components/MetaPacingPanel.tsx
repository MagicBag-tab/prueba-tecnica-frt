import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { PanelCard } from './ui/PanelCard';
import './MetaPacingPanel.scss';

const mockData = {
  meta: 400,
  actual: 311,
  faltan: 89,
  porcentaje: 78
};

const pieData = [
  { name: 'Actual', value: mockData.actual },
  { name: 'Faltan', value: mockData.faltan }
];

const COLORS = ['#3a5ad7', '#f5f5f5'];

export function MetaPacingPanel() {
  return (
    <PanelCard title="Meta & Pacing" subtitle="Agosto" className="meta-pacing-card">
      <div className="meta-pacing-card__content">
        <div className="meta-pacing-card__stats">
          <div className="stat-box">
            <span className="stat-box__label">Meta</span>
            <span className="stat-box__value">{mockData.meta}</span>
          </div>
          <div className="stat-box">
            <span className="stat-box__label">Actual</span>
            <span className="stat-box__value">{mockData.actual}</span>
          </div>
          <div className="stat-box">
            <span className="stat-box__label">Faltan</span>
            <span className="stat-box__value">{mockData.faltan}</span>
          </div>
        </div>
        
        <div className="meta-pacing-card__chart">
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={90}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  stroke="none"
                  cornerRadius={10}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-center-text">
              <span className="percentage">{mockData.porcentaje}%</span>
              <span className="label">de la meta</span>
            </div>
          </div>
        </div>
      </div>
    </PanelCard>
  );
}
