# Manual Técnico

## Gestor de Clientes

### Descripción
El sistema permite registrar clientes mediante un formulario web que solicita nombre y teléfono.

### Tecnologías utilizadas
- HTML para la estructura de la página.
- JavaScript para la lógica y validación de datos.
- Node.js para ejecutar las pruebas automatizadas.

### Estructura del proyecto
- `src/index.html`: contiene el formulario de registro.
- `src/script.js`: contiene las funciones y la validación del teléfono.
- `tests/test_validacion.js`: contiene las pruebas automatizadas.
- `package.json`: configura el proyecto y permite ejecutar las pruebas.

### Validación del teléfono
En la versión 1.1 se incorporó la función `validarTelefono(tel)`, que verifica que el teléfono contenga únicamente números.

Se utiliza la siguiente expresión regular:

`/^[0-9]+$/`

La función devuelve `true` cuando el formato es correcto y `false` cuando contiene letras, espacios, guiones o está vacío.

### Ejecución de las pruebas
Para ejecutar las pruebas automatizadas desde la terminal, utilizar:

`npm test`

Las pruebas verifican diferentes casos de teléfonos válidos e inválidos.