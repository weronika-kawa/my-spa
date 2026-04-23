let pageUrls = {
    about: '?about',
    it: '?it',
    lifestyle: '?lifestyle',
    music: 'music',
    gallery: '?gallery',
    contact: '?contact'
};

const pagesContent = {
    about: `
            <section class="hero bg-home">
        <div class="hero-content">
            <h1>Cześć, jestem Weronika</h1>
            <p>Łączę świat precyzyjnego kodu z magią dźwięków i pasją do ruchu.</p>
            <div class="quick-about">
                <span class="badge-home">Programistka iOS</span>
                <span class="badge-home">Muzyk NFM</span>
                <span class="badge-home">Sędzia Sportowy</span>
            </div>
        </div>
    </section>
    <section class="container" style="text-align: center;">
        <h2 style="margin-bottom: 20px;">O mnie</h2>
        <p style="max-width: 700px; margin: 0 auto;">
            Moja ścieżka to nieustanne poszukiwanie harmonii między różnymi dziedzinami. 
            Od administrowania chórami w <strong>Narodowym Forum Muzyki</strong>, 
            przez granie na klarnecie, aż po tworzenie nowoczesnych aplikacji w <strong>Swift & SwiftUI</strong>.
        </p>
    </section>`,

    it: `
        <div class="container">
            <section class="it-hero" style="background: linear-gradient(135deg, #1e293b, #38bdf8);">
                <h1>IT & iOS Development</h1>
                <p>Buduję intuicyjne doświadczenia mobilne w ekosystemie Apple.</p>
            </section>
            <div class="grid">
                <article class="project-card">
                    <div style="font-size: 40px; margin-bottom: 15px;">🍕</div>
                    <h3>Foodie</h3>
                    <p style="color: var(--text-light); margin-bottom: 15px;">Twój osobisty przewodnik kulinarny. Kolekcjonuj wspomnienia z restauracji.</p>
                    <div style="margin-bottom: 20px;">
                        <span class="badge-it">SwiftUI</span><span class="badge-it">Core Data</span>
                    </div>
                    <a href="#" class="btn-git">Zobacz projekt</a>
                </article>
                <article class="project-card">
                    <div style="font-size: 40px; margin-bottom: 15px;">🏛️</div>
                    <h3>Cultra</h3>
                    <p style="color: var(--text-light); margin-bottom: 15px;">Innowacyjne podejście do odkrywania kultury i nawigacji po muzeach.</p>
                    <div style="margin-bottom: 20px;">
                        <span class="badge-it">Swift</span><span class="badge-it">REST API</span>
                    </div>
                    <a href="#" class="btn-git">Zobacz projekt</a>
                </article>
                <article class="project-card">
                    <div style="font-size: 40px; margin-bottom: 15px;">🎧</div>
                    <h3>MelodyMaster</h3>
                    <p style="color: var(--text-light); margin-bottom: 15px;">Interaktywny trener słuchu dla uczniów szkół muzycznych.</p>
                    <div style="margin-bottom: 20px;">
                        <span class="badge-it">AVFoundation</span>
                    </div>
                    <span class="badge-it" style="background: #eee; color: #666;">W budowie</span>
                </article>
            </div>
        </div>`,

    music: `
            <div class="container">
        <!-- Hero Section -->
        <section class="music-hero bg-music">
            <div class="hero-content">
                <h1>Muzyka & Zarządzanie Kulturą</h1>
                <p>Od artystycznych wykonań po profesjonalną administrację muzyczną.</p>
            </div>
        </section>

        <!-- Sekcja 1: Działalność -->
        <h2 class="music-section-title">Działalność zawodowa</h2>
        <div class="grid">
            <div class="card music-card">
                <h3>Narodowe Forum Muzyki</h3>
                <p><strong>Specjalista ds. Chóru Dziewczęcego i Chłopięcego NFM</strong></p>
                <ul class="music-info-list">
                    <li>Koordynacja projektów nagraniowych i koncertowych.</li>
                    <li>Zarządzanie logistyką i harmonogramami zespołów.</li>
                    <li>Wsparcie procesów administracyjnych w jednej z najważniejszych instytucji kultury w Polsce.</li>
                </ul>
            </div>
            <div class="card music-card">
                <h3>Działalność artystyczna</h3>
                <p><strong>Muzyk Instrumentalista / Teoretyk</strong></p>
                <ul class="music-info-list">
                    <li>Wieloletnia praktyka gry na klarnecie (PSM II st.).</li>
                    <li>Doświadczenie w zespołach kameralnych i orkiestrowych.</li>
                    <li>Pasja do teorii muzyki i analizy dzieła muzycznego.</li>
                </ul>
            </div>
        </div>

        <!-- Sekcja 2: Edukacja -->
        <h2 class="music-section-title">Edukacja</h2>
        <div class="grid">
            <div class="card">
                <span class="badge">Akademia Muzyczna we Wrocławiu</span>
                <h4>Edukacja Artystyczna w Zakresie Sztuki Muzycznej</h4>
                <p style="color: var(--text-light)">Studia magisterskie - koncentracja na prowadzeniu zespołów i pedagogice.</p>
            </div>
            <div class="card">
                <span class="badge">PSM II st. im. R. Bukowskiego</span>
                <h4>Instrumentalistyka - Klarnet</h4>
                <p style="color: var(--text-light)">Ukończenie z wyróżnieniem klasy klarnetu.</p>
            </div>
        </div>

        <!-- Sekcja 3: Multimedia -->
        <h2 class="music-section-title">Multimedia</h2>
        <div class="grid">
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GqBiiluqX_Y?si=BjNFCWgVs00Humt5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="spotify-container">
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/701bna4XIVmpjIx6MBhuPL?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    </div>`,

    lifestyle: `
        <div class="container">
            <section class="lifestyle-hero" style="background: var(--accent);">
                <h1>Pasje & Lifestyle</h1>
                <p>To, co napędza mnie poza kodowaniem.</p>
            </section>
            <div class="grid">
                <article class="card">
                    <div style="font-size: 3rem;">🏐</div>
                    <h3>Sędzia Sportowy</h3>
                    <p>Sędziowanie siatkówki i piłki ręcznej – precyzja i zasady.</p>
                </article>
                <article class="card">
                    <div style="font-size: 3rem;">🚴‍♀️</div>
                    <h3>Squadrats</h3>
                    <p>Eksploracja każdego kwadratu Wrocławia na dwóch kółkach.</p>
                </article>
                <article class="card">
                    <div style="font-size: 3rem;">🧶</div>
                    <h3>Szydełkowanie</h3>
                    <p>Tworzenie amigurumi – cierpliwość w każdym oczku.</p>
                </article>
            </div>
        </div>`,

    gallery: `
            <section class="it-hero" style="background: var(--primary);">
                <h1>Galeria</h1>
                <p>Momenty z mojego życia uchwycone w kadrze.</p>
            </section>
            <div id="gallery-grid"></div>
        </div>`,

    contact: `
        <div class="container">
            <div class="contact-layout" style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 40px; align-items: start;">
                <div>
                    <h1 style="font-size: 2.5rem; margin-bottom: 20px;">Napisz do mnie</h1>
                    <p style="margin-bottom: 30px; color: var(--text-light);">Masz pytanie dotyczące projektu lub współpracy? Śmiało, odezwij się!</p>
                    <div class="card" style="background: var(--primary); color: white;">
                        <h3 style="margin-bottom:15px">Social Media</h3>
                        <p style="margin: 10px 0; display: flex; align-items: center; gap: 10px;"><span>📁</span> GitHub</p>
                        <p style="margin: 10px 0; display: flex; align-items: center; gap: 10px;"><span>💼</span> LinkedIn</p>
                        <p style="margin: 10px 0; display: flex; align-items: center; gap: 10px;"><span>📸</span> Instagram</p>
                    </div>
                </div>
                <div class="card">
                    <form id="contact-form">
                        <div class="form-group">
                            <input type="text" placeholder="Twoje Imię" required>
                            <input type="email" placeholder="Twój Email" required>
                        </div>
                        <textarea placeholder="W czym mogę pomóc?" rows="6" style="margin-bottom: 20px;" required></textarea>
                        
                        <div class="g-recaptcha" data-sitekey="6Lf9lcIsAAAAAJSJacqgyvRWCpSPtIc9S1X20kmk"></div>
                        
                        <button type="submit" class="submit-btn" style="margin-top: 10px;">Wyślij wiadomość</button>
                        <div id="form-status" style="margin-top: 15px; font-weight: 600; text-align: center;"></div>
                    </form>
                </div>
            </div>
        </div>`
};

