function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
    
        if (diff <= 0) {
            clearInterval(timer);
            return;
        }
    
        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }
  
    updateCountdown(); // перше оновлення одразу
    const timer = setInterval(updateCountdown, 1000); // оновлюємо щосекунди
}
  
  // Запускаємо до певної дати:
startCountdown(new Date("2025-12-31T23:59:59"));
  