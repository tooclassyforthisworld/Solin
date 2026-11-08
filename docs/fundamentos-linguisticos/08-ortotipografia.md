# 8. Ortotipografía

## 8.1. Números en texto corrido

- Los números del cero al nueve se suelen escribir con letra en texto corrido; los demás, con cifra, salvo al comienzo de una oración.
- Los miles y millones pueden combinar cifra y palabra (3 millones).
- En la interfaz, las cantidades se escriben con cifras.
- **Recomendación:** cada proyecto fija el criterio y lo aplica por igual en textos de interfaz y de ayuda.

## 8.2. Separadores decimales y de millares

El español admite dos separadores decimales válidos: la **coma** (mayoritaria en España y buena parte de América) y el **punto** (usual en México, Centroamérica, el Caribe y Estados Unidos). Ambos son correctos según la RAE.

- **Norma:** en software y datos, el formato lo determina la configuración regional del sistema, no el texto traducido. No se escriben números formateados a mano en las cadenas.
- **Recomendación** para texto corrido sin contexto regional definido: la coma decimal y el espacio indivisible como separador de millares a partir de cinco cifras (`1 437 825,6`).
- No se usa el apóstrofo ni se mezclan convenciones.

## 8.3. Fechas y horas

- El orden en español es día, mes, año (`3/8/2026`, `03/08/2026`). Se evita el formato anglosajón mes/día salvo que la configuración regional lo exija.
- En texto: «3 de agosto de 2026». Los nombres de días y meses se escriben con minúscula inicial.
- **Opción:** formato de 24 horas (más habitual en España) o de 12 horas con *a. m.* / *p. m.* (frecuente en México y otras regiones).
- Las abreviaturas *a. m.* y *p. m.* llevan espacio indivisible entre las letras.

## 8.4. Símbolos y unidades

- Los símbolos de unidad **no llevan punto** y se separan de la cifra con espacio indivisible: `300 g`, `2500 mm`, `23 °C`.
- El símbolo `%` se separa de la cifra: `315 %`.
- Excepción: el grado de ángulo y las primas (`°`, `′`, `″`) van pegados: `270°`, `45′ 33″`.
- Los símbolos no cambian en plural.
- Las unidades se escriben con el sistema internacional salvo que el contexto exija otras.

## 8.5. Abreviaturas

Pautas generales:

- Se eliminan, al menos, dos letras de la palabra.
- Se conserva el orden de las letras: *art.* (artículo).
- No terminan en vocal si se forman por apócope: *pág.* (página). Sí pueden hacerlo si son por contracción: *apdo.* (apartado).
- Llevan punto final. Si incluyen letra volada, el punto va antes: *n.º*, *4.ª*.
- Las abreviaturas de varias palabras separan con espacio indivisible: *p. ej.*, *a. m.*
- Se evita abreviar de forma que se confunda con otra palabra o símbolo establecido.

Véase también el [capítulo 20](../localizacion/20-restricciones-de-espacio-y-abreviaturas.md).

## 8.6. Mayúsculas y minúsculas

El español usa menos mayúsculas que el inglés.

- Se escribe con mayúscula inicial: la primera palabra de un enunciado, los nombres propios, los nombres de instituciones.
- Se escribe con minúscula inicial: días, meses, estaciones, gentilicios, idiomas, cargos genéricos.
- **No existe el *Title Case*** en español. Los títulos, menús, botones y encabezados llevan mayúscula solo en la primera palabra (y en nombres propios).

| Original | Incorrecto | Correcto |
|---|---|---|
| Using Styles in Your Document | Uso de Estilos en el Documento | Uso de estilos en el documento |
| Create Pivot Table… | Crear Tabla Dinámica… | Crear tabla dinámica… |
| Parsing: Page %d of %d | Analizando: Página %d de %d | Analizando: página %d de %d |

- Las mayúsculas llevan tilde cuando les corresponde.
- Las marcas conservan su mayúscula original.

## 8.7. Cursiva, negrita y otros énfasis

- La negrita se reserva para elementos de interfaz o términos destacados según el estilo del proyecto.
- La cursiva marca extranjerismos, títulos de obras y énfasis puntual.
- No se subraya para enfatizar (confunde con los enlaces).
- Se mantiene el formato del original cuando tiene función técnica (código, nombres de campos).
