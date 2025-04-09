# 🧪 Manage Tasks

Este es un proyecto de ejemplo construido con NestJS para gestionar tareas. Su propósito es demostrar el uso de:

- Arquitectura modular en NestJS
- DTOs y validaciones con `class-validator` y `ValidationPipe`
- Decoradores como `@Body`, `@Post`, `@Controller`, `@Injectable`
- Programación en TypeScript
- Buenas prácticas para pruebas técnicas y entrevistas

## 🚀 Funcionalidades

- Crear una nueva tarea con título, descripción y estado (`pendiente` o `completada`)
- Validaciones automáticas usando `ValidationPipe`
- Estructura modular lista para escalar

## 🏗️ Estructura del proyecto

src/ ├── tasks/ │ ├── dto/ │ │ └── create-task.dto.ts │ ├── entities/ │ │ └── task.entity.ts │ ├── tasks.controller.ts │ ├── tasks.service.ts │ └── tasks.module.ts ├── app.module.ts └── main.ts


## 🧰 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- TypeScript
- class-validator & class-transformer

## ▶️ Cómo ejecutar

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/nestjs-task-api-demo.git
cd manage-tasks

# Instala dependencias
npm install

# Ejecuta el servidor
npm run start:dev

POST /tasks
Content-Type: application/json

{
  "title": "Estudiar NestJS",
  "description": "Practicar DTOs y validaciones",
  "status": "pendiente"
}
