import './Header.scss';
import { Select } from './ui/Select';

export function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#3A5AD7" strokeWidth="2.5"/>
            <circle cx="12" cy="12" r="4" fill="#3A5AD7"/>
          </svg>
          <h1>Quantum Reach</h1>
        </div>
        <div className="header__budget">
          <span className="label">Presupuesto Total:</span>
          <span className="value">USD 15,893</span>
        </div>
      </div>
      
      <div className="header__filters">
        <div className="header__brand-selector">
          <Select 
            value="todas" 
            options={[{ id: 'todas', label: 'Todas las marcas' }]} 
            variant="large" 
          />
        </div>
        <div className="header__right-filters">
          <div className="month-selector">
            <button className="month-selector__btn">&lt;</button>
            <span className="month-selector__current">Agosto</span>
            <button className="month-selector__btn">&gt;</button>
          </div>
          <div className="platform-selector">
            <span className="platform-selector__label">Plataforma</span>
            <Select 
              value="todos" 
              options={[{ id: 'todos', label: 'Todos' }]} 
              variant="default"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
