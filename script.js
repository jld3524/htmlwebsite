// --- 1. JAHRES-FILTER LOGIK ---
const yearFilter = document.getElementById("year");
const sets = document.querySelectorAll(".set");

yearFilter.addEventListener("change", function() {
    const selectedYear = yearFilter.value;

    sets.forEach(function(set) {
        const setYear = set.dataset.year;

        if (selectedYear === "all" || selectedYear === setYear) {
            set.style.display = "flex"; // Korrigiert von "block" auf "flex"
        } else {
            set.style.display = "none";
        }
    });
});


// --- 2. DARK MODE LOGIK (mit Absicherung) ---
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    // Prüfen, ob der Nutzer bereits vorher Dark Mode aktiviert hatte
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }

    // Klick-Event für den Button
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.modal-close');

    // Klick auf Set-Bilder -> Öffnet Großansicht
    document.querySelectorAll('.set > img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add('active');
        });
    });

    // Klick auf 'X' -> Schließen
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Klick auf Hintergrund -> Schließen
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Escape-Taste -> Schließen
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });


