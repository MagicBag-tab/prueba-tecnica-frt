import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import './LeadsChart.scss';

const mockData = [
  { name: 'Jul', leads: 68000, display: '68k' },
  { name: 'Ago', leads: 70000, display: '70k' },
  { name: 'Sep', leads: 72000, display: '72k' },
  { name: 'Oct', leads: 75000, display: '75k' },
  { name: 'Nov', leads: 76000, display: '76k' },
  { name: 'Dic', leads: 78000, display: '78k' }
];

const colors = [
  '#c9d2f4', 
  '#9daceb', 
  '#6e82e1', 
  '#3a5ad7', 
  '#2a43a8', 
  '#1b2c72' 
];

export function LeadsChart() {
  return (
    <div className="leads-chart-card">
      <div className="leads-chart-card__header">
        <h3 className="leads-chart-card__title">
          Leads Mensuales <span className="subtitle">| Últimos 6 meses</span>
        </h3>
      </div>
      <div className="leads-chart-card__body">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={mockData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#a6a6a6' }} 
              dy={10} 
            />
            <Tooltip 
              cursor={{ fill: 'rgba(0,0,0,0.03)' }}
              formatter={(value: number) => [value, 'Leads']}
            />
            <Bar dataKey="leads" radius={[4, 4, 0, 0]} maxBarSize={70}>
              {mockData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
              <LabelList 
                dataKey="display" 
                position="top" 
                fill="#737373" 
                fontSize={11} 
                offset={8} 
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
