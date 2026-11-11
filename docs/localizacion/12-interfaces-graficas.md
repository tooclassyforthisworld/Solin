# 12. Interfaces gráficas

## 12.1. Elementos y convenciones

| Elemento | Convención recomendada |
|---|---|
| **Menús y submenús** | Sustantivos o infinitivos, sin punto final, mayúscula solo inicial. |
| **Botones** | Verbos en infinitivo («Guardar», «Cancelar») o, en proyectos con tratamiento personal, imperativo. Coherencia en todo el producto. |
| **Etiquetas de campo** | Sustantivos; suelen terminar en dos puntos si el original lo hace. |
| **Casillas y opciones** | Frases que describen la opción activada, o infinitivos. |
| **Cuadros de diálogo** | Título claro, texto breve, botones inequívocos («Guardar» / «No guardar» / «Cancelar» mejor que «Sí» / «No»). |
| **Mensajes de error** | Qué ocurrió + qué hacer. Sin culpar, sin jerga. |
| **Barras de estado** | Formas breves; gerundio o sustantivo según el caso. |
| **Información emergente (*tooltips*)** | Breves; no repiten la etiqueta. |

## 12.2. Pautas

- **Recomendación:** emplear la misma forma verbal en todos los botones y órdenes.
- Se mantienen los puntos suspensivos del original en las órdenes que abren un diálogo.
- Los mensajes de confirmación formulan preguntas claras («¿Desea guardar los cambios antes de cerrar?») y los botones responden de forma directa.
- Los nombres de menús y de elementos que se citan en la ayuda coinciden con los de la interfaz.

## 12.3. Aceleradores y atajos

Los **aceleradores** son las letras subrayadas que permiten activar una orden por teclado (marcadas en las cadenas con `~`, `_` o `&`, según la plataforma). Criterios de selección, por orden de prioridad:

1. No repetir el acelerador dentro del mismo nivel.
2. Evitar números.
3. Evitar signos de puntuación.
4. No usar letras que dificulten la lectura del subrayado: con trazo descendente (g, j, p, q, y), con diacríticos o muy estrechas (i, l, t, f, r).
5. Preferir la inicial de la primera palabra, o la letra que mejor represente la orden.

Los **atajos de teclado** son estándar y no se traducen, salvo que la plataforma lo establezca (p. ej. en teclados con distribución distinta). Los nombres de teclas siguen la convención de la plataforma («Mayús», «Ctrl», «Retorno»).

## 12.4. Elementos gráficos

Se revisan los iconos, las capturas y las imágenes con texto incrustado. Los elementos culturales (gestos, colores, símbolos) se valoran en cada mercado.

## 12.5. Mensajes de error

- Siempre que haya espacio, el mensaje es una oración completa que dice qué ocurrió, en lugar de la palabra suelta *Error* seguida de un fragmento.
- Se mantiene el tono neutro del [capítulo 3](../fundamentos-linguisticos/03-registro-y-tono.md): sin interjecciones ni disculpas.

| Original | Evitable | Recomendado |
|---|---|---|
| Error opening file. | Error abriendo archivo. | Se produjo un error al abrir el archivo. / No se pudo abrir el archivo. |

La elección entre «se produjo» y «se ha producido» se describe en el [apartado 6.11](../fundamentos-linguisticos/06-gramatica-y-sintaxis.md).

## 12.6. Nombres de teclas y notación de atajos

