
# Plan de Pruebas

## Objetivo
Comprobar el funcionamiento del registro de clientes.
# Plan de Pruebas

## Gestor de Clientes

### Objetivo
Comprobar que el sistema registre correctamente los clientes y que la validación del teléfono funcione según lo solicitado en el Ticket #101.

### Pruebas realizadas

| N.º | Dato ingresado | Resultado esperado |
|---|---|---|
| 1 | 123456789 | Aceptar el teléfono |
| 2 | 12345abc | Rechazar letras |
| 3 | 123-456 | Rechazar guiones |
| 4 | Campo vacío | Rechazar el dato |
| 5 | 123 456 | Rechazar espacios |

### Resultado
Todas las pruebas automatizadas finalizaron correctamente.

También se verificó manualmente el funcionamiento del formulario desde el navegador.

### Conclusión
La validación incorporada en la versión 1.1 cumple con el objetivo de impedir el ingreso de teléfonos que contengan caracteres distintos de números.