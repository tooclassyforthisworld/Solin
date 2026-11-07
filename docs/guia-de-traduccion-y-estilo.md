---
sidebar_position: 1.5
title: Guía abierta de traducción y estilo
slug: /guia
---

# Guía abierta de traducción y estilo en español

> Marco común de criterios lingüísticos, técnicos y de trabajo colaborativo para traducir y localizar al español cualquier tipo de proyecto: software, aplicaciones, videojuegos, documentación y contenidos web.

**Estado:** borrador para discusión · **Idioma de la guía:** español · **Licencia:** dominio público ([CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.es))

---

### Índice

**[Parte I. Fundamentos lingüísticos](#parte-i-fundamentos-lingüísticos)**

1. [Introducción y objetivos](#1-introducción-y-objetivos)
2. [Principios generales de traducción](#2-principios-generales-de-traducción)
3. [Registro y tono](#3-registro-y-tono)
4. [Variantes del español](#4-variantes-del-español)
5. [Construcción de las frases](#5-construcción-de-las-frases)
6. [Gramática y sintaxis](#6-gramática-y-sintaxis)
7. [Terminología y léxico](#7-terminología-y-léxico)
8. [Ortotipografía](#8-ortotipografía)
9. [Puntuación y convenciones tipográficas](#9-puntuación-y-convenciones-tipográficas)
10. [Inclusividad y lenguaje no sexista](#10-inclusividad-y-lenguaje-no-sexista)

**[Parte II. Localización](#parte-ii-localización)**

11. [Principios de localización](#11-principios-de-localización)
12. [Interfaces gráficas](#12-interfaces-gráficas)
13. [Aplicaciones móviles](#13-aplicaciones-móviles)
14. [Videojuegos](#14-videojuegos)
15. [Documentación técnica](#15-documentación-técnica)
16. [Sitios web y contenidos digitales](#16-sitios-web-y-contenidos-digitales)
17. [Accesibilidad](#17-accesibilidad)
18. [Internacionalización](#18-internacionalización)
19. [Variables, etiquetas y formatos técnicos](#19-variables-etiquetas-y-formatos-técnicos)
20. [Restricciones de espacio y abreviaturas](#20-restricciones-de-espacio-y-abreviaturas)

**[Parte III. Calidad y trabajo colaborativo](#parte-iii-calidad-y-trabajo-colaborativo)**

21. [Gestión terminológica](#21-gestión-terminológica)
22. [Memorias de traducción](#22-memorias-de-traducción)
23. [Herramientas CAT y plataformas de traducción](#23-herramientas-cat-y-plataformas-de-traducción)
24. [Revisión y control de calidad](#24-revisión-y-control-de-calidad)
25. [Resolución de discrepancias](#25-resolución-de-discrepancias)
26. [Gestión de proyectos multilingües](#26-gestión-de-proyectos-multilingües)
27. [Fuentes lingüísticas y técnicas](#27-fuentes-lingüísticas-y-técnicas)

**[Parte IV. Adaptación por proyectos](#parte-iv-adaptación-por-proyectos)**

28. [Cómo crear un perfil de estilo](#28-cómo-crear-un-perfil-de-estilo)
29. [Cómo establecer convenciones regionales](#29-cómo-establecer-convenciones-regionales)
30. [Cómo documentar excepciones](#30-cómo-documentar-excepciones)
31. [Cómo contribuir a la guía](#31-cómo-contribuir-a-la-guía)

**Anexos**

- [Anexo A. Glosario general](#anexo-a-glosario-general)
- [Anexo B. Glosarios especializados](#anexo-b-glosarios-especializados)
- [Anexo C. Tabla de variantes regionales](#anexo-c-tabla-de-variantes-regionales)
- [Anexo D. Ejemplos de traducción](#anexo-d-ejemplos-de-traducción)
- [Anexo E. Lista de falsos amigos](#anexo-e-lista-de-falsos-amigos)
- [Anexo F. Plantilla de guía de estilo](#anexo-f-plantilla-de-guía-de-estilo)
- [Anexo G. Bibliografía y recursos](#anexo-g-bibliografía-y-recursos)

---

## Parte I. Fundamentos lingüísticos

### 1. Introducción y objetivos

#### 1.1. Para qué sirve esta guía

Esta guía reúne criterios de traducción y estilo al español que pueden aplicarse a proyectos de naturaleza muy distinta. Pretende:

- resolver las dudas más frecuentes de quienes traducen o revisan;
- ofrecer una base común que cada proyecto pueda adoptar tal cual o ajustar mediante un [perfil de estilo](#28-cómo-crear-un-perfil-de-estilo);
- favorecer textos claros, naturales y coherentes, sea cual sea la plataforma donde se publiquen;
- facilitar la incorporación de nuevas personas a los equipos de traducción.

#### 1.2. Qué no es

No es un diccionario ni una gramática, ni sustituye a las obras académicas de referencia ([capítulo 27](#27-fuentes-lingüísticas-y-técnicas)). Tampoco impone una variante regional, un tratamiento ni una postura sobre el lenguaje inclusivo: presenta las opciones, sus ventajas e inconvenientes, y una recomendación por defecto cuando existe una razonable.

#### 1.3. Cómo leer las reglas

Cada proyecto tiene necesidades distintas, por lo que las pautas se clasifican por su grado de exigencia:

| Etiqueta | Significado |
|---|---|
| **Norma** | Se aplica en todo proyecto, porque responde a la ortografía o la gramática del español, o evita errores técnicos. |
| **Recomendación** | Es la opción por defecto. Puede omitirse con una razón documentada. |
| **Opción** | Es una decisión legítima entre varias; cada proyecto elige y la registra en su perfil. |

#### 1.4. Origen y créditos

Esta guía parte de la guía de traducción y estilo de LibreOffice en español, de la que toma y generaliza buena parte de las pautas gramaticales y ortotipográficas, y de la experiencia acumulada por la comunidad de traducción. Se ha reorganizado y ampliado para servir a otros proyectos.

Esta obra, como todo el contenido del repositorio, está dedicada al dominio público mediante [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed.es): puede copiarla, modificarla, distribuirla y usarla, incluso con fines comerciales, sin pedir permiso ni citar la fuente (aunque se agradece).

#### 1.5. Cómo se mantiene

La guía es un documento vivo. Los cambios se proponen y se discuten según el [capítulo 31](#31-cómo-contribuir-a-la-guía).

---

### 2. Principios generales de traducción

1. **Fidelidad al sentido, no a la forma.** Se traduce lo que el texto quiere decir y hace, no la secuencia de palabras. Un texto de interfaz cumple una función (invitar a una acción, advertir, confirmar), y la traducción debe cumplirla igual de bien.
2. **Naturalidad.** El resultado debe leerse como si se hubiera escrito en español. Si suena a traducción, probablemente haya un calco.
3. **Claridad y concisión.** Se prefieren las oraciones cortas, la sintaxis propia del español y la ausencia de palabras que no aporten nada.
4. **Coherencia.** Un mismo concepto se traduce siempre igual, y términos distintos no se confunden entre sí. La coherencia interna pesa más que la elegancia de una traducción aislada.
5. **Adecuación al destinatario y al contexto.** La traducción de un botón, un diálogo de un videojuego y un artículo de ayuda tienen necesidades distintas.
6. **Respeto por lo que no se traduce.** Nombres de producto, código, variables, rutas y otros elementos técnicos se conservan ([capítulo 19](#19-variables-etiquetas-y-formatos-técnicos)).
7. **Ante la duda, consultar el contexto.** Una cadena aislada puede significar varias cosas. Se consultan el contexto, las capturas, los comentarios de los desarrolladores y la propia aplicación antes de traducir.
8. **Interpretar el original, no corregirlo en silencio.** Si el original tiene errores o ambigüedades, se avisa a quien lo mantiene en lugar de arreglarlo solo en la traducción.

---

### 3. Registro y tono

#### 3.1. Dos decisiones distintas

El **registro** es el grado de formalidad y el **tratamiento** es la forma gramatical con la que se dirige el texto a la persona lectora. En español hay varias posibilidades:

| Tratamiento | Ejemplo | Cuándo suele funcionar |
|---|---|---|
| **Ustedeo** | «¿Quiere guardar las modificaciones?» | Software profesional y de oficina, banca, administración, documentación formal. |
| **Tuteo** | «¿Quieres guardar los cambios?» | Aplicaciones de consumo, sitios web comerciales, plataformas educativas y de comunidad, videojuegos. |
| **Voseo** | «¿Querés guardar los cambios?» | Productos orientados específicamente al Río de la Plata y otras zonas voseantes. |
| **Impersonal** | «Guardar cambios», «Se guardarán los cambios» | Botones, menús, etiquetas y mensajes donde la persona destinataria no necesita ser aludida. |

#### 3.2. Criterios para elegir

- **Alcance geográfico.** El ustedeo es compartido por todas las zonas hispanohablantes, de modo que permite mantener una única traducción. El tuteo es mayoritario pero difiere del voseo; el voseo solo es natural donde se usa.
- **Imagen de marca y público.** Lo que cuadra con un banco no cuadra con una aplicación juvenil.
- **Coste de mantenimiento.** Cada tratamiento adicional duplica el trabajo de traducción y revisión.
- **Coherencia con el ecosistema.** Se tiene en cuenta cómo tratan al usuario las plataformas donde se integra el producto.

**Recomendación:** documentar la decisión en el perfil de estilo ([capítulo 28](#28-cómo-crear-un-perfil-de-estilo)) y no mezclar tratamientos dentro de un mismo producto.

#### 3.3. Reglas comunes a cualquier tratamiento

- **Norma:** coherencia dentro del producto. No se pasa de «usted» a «tú» ni a la forma impersonal sin motivo.
- **Recomendación:** no explicitar el pronombre sujeto salvo que haga falta. El español no exige sujeto expreso, y el exceso de «usted» o «tú» recarga el texto y puede dar un matiz acusatorio.

| Original | Mejor | Evitable |
|---|---|---|
| You may enable these options for improved speed. | Puede activar estas opciones para mejorar la velocidad. | Usted puede activar estas opciones para mejorar la velocidad. |
| The value you entered is incorrect. | El valor introducido no es correcto. | El valor que usted introdujo es incorrecto. |

#### 3.4. Tono

El tono es el carácter de la voz del producto: formal, cercano, técnico, lúdico, etc. Se define en el perfil y debe ser coherente en todo el producto. Algunas pautas:

- **Recomendación:** no traducir las fórmulas de cortesía que en inglés existen por falta de distinción entre tratamientos (*please*, *sorry*), salvo que el tono del producto sea deliberadamente cálido.
- Se evitan las interjecciones y onomatopeyas del original que no aportan información (*Oops!*, *Uh-oh!*), salvo en contextos humorísticos donde formen parte de la voz de marca.
- Los mensajes de error informan de qué ocurrió y qué puede hacerse; no culpan a quien usa el producto.

| Original | Mejor | Evitable |
|---|---|---|
| Please choose another name. | Elija otro nombre. | Por favor elija otro nombre. |
| Sorry, an unexpected error occurred! | Se produjo un error inesperado. | Lo sentimos, ¡se produjo un error inesperado! |

---

### 4. Variantes del español

#### 4.1. Una lengua, varias normas

El español se habla en más de veinte países con diferencias de léxico, de tratamiento (tú, usted, vos) y de convenciones (separadores numéricos, formato de fecha, moneda). La [RAE y la ASALE](https://www.rae.es) reconocen la validez de todas las normas cultas, de modo que ninguna es «la correcta».

#### 4.2. Opciones de enfoque

| Enfoque | Descripción | Ventajas | Inconvenientes |
|---|---|---|---|
| **Español neutro o internacional** | Un único texto que evita regionalismos marcados. | Un solo mantenimiento; alcance amplio. | Puede sonar impersonal; la neutralidad total no existe. |
| **Español de una región concreta** (p. ej. es-ES, es-MX, es-AR) | Texto plenamente natural en un mercado. | Naturalidad máxima. | No sirve igual a todo el público. |
| **Español latinoamericano (es-419)** | Una variante común a toda América. | Alcance amplio en el continente. | Diferencias internas; poco natural en España. |
| **Varias variantes derivadas** | Una base común y capas regionales. | Equilibrio entre naturalidad y coste. | Exige buena organización y memorias de traducción. |

#### 4.3. Códigos de idioma

**Norma:** usar [etiquetas BCP 47](https://www.rfc-editor.org/info/bcp47) correctas: `es` (genérico), `es-ES`, `es-MX`, `es-AR`, `es-CO`, `es-CL`, `es-US`, `es-419` (América Latina). Los códigos deben coincidir con los de la plataforma de destino.

#### 4.4. Criterios de léxico

- Cuando una palabra varía por región, se elige una opción por proyecto y se registra en el glosario ([capítulo 21](#21-gestión-terminológica)).
- En proyectos de alcance amplio se prefieren los términos comprendidos en todas las zonas o aquellos para los que existe una opción neutra (p. ej. *archivo* en lugar de *fichero*).
- Se evitan los coloquialismos y la jerga local salvo que el tono lo pida.
- El [Anexo C](#anexo-c-tabla-de-variantes-regionales) reúne ejemplos de divergencias frecuentes.

#### 4.5. Convenciones regionales

Los separadores numéricos, el formato de fecha, la moneda y las unidades dependen de la configuración regional, no de la preferencia de quien traduce. Véanse los capítulos [8](#8-ortotipografía), [18](#18-internacionalización) y [29](#29-cómo-establecer-convenciones-regionales).

---

### 5. Construcción de las frases

1. **Oraciones cortas y sencillas.** Una idea por oración. Si una frase necesita muchas subordinadas, se divide.
2. **Sintaxis del español.** Se reordena sin miedo. Una buena traducción rara vez conserva el orden del original.
3. **Verbo en lugar de sustantivo abstracto** cuando el texto gana claridad («Se pueden ajustar los márgenes» mejor que «El ajuste de los márgenes es posible»).
4. **Voz activa o pasiva refleja** en lugar de la pasiva perifrástica ([6.3](#63-voz-pasiva)).
5. **Evitar la acumulación de sustantivos** al estilo inglés (*document template folder path*). Se deshace con preposiciones: «ruta de la carpeta de plantillas de documento».
6. **Paralelismo.** Los elementos de una lista, los botones de un grupo o las entradas de un menú usan la misma forma gramatical (todos infinitivos, todos sustantivos, todos imperativos).
7. **Evitar repeticiones innecesarias**, pero sin sacrificar la coherencia terminológica: la repetición de un término técnico es correcta; la repetición de una palabra corriente suele ser mejorable.

#### 5.1. Orden de las palabras

En español lo habitual es colocar el adjetivo calificativo después del sustantivo («interfaz sencilla»), salvo las excepciones en que el orden cambia el significado o el adjetivo antepuesto tiene valor expresivo.

**Recomendación:** evitar el calco del orden anglogermánico cuando suene forzado.

| Original | Evitable | Preferible |
|---|---|---|
| The straightforward, clean interface… | La sencilla y limpia interfaz… | La interfaz sencilla y limpia… |

> **Matiz:** en algunos sintagmas muy asentados en la interfaz (*Nuevo documento*, *Nueva carpeta*) el adjetivo antepuesto está plenamente integrado en el uso. Cada proyecto puede adoptar o no estas fórmulas, pero debe aplicar el mismo criterio en todas las cadenas equivalentes.

---

### 6. Gramática y sintaxis

#### 6.1. Modos y tiempos verbales

El inglés no distingue entre indicativo y subjuntivo con las mismas marcas que el español. Esto lleva a calcos en indicativo donde el español exige subjuntivo.

| Original | Incorrecto | Correcto |
|---|---|---|
| …make sure they *appear* exactly as… | …asegúrese de que *aparecen*… | …asegúrese de que *aparezcan*… |
| Search for fonts *being* used | Buscar tipos de letra que *están* en uso | Buscar tipos de letra que *estén* en uso |
| …so that it *displays* accurate colors. | …de modo que esta *muestra* colores… | …de modo que esta *muestre* colores… |

#### 6.2. Gerundios

No todo *-ing* inglés corresponde a un gerundio español. **Norma:**

- En **títulos y encabezados**, se traduce con un sustantivo o un infinitivo: *Exporting presentations* → «Exportación de presentaciones» o «Exportar presentaciones», no «Exportando presentaciones».
- En **etiquetas de estado o acción en curso**, el gerundio es correcto: *Printing* → «Imprimiendo…».
- El **gerundio de posterioridad** («se guardó el archivo, generando un informe») es incorrecto en español.

#### 6.3. Voz pasiva

La pasiva perifrástica con *ser* es mucho menos frecuente en español que en inglés. **Recomendación:** convertirla en voz activa o pasiva refleja.

| Original | Evitable | Preferible |
|---|---|---|
| The search term '%s' was not found. | El término «%s» no fue encontrado. | No se encontró el término «%s». |
| Macros cannot be saved. | Las macros no pueden ser guardadas. | Las macros no se pueden guardar. |
| The file will be automatically converted… | El archivo será automáticamente convertido… | El archivo se convertirá automáticamente… |

#### 6.4. Preposiciones y artículos

Las preposiciones no coinciden entre idiomas. Casos frecuentes:

| Original | Incorrecto | Correcto |
|---|---|---|
| Copy *to*… | Copiar *a*… | Copiar *en*… |
| Convert *to* PDF | Convertir *a* PDF | Convertir *en* PDF |
| Typical *for*… | Típico *para*… | Típico *de*… |
| Connect *to* a network | Conectar *a* una red | Conectar *con* una red |
| Different *to* zero | Diferente *a* cero | Diferente *de* cero |

> **Matiz:** algunas de estas construcciones («convertir a», «conectar a») son frecuentes en el habla culta de ciertas regiones. Si un proyecto las admite, debe registrarlo.

**Omisión de preposiciones y artículos.** En el texto corrido y en la ayuda, no se suprimen. En espacios reducidos (menús, botones) puede hacerse con moderación ([capítulo 20](#20-restricciones-de-espacio-y-abreviaturas)).

| Original | Incorrecto | Correcto |
|---|---|---|
| Product Help | Producto Ayuda | Ayuda de Producto |
| File does not exist on disk. | Archivo no existe en disco. | El archivo no existe en el disco. |

#### 6.5. Queísmo y dequeísmo

- **Queísmo:** omitir *de* donde hace falta. «Asegúrese *que*…» → «Asegúrese *de que*…».
- **Dequeísmo:** añadir *de* donde sobra. «Es posible *de que*…» → «Es posible *que*…».

#### 6.6. Construcción «a + infinitivo»

Es un galicismo («el valor a procesar»). Alternativas:

- Oración de relativo: «el valor que se procesará».
- *Para* + infinitivo: «el valor para procesarlo».
- *Que se deban/deban*: «las páginas que desee imprimir».

#### 6.7. Adverbios

No se intercalan adverbios entre auxiliar y participio en la voz pasiva calcada: «será automáticamente ajustado» → «se ajustará automáticamente».

#### 6.8. Posesivos

El inglés abusa del posesivo para dar un tono cercano (*your files*, *your account*). En español suele sobrar.

| Original | Evitable | Preferible |
|---|---|---|
| Do you want to save your changes? | ¿Quiere guardar sus modificaciones? | ¿Quiere guardar las modificaciones? |

**Excepción:** cuando se elimina el posesivo y se pierde información (documentos compartidos, cuentas múltiples), se conserva. Se aplica juicio, no una regla mecánica.

#### 6.9. Concordancia y número

- Se cuida la concordancia de género y número con las variables: no se componen frases por concatenación ([capítulo 18](#18-internacionalización)).
- El plural en español se forma con reglas distintas al inglés; las unidades y símbolos no cambian ([8.4](#84-símbolos-y-unidades)).

#### 6.10. Anglicismos y calcos

**Recomendación:** preferir el equivalente español consolidado cuando existe y se entiende («descargar», no «hacer download»). Se acepta el anglicismo cuando:

- es el término establecido en el ámbito (*router*, *firmware*, *píxel*);
- no existe un equivalente aceptado o este genera confusión;
- el glosario del proyecto así lo establece.

Los extranjerismos crudos se escriben en cursiva o entre comillas en texto corrido; en la interfaz no suele aplicarse este formato.

---

### 7. Terminología y léxico

#### 7.1. Principios

1. **Un término, un concepto.** Una misma palabra inglesa se traduce siempre igual en el mismo sentido; y distintos conceptos no se traducen con la misma palabra.
2. **Uso consolidado antes que invención.** Se acude primero a los glosarios de referencia ([capítulo 27](#27-fuentes-lingüísticas-y-técnicas)).
3. **Registro técnico adecuado.** El término debe ser comprensible para el público destinatario.
4. **Equivalencia funcional.** Un término de interfaz se elige por lo que *hace*, no por su traducción literal.

#### 7.2. Orden de consulta recomendado

1. El glosario del propio proyecto.
2. Las traducciones ya existentes del mismo producto o de uno de su entorno (memoria de traducción).
3. Glosarios de plataformas relacionadas (sistema operativo, entorno de escritorio, navegador).
4. Bases terminológicas multilingües y obras de referencia.
5. Diccionarios de la RAE y obras de consulta lingüística.

#### 7.3. Términos nuevos

Cuando no hay equivalente: se busca una opción en las fuentes, se propone, se discute en el canal del proyecto y se registra la decisión ([capítulo 21](#21-gestión-terminológica)).

#### 7.4. Falsos amigos

Los falsos amigos son palabras de apariencia similar entre dos lenguas pero con significados distintos (*library* ≠ «librería»). Son uno de los errores más frecuentes y dañinos. Véase el [Anexo E](#anexo-e-lista-de-falsos-amigos).

#### 7.5. Nombres propios, marcas y productos

- **Norma:** se respeta la grafía oficial del nombre (macOS, LibreOffice, iPhone) aunque inicie una oración.
- Los nombres de producto no se traducen, salvo que el titular tenga una versión oficial en español.
- Los nombres de funciones o módulos del producto sí se traducen si forman parte de la interfaz, y se registran en el glosario.

#### 7.6. Siglas, acrónimos y abreviaturas

- Las siglas se escriben sin puntos ni espacios (ONU, PDF) y no se pluralizan añadiendo «s» («los PDF»).
- La primera vez que aparece una sigla poco conocida en un texto, se desarrolla entre paréntesis.
- Si existe una sigla española consolidada, se prefiere a la inglesa (*ONG*, *OTAN*, *SIDA*); en informática suele mantenerse la inglesa (*URL*, *USB*).
- No se confunden siglas y abreviaturas ([8.5](#85-abreviaturas)).

---

### 8. Ortotipografía

#### 8.1. Números en texto corrido

- Los números del cero al nueve se suelen escribir con letra en texto corrido; los demás, con cifra, salvo al comienzo de una oración.
- Los miles y millones pueden combinar cifra y palabra (3 millones).
- En la interfaz, las cantidades se escriben con cifras.
- **Recomendación:** cada proyecto fija el criterio y lo aplica por igual en textos de interfaz y de ayuda.

#### 8.2. Separadores decimales y de millares

El español admite dos separadores decimales válidos: la **coma** (mayoritaria en España y buena parte de América) y el **punto** (usual en México, Centroamérica, el Caribe y Estados Unidos). Ambos son correctos según la RAE.

- **Norma:** en software y datos, el formato lo determina la configuración regional del sistema, no el texto traducido. No se escriben números formateados a mano en las cadenas.
- **Recomendación** para texto corrido sin contexto regional definido: la coma decimal y el espacio indivisible como separador de millares a partir de cinco cifras (`1 437 825,6`).
- No se usa el apóstrofo ni se mezclan convenciones.

#### 8.3. Fechas y horas

- El orden en español es día, mes, año (`3/8/2026`, `03/08/2026`). Se evita el formato anglosajón mes/día salvo que la configuración regional lo exija.
- En texto: «3 de agosto de 2026». Los nombres de días y meses se escriben con minúscula inicial.
- **Opción:** formato de 24 horas (más habitual en España) o de 12 horas con *a. m.* / *p. m.* (frecuente en México y otras regiones).
- Las abreviaturas *a. m.* y *p. m.* llevan espacio indivisible entre las letras.

#### 8.4. Símbolos y unidades

- Los símbolos de unidad **no llevan punto** y se separan de la cifra con espacio indivisible: `300 g`, `2500 mm`, `23 °C`.
- El símbolo `%` se separa de la cifra: `315 %`.
- Excepción: el grado de ángulo y las primas (`°`, `′`, `″`) van pegados: `270°`, `45′ 33″`.
- Los símbolos no cambian en plural.
- Las unidades se escriben con el sistema internacional salvo que el contexto exija otras.

#### 8.5. Abreviaturas

Pautas generales:

- Se eliminan, al menos, dos letras de la palabra.
- Se conserva el orden de las letras: *art.* (artículo).
- No terminan en vocal si se forman por apócope: *pág.* (página). Sí pueden hacerlo si son por contracción: *apdo.* (apartado).
- Llevan punto final. Si incluyen letra volada, el punto va antes: *n.º*, *4.ª*.
- Las abreviaturas de varias palabras separan con espacio indivisible: *p. ej.*, *a. m.*
- Se evita abreviar de forma que se confunda con otra palabra o símbolo establecido.

Véase también el [capítulo 20](#20-restricciones-de-espacio-y-abreviaturas).

#### 8.6. Mayúsculas y minúsculas

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

#### 8.7. Cursiva, negrita y otros énfasis

- La negrita se reserva para elementos de interfaz o términos destacados según el estilo del proyecto.
- La cursiva marca extranjerismos, títulos de obras y énfasis puntual.
- No se subraya para enfatizar (confunde con los enlaces).
- Se mantiene el formato del original cuando tiene función técnica (código, nombres de campos).

---

### 9. Puntuación y convenciones tipográficas

#### 9.1. Signos de apertura

**Norma:** las oraciones interrogativas y exclamativas llevan signos de apertura (`¿ ?`, `¡ !`). Es una de las omisiones más visibles al traducir.

#### 9.2. Puntos suspensivos

- Son siempre tres. **Recomendación:** usar el carácter único `…` (U+2026), que lo leen mejor los lectores de pantalla.
- No se deja espacio antes de los puntos suspensivos, aunque el original lo tuviera.
- En menús, indican que la orden pedirá más información; se mantienen como en el original.

| Original | Incorrecto | Correcto |
|---|---|---|
| Please wait ... | Espere ... | Espere… |

#### 9.3. Comillas

Según la ortografía académica, se usan en este orden jerárquico: **angulares** `« »`, luego **inglesas** `“ ”`, luego **simples** `‘ ’`.

- **Recomendación:** convertir las comillas rectas `" '` del original en comillas angulares en español.
- **Opción:** en América son comunes las comillas inglesas; un proyecto puede elegirlas y debe aplicarlas con coherencia.
- Los signos de puntuación se colocan fuera de las comillas, salvo que pertenezcan al texto citado.

#### 9.4. Comas, puntos y dos puntos

- No se escribe coma entre el sujeto y el verbo.
- Después de dos puntos se escribe minúscula, salvo nombres propios, citas textuales o en fórmulas de encabezado.
- Las listas con viñetas mantienen un criterio uniforme: todas con punto final o ninguna; todas con mayúscula inicial o todas con minúscula.
- No se usa punto final en títulos, botones, etiquetas ni opciones de menú.

#### 9.5. Guiones y rayas

- El guion `-` une palabras o separa sílabas. La raya `—` abre incisos y diálogos. El signo `–` se usa en rangos.
- **Recomendación:** no usar guion ASCII como separador en secuencias de menús o títulos compuestos, aunque lo haga el original.

#### 9.6. Secuencias de menús y títulos compuestos

| Caso | Original | Recomendación |
|---|---|---|
| Secuencias de menú | Edit - Select All | Editar ▸ Seleccionar todo (alternativa: `>` si el símbolo no está disponible) |
| Títulos con subtítulo | Query Wizard - Field selection | Asistente de consultas. Selección de campos |

Los símbolos alternativos (`»`, `→`) tienen otros usos habituales (comillas, flechas de teclado), por lo que no se recomiendan. Cada proyecto fija su símbolo.

#### 9.7. Espacios indivisibles

Se emplea el espacio indivisible (U+00A0, o U+202F fino) entre cifra y unidad, en abreviaturas de varias palabras y entre una cifra y el símbolo de porcentaje. Se asegura que la plataforma lo admita.

#### 9.8. Barras, paréntesis y corchetes

- Se evita la barra para unir alternativas en texto corrido (*y/o*); se reformula.
- Los paréntesis se emplean con moderación en la interfaz; si se usan para el plural opcional (`archivo(s)`), el proyecto debe valorar la mejor alternativa gramatical ([capítulo 18](#18-internacionalización)).

---

### 10. Inclusividad y lenguaje no sexista

#### 10.1. Objetivo

Que los textos se dirijan a toda la ciudadanía y eviten estereotipos de género, sin sacrificar la claridad ni la corrección gramatical.

#### 10.2. Estrategias recomendadas

Estas soluciones son compatibles con la norma académica y permiten textos legibles y naturales:

| Estrategia | Ejemplo |
|---|---|
| Sustantivos colectivos o abstractos | la ciudadanía, el equipo, el profesorado, la dirección |
| Perífrasis | «quien use el producto» en lugar de «los usuarios» |
| Omitir el sujeto o el determinante | «Para acceder, inicie sesión» |
| Formas impersonales o con *se* | «Se enviará una confirmación» |
| Imperativo o infinitivo | «Introduzca su contraseña», «Registrarse» |
| Sustantivos epicenos o de una sola terminación | la persona, el personal, el alumnado |
| Evitar el artículo con género cuando no es necesario | «Cuenta de usuario» en lugar de «la cuenta del usuario» |

#### 10.3. Soluciones de uso discutido

- **Desdoblamientos** (*los usuarios y las usuarias*): válidos, pero recargan el texto y no resuelven el género gramatical en concordancias posteriores. Se reservan para casos en que sean necesarios.
- **Barras** (*usuario/a*): ocupan poco espacio pero rompen la lectura y dificultan la accesibilidad; se evitan en texto corrido.
- **Grafías no normativas** (`@`, `x`, `e`): la RAE no las reconoce y los lectores de pantalla las interpretan mal. Se recomienda no emplearlas en el texto principal, salvo que la naturaleza del proyecto lo justifique de forma expresa, y se documenta como [excepción](#30-cómo-documentar-excepciones).

#### 10.4. Criterios del proyecto

El perfil de estilo ([capítulo 28](#28-cómo-crear-un-perfil-de-estilo)) debe indicar: la estrategia principal, el tratamiento de los casos que no puedan resolverse y la postura frente a las grafías no normativas. Lo esencial es la **coherencia** y que la decisión conste por escrito.

#### 10.5. Otros aspectos

- Se evitan estereotipos en ejemplos, personajes y textos de muestra.
- En formularios, se pregunta por el género solo si es necesario, y con opciones inclusivas.
- Los mensajes dirigidos a la persona usuaria se redactan sin presuponer su género (*Bienvenido* → *Le damos la bienvenida*).

---

## Parte II. Localización

### 11. Principios de localización

La **localización** adapta un producto a una lengua y una cultura: traduce, pero también adapta formatos, imágenes, ejemplos y convenciones. Principios:

1. **Se localiza la experiencia, no solo las palabras.** La persona usuaria no debería notar que el producto viene de otra lengua.
2. **El contexto manda.** Una cadena sin contexto es ambigua. Se solicitan capturas, comentarios y acceso a la aplicación en ejecución.
3. **Se respeta la intención del diseño.** Se traduce el texto que hay, no el que se querría tener; los problemas de diseño se reportan.
4. **Las cadenas son datos.** No se rompen, se reordenan ni se reconstruyen con concatenación ([capítulo 19](#19-variables-etiquetas-y-formatos-técnicos)).
5. **Se prueba en contexto.** Se revisa la traducción dentro del producto (verificación lingüística y funcional).
6. **Se localiza todo lo visible:** texto, capturas, imágenes con texto, audio, subtítulos, metadatos de tiendas, mensajes de error, correos y ayuda.
7. **Se coordina con quien desarrolla.** La localización de calidad es un proceso de dos direcciones: quien traduce informa de los problemas de internacionalización.
8. **Se documenta cada decisión relevante.**

#### 11.1. Qué se traduce y qué no

| Se traduce | Normalmente no se traduce |
|---|---|
| Texto de la interfaz, ayuda y mensajes | Nombres de producto y marcas |
| Texto alternativo de imágenes | Código, comandos, rutas y claves |
| Cadenas de error visibles | Identificadores internos y nombres de variables |
| Metadatos de ficha y tienda | Nombres de funciones de lenguajes de programación |
| Mensajes de log destinados al usuario final | Mensajes de log técnicos (según proyecto) |

#### 11.2. Flujo típico

Extracción de cadenas → traducción → revisión → pruebas en contexto → corrección → publicación → mantenimiento ante nuevas versiones.

---

### 12. Interfaces gráficas

#### 12.1. Elementos y convenciones

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

#### 12.2. Pautas

- **Recomendación:** emplear la misma forma verbal en todos los botones y órdenes.
- Se mantienen los puntos suspensivos del original en las órdenes que abren un diálogo.
- Los mensajes de confirmación formulan preguntas claras («¿Desea guardar los cambios antes de cerrar?») y los botones responden de forma directa.
- Los nombres de menús y de elementos que se citan en la ayuda coinciden con los de la interfaz.

#### 12.3. Aceleradores y atajos

Los **aceleradores** son las letras subrayadas que permiten activar una orden por teclado (marcadas en las cadenas con `~`, `_` o `&`, según la plataforma). Criterios de selección, por orden de prioridad:

1. No repetir el acelerador dentro del mismo nivel.
2. Evitar números.
3. Evitar signos de puntuación.
4. No usar letras que dificulten la lectura del subrayado: con trazo descendente (g, j, p, q, y), con diacríticos o muy estrechas (i, l, t, f, r).
5. Preferir la inicial de la primera palabra, o la letra que mejor represente la orden.

Los **atajos de teclado** son estándar y no se traducen, salvo que la plataforma lo establezca (p. ej. en teclados con distribución distinta). Los nombres de teclas siguen la convención de la plataforma («Mayús», «Ctrl», «Retorno»).

#### 12.4. Elementos gráficos

Se revisan los iconos, las capturas y las imágenes con texto incrustado. Los elementos culturales (gestos, colores, símbolos) se valoran en cada mercado.

---

### 13. Aplicaciones móviles

#### 13.1. Características específicas

- Pantallas pequeñas: el texto debe ser muy conciso.
- Interacción táctil: el vocabulario de los gestos difiere del de escritorio.
- Notificaciones, permisos del sistema y fichas de tienda, que son textos de alto impacto.
- Actualizaciones frecuentes: la memoria de traducción es clave.

#### 13.2. Vocabulario de gestos

| Original | Opciones habituales |
|---|---|
| tap | tocar (también «pulsar») |
| double tap | tocar dos veces |
| long press | mantener pulsado / mantener presionado |
| swipe | deslizar |
| pinch | pellizcar |
| scroll | desplazar |
| drag | arrastrar |

Se elige un verbo por gesto y se mantiene en toda la aplicación. Existen diferencias regionales entre *pulsar* y *presionar*.

#### 13.3. Pautas

- **Notificaciones:** breves, informativas, sin tono acusatorio ni urgencia artificial.
- **Permisos:** explican con claridad por qué se solicita el acceso. Se respetan los textos de sistema de cada plataforma.
- **Fichas de tienda:** título, descripción y palabras clave se adaptan al mercado; respetan los límites de caracteres y las reglas de la plataforma.
- **Texto en cabeceras y pestañas:** una o dos palabras; se prueban en pantallas pequeñas y con tamaños de fuente ampliados.
- **Pluralización y variables:** se emplean los mecanismos de la plataforma (*plurals* en Android, `stringsdict` en iOS, ICU) y nunca se concatenan frases.
- Se sigue la terminología de las guías de estilo de la plataforma (Android, iOS) para los elementos de sistema.

---

### 14. Videojuegos

#### 14.1. Particularidades

Los videojuegos son el ámbito donde más se permite —y se espera— la **transcreación**: reescribir un texto para lograr el mismo efecto, y no solo el mismo significado. A cambio, la coordinación con el equipo creativo es más estrecha.

#### 14.2. Criterios

- **Voz y personajes.** Cada personaje tiene su registro, vocabulario y personalidad; se documentan en una guía de personajes. Se mantiene la coherencia durante todo el juego.
- **Tratamiento.** Suele aceptarse el tuteo y, según el público, también el voseo o formas regionales. Se fija por proyecto y por personaje.
- **Humor, juegos de palabras y referencias culturales.** Se adaptan; no se traducen literalmente.
- **Terminología del juego.** Objetos, habilidades, lugares y facciones se registran en un glosario; los nombres propios del universo se conservan o se traducen según una política decidida de antemano.
- **Elementos de jugabilidad.** Verbos de acción, estados, etiquetas de interfaz y atajos tienen terminología estable en el género (*nivel*, *misión*, *punto de control*, *partida*).
- **Texto dinámico.** Nombres de jugador, cantidades y objetos se insertan en frases: se cuida la concordancia de género y número ([capítulo 18](#18-internacionalización)).
- **Subtítulos.** Respetan la velocidad de lectura, el número de caracteres por línea y las normas de subtitulación. La norma UNE 153010 recoge pautas de subtitulado accesible.
- **Doblaje.** Las líneas de audio requieren sincronía y duración similar a la original; esto condiciona la longitud de la traducción.
- **Clasificación por edades y contenido sensible.** Se respeta el nivel de contenido del original y las normativas locales.
- **Pruebas lingüísticas** dentro del juego (LQA) con acceso a versiones jugables.

#### 14.3. Longitud y límites

Los cuadros de diálogo, las misiones y los menús tienen límites estrictos; se coordinan con quien diseña la interfaz.

---

### 15. Documentación técnica

#### 15.1. Principios

- **Claridad y precisión** por encima del estilo.
- **Coherencia** entre la ayuda, la interfaz y los demás materiales.
- **Neutralidad:** registro formal o neutro, imperativo en los procedimientos.

#### 15.2. Estructura

- Los **títulos** son sustantivos o infinitivos («Instalación», «Configurar el servidor»), no gerundios.
- Los **procedimientos** se escriben en pasos numerados, cada uno con una acción.
- Las **advertencias** y notas mantienen un formato uniforme y un vocabulario estable («Nota», «Importante», «Precaución»).
- Los **elementos de interfaz** se citan con la grafía exacta de la interfaz traducida.
- **Secuencias de menús:** véase [9.6](#96-secuencias-de-menús-y-títulos-compuestos).
- **Código, comandos y rutas** no se traducen. Los comentarios dentro del código se traducen solo si el proyecto lo establece.
- Los **ejemplos** deben adaptarse al público: nombres, monedas, unidades y fechas locales.
- Las **capturas de pantalla** se actualizan al idioma traducido.

#### 15.3. Documentación de desarrollo (API, referencias)

- Se conservan los nombres de funciones, parámetros y clases.
- Se traduce el texto explicativo.
- Se evita el exceso de anglicismos innecesarios, pero se aceptan los términos consolidados (*callback*, *framework*, *token*).

#### 15.4. Mantenimiento

La documentación cambia con cada versión: se usan memorias de traducción y control de versiones para localizar solo lo que se modifica.

---

### 16. Sitios web y contenidos digitales

#### 16.1. Qué incluye

Páginas, blogs, boletines, redes sociales, correos, documentos descargables, metadatos y elementos de navegación.

#### 16.2. Pautas

- **Tono y tratamiento:** definidos por la voz de la marca (véase [capítulo 3](#3-registro-y-tono)).
- **Títulos y encabezados:** mayúscula solo inicial; sin punto final.
- **Enlaces:** el texto del enlace es descriptivo (evitar «haga clic aquí»).
- **SEO:** se adaptan los títulos, las descripciones y las palabras clave al uso real de las búsquedas en cada mercado; no se traducen literalmente.
- **Direcciones (URL):** se decide si se localizan los *slugs*; si se hace, se escriben sin tildes, en minúscula y con guiones, y se mantienen estables.
- **Metadatos:** etiqueta de idioma correcta (`lang="es"`, `es-MX`, etc.) y `hreflang` para versiones regionales.
- **Imágenes y texto alternativo:** se localizan.
- **Formularios y mensajes de validación:** claros y sin culpar.
- **Aviso legal, privacidad y condiciones de uso:** se traducen con apoyo jurídico y respetando la legislación local.
- **Moneda, precios y medidas:** se adaptan al mercado.
- **Calendario y eventos:** formatos de fecha y hora locales; zonas horarias explícitas.
- **Redes sociales:** se adaptan etiquetas, emojis y referencias al contexto cultural.

#### 16.3. Sitios con generadores estáticos y sistemas de gestión de contenido

Se respeta la estructura de archivos y los campos de metadatos; se traducen los valores, no las claves; se verifica que el marcado no se rompa ([capítulo 19](#19-variables-etiquetas-y-formatos-técnicos)).

---

### 17. Accesibilidad

La accesibilidad es una cualidad del producto y también de la traducción. Una traducción accesible permite que más personas la usen, en especial quienes emplean tecnologías de apoyo.

#### 17.1. Pautas

- **Texto alternativo:** se traduce y se redacta de forma descriptiva y concisa.
- **Lectores de pantalla:** se prefiere `…` (U+2026) a tres puntos sueltos. Se evitan los símbolos de significado ambiguo que se leen mal (`@`, `x`, `/`, símbolos decorativos en lugar de palabras).
- **Etiqueta de idioma:** correcta en todo el contenido, y en los fragmentos en otro idioma.
- **Lenguaje claro:** frases cortas, vocabulario conocido, estructura previsible.
- **Abreviaturas y siglas:** se desarrollan la primera vez o se ofrecen alternativas legibles.
- **Enlaces y botones:** nombres que tengan sentido fuera de contexto.
- **No depender solo del color, de la posición o de la forma** para dar instrucciones («el botón rojo», «a la derecha»).
- **Subtítulos y transcripciones:** fieles, sincronizados, con identificación de hablantes y sonidos relevantes.
- **Contraste y legibilidad:** la expansión del texto traducido no debe romper los diseños accesibles.
- **Símbolos de secuencias de menú (`▸`):** se comprueba que los lectores de pantalla los anuncien de forma comprensible; si no, se adopta una alternativa y se documenta.
- **Plurales y concordancia:** también afectan a la lectura en voz alta.

#### 17.2. Marcos de referencia

Las [pautas WCAG del W3C](https://www.w3.org/WAI/standards-guidelines/wcag/) y las normas locales de accesibilidad sirven de marco. Los textos de las herramientas de accesibilidad (etiquetas ARIA, descripciones) también se traducen.

---

### 18. Internacionalización

La internacionalización (i18n) es el trabajo técnico que hace posible la localización. Muchos problemas de traducción nacen de una i18n deficiente. Quien traduce debe saber detectarlos y reportarlos.

#### 18.1. Problemas frecuentes y cómo señalarlos

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

#### 18.2. Pluralización

El español distingue singular y plural; en las versiones recientes de CLDR se contemplan, además, categorías propias para ciertos números grandes. Se recomienda emplear el sistema de plurales de la plataforma (ICU MessageFormat, gettext `msgid_plural`, Android `plurals`, iOS `stringsdict`) y no resolver los plurales con paréntesis o con lógica propia.

#### 18.3. Género gramatical y variables

Se evita insertar sustantivos variables en frases con concordancia. Se propone una de las soluciones siguientes: reformular («Elemento: {item}»), usar plantillas por género o recurrir a estructuras neutras.

#### 18.4. Orden y posición de las variables

El orden de los marcadores puede diferir en español. **Norma:** si el sistema lo permite, se usan marcadores posicionales (`%1$s`, `{0}`) para poder reordenarlos.

#### 18.5. Direccionalidad y fuentes

El español es una lengua de izquierda a derecha, pero la interfaz puede incluir texto bidireccional en nombres propios o URL. Se comprueba la presencia de todos los caracteres necesarios en las fuentes elegidas (`¿ ¡ ñ « » … ▸`).

#### 18.6. Cómo reportar

Se abre una incidencia o un comentario en la plataforma con: la cadena, el problema, el motivo lingüístico y una propuesta de solución.

---

### 19. Variables, etiquetas y formatos técnicos

#### 19.1. Regla general

**Norma:** todo elemento técnico del original debe conservarse intacto y en una posición válida en la traducción. Un marcador roto puede provocar fallos o cierres inesperados de la aplicación.

#### 19.2. Tipos de elementos

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
| Aceleradores | `~`, `_`, `&` | Se colocan según [12.3](#123-aceleradores-y-atajos). |
| Claves e identificadores | `settings.title` | No se traducen. |
| Rutas, comandos, URL, direcciones de correo | `/usr/bin`, `git pull` | No se traducen, salvo que la documentación lo prevea. |
| Formatos de fecha y hora | `yyyy-MM-dd`, `%Y-%m-%d` | No se modifican, salvo que sean visibles para quien usa el producto y el proyecto determine su traducción. |

#### 19.3. Pautas

- Se verifica que las comillas, los paréntesis y las llaves queden emparejados.
- Si una etiqueta envuelve texto que se reordena, se mueve junto con él.
- No se añaden espacios dentro de las etiquetas ni se alteran sus atributos.
- Cuando un marcador representa un número, un nombre o una unidad, se comprueba la concordancia de la frase.
- Las comillas rectas dentro de atributos o código no se sustituyen por tipográficas.
- Se emplean las verificaciones automáticas de la plataforma para detectar marcadores perdidos, sobrantes o duplicados ([capítulo 24](#24-revisión-y-control-de-calidad)).

#### 19.4. Formatos de archivo habituales

| Formato | Observaciones |
|---|---|
| **Gettext (`.po`, `.pot`)** | Cadenas con contexto (`msgctxt`) y plurales (`msgid_plural`, `msgstr[n]`). La cabecera indica `Language` y `Plural-Forms`. |
| **XLIFF (`.xlf`)** | Estándar de intercambio; conserva el marcado en elementos protegidos. |
| **JSON / YAML** | Se traducen los valores, no las claves; atención a escapes y comillas. |
| **Properties, Resx, strings, ARB** | Formatos habituales en Java, .NET, iOS y Flutter. |
| **Android `strings.xml`** | Escapar apóstrofos y comillas según la plataforma. |
| **Markdown / HTML** | Se conserva la estructura; no se traducen bloques de código. |
| **TMX / TBX** | Intercambio de memorias de traducción y terminología. |

---

### 20. Restricciones de espacio y abreviaturas

#### 20.1. Expansión del texto

El texto en español es normalmente más largo que el inglés (se suele calcular entre un 15 y un 30 % más; en textos muy cortos, como botones, la proporción puede ser mayor). Los diseños deben preverlo ([capítulo 18](#18-internacionalización)).

#### 20.2. Estrategias, por orden de preferencia

1. **Reformular** con una construcción más corta, sin perder sentido.
2. **Usar un sinónimo más breve** y coherente con el glosario.
3. **Suprimir palabras superfluas** (posesivos, cortesías, artículos en espacios muy restringidos).
4. **Pedir más espacio** al equipo de desarrollo o diseño: es un problema de diseño, no una carencia de la traducción.
5. **Abreviar** solo como último recurso ([20.3](#203-abreviaturas)).
6. **No truncar** nunca la traducción mediante corte arbitrario.

#### 20.3. Abreviaturas

- Se aplican las reglas del [8.5](#85-abreviaturas).
- **Recomendación:** emplear solo abreviaturas conocidas, que se hayan registrado en el glosario del proyecto.
- Se evitan las abreviaturas inventadas, las que se confunden con otras palabras y las que dificultan la lectura con lectores de pantalla.
- Se usa la misma abreviatura para la misma palabra en todo el producto.
- Si una abreviatura es la única solución, se anota en el glosario y se ofrece el término completo en información emergente o ayuda.

#### 20.4. Límites de longitud

Algunas plataformas fijan un máximo de caracteres (títulos de tienda, notificaciones, campos de base de datos). Se comprueban estos límites antes de entregar la traducción.

---

## Parte III. Calidad y trabajo colaborativo

### 21. Gestión terminológica

#### 21.1. Objetivo

Asegurar que los mismos conceptos se traduzcan siempre igual, a lo largo del tiempo y entre las distintas personas que colaboran.

#### 21.2. Glosario del proyecto

Un buen glosario recoge, para cada entrada:

| Campo | Contenido |
|---|---|
| **Término original** | La forma en la lengua de origen. |
| **Categoría gramatical** | Sustantivo, verbo, adjetivo, etc. |
| **Traducción aprobada** | La forma que debe usarse. |
| **Variantes regionales** | Si el proyecto las admite. |
| **Traducciones desaconsejadas** | Los calcos o errores frecuentes. |
| **Definición o contexto** | Para evitar ambigüedades. |
| **Notas** | Observaciones de uso. |
| **Fuente y fecha** | Origen de la decisión y cuándo se tomó. |
| **Estado** | Propuesto, aprobado, obsoleto. |

#### 21.3. Ciclo de vida de los términos

1. **Detección:** un término nuevo o dudoso aparece durante la traducción o la revisión.
2. **Investigación:** se consultan las fuentes ([capítulo 27](#27-fuentes-lingüísticas-y-técnicas)).
3. **Propuesta:** se documenta con argumentos.
4. **Discusión y decisión:** según el proceso de [resolución de discrepancias](#25-resolución-de-discrepancias).
5. **Publicación:** se añade al glosario y se comunica.
6. **Mantenimiento:** se revisa periódicamente; los términos obsoletos se marcan, no se borran.

#### 21.4. Formatos e integración

- Los glosarios se almacenan en formatos abiertos y reutilizables (TBX, CSV, `.po`, o los de la plataforma de traducción).
- Se integran en las herramientas para que avisen de los términos incumplidos.
- Se versionan en el repositorio junto con el resto de la documentación.

#### 21.5. Terminología multilingüe

En proyectos con varios idiomas, el glosario mantiene un identificador de concepto común para facilitar la coherencia entre lenguas.

---

### 22. Memorias de traducción

#### 22.1. Qué son

Una memoria de traducción (MT, en inglés *TM*) es una base de datos de segmentos traducidos que se reutilizan cuando aparecen textos idénticos o parecidos.

#### 22.2. Buenas prácticas

- **Calidad antes que cantidad:** una memoria con errores propaga los errores.
- **Un segmento, una traducción por contexto.** Se evita almacenar variantes contradictorias.
- **Metadatos:** proyecto, fecha, autoría, estado de revisión, variante regional.
- **Separación por variante:** una memoria para es-ES, otra para es-MX, etc., o una única memoria con etiquetas.
- **Mantenimiento periódico:** limpiar duplicados, corregir errores detectados y actualizar la terminología.
- **Alineación de textos antiguos** solo cuando se verifique la calidad.
- **Formatos de intercambio:** TMX.
- **Propiedad y licencia:** se acuerda quién puede usar las memorias, especialmente si contienen contenido con licencia.
- **Confidencialidad:** las memorias de proyectos privados no se publican.

#### 22.3. Coincidencias

| Tipo | Uso |
|---|---|
| **100 % (exacta)** | Se acepta tras comprobar el contexto. |
| **Contextual** | Coincide también el segmento anterior y el siguiente; es la más fiable. |
| **Parcial (fuzzy)** | Se revisa con cuidado y se ajusta. |
| **Sugerida por traducción automática** | Se trata como borrador y requiere postedición ([23.4](#234-traducción-automática)). |

#### 22.4. Riesgos

El principal riesgo es el de **propagar un error o un estilo antiguo**. Antes de aplicar cambios de criterio (por ejemplo, un cambio de tratamiento), se actualiza o filtra la memoria.

---

### 23. Herramientas CAT y plataformas de traducción

#### 23.1. Tipos de herramientas

| Tipo | Ejemplos | Observaciones |
|---|---|---|
| **Plataformas web colaborativas** | Weblate, Pontoon, Crowdin, Transifex, Lokalise, Phrase | Adecuadas para proyectos con comunidad. |
| **Editores de escritorio** | Poedit, Lokalize, Virtaal, OmegaT, Okapi | Útiles para trabajo sin conexión. |
| **Herramientas CAT comerciales** | Trados, memoQ, Déjà Vu | Frecuentes en proyectos profesionales. |
| **Editores de texto con complementos** | VS Code, editores de `.po` | Para formatos sencillos y automatizaciones. |
| **Control de versiones** | Git y plataformas de alojamiento | Para sincronizar archivos de traducción. |

#### 23.2. Funciones que se aprovechan

Memoria de traducción, glosario con avisos, comprobaciones automáticas, comentarios por cadena, historial de cambios, flujos de revisión y, en su caso, integración con el repositorio del proyecto.

#### 23.3. Criterios de elección

Formatos admitidos, flujo de revisión, gestión de permisos, coste, licencia, integración con el repositorio, apoyo a la comunidad, API y facilidad para exportar los datos (para evitar la dependencia de un proveedor).

#### 23.4. Traducción automática

- Puede acelerar el trabajo como **borrador**, nunca como resultado final sin revisar.
- La **postedición** debe aplicar todas las normas de esta guía; los sistemas automáticos reproducen calcos, falsos amigos y tratamientos inconsistentes.
- Debe declararse en el proyecto si se permite, en qué condiciones y con qué herramientas.
- Se tienen en cuenta la confidencialidad y la licencia de los datos enviados a servicios externos.
- La calidad de la memoria de traducción no debe degradarse con segmentos automáticos no revisados.

#### 23.5. Automatizaciones

Los scripts y las herramientas de conversión (por ejemplo, para pasar de un tratamiento a otro o para validar la ortotipografía) son útiles, pero se prueban y se revisan siempre de forma manual, porque no resuelven por sí solos las diferencias de gramática y de contexto.

---

### 24. Revisión y control de calidad

#### 24.1. Niveles de revisión

| Nivel | Qué se comprueba |
|---|---|
| **Autorrevisión** | Quien traduce relee su trabajo: errores, omisiones, formato, marcadores. |
| **Revisión por pares** | Otra persona compara con el original y verifica corrección lingüística y terminología. |
| **Revisión lingüística en contexto (LQA)** | Se revisa el texto dentro del producto en ejecución. |
| **Revisión final o de aprobación** | Quien coordina valida la coherencia global antes de publicar. |

#### 24.2. Categorías de errores

Para evaluar con criterios objetivos, se puede adoptar un marco como [MQM](https://themqm.org) o uno simplificado:

| Categoría | Ejemplos |
|---|---|
| **Precisión** | Omisiones, adiciones, mala interpretación del original. |
| **Fluidez** | Gramática, ortografía, puntuación, calcos, tono. |
| **Terminología** | Incumplimiento del glosario, inconsistencia. |
| **Estilo** | Incumplimiento de la guía o del perfil de estilo. |
| **Locale** | Formatos de fecha, número, unidades, moneda. |
| **Técnico / formato** | Marcadores rotos, etiquetas, aceleradores duplicados. |
| **Verificación** | Problemas que solo se aprecian en el producto. |

Se asigna una **gravedad** (crítico, mayor, menor, de preferencia) para priorizar las correcciones.

#### 24.3. Comprobaciones automáticas

Las plataformas pueden detectar, entre otras cosas:

- marcadores y etiquetas ausentes, añadidos o alterados;
- puntuación final distinta de la del original;
- espacios dobles o a principio/final de cadena;
- diferencias de mayúsculas;
- términos del glosario no utilizados;
- longitud excesiva;
- números distintos del original;
- comillas y signos de apertura omitidos;
- aceleradores duplicados.

Estas comprobaciones **no sustituyen** la lectura humana.

#### 24.4. Lista de verificación para quien revisa

- [ ] ¿El sentido es fiel al original?
- [ ] ¿Suena natural en español?
- [ ] ¿Se respetan el tratamiento y el tono del perfil?
- [ ] ¿Se usan los términos del glosario?
- [ ] ¿Hay calcos, falsos amigos o gerundios mal empleados?
- [ ] ¿Están bien la ortografía, la puntuación y las mayúsculas?
- [ ] ¿Se conservan marcadores, etiquetas y formatos?
- [ ] ¿Caben los textos en el espacio disponible?
- [ ] ¿Los aceleradores y atajos son coherentes?
- [ ] ¿El resultado es coherente con el resto del producto y con la ayuda?
- [ ] ¿Es inclusivo y accesible?

#### 24.5. Retroalimentación

La revisión debe ser constructiva: se explica el motivo de cada cambio con referencia a la guía o al glosario. Un buen sistema de revisión enseña, no solo corrige.

#### 24.6. Medición y mejora

Se registran los errores recurrentes para actualizar la guía, el glosario y la formación de nuevas personas colaboradoras.

---

### 25. Resolución de discrepancias

Es normal que personas expertas discrepen. Un proceso claro evita conflictos y decisiones arbitrarias.

#### 25.1. Principios

1. **Se discute la propuesta, no a la persona.**
2. **Los argumentos se basan en fuentes** (normas académicas, usos documentados, glosarios, pruebas de uso), no en la preferencia personal.
3. **Las decisiones constan por escrito** y se aplican a todo el proyecto.
4. **Lo ya decidido no se reabre sin argumentos nuevos.**

#### 25.2. Jerarquía de autoridad (orientativa)

1. Normas técnicas obligatorias de la plataforma o del proyecto (por ejemplo, un formato exigido).
2. Decisiones registradas del proyecto (perfil de estilo, glosario).
3. Esta guía.
4. Obras normativas académicas (RAE, ASALE).
5. Obras de consulta y usos consolidados en proyectos afines.
6. Preferencia razonada de quien traduce.

#### 25.3. Procedimiento

1. **Planteamiento:** se abre una incidencia o un hilo con la cadena, el contexto y las alternativas.
2. **Evidencias:** cada parte aporta fuentes y ejemplos de uso.
3. **Debate con plazo:** se fija un periodo razonable (por ejemplo, 7 a 14 días).
4. **Decisión:** por consenso. Si no lo hay, decide el equipo de coordinación o se vota según las normas del proyecto.
5. **Registro:** se anota la decisión, su justificación y la fecha en el glosario o en el registro de decisiones.
6. **Aplicación:** se actualizan la memoria de traducción, el glosario y las cadenas afectadas.
7. **Revisión futura:** se prevé cuándo reconsiderar la decisión si cambian las circunstancias.

#### 25.4. Casos especiales

- **Empate:** decide quien coordina el idioma.
- **Disputa entre variantes regionales:** se aplica el criterio de variante del perfil ([capítulo 29](#29-cómo-establecer-convenciones-regionales)).
- **Discrepancia con el equipo de desarrollo:** se prioriza el consenso sobre la forma de conseguir el objetivo común (claridad para la persona usuaria).
- **Conducta:** se recomienda un código de conducta para el equipo.

---

### 26. Gestión de proyectos multilingües

#### 26.1. Roles habituales

| Rol | Funciones |
|---|---|
| **Coordinación del idioma** | Mantiene el perfil, el glosario y el calendario; resuelve discrepancias. |
| **Traducción** | Traduce cadenas y consulta dudas. |
| **Revisión** | Verifica la calidad y la coherencia. |
| **Gestión terminológica** | Cuida el glosario. |
| **Enlace con desarrollo** | Reporta problemas de i18n y coordina los plazos. |
| **Mantenimiento técnico** | Se ocupa de la plataforma, los formatos y las automatizaciones. |

En equipos pequeños, una misma persona puede asumir varios roles.

#### 26.2. Flujo de trabajo

1. **Preparación:** extracción de cadenas, entrega de contexto y glosario.
2. **Planificación:** alcance, calendario y prioridades.
3. **Traducción.**
4. **Revisión.**
5. **Verificación en contexto.**
6. **Integración y publicación.**
7. **Mantenimiento:** gestión de cambios, correcciones y nuevas versiones.

#### 26.3. Calendario y congelación de cadenas

Se negocia con el equipo de desarrollo un periodo de **congelación de cadenas** (*string freeze*) previo a cada publicación, para poder traducir y verificar sin cambios de última hora. Las cadenas nuevas se notifican con antelación.

#### 26.4. Incorporación de nuevas personas

- Un documento de bienvenida: dónde se trabaja, a quién se pregunta, cómo se revisa.
- Un conjunto de tareas sencillas para empezar.
- Asignación de una persona mentora o revisora.
- Acceso a esta guía, al perfil de estilo y al glosario.

#### 26.5. Comunicación

Canales claros (lista, foro, chat, incidencias) y un registro de decisiones. Se respetan las zonas horarias y los idiomas de trabajo.

#### 26.6. Proyectos con varias variantes del español

Se acuerda una **variante base** y se organizan las demás como derivadas o capas, para evitar duplicar trabajo ([capítulo 29](#29-cómo-establecer-convenciones-regionales)).

#### 26.7. Reconocimiento

Se reconoce la autoría de las contribuciones (archivos de créditos, historial, páginas de agradecimientos). Es esencial para mantener una comunidad activa.

#### 26.8. Aspectos legales

Se verifican las licencias de las traducciones y de los materiales de referencia, y se acuerda qué ocurre con las contribuciones.

---

### 27. Fuentes lingüísticas y técnicas

#### 27.1. Obras normativas del español

- [Real Academia Española (RAE) y ASALE](https://www.rae.es): *Diccionario de la lengua española* (DLE), *Ortografía de la lengua española* (2010), *Nueva gramática de la lengua española* (2009-2011), *Diccionario panhispánico de dudas* (DPD), *Libro de estilo de la lengua española* (2018).
- [Fundéu](https://www.fundeu.es): recomendaciones y consultas lingüísticas.
- [Wikilengua](https://www.wikilengua.org): recopilación colaborativa de dudas y criterios de uso.

#### 27.2. Terminología y glosarios

- [IATE](https://iate.europa.eu): terminología de la Unión Europea.
- [TERMIUM Plus](https://www.btb.termiumplus.gc.ca): base terminológica del Gobierno de Canadá.
- [Portal de lenguaje de Microsoft](https://www.microsoft.com/en-us/language): glosarios y memorias de traducción.
- Glosarios de proyectos abiertos (GNOME, KDE, Debian, Mozilla, Ubuntu, GNU, LibreOffice).
- Glosarios de plataformas (Apple, Google, Android).

#### 27.3. Normas y recomendaciones técnicas

- [Unicode CLDR](https://cldr.unicode.org): datos de localización (formatos, plurales, nombres).
- [ICU](https://icu.unicode.org): bibliotecas y sintaxis de mensajes.
- [BCP 47](https://www.rfc-editor.org/info/bcp47): etiquetas de idioma.
- [W3C WAI](https://www.w3.org/WAI/): accesibilidad.
- Estándares de la industria: XLIFF, TMX, TBX; ISO 17100 (servicios de traducción), ISO 18587 (postedición).
- UNE 153010 (subtitulado accesible).

#### 27.4. Cómo evaluar una fuente

1. **Autoridad:** quién la publica.
2. **Alcance:** si es normativa o descriptiva.
3. **Actualidad:** fecha de la última revisión.
4. **Coherencia con el contexto:** región y ámbito.
5. **Contraste:** si varias fuentes confiables coinciden.

El [Anexo G](#anexo-g-bibliografía-y-recursos) amplía la bibliografía.

---

## Parte IV. Adaptación por proyectos

### 28. Cómo crear un perfil de estilo

Un **perfil de estilo** es un documento breve que recoge las decisiones concretas de un proyecto y cómo se apartan de esta guía o la completan. Permite adoptar el marco común sin imponerlo.

#### 28.1. Pasos

1. **Conocer el proyecto:** público, plataforma, tipo de textos, idiomas, volumen.
2. **Revisar esta guía** y marcar qué **opciones** y **recomendaciones** se adoptan.
3. **Decidir las opciones abiertas** (tratamiento, variante, lenguaje inclusivo, comillas, formato de fecha, secuencias de menú…).
4. **Elaborar el glosario base** y las listas de términos desaconsejados.
5. **Redactar el perfil** con la [plantilla del Anexo F](#anexo-f-plantilla-de-guía-de-estilo).
6. **Validar con la comunidad** del proyecto.
7. **Publicar y mantener** el perfil en el repositorio, junto al código o los archivos de traducción.

#### 28.2. Contenido mínimo

| Apartado | Preguntas que responde |
|---|---|
| **Ámbito** | ¿A qué productos y textos se aplica? |
| **Público y tono** | ¿A quién se habla y cómo? |
| **Tratamiento** | ¿Tú, usted, vos o impersonal? |
| **Variante regional** | ¿Neutra, regional o por capas? ¿Qué código de idioma? |
| **Lenguaje inclusivo** | ¿Qué estrategias se aplican? ¿Qué se evita? |
| **Ortotipografía** | Comillas, secuencias de menú, fechas, números, unidades, abreviaturas. |
| **Terminología** | Dónde está el glosario y cómo se actualiza. |
| **Formatos técnicos** | Marcadores, plurales, aceleradores. |
| **Calidad** | Niveles de revisión y criterios de aceptación. |
| **Procedimientos** | Cómo se resuelven las discrepancias y quién decide. |
| **Excepciones** | Desviaciones respecto de la guía general. |

#### 28.3. Consejos

- **Sea breve:** un perfil de dos o tres páginas se consulta; uno de treinta, no.
- **Ponga ejemplos** reales del proyecto.
- **Registre la fecha y la versión.**
- **Incluya el porqué** de cada decisión importante: ayuda a no reabrir debates.
- **Revise** el perfil cuando cambie el público o la plataforma.

#### 28.4. Ubicación recomendada

```text
/docs/i18n/es/
├── PERFIL-ESTILO.md
├── GLOSARIO.tbx  (o .csv / .po)
├── DECISIONES.md
└── EXCEPCIONES.md
```

---

### 29. Cómo establecer convenciones regionales

#### 29.1. Preguntas que hay que responder

1. **¿Quién es el público?** Un solo país, una región o toda la comunidad hispanohablante.
2. **¿Qué conviene más: un texto único o varios?** Se valora el volumen, la frecuencia de cambios y los recursos.
3. **¿Qué convenciones se fijan?** Léxico, tratamiento, formato de fecha y número, moneda, unidades, ortotipografía.
4. **¿Qué parte la resuelve el sistema (configuración regional) y cuál el texto?**

#### 29.2. Modelos de organización

| Modelo | Descripción | Cuándo conviene |
|---|---|---|
| **Una variante única** | Un solo idioma `es`, estilo neutro. | Proyectos pequeños o con recursos limitados. |
| **Variante base + derivadas** | `es` como base y `es-MX`, `es-AR`… solo con las diferencias. | Proyectos con comunidades regionales activas. |
| **Variantes independientes** | Cada variante se mantiene por separado. | Productos con fuerte identidad regional. |

#### 29.3. Esquema de decisión para el léxico

1. ¿Hay una forma comprendida y aceptada en todas las regiones? Se usa.
2. Si no, ¿hay una forma neutra o híbrida? Se usa.
3. Si no, se elige la forma de la variante base y se documenta la alternativa regional.
4. Se registra la decisión en el glosario ([capítulo 21](#21-gestión-terminológica)).

#### 29.4. Convenciones que dependen de la configuración regional

| Elemento | Quién lo decide |
|---|---|
| Separador decimal y de millares | El sistema o la biblioteca de localización |
| Formato de fecha y hora | El sistema |
| Moneda y símbolo | El sistema |
| Unidades de medida | El sistema o el producto |
| Primer día de la semana | El sistema |
| Ordenación alfabética | La intercalación local |

**Recomendación:** evitar fijar estos formatos en las cadenas.

#### 29.5. Coherencia y comunicación

Se comunica a la comunidad qué variante se utiliza y por qué. Se ofrece un cauce para sugerir adaptaciones regionales y se evita que las diferencias se lean como errores.

---

### 30. Cómo documentar excepciones

Las excepciones son legítimas, pero deben ser **deliberadas, justificadas y localizables**.

#### 30.1. Cuándo es válida una excepción

- Hay una restricción técnica (espacio, formato, plataforma).
- Existe un uso establecido en el ámbito que difiere de la norma general.
- La identidad de marca o de producto lo exige.
- La persona usuaria entiende mejor la solución alternativa.
- La comunidad del proyecto la ha acordado.

#### 30.2. Qué se documenta

| Campo | Contenido |
|---|---|
| **Identificador** | Un código único (p. ej. `EXC-004`). |
| **Regla afectada** | Capítulo y apartado de la guía. |
| **Descripción** | Qué se hace de forma distinta. |
| **Motivo** | Justificación con fuentes o ejemplos. |
| **Alcance** | Dónde se aplica (todo el producto, un módulo, un tipo de cadena). |
| **Ejemplos** | Cadenas concretas. |
| **Decisión** | Quién la aprobó y cuándo. |
| **Revisión** | Cuándo se reconsiderará o qué la dejaría sin efecto. |

#### 30.3. Ejemplo

```markdown
### EXC-004 · Preposición «a» con «convertir»
- **Regla afectada:** 6.4 (Preposiciones y artículos)
- **Descripción:** Se admite «Convertir a PDF» en lugar de «Convertir en PDF».
- **Motivo:** Forma muy extendida en el ámbito informático hispanoamericano y presente en la plataforma de destino.
- **Alcance:** Todas las cadenas de exportación.
- **Decisión:** Equipo de coordinación, 2026-03-12.
- **Revisión:** Al actualizar la guía general.
```

#### 30.4. Gestión

- Se mantiene un archivo único de excepciones (`EXCEPCIONES.md`).
- Cada excepción se aplica de forma coherente y se refleja en las herramientas de verificación.
- Las excepciones frecuentes en varios proyectos pueden proponerse como cambio de la guía general ([capítulo 31](#31-cómo-contribuir-a-la-guía)).

---

### 31. Cómo contribuir a la guía

Esta guía es de la comunidad. Toda persona puede proponer mejoras, desde corregir una errata hasta incorporar un capítulo.

#### 31.1. Tipos de contribución

- Corrección de erratas y enlaces rotos.
- Mejora de explicaciones y ejemplos.
- Propuestas de nuevas reglas o de cambios de criterio.
- Ampliación de glosarios y de la lista de falsos amigos.
- Aportación de perfiles de estilo de proyectos reales como ejemplo.
- Traducción o adaptación a otros contextos.

#### 31.2. Flujo de trabajo en el repositorio

1. **Buscar** si ya existe una incidencia o una propuesta similar.
2. **Abrir una incidencia** para los cambios de criterio o las novedades de calado; para erratas basta con una propuesta directa.
3. **Bifurcar** (*fork*) el repositorio y crear una rama con un nombre descriptivo (`fix/erratas-cap8`, `propuesta/lenguaje-inclusivo`).
4. **Editar** los archivos siguiendo el formato de la guía.
5. **Enviar una solicitud de incorporación de cambios** (*pull request*) con un resumen claro: qué cambia, por qué y qué fuentes lo respaldan.
6. **Participar en la revisión.** Se espera una respuesta razonable a los comentarios.
7. **Incorporación.** Quien mantiene la guía fusiona los cambios cuando hay consenso.

#### 31.3. Criterios de aceptación

- **Fundamento:** el cambio se apoya en normas, fuentes o usos documentados.
- **Generalidad:** sirve a proyectos diversos, o se presenta como opción o anexo.
- **Claridad:** está bien redactado, con ejemplos.
- **Coherencia:** no contradice otras secciones sin justificarlo.
- **Neutralidad:** presenta las opciones con sus ventajas e inconvenientes, sin imponer posturas donde hay variación legítima.

#### 31.4. Estilo de los ejemplos

- Se incluye el **original**, la **versión incorrecta o evitable** y la **recomendada**, con una explicación breve.
- Se usan ejemplos realistas, sin referencias a proyectos concretos salvo que se mencionen como casos de estudio.
- Los ejemplos con variación regional indican las regiones.

#### 31.5. Cambios mayores

Los cambios que afectan a normas ya consolidadas se discuten en un hilo abierto durante un plazo mínimo (se sugieren 14 días) y se resuelven según el [capítulo 25](#25-resolución-de-discrepancias).

#### 31.6. Versionado y registro de cambios

- Se usa un esquema de versiones sencillo (`MAYOR.MENOR.PARCHE`).
- Cada versión actualiza un archivo `CHANGELOG.md`.
- Los cambios de criterio se anotan de forma visible.

#### 31.7. Código de conducta y créditos

Toda participación se rige por un código de conducta basado en el respeto y la colaboración. Las personas que contribuyen se mencionan en un archivo de créditos.

#### 31.8. Licencia

Todo el contenido del repositorio está dedicado al dominio público mediante CC0 1.0 Universal (véase el [apartado 1.4](#14-origen-y-créditos) y el archivo `LICENSE`). Al contribuir, se acepta que el aporte se publique en las mismas condiciones. No envíe textos ajenos que no puedan dedicarse al dominio público.

---

## Anexos

### Anexo A. Glosario general

Términos propios de la traducción y la localización usados en esta guía.

| Término | Definición |
|---|---|
| **Acelerador** | Letra subrayada de una orden de menú o diálogo que permite activarla por teclado. |
| **Calco** | Reproducción de una estructura o palabra de otra lengua sin adaptarla a la propia (*aplicar para un trabajo*). |
| **CAT (*Computer-Assisted Translation*)** | Traducción asistida por ordenador: herramientas con memorias, glosarios y comprobaciones. |
| **CLDR** | Repositorio de datos de localización del Consorcio Unicode (formatos, plurales, nombres). |
| **Cadena (*string*)** | Unidad de texto traducible de un programa. |
| **Contexto** | Información sobre dónde y cómo aparece una cadena. |
| **Congelación de cadenas (*string freeze*)** | Periodo en que el texto original no cambia para permitir traducir. |
| **Desarrollo (equipo de)** | Personas que crean el producto. |
| **Falso amigo** | Palabra parecida en dos lenguas pero de significado distinto. |
| **Glosario** | Lista de términos con su traducción aprobada. |
| **Globalización (G11n)** | Conjunto de internacionalización y localización. |
| **i18n (internacionalización)** | Preparación técnica de un producto para poder adaptarlo a varias lenguas y regiones. |
| **ICU** | Conjunto de bibliotecas y sintaxis (*MessageFormat*) para internacionalización. |
| **L10n (localización)** | Adaptación de un producto a una lengua y una cultura concretas. |
| **LQA** | Control de calidad lingüístico, generalmente dentro del producto. |
| **Marcador de posición (*placeholder*)** | Elemento que se sustituye por un valor en tiempo de ejecución (`%s`, `{name}`). |
| **Memoria de traducción (MT/TM)** | Base de datos de segmentos traducidos reutilizables. |
| **MQM** | Marco de métricas de calidad de traducción. |
| **Perfil de estilo** | Documento de decisiones de estilo específicas de un proyecto. |
| **Postedición** | Revisión y corrección de un texto producido por traducción automática. |
| **Segmento** | Unidad mínima de trabajo en una herramienta CAT (normalmente una oración). |
| **Slug** | Parte de una URL que identifica una página, en formato legible. |
| **TBX** | Formato estándar de intercambio de terminología. |
| **TMX** | Formato estándar de intercambio de memorias de traducción. |
| **Transcreación** | Recreación de un texto para lograr el mismo efecto en otra cultura, más allá de la traducción literal. |
| **XLIFF** | Formato estándar de intercambio de archivos de traducción. |

---

### Anexo B. Glosarios especializados

> Estos glosarios son **puntos de partida**. Cada proyecto debe revisarlos, ampliarlos y fijar sus decisiones en su propio glosario ([capítulo 21](#21-gestión-terminológica)). Las variantes regionales aparecen entre paréntesis o separadas por barra.

#### B.1. Software e interfaces

| Inglés | Español | Notas |
|---|---|---|
| file | archivo | *fichero* es habitual en España. |
| folder | carpeta | |
| directory | directorio | |
| window | ventana | |
| dialog box | cuadro de diálogo | |
| tab | pestaña | |
| button | botón | |
| checkbox | casilla de verificación | |
| radio button | botón de opción | |
| drop-down list | lista desplegable | |
| toolbar | barra de herramientas | |
| menu bar | barra de menús | |
| status bar | barra de estado | |
| sidebar | barra lateral | |
| tooltip | información emergente | También *sugerencia*. |
| settings | ajustes / configuración | *Ajustes* (ES, también en móvil); *configuración* (amplio en América). |
| preferences | preferencias | |
| options | opciones | |
| undo / redo | deshacer / rehacer | |
| cut / copy / paste | cortar / copiar / pegar | |
| save / save as | guardar / guardar como | |
| open | abrir | |
| close | cerrar | |
| delete | eliminar / borrar | Se elige uno por proyecto. |
| remove | quitar | No «remover». |
| download | descargar | |
| upload | subir / cargar | *Subir* es universal; *cargar* es frecuente en América. |
| install | instalar | |
| update | actualizar / actualización | |
| plugin / add-on | complemento | *extensión*, según la plataforma. |
| library | biblioteca | No «librería». |
| shortcut | atajo | |
| default | predeterminado | |
| sign in / log in | iniciar sesión | |
| sign out / log out | cerrar sesión | |
| username | nombre de usuario | |
| password | contraseña | *clave* en algunas regiones. |
| account | cuenta | |
| link | enlace | *vínculo* también válido. |
| email | correo electrónico / correo | |
| backup | copia de seguridad | |
| cloud | nube | |
| clipboard | portapapeles | |
| screenshot | captura de pantalla | |
| drag and drop | arrastrar y soltar | |
| click | hacer clic | *clic*, con grafía adaptada. |
| scroll | desplazarse | |
| bug | error / fallo | |
| crash | cierre inesperado / fallo | |
| feature | función / característica | |
| release notes | notas de la versión | |

#### B.2. Aplicaciones móviles

| Inglés | Español | Notas |
|---|---|---|
| app | aplicación / app | |
| notification | notificación | |
| permission | permiso | |
| home screen | pantalla de inicio | |
| lock screen | pantalla de bloqueo | |
| tap | tocar | |
| swipe | deslizar | |
| pinch | pellizcar | |
| long press | mantener pulsado / presionado | |
| touch screen | pantalla táctil | |
| keyboard | teclado | |
| battery saver | ahorro de batería | |
| airplane mode | modo avión | |
| do not disturb | no molestar | |
| share | compartir | |
| widget | widget | Anglicismo establecido. |
| in-app purchase | compra dentro de la aplicación | |
| subscription | suscripción | |

#### B.3. Videojuegos

| Inglés | Español | Notas |
|---|---|---|
| level | nivel | |
| quest / mission | misión | |
| checkpoint | punto de control | |
| save game | partida guardada | |
| load game | cargar partida | |
| new game | partida nueva | |
| achievement | logro | |
| health / HP | salud / vida | |
| mana | maná | |
| inventory | inventario | |
| loot | botín | |
| cooldown | tiempo de reutilización / de recarga | |
| respawn | reaparecer | |
| multiplayer | multijugador | |
| single-player | un jugador | |
| match | partida | |
| lobby | sala de espera / lobby | |
| leaderboard | clasificación | |
| skin | aspecto / skin | |
| boss | jefe | |
| NPC | personaje no jugable (PNJ) | |
| game over | fin de la partida | |
| pause | pausa | |
| difficulty | dificultad | |
| controller | mando | *control* en parte de América. |

#### B.4. Documentación técnica

| Inglés | Español | Notas |
|---|---|---|
| workflow | flujo de trabajo | |
| troubleshooting | solución de problemas | |
| getting started | primeros pasos | |
| tutorial | tutorial | |
| how-to | guía práctica | |
| reference | referencia | |
| changelog | registro de cambios | |
| requirements | requisitos | |
| prerequisites | requisitos previos | |
| note / warning / tip | nota / advertencia / consejo | |
| step | paso | |
| pull request | solicitud de incorporación de cambios | También *solicitud de extracción*. |
| issue | incidencia | |
| repository | repositorio | |
| branch | rama | |
| commit | confirmación / commit | Varía por proyecto. |
| API | API | Sigla establecida. |
| endpoint | punto de conexión / endpoint | |
| framework | marco de trabajo / framework | |
| deployment | despliegue | |
| source code | código fuente | |
| open source | código abierto | |
| license | licencia | |

#### B.5. Sitios web y contenidos digitales

| Inglés | Español | Notas |
|---|---|---|
| homepage | página de inicio | |
| landing page | página de destino | |
| breadcrumb | ruta de navegación | |
| header / footer | encabezado / pie de página | |
| menu | menú | |
| search | búsqueda / buscar | |
| form | formulario | |
| newsletter | boletín | |
| subscribe | suscribirse | |
| cookie | cookie | Anglicismo establecido; se usa en minúscula. |
| privacy policy | política de privacidad | |
| terms of use | condiciones de uso | |
| thumbnail | miniatura | |
| alt text | texto alternativo | |
| call to action | llamada a la acción | |
| SEO | SEO / optimización para motores de búsqueda | |
| slug | slug / identificador de URL | |
| blog post | entrada | |
| comment | comentario | |

---

### Anexo C. Tabla de variantes regionales

> **Aviso:** la tabla es **orientativa**. Las preferencias varían dentro de cada país y evolucionan. Antes de adoptar una forma, conviene contrastarla con el público real del proyecto. Las celdas con varias opciones indican usos concurrentes.

#### C.1. Léxico informático y cotidiano

| Concepto | España | México y Centroamérica | Cono Sur (Argentina, Chile, Uruguay) | Países andinos y Caribe | Opción neutra frecuente |
|---|---|---|---|---|---|
| computer | ordenador | computadora | computadora (AR, UY), computador (CL) | computador / computadora | equipo / computadora (*ordenador* si el público es de España) |
| mobile phone | móvil | celular | celular | celular | teléfono |
| mouse | ratón | ratón / mouse | mouse | mouse / ratón | ratón |
| file | fichero / archivo | archivo | archivo | archivo | archivo |
| password | contraseña | contraseña | contraseña / clave | contraseña / clave | contraseña |
| screenshot | captura de pantalla | captura de pantalla | captura de pantalla | captura / pantallazo (CO) | captura de pantalla |
| link | enlace | enlace / liga (MX) / vínculo | enlace / link | enlace / vínculo | enlace |
| to download | descargar | descargar | descargar / bajar | descargar / bajar | descargar |
| to upload | subir | subir / cargar | subir | subir / cargar | subir |
| to click | pulsar / hacer clic | dar clic / hacer clic | hacer clic | hacer clic / dar clic | hacer clic |
| settings | ajustes | configuración / ajustes | configuración / ajustes | configuración | configuración |
| to press | pulsar | presionar / oprimir | presionar / apretar | presionar / oprimir | pulsar / presionar |
| email | correo electrónico | correo electrónico | correo electrónico / mail | correo electrónico | correo electrónico |
| app | aplicación / app | aplicación / app | aplicación / app | aplicación / app | aplicación |
| controller (games) | mando | control | joystick / control | control | mando / control |
| recycle bin | papelera | papelera de reciclaje | papelera de reciclaje | papelera de reciclaje | papelera |
| search engine | buscador | buscador | buscador | buscador | buscador |
| cell (spreadsheet) | celda | celda | celda | celda | celda |

#### C.2. Tratamiento

| Zona | Tratamiento habitual (informal) | Observaciones |
|---|---|---|
| España | tú (y *vosotros* en plural) | El plural *vosotros* no se usa en América; los textos «neutros» emplean *ustedes*. |
| México y Centroamérica | tú / usted (voseo en parte de Centroamérica) | Mayor uso de *usted* en contextos formales. |
| Caribe | tú / usted | |
| Colombia, Venezuela | tú / usted (*vos* en áreas de Colombia) | |
| Chile | tú y voseo verbal en el habla coloquial | |
| Río de la Plata (Argentina, Uruguay) | vos | |
| Resto de la región andina y Paraguay | tú / vos / usted según zona | |

#### C.3. Convenciones tipográficas y de formato (valores usuales en cada configuración regional)

| Elemento | es-ES | es-MX | es-AR | es-419 |
|---|---|---|---|---|
| Decimal | coma | punto | coma | punto (con variaciones internas) |
| Millares | punto o espacio | coma | punto | coma |
| Fecha corta | dd/mm/aaaa | dd/mm/aaaa | dd/mm/aaaa | dd/mm/aaaa |
| Hora | 24 h | 12 h con a. m. / p. m. o 24 h | 24 h | 12 h o 24 h |
| Primer día de la semana | lunes | domingo | domingo | domingo |
| Moneda (símbolo) | € tras la cifra | $ ante la cifra | $ ante la cifra | varía |

Los valores exactos deben tomarse de **CLDR** en cada momento, y no de esta tabla.

#### C.4. Cómo usar esta tabla

1. Identifique la variante base del proyecto.
2. Compruebe qué conceptos de la tabla aparecen en su producto.
3. Registre las decisiones en el glosario y el perfil ([capítulos 28](#28-cómo-crear-un-perfil-de-estilo) y [29](#29-cómo-establecer-convenciones-regionales)).

---

### Anexo D. Ejemplos de traducción

Cada ejemplo sigue el esquema **original → evitable → recomendado**.

#### D.1. Registro y tono

| Original | Evitable | Recomendado |
|---|---|---|
| Please enter the server address: | Por favor, introduzca la dirección del servidor: | Introduzca la dirección del servidor: |
| Oops! Something went wrong. | ¡Ups! Algo salió mal. | Se produjo un error. |
| The value you entered was incorrect. | El valor que usted introdujo es incorrecto. | El valor introducido no es correcto. |
| Do you want to save your changes? | ¿Quiere guardar sus modificaciones? | ¿Quiere guardar las modificaciones? |

#### D.2. Orden y sintaxis

| Original | Evitable | Recomendado |
|---|---|---|
| The straightforward, clean interface | La sencilla y limpia interfaz | La interfaz sencilla y limpia |
| Select the range of pages to print. | Seleccione el intervalo de páginas a imprimir. | Seleccione el intervalo de páginas que desee imprimir. |
| Enter the value to be processed. | Escriba el valor a procesar. | Escriba el valor que se procesará. |

#### D.3. Voz pasiva y adverbios

| Original | Evitable | Recomendado |
|---|---|---|
| The file was not found. | El archivo no fue encontrado. | No se encontró el archivo. |
| The text will be automatically rewrapped. | El texto será automáticamente ajustado. | El texto se ajustará automáticamente. |
| Changes cannot be undone. | Los cambios no pueden ser deshechos. | No se pueden deshacer los cambios. |

#### D.4. Subjuntivo

| Original | Evitable | Recomendado |
|---|---|---|
| Make sure the fields appear in the right order. | Asegúrese de que los campos aparecen en el orden correcto. | Asegúrese de que los campos aparezcan en el orden correcto. |
| Select a name that is not in use. | Seleccione un nombre que no está en uso. | Seleccione un nombre que no esté en uso. |

#### D.5. Gerundios

| Contexto | Original | Evitable | Recomendado |
|---|---|---|---|
| Título de ayuda | Exporting presentations | Exportando presentaciones | Exportación de presentaciones |
| Estado de una acción | Printing | Impresión | Imprimiendo… |
| Texto explicativo | Saving the file, the program closes. | Guardando el archivo, el programa se cierra. | Al guardar el archivo, el programa se cierra. |

#### D.6. Preposiciones

| Original | Evitable | Recomendado |
|---|---|---|
| Copy to… | Copiar a… | Copiar en… |
| Compatible with | Compatible a | Compatible con |
| Depends on | Depende en | Depende de |
| Make sure that… | Asegúrese que… | Asegúrese de que… |

#### D.7. Mayúsculas

| Original | Evitable | Recomendado |
|---|---|---|
| Insert Page Number | Insertar Número de Página | Insertar número de página |
| Last modified: Sunday, March 3 | Última modificación: Domingo, 3 de Marzo | Última modificación: domingo, 3 de marzo |
| Japanese Characters | Caracteres Japoneses | Caracteres japoneses |

#### D.8. Ortotipografía

| Original | Evitable | Recomendado |
|---|---|---|
| Zoom: 315% | Zoom: 315% | Zoom: 315 % |
| 23°C | 23° C | 23 °C |
| Wait... | Espere... | Espere… |
| Delete file '$1'? | ¿Eliminar el archivo '$1'? | ¿Eliminar el archivo «$1»? |

#### D.9. Secuencias de menús

| Original | Evitable | Recomendado |
|---|---|---|
| Choose Edit - Select All | Elija Editar - Seleccionar todo | Elija Editar ▸ Seleccionar todo |
| Query Wizard - Field selection | Asistente de consultas - Selección de campos | Asistente de consultas. Selección de campos |

#### D.10. Variables y plurales

| Original | Evitable | Recomendado |
|---|---|---|
| `{count} file(s) deleted` | `{count} archivo(s) eliminado(s)` | `{count, plural, one {Se eliminó # archivo} other {Se eliminaron # archivos}}` |
| `Welcome, %s!` | `¡Bienvenido, %s!` | `Le damos la bienvenida, %s.` |
| `Delete "%s" from "%s"?` | `¿Eliminar "%s" de "%s"?` | `¿Eliminar «%s» de «%s»?` |

#### D.11. Inclusividad

| Original | Evitable | Recomendado |
|---|---|---|
| All users must log in. | Todos los usuarios deben iniciar sesión. | Quien use el servicio debe iniciar sesión. / Es necesario iniciar sesión. |
| Contact your administrator. | Contacte con su administrador. | Contacte con la administración del sistema. |

---

### Anexo E. Lista de falsos amigos

| Inglés | Traducción errónea (equivale en inglés a…) | Traducción adecuada |
|---|---|---|
| **actual** | actual (*current*) | real, efectivo |
| **actually** | actualmente (*currently*) | en realidad, de hecho |
| **current** | corriente (a veces válida, p. ej. *corriente eléctrica*) | actual |
| **agenda** | agenda (*planner*) | orden del día, programa |
| **assist** | asistir (*attend*) | ayudar, apoyar |
| **attend** | atender (*to look after*) | asistir a |
| **auto-** | auto- (*self-*) | X automático / automática |
| **eventually** | eventualmente (*occasionally*) | finalmente, con el tiempo |
| **exit** | éxito (*success*) | salir, salida |
| **introduce** | introducir (a una persona) | presentar |
| **large** | largo (*long*) | grande |
| **lecture** | lectura (*reading*) | conferencia, clase |
| **library** | librería (*bookstore*) | biblioteca |
| **pretend** | pretender (*to intend*) | fingir, simular |
| **proprietary** | propietario (*owner*) | privativo |
| **range** | rango (*rank*) | intervalo, margen, ámbito |
| **realize** | realizar (*to carry out*) | darse cuenta |
| **remove** | remover (*stir*) | quitar, eliminar, extraer |
| **resume** | resumir (*summarize*) | reanudar, continuar |
| **sensible** | sensible (*sensitive*) | sensato, razonable |
| **sensitive** | sensitivo | sensible, confidencial (según el contexto) |
| **support (verbo)** | soportar (*put up with*) | admitir, permitir, ser compatible con |
| **support (sustantivo)** | soporte (físico) | asistencia, servicio técnico, compatibilidad |
| **application** (solicitud) | aplicación | solicitud (en contexto de trámites) |
| **argument** (disputa) | argumento | discusión (en el contexto cotidiano; *argumento* es correcto en programación y lógica) |
| **parameter** | parámetro | correcto en informática |
| **embarrassed** | embarazado | avergonzado |
| **sympathetic** | simpático | comprensivo, compasivo |
| **sale** | sal | venta, oferta |
| **actual vs. current (informática)** | «valor actual» (puede ser ambiguo) | valor real / valor actual, según el contexto |

> **Matices:** algunos de estos usos están muy extendidos en ámbitos técnicos (*librería*, *soportar*, *rango*, *propietario*). La recomendación general es evitarlos y emplear las alternativas indicadas; el proyecto puede documentar excepciones en su glosario.
> Para ampliar: lista de falsos cognados del Wikcionario, la de Marisa Echevarría y la tabla de Ángel Álvarez (véase el [Anexo G](#anexo-g-bibliografía-y-recursos)).

---

### Anexo F. Plantilla de guía de estilo

Copie este esquema y complételo para su proyecto. Los apartados entre corchetes son para rellenar.

```markdown
# Perfil de estilo en español · [Nombre del proyecto]

- **Versión:** [0.1]
- **Fecha:** [AAAA-MM-DD]
- **Coordinación del idioma:** [nombre o equipo]
- **Guía general de referencia:** [enlace y versión de esta guía]
- **Licencia:** [licencia]

## 1. Ámbito
- Productos y textos a los que se aplica: [...]
- Plataformas y formatos de archivo: [...]
- Idiomas de origen: [...]

## 2. Público y tono
- Público destinatario: [...]
- Tono de voz: [formal / cercano / técnico / lúdico / …]
- Ejemplos de textos representativos: [...]

## 3. Registro y tratamiento
- Tratamiento: [usted / tú / vos / impersonal]
- Uso del pronombre explícito: [...]
- Fórmulas de cortesía: [...]

## 4. Variante regional
- Variante o modelo: [neutra / es-ES / es-MX / es-419 / por capas]
- Códigos de idioma: [...]
- Decisiones léxicas clave: [ver glosario]

## 5. Lenguaje inclusivo
- Estrategia principal: [...]
- Lo que se evita: [...]
- Casos especiales: [...]

## 6. Gramática y estilo
- Orden adjetivo-sustantivo en menús: [criterio]
- Gerundios en títulos: [criterio]
- Voz pasiva: [criterio]
- Otros criterios: [...]

## 7. Ortotipografía
- Comillas: [« » / “ ”]
- Puntos suspensivos: [U+2026]
- Secuencias de menús: [▸ / >]
- Números: [separadores decimal y de millares]
- Fechas y horas: [formato]
- Unidades y símbolos: [criterio]
- Abreviaturas permitidas: [lista]
- Mayúsculas: [criterio]

## 8. Terminología
- Glosario: [enlace]
- Términos desaconsejados: [enlace]
- Procedimiento para nuevos términos: [...]

## 9. Elementos técnicos
- Marcadores y variables: [criterios]
- Plurales: [mecanismo]
- Aceleradores: [criterio]
- Atajos de teclado: [criterio]
- Límites de longitud: [...]

## 10. Accesibilidad
- Criterios específicos: [...]

## 11. Calidad
- Niveles de revisión: [...]
- Criterios de aceptación: [...]
- Herramientas de comprobación: [...]

## 12. Procedimientos
- Resolución de discrepancias: [...]
- Quién decide: [...]
- Canales de comunicación: [...]

## 13. Excepciones a la guía general
| ID | Regla | Descripción | Motivo | Fecha |
|---|---|---|---|---|
| EXC-001 | [cap. y apartado] | [...] | [...] | [...] |

## 14. Historial de cambios
| Versión | Fecha | Cambios |
|---|---|---|
| 0.1 | [...] | Primera redacción |
```

---

### Anexo G. Bibliografía y recursos

#### G.1. Obras de la RAE y ASALE

- Real Academia Española y Asociación de Academias de la Lengua Española. [*Diccionario de la lengua española*](https://dle.rae.es).
- —. [*Diccionario panhispánico de dudas*](https://www.rae.es/dpd/).
- —. *Ortografía de la lengua española* (2010).
- —. *Nueva gramática de la lengua española* (2009-2011).
- —. *Libro de estilo de la lengua española* (2018).

#### G.2. Recursos de consulta lingüística

- [Fundéu](https://www.fundeu.es): recomendaciones y consultas.
- [Wikilengua](https://www.wikilengua.org): criterios y dudas de uso.
- [Lista de falsos cognados y falsos amigos (Wikcionario)](https://en.wiktionary.org/wiki/Appendix:Spanish_false_cognates_and_false_friends_with_English).
- Echevarría, M.: [lista de falsos cognados](http://usuario.cicese.mx/~mechevar/manual/cognados.htm).
- Álvarez, Á.: [tabla de errores y soluciones](http://www.dit.upm.es/~aalvarez/pitfalls/).

#### G.3. Terminología

- [IATE](https://iate.europa.eu).
- [TERMIUM Plus](https://www.btb.termiumplus.gc.ca).
- [Portal de lenguaje de Microsoft](https://www.microsoft.com/en-us/language).
- [Glosario de GNOME en español](https://gitlab.gnome.org/GNOME/gnome-i18n/raw/master/glossary/es.po).
- [Glosario de GNU: recursos para traductores](https://www.gnu.org/server/standards/translations/es/recursos.html#glosario).
- [Glosario ORCA de informática inglés-español](http://es.tldp.org/ORCA/glosario.html).
- [Glosario del Proyecto NAVE (Mozilla Hispano)](http://www.proyectonave.es/glosario).

#### G.4. Guías de otros proyectos

- [Notas de traducción de Debian](https://www.debian.org/international/spanish/notas).
- [Guía de los traductores de Ubuntu](https://wiki.ubuntu.com/UbuntuSpanishTranslators/Estilo).
- [Guía de los traductores de Haiku](https://dev.haiku-os.org/wiki/i18n/es_ES/StyleGuide).
- Guía de traducción y estilo de LibreOffice en español (Document Foundation Wiki).
- Guías de estilo lingüístico de plataformas (Microsoft, Apple, Google, Android).

#### G.5. Normas técnicas y estándares

- [Unicode CLDR](https://cldr.unicode.org).
- [ICU](https://icu.unicode.org).
- [BCP 47](https://www.rfc-editor.org/info/bcp47).
- [W3C WAI y WCAG](https://www.w3.org/WAI/).
- [MQM](https://themqm.org).
- XLIFF, TMX y TBX (formatos de intercambio).
- ISO 17100 (servicios de traducción) e ISO 18587 (postedición).
- UNE 153010 (subtitulado para personas sordas o con discapacidad auditiva).

#### G.6. Estudios y artículos

- Ginovart Cid, C. (2015). *Análisis contrastivo de la localización al español y catalán de los aceleradores en LibreOffice: Estudio de los menús de la interfaz de usuario.* Universidad de Ginebra.

#### G.7. Nota sobre los enlaces

Los enlaces pueden cambiar o desaparecer. Se recomienda revisarlos periódicamente y registrar los cambios en el `CHANGELOG.md` del repositorio.

---

*Fin del documento.*
