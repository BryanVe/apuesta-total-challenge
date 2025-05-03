### Problema: Ordenar y Desordenar Items en una Cuadrícula Usando HTML y CSS

En este ejercicio, se te proporcionará un archivo HTML que contiene un checkbox y una serie de items, incluyendo una imagen, en una lista numerada del 1 al 7.

Tu tarea será estilizar y organizar estos elementos de la siguiente manera:

### Requisitos:

1. **Crear una cuadrícula de 3x3**:

2. **Agregar texto al checkbox** usando solo **CSS**:

3. **Funcionalidad del checkbox**:

   - Cuando el checkbox está **desmarcado** (estado inicial):

     - Los números del **1 al 7** deben aparecer en orden ascendente en la cuadrícula.
     - Los últimos dos espacios deben estar ocupados por la **imagen**.
     - El label del checkbox debe decir **"Desordenar"**.

   - Cuando el checkbox está **marcado**:
     - Los primeros dos espacios de la cuadrícula deben estar ocupados por la **imagen**.
     - Los números del **7 al 1** deben aparecer en los siguientes espacios en orden descendente.
     - El label del checkbox debe cambiar a **"Ordenar"**.

### Restricciones:

- Puedes editar el HTML si lo prefieres, pero no puedes añadir más elementos ni modificar el contenido de los items.
- Solo puedes usar **HTML** y **CSS** para lograr la solución. **No está permitido usar JavaScript**.

### Ejemplo de Flujo:

1. **Estado inicial** (Checkbox desmarcado - "Desordenar"):

   ```
   1 | 2 | 3
   4 | 5 | 6
   7 | Imagen
   ```

2. **Estado marcado** (Checkbox marcado - "Ordenar"):
   ```
   Imagen | 7
   6  | 5 | 4
   3  | 2 | 1
   ```
