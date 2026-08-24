import { useAsyncData } from '@/hooks/useAsyncData'
import { fetchDashboardData } from '@/lib/api'
import './App.scss'

export default function App() {
  const { data, loading, error } = useAsyncData(fetchDashboardData)

  if (loading) return <div className="app__estado">Cargando datos...</div>
  if (error || !data) return <div className="app__estado">Error al cargar la data.</div>

  return (
    <div className="app">
      <div className="app__placeholder">
        <h1>Comienza aqui</h1>
        <p>
          Data cargada correctamente: {data.registros.length} registros,{' '}
          {data.filtros.marcas.length} marcas y {data.filtros.meses.length} meses.
        </p>
        <p>
          Construye el dashboard segun el diseno. Coloca tus componentes en{' '}
          <code>src/components</code> y tus hooks en <code>src/hooks</code>.
        </p>
        <p>Borra este placeholder cuando empieces.</p>
      </div>
    </div>
  )
}