function renderPage(page) {
    const main = document.getElementById('main-content');
    main.innerHTML = pagesContent[page] || '<h1>404</h1>';

    // Aktualizacja tytułu na pasku nawigacji
    const headerTitle = document.getElementById('header-page-title');
    const titles = { about: 'O mnie', it: 'IT & iOS', music: 'Muzyka', lifestyle: 'Pasje', gallery: 'Galeria', contact: 'Kontakt' };
    headerTitle.innerText = ` | ${titles[page] || ''}`;

    // Podświetlanie menu
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active-link'));
    const activeLink = document.getElementById(`link-${page}`);
    if (activeLink) activeLink.classList.add('active-link');

    // Inicjalizacja galerii i captchy
    if (page === 'gallery') initGallery();

    if (page === 'contact') {
    setTimeout(() => {
        const container = document.querySelector('.g-recaptcha');
        // Sprawdzamy czy kontener istnieje i czy nie został już wyrenderowany
        if (container && container.innerHTML === "") {
            grecaptcha.render(container, {
                'sitekey': '6Lf9lcIsAAAAAJSJacqgyvRWCpSPtIc9S1X20kmk' 
            });
        }
    }, 100);
}

    // Przewiń na górę po zmianie strony
    window.scrollTo(0, 0);
}

function popStateHandler() {
    // Używamy URLSearchParams, żeby łatwiej wyciągnąć parametry
    const params = new URLSearchParams(window.location.search);
    const page = params.keys().next().value; // Pobiera pierwszy parametr (np. 'it', 'music')

    if (pagesContent[page]) {
        renderPage(page);
    } else {
        renderPage('about'); // Domyślnie Home
    }
}

window.onpopstate = popStateHandler;

document.addEventListener('DOMContentLoaded', () => {
    const setupLink = (id, page) => {
        const link = document.querySelector(id);
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                history.pushState({ page }, page, `?${page}`);
                renderPage(page);
            });
        }
    };
    
    setupLink('#link-about', 'about');
    setupLink('#link-it', 'it');
    setupLink('#link-music', 'music');
    setupLink('#link-lifestyle', 'lifestyle');
    setupLink('#link-gallery', 'gallery');
    setupLink('#link-contact', 'contact');
    
    popStateHandler(); // Inicjalizacja przy starcie
});

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