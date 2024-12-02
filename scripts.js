document.addEventListener("DOMContentLoaded", () => {
    // Retour en haut
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        backToTopBtn.style.display = window.scrollY > 50 ? "block" : "none";
    });

    backToTopBtn?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById("contact-form");
    contactForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Merci de nous avoir contactés ! Nous vous répondrons bientôt.");
        contactForm.reset();
    });

    // Chargement dynamique des réalisations
    const projects = [
        {
            image: "site1.webp",
            title: "Projet 1",
            link: "https://exemple1.com",
        },
        {
            image: "site2.webp",
            title: "Projet 2",
            link: "https://exemple2.com",
        },
        {
            image: "site3.webp",
            title: "Projet 3",
            link: "https://exemple3.com",
        },
    ];

    const projectsGallery = document.querySelector(".projects-gallery");

    if (projectsGallery) {
        projects.forEach((project) => {
            const projectItem = document.createElement("div");
            projectItem.classList.add("project-item");

            projectItem.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <p>${project.title} - <a href="${project.link}" target="_blank">Voir le site</a></p>
            `;

            projectsGallery.appendChild(projectItem);
        });
    }

    // Animation du logo
    const logo = document.querySelector(".logo");
    if (logo) {
        setTimeout(() => {
            logo.style.opacity = "1"; // Active l'animation (au cas où l'animation CSS ne suffit pas)
        }, 0); // Lancement immédiat
    }
});
