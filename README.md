# v-day

Página romántica en **Next.js + React + TypeScript + CSS** con:

- Login por fecha usando calendario (`2025-04-04`).
- Tarjeta centrada con estética pastel roja/rosa.
- Mensaje: **Will you be my Valentine? 💌**.
- Botón **No 😢** que se mueve para no dejarse presionar.
- Cada vez que el mouse pasa por **No**, el botón **Sí 😊** crece poco a poco.
- Al presionar **Sí 😊**, se ocultan los botones y se reproduce un carrusel en bucle de GIFs aceptados.

## 1) Instalar dependencias

```bash
npm install
```

## 2) Agregar tus GIFs (importante)

Crea estos archivos dentro de `public/` con tus assets:

- `public/valentine-initial.gif` → GIF inicial.
- `public/valentine-accepted.gif`
- `public/valentine-accepted-01.gif`
- `public/valentine-accepted-02.gif`
- `public/valentine-accepted-03.gif`

> No se incluyen archivos binarios en el repo para evitar problemas al abrir PRs.

## 3) Levantar en local

```bash
npm run dev
```

Abre: `http://localhost:3000`

## 4) Login

Selecciona la fecha en el calendario: `2025-04-04`

## 5) Build de producción

```bash
npm run build
npm run start
```
