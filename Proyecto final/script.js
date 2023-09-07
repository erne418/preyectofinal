// Función para mostrar el día de la semana en el encabezado
function mostrarDiaSemana() {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const fecha = new Date();
    const diaSemana = diasSemana[fecha.getDay()];
    alert(`Hoy es ${diaSemana}`);
}

// Llamar a la función para mostrar el día de la semana
mostrarDiaSemana();