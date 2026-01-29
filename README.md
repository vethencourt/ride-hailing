# Ride Hailing - Frontend

## Prerrequisitos

- [Node.js](https://nodejs.org/) (v24)
- [pnpm](https://www.pnpm.io/)

## Instalación

1. **Clonar el repositorio**

```sh
git clone <url-del-repositorio>
cd ride-hailing
```

2. **Instalar dependencias**

```sh
pnpm i
```

3. **Configurar entorno** Crea un archivo .env en el directorio raíz basado en .env.example

```sh
cp .env.example .env.local
```

## Desarrollo

### Ejecutar en modo desarrollo

tsx se encarga de auto recargar.

```sh
pnpm run dev
```

### Compilar para producción

```sh
pnpm run build
```

### Limpiador y formateador

Al instalar las extensiones de VSC recomendadas, el limpiador y el formateador se ejecutarán automáticamente después de guardar el archivo. Tambien se pueden ejecutar de manera manual sobre todo el proyecto

```sh
pnpm run lint
```

```sh
pnpm run format
```
