# 6. Gramática y sintaxis

## 6.1. Modos y tiempos verbales

El inglés no distingue entre indicativo y subjuntivo con las mismas marcas que el español. Esto lleva a calcos en indicativo donde el español exige subjuntivo.

| Original | Incorrecto | Correcto |
|---|---|---|
| …make sure they *appear* exactly as… | …asegúrese de que *aparecen*… | …asegúrese de que *aparezcan*… |
| Search for fonts *being* used | Buscar tipos de letra que *están* en uso | Buscar tipos de letra que *estén* en uso |
| …so that it *displays* accurate colors. | …de modo que esta *muestra* colores… | …de modo que esta *muestre* colores… |

## 6.2. Gerundios

No todo *-ing* inglés corresponde a un gerundio español. **Norma:**

- En **títulos y encabezados**, se traduce con un sustantivo o un infinitivo: *Exporting presentations* → «Exportación de presentaciones» o «Exportar presentaciones», no «Exportando presentaciones».
- En **etiquetas de estado o acción en curso**, el gerundio es correcto: *Printing* → «Imprimiendo…».
- El **gerundio de posterioridad** («se guardó el archivo, generando un informe») es incorrecto en español.

## 6.3. Voz pasiva

La pasiva perifrástica con *ser* es mucho menos frecuente en español que en inglés. **Recomendación:** convertirla en voz activa o pasiva refleja.

| Original | Evitable | Preferible |
|---|---|---|
| The search term '%s' was not found. | El término «%s» no fue encontrado. | No se encontró el término «%s». |
| Macros cannot be saved. | Las macros no pueden ser guardadas. | Las macros no se pueden guardar. |
| The file will be automatically converted… | El archivo será automáticamente convertido… | El archivo se convertirá automáticamente… |

## 6.4. Preposiciones y artículos

Las preposiciones no coinciden entre idiomas. Casos frecuentes:

| Original | Incorrecto | Correcto |
|---|---|---|
| Copy *to*… | Copiar *a*… | Copiar *en*… |
| Convert *to* PDF | Convertir *a* PDF | Convertir *en* PDF |
| Typical *for*… | Típico *para*… | Típico *de*… |
| Connect *to* a network | Conectar *a* una red | Conectar *con* una red |
| Different *to* zero | Diferente *a* cero | Diferente *de* cero |

> **Matiz:** algunas de estas construcciones («convertir a», «conectar a») son frecuentes en el habla culta de ciertas regiones. Si un proyecto las admite, debe registrarlo.

**Omisión de preposiciones y artículos.** En el texto corrido y en la ayuda, no se suprimen. En espacios reducidos (menús, botones) puede hacerse con moderación ([capítulo 20](../localizacion/20-restricciones-de-espacio-y-abreviaturas.md)).

| Original | Incorrecto | Correcto |
|---|---|---|
| Product Help | Producto Ayuda | Ayuda de Producto |
| File does not exist on disk. | Archivo no existe en disco. | El archivo no existe en el disco. |

## 6.5. Queísmo y dequeísmo

- **Queísmo:** omitir *de* donde hace falta. «Asegúrese *que*…» → «Asegúrese *de que*…».
- **Dequeísmo:** añadir *de* donde sobra. «Es posible *de que*…» → «Es posible *que*…».

## 6.6. Construcción «a + infinitivo»

Es un galicismo («el valor a procesar»). Alternativas:

- Oración de relativo: «el valor que se procesará».
- *Para* + infinitivo: «el valor para procesarlo».
- *Que se deban/deban*: «las páginas que desee imprimir».

## 6.7. Adverbios

No se intercalan adverbios entre auxiliar y participio en la voz pasiva calcada: «será automáticamente ajustado» → «se ajustará automáticamente».

## 6.8. Posesivos

El inglés abusa del posesivo para dar un tono cercano (*your files*, *your account*). En español suele sobrar.

| Original | Evitable | Preferible |
|---|---|---|
| Do you want to save your changes? | ¿Quiere guardar sus modificaciones? | ¿Quiere guardar las modificaciones? |

