### Problema: Implementar una Función de Memoización

En este ejercicio, debes implementar una función llamada `memoizeFunction`. El propósito de esta función es optimizar el rendimiento de otra función al almacenar en caché los resultados de llamadas previas.

### Requisitos:

- La función `memoizeFunction` debe tomar como argumento otra función.
- Debe devolver una nueva función que, cuando se llame, verificará si los parámetros con los que se está invocando ya han sido utilizados anteriormente.
- Si la nueva función se llama con los mismos parámetros que en una llamada anterior, debe devolver el **resultado memorizado** sin volver a ejecutar la función original.
- Si se llama con un conjunto diferente de parámetros, la función original debe ejecutarse, y el nuevo resultado debe almacenarse en caché para llamadas futuras.
