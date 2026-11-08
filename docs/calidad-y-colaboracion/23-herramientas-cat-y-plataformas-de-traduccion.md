# 23. Herramientas CAT y plataformas de traducción

## 23.1. Tipos de herramientas

| Tipo | Ejemplos | Observaciones |
|---|---|---|
| **Plataformas web colaborativas** | Weblate, Pontoon, Crowdin, Transifex, Lokalise, Phrase | Adecuadas para proyectos con comunidad. |
| **Editores de escritorio** | Poedit, Lokalize, Virtaal, OmegaT, Okapi | Útiles para trabajo sin conexión. |
| **Herramientas CAT comerciales** | Trados, memoQ, Déjà Vu | Frecuentes en proyectos profesionales. |
| **Editores de texto con complementos** | VS Code, editores de `.po` | Para formatos sencillos y automatizaciones. |
| **Control de versiones** | Git y plataformas de alojamiento | Para sincronizar archivos de traducción. |

## 23.2. Funciones que se aprovechan

Memoria de traducción, glosario con avisos, comprobaciones automáticas, comentarios por cadena, historial de cambios, flujos de revisión y, en su caso, integración con el repositorio del proyecto.

## 23.3. Criterios de elección

Formatos admitidos, flujo de revisión, gestión de permisos, coste, licencia, integración con el repositorio, apoyo a la comunidad, API y facilidad para exportar los datos (para evitar la dependencia de un proveedor).

## 23.4. Traducción automática

- Puede acelerar el trabajo como **borrador**, nunca como resultado final sin revisar.
- La **postedición** debe aplicar todas las normas de esta guía; los sistemas automáticos reproducen calcos, falsos amigos y tratamientos inconsistentes.
- Debe declararse en el proyecto si se permite, en qué condiciones y con qué herramientas.
- Se tienen en cuenta la confidencialidad y la licencia de los datos enviados a servicios externos.
- La calidad de la memoria de traducción no debe degradarse con segmentos automáticos no revisados.

## 23.5. Automatizaciones

Los scripts y las herramientas de conversión (por ejemplo, para pasar de un tratamiento a otro o para validar la ortotipografía) son útiles, pero se prueban y se revisan siempre de forma manual, porque no resuelven por sí solos las diferencias de gramática y de contexto.
