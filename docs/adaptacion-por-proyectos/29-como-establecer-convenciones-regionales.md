# 29. Cómo establecer convenciones regionales

## 29.1. Preguntas que hay que responder

1. **¿Quién es el público?** Un solo país, una región o toda la comunidad hispanohablante.
2. **¿Qué conviene más: un texto único o varios?** Se valora el volumen, la frecuencia de cambios y los recursos.
3. **¿Qué convenciones se fijan?** Léxico, tratamiento, formato de fecha y número, moneda, unidades, ortotipografía.
4. **¿Qué parte la resuelve el sistema (configuración regional) y cuál el texto?**

## 29.2. Modelos de organización

| Modelo | Descripción | Cuándo conviene |
|---|---|---|
| **Una variante única** | Un solo idioma `es`, estilo neutro. | Proyectos pequeños o con recursos limitados. |
| **Variante base + derivadas** | `es` como base y `es-MX`, `es-AR`… solo con las diferencias. | Proyectos con comunidades regionales activas. |
| **Variantes independientes** | Cada variante se mantiene por separado. | Productos con fuerte identidad regional. |

## 29.3. Esquema de decisión para el léxico

1. ¿Hay una forma comprendida y aceptada en todas las regiones? Se usa.
2. Si no, ¿hay una forma neutra o híbrida? Se usa.
3. Si no, se elige la forma de la variante base y se documenta la alternativa regional.
4. Se registra la decisión en el glosario ([capítulo 21](../calidad-y-colaboracion/21-gestion-terminologica.md)).

## 29.4. Convenciones que dependen de la configuración regional

| Elemento | Quién lo decide |
|---|---|
| Separador decimal y de millares | El sistema o la biblioteca de localización |
| Formato de fecha y hora | El sistema |
| Moneda y símbolo | El sistema |
| Unidades de medida | El sistema o el producto |
| Primer día de la semana | El sistema |
| Ordenación alfabética | La intercalación local |

**Recomendación:** evitar fijar estos formatos en las cadenas.

## 29.5. Coherencia y comunicación

Se comunica a la comunidad qué variante se utiliza y por qué. Se ofrece un cauce para sugerir adaptaciones regionales y se evita que las diferencias se lean como errores.
