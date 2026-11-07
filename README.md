# Solin
SÓftwer LIbre Nativizado. Directrices para la traducción y regionalización de programas informáticos en español global

## Sitio web

Este sitio web se ha creado mediante [Docusaurus 3](https://docusaurus.io/), un generador de sitios estáticos.

### Instalación

```
$ npm ci
```

### Desarrollo local

```
$ npm start
```

Esta orden inicia un servidor local para el desarrollo y abre una ventana del navegador. La mayor parte de los cambios se reflejarán en directo, sin tener que reiniciar el servidor.

### Generar

```
$ npm run build
```

Esta orden genera el contenido estático en el directorio `build`, que se puede servir mediante cualquier servicio de alojamiento de contenido estático.

### Despliegue

A través de SSH:

```
$ USE_SSH=true npm run deploy
```

Sin utilizar SSH:

```
$ GIT_USER=<Su nombre de usuario de GitHub> npm run deploy
```

En este repositorio el sitio se publica automáticamente en GitHub Pages con GitHub Actions (`.github/workflows/deploy.yml`) cada vez que se sube algo a la rama `trunk`.

## Licencia

Todo el contenido de este repositorio está dedicado al dominio público mediante [CC0 1.0 Universal](LICENSE).
