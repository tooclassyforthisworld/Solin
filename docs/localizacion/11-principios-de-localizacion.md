# 11. Principios de localización

La **localización** adapta un producto a una lengua y una cultura: traduce, pero también adapta formatos, imágenes, ejemplos y convenciones. Principios:

1. **Se localiza la experiencia, no solo las palabras.** La persona usuaria no debería notar que el producto viene de otra lengua.
2. **El contexto manda.** Una cadena sin contexto es ambigua. Se solicitan capturas, comentarios y acceso a la aplicación en ejecución.
3. **Se respeta la intención del diseño.** Se traduce el texto que hay, no el que se querría tener; los problemas de diseño se reportan.
4. **Las cadenas son datos.** No se rompen, se reordenan ni se reconstruyen con concatenación ([capítulo 19](./19-variables-etiquetas-y-formatos-tecnicos.md)).
5. **Se prueba en contexto.** Se revisa la traducción dentro del producto (verificación lingüística y funcional).
6. **Se localiza todo lo visible:** texto, capturas, imágenes con texto, audio, subtítulos, metadatos de tiendas, mensajes de error, correos y ayuda.
7. **Se coordina con quien desarrolla.** La localización de calidad es un proceso de dos direcciones: quien traduce informa de los problemas de internacionalización.
8. **Se documenta cada decisión relevante.**

## 11.1. Qué se traduce y qué no

| Se traduce | Normalmente no se traduce |
|---|---|
| Texto de la interfaz, ayuda y mensajes | Nombres de producto y marcas |
| Texto alternativo de imágenes | Código, comandos, rutas y claves |
| Cadenas de error visibles | Identificadores internos y nombres de variables |
| Metadatos de ficha y tienda | Nombres de funciones de lenguajes de programación |
| Mensajes de log destinados al usuario final | Mensajes de log técnicos (según proyecto) |

## 11.2. Flujo típico

Extracción de cadenas → traducción → revisión → pruebas en contexto → corrección → publicación → mantenimiento ante nuevas versiones.
