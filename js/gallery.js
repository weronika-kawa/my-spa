// Lista Twoich zdjęć (upewnij się, że masz je w folderze images/)
const galleryImages = [
    './images/img1.jpeg', './images/img2.jpeg', './images/img3.jpeg',
    './images/img4.jpeg', './images/img5.jpeg', './images/img6.jpeg',
    './images/img7.jpeg', './images/img8.jpeg', './images/img9.jpeg'
];

function initGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Czyścimy grid

    galleryImages.forEach((imgName, index) => {
        // 1. Tworzymy kontener i placeholder
        const imgElement = document.createElement('img');
        imgElement.className = 'gallery-thumb lazy';
        imgElement.alt = `Zdjęcie ${index + 1}`;
        // Ustawiamy atrybut danych z prawdziwą ścieżką
        imgElement.dataset.src = imgName; 
        // Mały szary placeholder (opcjonalnie można dać mikro-obrazek)
        imgElement.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
        
        grid.appendChild(imgElement);
    });

    // 2. Konfiguracja Intersection Observer (Lazy Loading)
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                loadAsyncAsBlob(img); // Wywołujemy nasze ładowanie BLOB
                observer.unobserve(img); // Przestajemy obserwować po załadowaniu
            }
        });
    }, { rootMargin: '50px' });

    // Rozpoczynamy obserwację wszystkich obrazków z klasą .lazy
    document.querySelectorAll('.gallery-thumb.lazy').forEach(img => imageObserver.observe(img));
}

// 3. Funkcja ładowania asynchronicznego BLOB
async function loadAsyncAsBlob(imgElement) {
    const url = imgElement.dataset.src;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        
        imgElement.src = objectURL;
        imgElement.classList.remove('lazy');
        imgElement.classList.add('loaded');

        // POPRAWKA: Teraz, gdy mamy już Blob URL, przypisujemy kliknięcie
        imgElement.onclick = () => openModal(objectURL); 

    } catch (error) {
        console.error("Błąd ładowania obrazka jako BLOB:", error);
    }
}

// 4. Obsługa Modala
function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = src;
        document.body.style.overflow = "hidden"; // Blokada przewijania strony
    }
}

// Zamykanie modala (funkcja dostępna globalnie)
window.closeModal = function() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// Nasłuch na zamknięcie (kliknięcie w X lub poza obrazkiem)
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) closeBtn.onclick = closeModal;
    if (modal) {
        modal.onclick = (e) => {
            if (e.target === modal) closeModal();
        };
    }
});

