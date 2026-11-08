# 9. Puntuación y convenciones tipográficas

## 9.1. Signos de apertura

**Norma:** las oraciones interrogativas y exclamativas llevan signos de apertura (`¿ ?`, `¡ !`). Es una de las omisiones más visibles al traducir.

## 9.2. Puntos suspensivos

- Son siempre tres. **Recomendación:** usar el carácter único `…` (U+2026), que lo leen mejor los lectores de pantalla.
- No se deja espacio antes de los puntos suspensivos, aunque el original lo tuviera.
- En menús, indican que la orden pedirá más información; se mantienen como en el original.

| Original | Incorrecto | Correcto |
|---|---|---|
| Please wait ... | Espere ... | Espere… |

## 9.3. Comillas

Según la ortografía académica, se usan en este orden jerárquico: **angulares** `« »`, luego **inglesas** `“ ”`, luego **simples** `‘ ’`.

- **Recomendación:** convertir las comillas rectas `" '` del original en comillas angulares en español.
- **Opción:** en América son comunes las comillas inglesas; un proyecto puede elegirlas y debe aplicarlas con coherencia.
- Los signos de puntuación se colocan fuera de las comillas, salvo que pertenezcan al texto citado.

## 9.4. Comas, puntos y dos puntos

- No se escribe coma entre el sujeto y el verbo.
- Después de dos puntos se escribe minúscula, salvo nombres propios, citas textuales o en fórmulas de encabezado.
- Las listas con viñetas mantienen un criterio uniforme: todas con punto final o ninguna; todas con mayúscula inicial o todas con minúscula.
- No se usa punto final en títulos, botones, etiquetas ni opciones de menú.

## 9.5. Guiones y rayas

- El guion `-` une palabras o separa sílabas. La raya `—` abre incisos y diálogos. El signo `–` se usa en rangos.
- **Recomendación:** no usar guion ASCII como separador en secuencias de menús o títulos compuestos, aunque lo haga el original.

## 9.6. Secuencias de menús y títulos compuestos

| Caso | Original | Recomendación |
|---|---|---|
| Secuencias de menú | Edit - Select All | Editar ▸ Seleccionar todo (alternativa: `>` si el símbolo no está disponible) |
| Títulos con subtítulo | Query Wizard - Field selection | Asistente de consultas. Selección de campos |

Los símbolos alternativos (`»`, `→`) tienen otros usos habituales (comillas, flechas de teclado), por lo que no se recomiendan. Cada proyecto fija su símbolo.

## 9.7. Espacios indivisibles

Se emplea el espacio indivisible (U+00A0, o U+202F fino) entre cifra y unidad, en abreviaturas de varias palabras y entre una cifra y el símbolo de porcentaje. Se asegura que la plataforma lo admita.

## 9.8. Barras, paréntesis y corchetes

- Se evita la barra para unir alternativas en texto corrido (*y/o*); se reformula.
- Los paréntesis se emplean con moderación en la interfaz; si se usan para el plural opcional (`archivo(s)`), el proyecto debe valorar la mejor alternativa gramatical ([capítulo 18](../localizacion/18-internacionalizacion.md)).