- Las teclas simultáneas se separan con `+` (`Ctrl+P`); las que se pulsan en secuencia, con coma.
- Los atajos del original se conservan aunque la letra ya no coincida con la inicial de la orden traducida, porque son una convención entre aplicaciones.
- Los nombres de las teclas deben coincidir con los del teclado y la plataforma de destino. Los símbolos Unicode que representan algunas teclas (⌘, ⌥, ⇧…) se tratan en el [apartado 12.7](#127-símbolos-de-teclas). Tabla orientativa:

| Tecla | Nombre habitual en español |
|---|---|
| Enter | Intro (también *Entrar*; *Retorno* en macOS) |
| Backspace | Retroceso |
| Delete | Supr |
| Caps Lock | Bloq Mayús |
| Num Lock | Bloq Num |
| Print Screen | Impr Pant |
| Page Up / Page Down | Re Pág / Av Pág |
| Home / End | Inicio / Fin |
| Shift | Mayús |
| Space | Barra espaciadora |

## 12.7. Símbolos de teclas

Algunas plataformas representan las teclas con símbolos Unicode en lugar de con nombres: sobre todo macOS en los atajos de los menús (⌘, ⌥, ⇧, ⌃…) y la norma ISO/IEC 9995-7, que define los símbolos grabados en las teclas. Los símbolos no se traducen, pero el nombre que los acompaña sí.

- **Norma:** los símbolos se usan solo donde la plataforma o el original los usan (menús de macOS, documentación sobre macOS). En Windows y Linux se escribe el nombre de la tecla: `Ctrl+P`, no `⌃P`. En esos sistemas, ⌘ equivale a la tecla *Super* o *Windows*.
- **Recomendación:** en el texto corrido y en la ayuda se da el nombre de la tecla y, entre paréntesis, su símbolo: «Comando (⌘)», «Opción (⌥)».
- En macOS los símbolos de un atajo se escriben juntos, sin `+`, y en este orden: Control, Opción, Mayúsculas y Comando, seguidos de la letra: «⇧⌘Z».
- Se escribe el carácter Unicode, no una imagen ni una fuente de iconos, para que el texto se pueda buscar, copiar y leer.
- **Accesibilidad:** los lectores de pantalla pueden leer estos símbolos de forma inconsistente o ignorarlos, y no todas las fuentes incluyen todos los glifos. Se añade siempre el nombre de la tecla en el texto o en una etiqueta alternativa ([capítulo 17](./17-accesibilidad.md)) y se comprueba la cobertura de la fuente. Se evitan los símbolos de codificación reciente o poco extendida (como ⯘ U+2BD8 o 🆭 U+1F1AD).

| Tecla | Nombre en español (macOS) | Símbolo en macOS | Símbolo en ISO/IEC 9995-7 |
|---|---|---|---|
| Command | Comando | ⌘ U+2318 | ⌘ U+2318 |
| Option / Alt | Opción | ⌥ U+2325 | ⌥ U+2325 (Option); ⎇ U+2387 (Alt) |
| Control | Control | ⌃ U+2303 | ⎈ U+2388 |
| Shift | Mayúsculas | ⇧ U+21E7 | ⇧ U+21E7 |
| Caps Lock | Bloq Mayús | ⇪ U+21EA | ⇬ U+21EC |
| Num Lock | Bloq Num | — | ⇭ U+21ED |
| Alt Gr | Alt Gr | — | ⇮ U+21EE |
| Return | Retorno | ⏎ U+23CE (también ↩ U+21A9) | ⏎ U+23CE |
| Delete (hacia atrás) | Eliminar | ⌫ U+232B | ⌫ U+232B |
| Delete (hacia adelante) | Borrar hacia adelante | ⌦ U+2326 | ⌦ U+2326 |
| Escape | Escape (Esc) | ⎋ U+238B | ⎋ U+238B |
| Tab / Tab izquierdo | Tabulador | ⇥ U+21E5 / ⇤ U+21E4 | ⇥ U+21E5 / ⇤ U+21E4 |
| Space | Barra espaciadora | — | ␣ U+2423 |
| Home | Inicio | ↖ U+2196 | ⇱ U+21F1 |
| End | Fin | ↘ U+2198 | ⇲ U+21F2 |
| Page Up / Page Down | Re Pág / Av Pág | ⇞ U+21DE / ⇟ U+21DF | — |
| Flechas | Flecha arriba, abajo, izquierda, derecha | ↑ ↓ ← → (U+2191, U+2193, U+2190, U+2192) | — |

«—» indica que no hay símbolo establecido o que no se ha podido verificar en las fuentes consultadas.

