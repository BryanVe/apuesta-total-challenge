### Problema: Filtrar Squirtles Basado en Poder y Torneos Ganados

Tienes una lista de objetos que representan a diferentes **Squirtles**. Cada objeto tiene las siguientes propiedades:

- **id**: Un identificador único para el Squirtle.
- **name**: El nombre del Squirtle (string).
- **power**: El nivel de poder del Squirtle (número).
- **leagueX**: El resultado del Squirtle en varias ligas (ganado o perdido, como `'won'` o `'lost'`).
- **tournamentX**: El resultado del Squirtle en varios torneos (ganado o perdido, como `'won'` o `'lost'`).

### Criterios para el filtro:

1. **Condición de poder**: Filtrar los Squirtles cuyo valor de `power` sea mayor a 500.
2. **Condición de torneos ganados**: Filtrar los Squirtles que hayan ganado más de 6 torneos.

### Requisitos:

- La función debe devolver un objeto con las siguientes dos propiedades:
  - **data**: Un array con los Squirtles que cumplen con ambas condiciones.
  - **totalItems**: El número total de Squirtles que cumplen con ambas condiciones.
