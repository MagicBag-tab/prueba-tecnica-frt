import './KpiRow.scss';
import { KpiCard } from './KpiCard';

export function KpiRow() {
  return (
    <div className="kpi-row">
      <KpiCard 
        title="INVERSIÓN EJECUTADA"
        value="$ 15,750"
        subtext="de $15,893 (99.1%)"
        variation={2.0}
      />
      <KpiCard 
        title="MENSAJES DEL MES"
        value="383"
        subtext="Precio/conv $2.95"
        variation={2.7}
      />
      <KpiCard 
        title="CTR PROMEDIO"
        value="1.5%"
        subtext="Meta"
        variation={2.7}
      />
      <KpiCard 
        title="CONVERSACIONES WHATSAPP"
        value="426"
        subtext="iniciadas"
        variation={-2.7}
      />
    </div>
  );
}
