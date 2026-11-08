# 30. Cómo documentar excepciones

Las excepciones son legítimas, pero deben ser **deliberadas, justificadas y localizables**.

## 30.1. Cuándo es válida una excepción

- Hay una restricción técnica (espacio, formato, plataforma).
- Existe un uso establecido en el ámbito que difiere de la norma general.
- La identidad de marca o de producto lo exige.
- La persona usuaria entiende mejor la solución alternativa.
- La comunidad del proyecto la ha acordado.

## 30.2. Qué se documenta

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

## 30.3. Ejemplo

```markdown
### EXC-004 · Preposición «a» con «convertir»
- **Regla afectada:** 6.4 (Preposiciones y artículos)
- **Descripción:** Se admite «Convertir a PDF» en lugar de «Convertir en PDF».
- **Motivo:** Forma muy extendida en el ámbito informático hispanoamericano y presente en la plataforma de destino.
- **Alcance:** Todas las cadenas de exportación.
- **Decisión:** Equipo de coordinación, 2026-03-12.
- **Revisión:** Al actualizar la guía general.
```

## 30.4. Gestión

- Se mantiene un archivo único de excepciones (`EXCEPCIONES.md`).
- Cada excepción se aplica de forma coherente y se refleja en las herramientas de verificación.
- Las excepciones frecuentes en varios proyectos pueden proponerse como cambio de la guía general ([capítulo 31](./31-como-contribuir-a-la-guia.md)).
