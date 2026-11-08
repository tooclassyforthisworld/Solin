# 22. Memorias de traducción

## 22.1. Qué son

Una memoria de traducción (MT, en inglés *TM*) es una base de datos de segmentos traducidos que se reutilizan cuando aparecen textos idénticos o parecidos.

## 22.2. Buenas prácticas

- **Calidad antes que cantidad:** una memoria con errores propaga los errores.
- **Un segmento, una traducción por contexto.** Se evita almacenar variantes contradictorias.
- **Metadatos:** proyecto, fecha, autoría, estado de revisión, variante regional.
- **Separación por variante:** una memoria para es-ES, otra para es-MX, etc., o una única memoria con etiquetas.
- **Mantenimiento periódico:** limpiar duplicados, corregir errores detectados y actualizar la terminología.
- **Alineación de textos antiguos** solo cuando se verifique la calidad.
- **Formatos de intercambio:** TMX.
- **Propiedad y licencia:** se acuerda quién puede usar las memorias, especialmente si contienen contenido con licencia.
- **Confidencialidad:** las memorias de proyectos privados no se publican.

## 22.3. Coincidencias

| Tipo | Uso |
|---|---|
| **100 % (exacta)** | Se acepta tras comprobar el contexto. |
| **Contextual** | Coincide también el segmento anterior y el siguiente; es la más fiable. |
| **Parcial (fuzzy)** | Se revisa con cuidado y se ajusta. |
| **Sugerida por traducción automática** | Se trata como borrador y requiere postedición ([23.4](./23-herramientas-cat-y-plataformas-de-traduccion.md#234-traducción-automática)). |

## 22.4. Riesgos

El principal riesgo es el de **propagar un error o un estilo antiguo**. Antes de aplicar cambios de criterio (por ejemplo, un cambio de tratamiento), se actualiza o filtra la memoria.
