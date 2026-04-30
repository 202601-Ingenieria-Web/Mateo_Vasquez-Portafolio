# Portafolio de Mateo Vásquez García

Portafolio personal desarrollado con Next.js, React, TypeScript y Tailwind CSS. Incluye un diseño responsive con cambio de idioma, modo claro/oscuro, tarjetas de conocimientos, educación y proyectos, además de un perfil profesional con acceso al CV.

### Desplegado en versel
https://portafolio-khaki-phi.vercel.app/

## Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- React Icons
- next-themes
- GASP

## Características

- Interfaz bilingüe: español e inglés.
- Selector de tema claro y oscuro.
- Sección de perfil profesional con resumen y CV descargable.
- Tarjetas de conocimientos, educación y proyectos.
- Carrusel para proyectos destacados.
- Enlace a perfil en github y linkedin.

## Requisitos

- Node.js 18 o superior.
- npm, pnpm o yarn.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicación se ejecuta en `http://localhost:3000`.

## Producción

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev`: levanta el entorno de desarrollo.
- `npm run build`: genera la compilación de producción.
- `npm run start`: inicia la aplicación ya compilada.
- `npm run typecheck`: valida tipos con TypeScript.

## Estructura principal

- `src/app`: layout global y página principal.
- `src/components`: componentes atómicos, moleculares y organismos.
- `src/data/portfolio.ts`: contenido y datos del portafolio.
- `src/types/portfolio.ts`: tipos de datos usados por la UI.

