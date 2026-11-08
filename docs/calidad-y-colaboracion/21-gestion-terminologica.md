# 21. Gestión terminológica

## 21.1. Objetivo

Asegurar que los mismos conceptos se traduzcan siempre igual, a lo largo del tiempo y entre las distintas personas que colaboran.

## 21.2. Glosario del proyecto

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

## 21.3. Ciclo de vida de los términos

1. **Detección:** un término nuevo o dudoso aparece durante la traducción o la revisión.
2. **Investigación:** se consultan las fuentes ([capítulo 27](./27-fuentes-linguisticas-y-tecnicas.md)).
3. **Propuesta:** se documenta con argumentos.
4. **Discusión y decisión:** según el proceso de [resolución de discrepancias](./25-resolucion-de-discrepancias.md).
5. **Publicación:** se añade al glosario y se comunica.
6. **Mantenimiento:** se revisa periódicamente; los términos obsoletos se marcan, no se borran.

## 21.4. Formatos e integración

- Los glosarios se almacenan en formatos abiertos y reutilizables (TBX, CSV, `.po`, o los de la plataforma de traducción).
- Se integran en las herramientas para que avisen de los términos incumplidos.
- Se versionan en el repositorio junto con el resto de la documentación.

## 21.5. Terminología multilingüe

En proyectos con varios idiomas, el glosario mantiene un identificador de concepto común para facilitar la coherencia entre lenguas.
