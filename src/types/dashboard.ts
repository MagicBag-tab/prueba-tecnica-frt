// Contrato de la data que entrega el "backend" (src/lib/api.ts).

export interface Meta {
  cliente: string
  moneda: string
  presupuestoTotal: number
  mesDefault: string
  actualizado: string
  _notaFiltros?: string
}

export interface FiltroItem {
  id: string
  nombre: string
}

export interface MesItem {
  id: string
  nombre: string
  corto: string
}

export interface Filtros {
  marcas: FiltroItem[]
  plataformas: FiltroItem[]
  meses: MesItem[]
}

export interface Registro {
  marca: string
  plataforma: string
  mes: string
  inversion: number
  inversionPlan: number
  leads: number
  mensajes: number
  conversaciones: number
  conversiones: number
  impresiones: number
  clics: number
}

export interface Audiencia {
  hombres: number
  mujeres: number
}

export interface ConversionCanal {
  canal: string
  valor: number
}

export interface Pacing {
  meta: number
  actual: number
  faltan: number
}

// Los paneles vienen indexados por id de marca ("todas", "nova-motors", ...).
export interface PanelesGlobales {
  audiencia: Record<string, Audiencia>
  conversionPorCanal: Record<string, ConversionCanal[]>
  pacing: Record<string, Pacing>
  costoPorConversacion: Record<string, number>
}

export interface DashboardData {
  meta: Meta
  filtros: Filtros
  registros: Registro[]
  panelesGlobales: PanelesGlobales
}
