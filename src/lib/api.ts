import data from '@/data/quantum-reach-data.json'
import type { DashboardData } from '@/types/dashboard'

const LATENCIA_MS = 600

/**
 * Simula una peticion al backend. Devuelve la data cruda del dashboard
 * despues de una pequena latencia, como lo haria un fetch real.
 *
 * Este es el punto de "conexion al backend". Construye tus hooks encima
 * de esto: por ejemplo, un hook que reciba los filtros activos y devuelva
 * la data ya filtrada y agregada para cada widget.
 */
export function fetchDashboardData(): Promise<DashboardData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data as unknown as DashboardData), LATENCIA_MS)
  })
}
