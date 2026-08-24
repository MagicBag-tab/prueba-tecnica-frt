# Prueba Técnica: Frontend Developer

**Improgress**

Duración: 2 horas de construcción + sesión de revisión posterior

---

## Contexto

En Improgress construimos y mantenemos plataformas y dashboards para clientes de varias industrias. Buena parte del trabajo de este rol consiste en tomar un diseño y llevarlo a código con fidelidad, conectarlo a datos y dejarlo funcionando de forma limpia y mantenible.

Esta prueba simula ese trabajo real. No buscamos que "termines todo a como dé lugar". Buscamos entender cómo piensas, cómo estructuras tu código y qué tan fiel eres al diseño.

---

## El reto

Vas a construir un **dashboard de marketing de una sola pantalla** (el cliente ficticio Quantum Reach) a partir del diseño que te entregamos, replicándolo con la mayor fidelidad posible y dejando los **filtros funcionando** sobre la data que te damos.

El diseño incluye:

- **Encabezado** con el nombre y logo del cliente, el presupuesto total, un selector de marca, y dos filtros: Plataforma y Mes.
- **Fila de 4 tarjetas de KPI** (inversión ejecutada, mensajes del mes, CTR promedio, conversaciones de WhatsApp), cada una con su valor, un texto de apoyo, y un **badge de variación** respecto al mes anterior (verde con flecha hacia arriba si sube, rojo con flecha hacia abajo si baja).
- **Gráfico de barras de Leads Mensuales** (últimos 6 meses), con una progresión de color entre las barras.
- **Panel de Mix de inversión digital**: lista de canales con barras de progreso horizontales, mostrando inversión y porcentaje del total.
- **Panel de WhatsApp & Conversión**: cajas de estadística por género y barras de conversión por canal.
- **Panel de Meta & Pacing**: cajas de estadística (meta, actual, faltan) y un gráfico de dona con el porcentaje de avance hacia la meta.

Los filtros deben afectar de verdad a lo que se muestra:

- El **selector de Marca** y el filtro de **Mes** recalculan los 4 KPIs, sus badges de variación y el mix de inversión. Este es el comportamiento mínimo requerido.
- El **badge** de cada KPI es la variación del indicador en el mes seleccionado respecto al mes anterior, calculada a partir de la data.
- El **mix de inversión** corresponde al mes seleccionado (su suma coincide con el KPI de inversión ejecutada).
- Deseable, hasta donde llegues: que el filtro de Plataforma también afecte los KPIs, que el gráfico de leads resalte el mes seleccionado, y que los paneles inferiores respondan a la marca.

La data incluye 6 meses (de julio a diciembre). El gráfico de leads muestra los 6 meses; los KPIs muestran el mes seleccionado.

---

## Qué recibes

1. **Repositorio starter** ya configurado (Vite + React + TypeScript + SCSS). Instálalo y corre; no pierdas tiempo en setup. Para trabajar debes crear una nueva rama partiendo de `main`, nombrandola con tu nombre y apellido en came case. (Ej: `JohnDoe`).
2. **Data dummy** en formato JSON dentro del repo (`quantum-reach-data.json`). Es la única fuente de datos; no hay backend.
3. **Diseño de referencia** con sus tokens (colores, tipografía, espaciados, radios, sombras) y medidas.

---

## Requisitos técnicos

- **React + TypeScript.** La data debe estar tipada; evita `any` sin razón.
- **SCSS en todo el proyecto.** Todos los estilos van en SCSS y deben apoyarse en los **tokens y variables** que te damos. No uses valores mágicos ni estilos inline que dupliquen lo que ya existe en el sistema de diseño.
- **Hooks para simular la conexión al backend.** La data no debe consumirse de forma directa dentro de los componentes. Crea uno o varios hooks propios que simulen una petición a un backend (carga asíncrona con su estado de carga) y que entreguen la data ya filtrada según los filtros activos. Los componentes solo consumen el resultado del hook.
- **Gráficos con recharts o apexcharts.** Puedes elegir cualquiera de las dos librerías para el gráfico de barras y el de dona.
- **Componentes de interfaz propios.** Las tarjetas, las barras de progreso y los filtros constrúyelos tú para que reflejen el diseño. No traigas una librería de componentes de UI que los resuelva por ti.
- **Trabaja en el repositorio con commits**, no en un solo volcado final.

---

## Reglas

- **Puedes usar IA y las herramientas que quieras.** Es parte del trabajo real. Lo que sí esperamos es que puedas explicar y defender cada decisión de tu código.
- Respeta el diseño en sus detalles: espaciado, tipografía, color, radios y sombras.

---

## Cómo se ve "terminado"

- El dashboard se parece al diseño en espaciado, tipografía, color, radios y sombras.
- Los filtros de Marca y Mes recalculan los KPIs, sus badges de variación y el mix de inversión.
- La data se consume a través de un hook que simula la conexión al backend, con su estado de carga.
- Los estilos están en SCSS usando los tokens y variables provistos.
- El código está organizado en componentes con nombres claros.
- La data está tipada.
- Consideraste al menos un estado vacío (qué pasa si un filtro no devuelve datos).

Si no alcanzas a terminar todos los paneles, prioriza el encabezado con filtros, los KPIs, el gráfico de leads y el mix de inversión. Cómo priorizas también es parte de lo que evaluamos.

---

## Formato y tiempo

- **2 horas** para construir, trabajando solo.
- Al terminar, entramos a una **sesión de revisión** donde presentas tu solución, nos guías por tu código y respondemos preguntas técnicas sobre tus decisiones.

---

## Qué evaluamos

- **Fidelidad al diseño:** qué tan cerca quedó del spec en los detalles.
- **Calidad y organización del código:** componentes, tipado, uso de SCSS con tokens, y el uso de hooks para la data.
- **Comprensión:** qué tan bien explicas y justificas tus decisiones.

El objetivo no es velocidad ni cantidad de features. Es ver a alguien que entiende lo que hace y lo hace con cuidado.

¡Éxitos!
