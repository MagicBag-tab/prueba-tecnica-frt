import { PanelCard } from './ui/PanelCard';
import './WhatsappConversionPanel.scss';

export function WhatsappConversionPanel() {
  return (
    <PanelCard title="WhatsApp & Conversión" className="whatsapp-panel-card">
      <div className="whatsapp-panel-card__audience">
        <div className="audience-box">
          <span className="audience-box__label">Hombres</span>
          <span className="audience-box__value">62%</span>
        </div>
        <div className="audience-box">
          <span className="audience-box__label">Mujeres</span>
          <span className="audience-box__value">38%</span>
        </div>
      </div>

      <div className="whatsapp-panel-card__channels">
        <h4 className="channels-title">CONVERSIÓN POR CANAL</h4>
        
        <div className="channel-item">
          <div className="channel-item__info">
            <span className="channel-name">Facebook</span>
            <span className="channel-value">321</span>
          </div>
          <div className="channel-item__progress-bg">
            <div className="channel-item__progress-fill" style={{ width: '80%' }}></div>
          </div>
        </div>
        
        <div className="channel-item">
          <div className="channel-item__info">
            <span className="channel-name">Instagram</span>
            <span className="channel-value">101</span>
          </div>
          <div className="channel-item__progress-bg">
            <div className="channel-item__progress-fill" style={{ width: '25%' }}></div>
          </div>
        </div>
        
        <div className="channel-item">
          <div className="channel-item__info">
            <span className="channel-name">WhatsApp Direct</span>
            <span className="channel-value">4</span>
          </div>
          <div className="channel-item__progress-bg">
            <div className="channel-item__progress-fill" style={{ width: '2%' }}></div>
          </div>
        </div>
      </div>
    </PanelCard>
  );
}
