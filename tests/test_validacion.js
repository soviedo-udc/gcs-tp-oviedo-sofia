
import assert from "node:assert/strict";
import { validarTelefono } from "../src/script.js";

console.log("Iniciando pruebas...\n");

assert.equal(validarTelefono("123456789"), true);
console.log("✓ Acepta números");

assert.equal(validarTelefono("12345abc"), false);
console.log("✓ Rechaza letras");

assert.equal(validarTelefono("123-456"), false);
console.log("✓ Rechaza guiones");

assert.equal(validarTelefono(""), false);
console.log("✓ Rechaza campos vacíos");

assert.equal(validarTelefono("123 456"), false);
console.log("✓ Rechaza espacios");

console.log("\nTodas las pruebas finalizaron correctamente.");
