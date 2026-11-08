# 19. Variables, etiquetas y formatos técnicos

## 19.1. Regla general

**Norma:** todo elemento técnico del original debe conservarse intacto y en una posición válida en la traducción. Un marcador roto puede provocar fallos o cierres inesperados de la aplicación.

## 19.2. Tipos de elementos

| Tipo | Ejemplos | Tratamiento |
|---|---|---|
| Marcadores de formato (C, Python) | `%s`, `%d`, `%1$s`, `%(nombre)s` | No se modifican. Se pueden reordenar si son posicionales. |
| Marcadores con llaves | `{0}`, `{name}`, `{{count}}` | No se traduce el nombre. |
| ICU MessageFormat | `{count, plural, one {…} other {…}}` | Se traducen solo los textos entre llaves internas; se conservan las palabras clave (`plural`, `select`, `one`, `other`). |
| Variables de producto | `%PRODUCTNAME`, `$APP` | No se tocan. |
| Etiquetas HTML y XML | `<b>…</b>`, `<a href="…">`, `<br/>` | Se conservan y se cierran. Se traduce el texto interior y los atributos traducibles (`alt`, `title`). |
| Entidades | `&nbsp;`, `&amp;` | Se mantienen. |
| Marcado ligero | `**negrita**`, `[texto](url)` | Se conserva la sintaxis; se traduce el texto visible. |
| Secuencias de escape | `\n`, `\t`, `\"` | Se conservan. |
| Aceleradores | `~`, `_`, `&` | Se colocan según [12.3](./12-interfaces-graficas.md#123-aceleradores-y-atajos). |
| Claves e identificadores | `settings.title` | No se traducen. |
| Rutas, comandos, URL, direcciones de correo | `/usr/bin`, `git pull` | No se traducen, salvo que la documentación lo prevea. |
| Formatos de fecha y hora | `yyyy-MM-dd`, `%Y-%m-%d` | No se modifican, salvo que sean visibles para quien usa el producto y el proyecto determine su traducción. |

## 19.3. Pautas

- Se verifica que las comillas, los paréntesis y las llaves queden emparejados.
- Si una etiqueta envuelve texto que se reordena, se mueve junto con él.
- No se añaden espacios dentro de las etiquetas ni se alteran sus atributos.
- Cuando un marcador representa un número, un nombre o una unidad, se comprueba la concordancia de la frase.
- Las comillas rectas dentro de atributos o código no se sustituyen por tipográficas.
- Se emplean las verificaciones automáticas de la plataforma para detectar marcadores perdidos, sobrantes o duplicados ([capítulo 24](../calidad-y-colaboracion/24-revision-y-control-de-calidad.md)).

## 19.4. Formatos de archivo habituales

| Formato | Observaciones |
|---|---|
| **Gettext (`.po`, `.pot`)** | Cadenas con contexto (`msgctxt`) y plurales (`msgid_plural`, `msgstr[n]`). La cabecera indica `Language` y `Plural-Forms`. |
| **XLIFF (`.xlf`)** | Estándar de intercambio; conserva el marcado en elementos protegidos. |
| **JSON / YAML** | Se traducen los valores, no las claves; atención a escapes y comillas. |
| **Properties, Resx, strings, ARB** | Formatos habituales en Java, .NET, iOS y Flutter. |
| **Android `strings.xml`** | Escapar apóstrofos y comillas según la plataforma. |
| **Markdown / HTML** | Se conserva la estructura; no se traducen bloques de código. |
| **TMX / TBX** | Intercambio de memorias de traducción y terminología. |
