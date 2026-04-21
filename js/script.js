document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    
    // Sprawdź czy użytkownik miał już włączony tryb ciemny
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Zapisz wybór w przeglądarce
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});

// Obsługa walidacji formularza kontaktowego
document.addEventListener('submit', (e) => {
    // Sprawdzamy, czy wysyłany formularz to nasz contact-form
    if (e.target && e.target.id === 'contact-form') {
        e.preventDefault(); // Zatrzymaj odświeżanie strony

        const statusDiv = document.getElementById('form-status');
        const captchaResponse = grecaptcha.getResponse();

        if (captchaResponse.length === 0) {
            // RECAPTCHA NIEZAZNACZONA
            statusDiv.innerHTML = "❌ Błąd: Proszę potwierdzić, że nie jesteś robotem!";
            statusDiv.style.color = "#ff4d4d"; // Czerwony
        } else {
            // WSZYSTKO OK
            statusDiv.innerHTML = "✅ Wiadomość została wysłana pomyślnie!";
            statusDiv.style.color = "#2ecc71"; // Zielony
            
            // Opcjonalnie: wyczyść formularz po wysyłce
            e.target.reset(); 
            grecaptcha.reset(); 
        }
    }
});