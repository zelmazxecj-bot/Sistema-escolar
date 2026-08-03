const assert = require('assert');

// ==========================================
// 1. FUNCIONES A PROBAR (REGLAS DE NEGOCIO - UNIDAD 3)
// ==========================================

/**
 * Calcula el promedio ponderado de un arreglo de calificaciones
 */
function calcularPromedio(notas) {
    if (!notas || notas.length === 0) return 0;
    const suma = notas.reduce((acumulado, nota) => acumulado + nota, 0);
    return suma / notas.length;
}

/**
 * Valida si un usuario cumple el formato institucional de acceso
 */
function validarCredenciales(correo, password) {
    if (!correo || !password) return false;
    const correoValido = correo.includes('@') && correo.endsWith('.edu');
    const passwordValida = password.length >= 6;
    return correoValido && passwordValida;
}

// ==========================================
// 2. SUITE DE PRUEBAS UNITARIAS AUTOMATIZADAS
// ==========================================

console.log('🧪 Ejecutando Suite de Pruebas Unitarias (Unidad 3)...\n');

try {
    // Prueba 1: Cálculo del promedio académico correcto
    const promedio = calcularPromedio([95, 90]);
    assert.strictEqual(promedio, 92.5, 'El promedio de 95 y 90 debe ser 92.5');
    console.log('✅ Prueba 1 Pasada: Cálculo de promedio exacto (92.5)');

    // Prueba 2: Manejo de arreglo de calificaciones vacío
    assert.strictEqual(calcularPromedio([]), 0, 'Si no hay notas debe retornar 0');
    console.log('✅ Prueba 2 Pasada: Manejo de caso borde (arreglo vacío)');

    // Prueba 3: Validación de correo institucional válido
    const accesoAccetado = validarCredenciales('lalo@escolar.edu', '123456');
    assert.strictEqual(accesoAccetado, true, 'Credenciales institucionales válidas deben ser aceptadas');
    console.log('✅ Prueba 3 Pasada: Credenciales institucionales aceptadas');

    // Prueba 4: Rechazo de contraseña débil o correo no institucional
    const accesoDenegado = validarCredenciales('lalo@gmail.com', '123');
    assert.strictEqual(accesoDenegado, false, 'Correo o password sin formato debe ser denegado');
    console.log('✅ Prueba 4 Pasada: Seguridad de acceso validada correctamente');

    console.log('\n🎉 ¡TODAS LAS PRUEBAS PASARON EXITOSAMENTE!');
} catch (error) {
    console.error('\n❌ ERROR EN LAS PRUEBAS:', error.message);
    process.exit(1);
}