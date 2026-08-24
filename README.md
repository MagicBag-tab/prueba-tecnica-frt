# Prueba Técnica: Frontend Developer — Quantum Reach Dashboard

**Improgress**

Bienvenido. Este repositorio es el punto de partida de la prueba. Ya viene
configurado (Vite + React + TypeScript + SCSS), con la data y los tokens
listos, para que dediques tus 2 horas al reto y no al setup.

---

## Setup

Antes de iniciar cualquier desarrollo, debes crear una nueva rama partiendo de `main`, nombrandola con tu nombre y apellido en camel case. (Ej: `JohnDoe`).

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre la URL que imprime Vite (por defecto http://localhost:5173). Si ves el
mensaje "Comienza aquí" con el conteo de registros, todo funciona.

Otros comandos:

```bash
npm run build     # type-check + build de producción
npm run preview   # sirve el build
```

---

## Estructura del proyecto

```
src/
  data/quantum-reach-data.json   La data (única fuente, no hay backend)
  types/dashboard.ts             Tipos de la data
  lib/api.ts                     "Backend" simulado (fetch con latencia)
  hooks/useAsyncData.ts          Hook de EJEMPLO con el patrón esperado
  styles/_tokens.scss            Tokens del diseño (colores, espaciado, etc.)
  styles/main.scss               Reset y estilos base
  components/                    Aquí van tus componentes
  App.tsx                        Shell inicial (bórralo cuando empieces)
```

Trabaja en `src/components` y `src/hooks`. El placeholder de `App.tsx` es
solo para confirmar que la data carga; reemplázalo.

---

## El reto

Construye el dashboard de marketing de **Quantum Reach** (una sola pantalla)
según el diseño de Figma, replicándolo con la mayor fidelidad posible y
dejando los filtros funcionando sobre la data.

El diseño incluye:

- **Encabezado** con el nombre y logo del cliente, el presupuesto total, un
  selector de marca, y dos filtros: Plataforma y Mes.
- **Fila de 4 tarjetas de KPI** (inversión ejecutada, mensajes del mes, CTR
  promedio, conversaciones de WhatsApp), cada una con su valor, un texto de
  apoyo, y un **badge de variación** respecto al mes anterior (verde con
  flecha hacia arriba si sube, rojo con flecha hacia abajo si baja).
- **Gráfico de barras de Leads Mensuales** (los 6 meses), con una progresión
  de color entre las barras.
- **Panel de Mix de inversión digital**: lista de canales con barras de
  progreso, mostrando inversión y porcentaje del total.
- **Panel de WhatsApp & Conversión**: cajas de estadística por género y
  barras de conversión por canal.
- **Panel de Meta & Pacing**: cajas de estadística (meta, actual, faltan) y
  un gráfico de dona con el porcentaje de avance hacia la meta.

---

## Requisitos técnicos

- **React + TypeScript.** La data debe estar tipada (los tipos ya están en
  `src/types/dashboard.ts`).
- **SCSS en todo el proyecto.** Todos los estilos van en SCSS y deben
  apoyarse en los tokens de `src/styles/_tokens.scss`. En tus archivos:
  `@use '../styles/tokens' as *;` y usa las variables (por ejemplo
  `color: $color-navy;`).No uses valores mágicos ni estilos inline que dupliquen lo que ya existe en el sistema de diseño. En el archivo de tokens se incluyen todos los colores de la marca, revisa bien cuales si son utilizados en el diseño.
- **Hooks para simular la conexión al backend.** La data no debe consumirse
  de forma directa dentro de los componentes. Crea uno o varios hooks que
  usen `fetchDashboardData()` (de `src/lib/api.ts`) y devuelvan la data ya
  **filtrada y agregada** según los filtros activos. Los componentes solo
  consumen el resultado del hook.
- **Gráficos con recharts o apexcharts.** Ambos están instalados; elige uno.
- **Componentes de interfaz propios.** Tarjetas, barras y filtros
  constrúyelos tú. No traigas una librería de componentes de UI que los
  resuelva por ti.
- **Puedes usar IA** y las herramientas que quieras. Se espera que puedas
  explicar y defender cada decisión de tu código.

---

## Los datos

Todo se deriva de `registros`, un arreglo a grano **marca × plataforma × mes**
(4 marcas, 4 plataformas, 6 meses de julio a diciembre). Cada registro trae
`inversion`, `inversionPlan`, `leads`, `mensajes`, `conversaciones`,
`conversiones`, `impresiones` y `clics`.

- Los **KPIs** salen de agregar los registros del mes seleccionado.
  - Inversión ejecutada: suma de `inversion`; el "de $X" y el % salen de
    comparar contra la suma de `inversionPlan`.
  - CTR promedio: `clics` / `impresiones`.
- El **badge** de cada KPI es la variación del indicador en el mes
  seleccionado respecto al mes anterior.
- El **gráfico de leads** es la suma de `leads` por mes (los 6 meses).
- El **mix de inversión** es la suma de `inversion` por plataforma del mes
  seleccionado (su total coincide con el KPI de inversión ejecutada).
- Los **paneles inferiores** (audiencia, conversión por canal, pacing, costo
  por conversación) están en `panelesGlobales`, indexados por id de marca
  (`todas`, `nova-motors`, ...).

`filtros` trae las opciones de `marcas`, `plataformas` y `meses`.

---

## Comportamiento de los filtros

- **Requerido:** el selector de Marca y el filtro de Mes recalculan los 4
  KPIs, sus badges de variación y el mix de inversión.
- **Deseable (hasta donde llegues):** que el filtro de Plataforma también
  afecte los KPIs, que el gráfico de leads resalte el mes seleccionado, y que
  los paneles inferiores respondan a la marca.

Nota: los paneles inferiores responden solo a Marca, no a Plataforma ni Mes.

---

## Cómo se ve "terminado"

- El dashboard se parece al diseño en espaciado, tipografía, color, radios y
  sombras.
- Los filtros de Marca y Mes recalculan los KPIs, sus badges y el mix.
- La data se consume a través de un hook que simula el backend, con su estado
  de carga.
- Los estilos están en SCSS usando los tokens.
- El código está organizado en componentes con nombres claros y la data
  tipada.
- Consideraste al menos un estado vacío (qué pasa si un filtro no devuelve
  datos).

Si no alcanzas a terminar todos los paneles, prioriza el encabezado con
filtros, los KPIs, el gráfico de leads y el mix de inversión. Cómo priorizas
también es parte de lo que evaluamos.

---

## Tiempo y formato

- **2 horas** para construir, trabajando solo. Haz commits mientras avanzas.
- Al terminar, una **sesión de revisión** donde presentas tu solución, nos
  guías por tu código y respondemos preguntas técnicas.

## Qué evaluamos

Fidelidad al diseño, calidad y organización del código (componentes, tipado,
SCSS con tokens y uso de hooks), y tu comprensión al explicar decisiones. El
objetivo no es velocidad ni cantidad de features, es ver a alguien que
entiende lo que hace y lo hace con cuidado.

¡Éxitos!