**Excepción:** cuando se elimina el posesivo y se pierde información (documentos compartidos, cuentas múltiples), se conserva. Se aplica juicio, no una regla mecánica.

## 6.9. Concordancia y número

- Se cuida la concordancia de género y número con las variables: no se componen frases por concatenación ([capítulo 18](../localizacion/18-internacionalizacion.md)).
- El plural en español se forma con reglas distintas al inglés; las unidades y símbolos no cambian ([8.4](./08-ortotipografia.md#84-símbolos-y-unidades)).

## 6.10. Anglicismos y calcos

**Recomendación:** preferir el equivalente español consolidado cuando existe y se entiende («descargar», no «hacer download»). Se acepta el anglicismo cuando:

- es el término establecido en el ámbito (*router*, *firmware*, *píxel*);
- no existe un equivalente aceptado o este genera confusión;
- el glosario del proyecto así lo establece.

Los extranjerismos crudos se escriben en cursiva o entre comillas en texto corrido; en la interfaz no suele aplicarse este formato.

## 6.11. Tiempos del pasado y variantes

En los mensajes que informan de un resultado, el español de España tiende al pretérito perfecto compuesto («se ha producido un error», «no se ha podido guardar») y el de buena parte de América, al pretérito indefinido («se produjo un error», «no se pudo guardar»). Ambas formas son correctas.

- **Opción:** elegir una forma por proyecto, aplicarla en todo el producto y anotarla en el [perfil de estilo](../adaptacion-por-proyectos/28-como-crear-un-perfil-de-estilo.md).
- No se mezclan ambas en mensajes del mismo tipo.

## 6.12. Verbos modales: *can*, *may*, *should*

| Original | Evitable | Recomendado | Comentario |
|---|---|---|---|
| You may lose unsaved data. | Puede perder los datos sin guardar. | Es posible que pierda los datos sin guardar. | *Poder* puede leerse como permiso; para la probabilidad conviene *es posible que* o *puede que* con subjuntivo. |
| You should back up your files. | Debería hacer una copia de sus archivos. | Se recomienda hacer una copia de seguridad. | El condicional *debería* puede sonar a reproche; también vale «Haga una copia de seguridad». |
| Simply click OK. | Simplemente haga clic en Aceptar. | Haga clic en Aceptar. | Los adverbios de relleno (*simply*, *just*, *easily*) se omiten salvo que aporten sentido. |

## 6.13. Negación

- **Norma:** una palabra negativa colocada detrás del verbo lleva *no* delante («No se encontró ningún archivo»); colocada antes, no lo lleva («Nunca se guarda automáticamente»).
- **Recomendación:** cuando el *or* del original es negativo, se traduce por *ni*.

| Original | Evitable | Recomendado |
|---|---|---|
| No file was found. | Se encontró ningún archivo. | No se encontró ningún archivo. |
| You cannot open or edit the file. | No puede abrir o modificar el archivo. | No puede abrir ni modificar el archivo. |

## 6.14. Enumeraciones: artículos y concordancia

- Se repite el artículo delante de cada elemento cuando cambia el género o el número, o cuando ayuda a evitar ambigüedad: «las películas y los archivos de sonido».
- Si un adjetivo puede referirse solo al último sustantivo, se reformula.

| Original | Evitable | Recomendado |
|---|---|---|
| Close all open programs and applications. | Cierre todos los programas y aplicaciones abiertas. | Cierre todos los programas y las aplicaciones que estén abiertos. |

## 6.15. *Por* y *para*, *a* y *en*

- **Por:** causa, agente o medio («Gracias por esperar», «Traducido por la comunidad»).
- **Para:** finalidad o destinatario («Herramienta para convertir imágenes»).
- **A:** movimiento o destino («Volver a la página anterior»). **En:** ubicación («en esta carpeta»).

| Original | Evitable | Recomendado |
|---|---|---|
| Click here for more information. | Haga clic aquí por más información. | Haga clic aquí para obtener más información. |
| Press F1 for help. | Pulse F1 por ayuda. | Pulse F1 para obtener ayuda. |
