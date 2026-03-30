# Mini Sales App

Aplicación web full stack para gestionar y evaluar ventas.

## Stack

- **Backend:** Node.js + Express
- **Frontend:** Next.js 14 (TypeScript)
- **Base de datos:** SQLite
- **Entorno:** Docker Compose

## Cómo correrlo

**Requisito:** tener Docker Desktop instalado y corriendo.

```bash
git clone https://github.com/TU_USUARIO/mini-sales-app.git
cd mini-sales-app
docker compose up
```

Abrir en el navegador: http://localhost:3000

## Funcionalidades

- Listar ventas con cliente, producto, monto y score
- Crear nueva venta con validación de campos
- Evaluar una venta asignándole un score del 1 al 5
- Promedio de score y estadísticas en tiempo real

## Endpoints

| Método | Endpoint              | Descripción             |
|--------|-----------------------|-------------------------|
| GET    | `/sales`              | Listar todas las ventas |
| POST   | `/sales`              | Crear una venta         |
| POST   | `/sales/:id/evaluate` | Evaluar una venta       |
| GET    | `/sales/stats`        | Estadísticas generales  |
