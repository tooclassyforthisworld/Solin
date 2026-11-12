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

- El guion `-` une palabras o separa sílabas. La raya `—` abre incisos y diálogos. La semirraya `–` es una opción para los rangos (véase el [apartado 9.9](#99-microtipografía)).
- **Recomendación:** no usar guion ASCII como separador en secuencias de menús o títulos compuestos, aunque lo haga el original.

## 9.6. Secuencias de menús y títulos compuestos

| Caso | Original | Recomendación |
|---|---|---|
| Secuencias de menú | Edit - Select All | Editar ▸ Seleccionar todo (alternativa: `>` si el símbolo no está disponible) |
| Títulos con subtítulo | Query Wizard - Field selection | Asistente de consultas. Selección de campos |

Los símbolos alternativos (`»`, `→`) tienen otros usos habituales (comillas, flechas de teclado), por lo que no se recomiendan. Cada proyecto fija su símbolo.

## 9.7. Espacios indivisibles

Se emplea el espacio indivisible (U+00A0, o U+202F fino) entre cifra y unidad, en abreviaturas de varias palabras y entre una cifra y el símbolo de porcentaje. Se asegura que la plataforma lo admita.

También conviene usarlo para que no se separen en distintos renglones:

- una abreviatura y su número: «pág. 12», «n.º 3», «art. 5»;
- las iniciales de un nombre y el apellido: «J. R. R. Tolkien»;
- el símbolo `▸` y el elemento que lo precede en una secuencia de menús: «Editar ▸ Guardar».

## 9.8. Barras, paréntesis y corchetes

- Se evita la barra para unir alternativas en texto corrido (*y/o*); se reformula.
- Los paréntesis se emplean con moderación en la interfaz; si se usan para el plural opcional (`archivo(s)`), el proyecto debe valorar la mejor alternativa gramatical ([capítulo 18](../localizacion/18-internacionalizacion.md)).

## 9.9. Microtipografía

La microtipografía cuida los caracteres, los espacios y los signos pequeños que no son letras. Una traducción correcta pierde calidad si el signo menos es un guion, la multiplicación es una «x» o el grado es una «o» volada.

- **Recomendación:** en el texto visible se usan los caracteres tipográficos de la tabla.
- **Norma:** en código, nombres de archivo, direcciones y campos que el programa interpreta (una entrada numérica, por ejemplo) se conservan los caracteres ASCII del original, porque un `−` o un `×` puede no reconocerse.

| Carácter | Evitable | Recomendado | Código Unicode |
|---|---|---|---|
| Signo menos | -5 °C | −5 °C | U+2212 |
| Multiplicación | 1920x1080 | 1920 × 1080 | U+00D7 |
| Apóstrofo de nombres extranjeros | O'Brien | O’Brien | U+2019 |
| Grado | 23 ºC | 23 °C | U+00B0 (el `º` es U+00BA, indicador ordinal) |
| Ordinales | nº 5, 2a | n.º 5, 2.ª | U+00BA, U+00AA |
| Exponentes y subíndices | m2, CO2 | m², CO₂ | U+00B2, U+00B3, U+2082 |

Si la fuente no incluye un carácter, se usa el marcado del formato (`<sup>`, `<sub>`) antes que una letra o cifra normal.

- **Rangos:** la RAE admite el guion sin espacios («págs. 12-15», «2020-2026»); la tipografía cuidada usa la semirraya `–` (U+2013) en su lugar. **Opción:** elegir una forma y registrarla en el perfil de estilo. En texto corrido suele ser más claro «de 12 a 15», y con números negativos, «de −5 a 5».
- **Apóstrofo y comillas:** al convertir las comillas rectas en angulares ([9.3](#93-comillas)) no se tocan los apóstrofos de los nombres ni las comillas del código.
- **Iniciales:** se escriben con punto y espacio («J. R. R. Tolkien»), y ese espacio es indivisible ([9.7](#97-espacios-indivisibles)).
- **Puntos suspensivos:** no se les añade un punto, y *etc.* no se combina con ellos.
- **Signos de interrogación y exclamación:** sin espacio entre el signo y el texto que encierran: «¿Guardar los cambios?».
- **Guionado:** no se parten palabras con guiones manuales. Se deja el guionado automático, con el idioma bien declarado (`lang="es"`), y, solo si es imprescindible, un guion opcional (U+00AD).
- **Ampersand (`&`):** solo aparece dentro de nombres propios; en el texto se escribe «y».
- **Accesibilidad y fuentes:** se comprueba que los lectores de pantalla y las fuentes del producto admiten estos caracteres ([capítulo 17](../localizacion/17-accesibilidad.md)).
