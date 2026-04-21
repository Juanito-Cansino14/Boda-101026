// Configura la fecha del evento (Año, Mes [0-11], Día, Hora, Minuto)
// Nota: Octubre es el mes 9 en JavaScript (porque empieza de 0)
const weddingDate = new Date(2026, 9, 10, 17, 0, 0).getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Inyectar en el HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Si la fecha ya pasó
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "<h3>¡Hoy es el gran día!</h3>";
    }
}, 1000);