import { PanelCard } from './ui/PanelCard';
import './InvestmentMix.scss';

const mockData = [
  { canal: 'Meta Ads', inversion: '$7,560', porcentaje: 48 },
  { canal: 'Delivery Platforms', inversion: '$3,465', porcentaje: 22 },
  { canal: 'Google Ads', inversion: '$2,835', porcentaje: 18 },
  { canal: 'Tiktok Ads', inversion: '$1,890', porcentaje: 12 },
];

export function InvestmentMix() {
  return (
    <PanelCard title="Mix de inversión digital" className="investment-mix-card">
      <div className="investment-mix-card__header">
        <span className="col-canal">CANAL</span>
        <span className="col-valores">INVERSIÓN <span className="spacing"></span> % TOTAL</span>
      </div>

      <div className="investment-mix-card__list">
        {mockData.map((item, index) => (
          <div className="investment-item" key={index}>
            <div className="investment-item__info">
              <span className="canal-name">{item.canal}</span>
              <span className="canal-values">
                <span className="value">{item.inversion}</span>
                <span className="separator">|</span>
                <span className="percentage">{item.porcentaje}%</span>
              </span>
            </div>
            <div className="investment-item__progress-bg">
              <div 
                className="investment-item__progress-fill" 
                style={{ width: `${item.porcentaje}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </PanelCard>
  );
}
