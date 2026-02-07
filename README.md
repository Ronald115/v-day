# v-day

Página romántica en **Next.js + React + TypeScript + CSS** con:

- Login por fecha (`04/04/2025`).
- Tarjeta centrada con estética pastel roja/rosa.
- Mensaje: **Will you be my Valentine? ❤️🤍**.
- Botón **No 😢** que se mueve para no dejarse presionar.
- Al presionar **Sí 😊**, cambia el GIF y desaparecen los botones.

## 1) Instalar dependencias

```bash
npm install
```

## 2) Agregar tus GIFs (importante)

Crea estos archivos dentro de `public/` con tus assets:

- `public/valentine-initial.gif` → GIF inicial.
- `public/valentine-accepted.gif` → GIF cuando presiona "Sí".

> No se incluyen archivos binarios en el repo para evitar problemas al abrir PRs.

## 3) Levantar en local

```bash
npm run dev
```

Abre: `http://localhost:3000`

## 4) Login

Escribe exactamente: `04/04/2025`

## 5) Build de producción (cuando quieras desplegar)

```bash
npm run build
npm run start
```

---

## Archivos importantes

- `app/page.tsx`: lógica del login y de la pregunta con botones.
- `app/globals.css`: estilos pastel y layout.
- `app/layout.tsx`: layout base.
