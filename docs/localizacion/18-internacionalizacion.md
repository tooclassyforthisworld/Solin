# 18. Internacionalización

La internacionalización (i18n) es el trabajo técnico que hace posible la localización. Muchos problemas de traducción nacen de una i18n deficiente. Quien traduce debe saber detectarlos y reportarlos.

## 18.1. Problemas frecuentes y cómo señalarlos

| Problema | Por qué es un problema en español | Qué se solicita |
|---|---|---|
| **Concatenación de cadenas** | El orden, el género y el número varían. | Cadenas completas con marcadores de posición. |
| **Plurales con `(s)`** | `archivo(s)` es gramaticalmente deficiente. | Formas plurales separadas con ICU o gettext. |
| **Plurales con solo «uno» y «otros»** | El español distingue también la categoría *many* en versiones recientes de CLDR (p. ej. «1 millón de archivos»). | Soporte completo de categorías plurales. |
| **Género de las variables** | «Bienvenido, {name}» no sirve para todas las personas. | Formulaciones neutras o variantes por género. |
| **Texto escrito en imágenes** | No se puede traducir sin editar la imagen. | Recursos separados. |
| **Formatos de fecha, hora y número fijos** | Cada región tiene los suyos. | Uso de bibliotecas de localización (CLDR/ICU). |
| **Espacio fijo** | El español suele ocupar entre un 15 y un 30 % más que el inglés. | Diseños flexibles. |
| **Cadenas reutilizadas en contextos distintos** | La misma palabra inglesa puede requerir varias traducciones (*Open*, *Set*, *Date*). | Contexto o claves distintas. |
| **Codificación** | Caracteres como `ñ`, `¿`, `¡` y las vocales con tilde. | Uso de UTF-8 en todo el flujo. |
| **Ordenación alfabética** | `ñ`, `ch` y `ll` según la norma actual. | Intercalación local. |
| **Direcciones, nombres y teléfonos** | Estructuras distintas. | Campos flexibles. |
| **Unidades y moneda** | Dependen de la región. | Parámetros regionales. |

## 18.2. Pluralización

El español distingue singular y plural; en las versiones recientes de CLDR se contemplan, además, categorías propias para ciertos números grandes. Se recomienda emplear el sistema de plurales de la plataforma (ICU MessageFormat, gettext `msgid_plural`, Android `plurals`, iOS `stringsdict`) y no resolver los plurales con paréntesis o con lógica propia.

## 18.3. Género gramatical y variables

Se evita insertar sustantivos variables en frases con concordancia. Se propone una de las soluciones siguientes: reformular («Elemento: {item}»), usar plantillas por género o recurrir a estructuras neutras.

## 18.4. Orden y posición de las variables

El orden de los marcadores puede diferir en español. **Norma:** si el sistema lo permite, se usan marcadores posicionales (`%1$s`, `{0}`) para poder reordenarlos.

## 18.5. Direccionalidad y fuentes

El español es una lengua de izquierda a derecha, pero la interfaz puede incluir texto bidireccional en nombres propios o URL. Se comprueba la presencia de todos los caracteres necesarios en las fuentes elegidas (`¿ ¡ ñ « » … ▸`).

## 18.6. Cómo reportar

Se abre una incidencia o un comentario en la plataforma con: la cadena, el problema, el motivo lingüístico y una propuesta de solución.
