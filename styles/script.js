document.addEventListener("DOMContentLoaded", () => {
    // Переключение языка
    const buttons = document.querySelectorAll(".lang-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Функциональность бургер меню
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    const contact = document.querySelector(".contact");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
        contact.classList.toggle("active");
    });

    // Обработка кликов по пунктам меню с точками
    const navItems = document.querySelectorAll(".nav-item > a");

    navItems.forEach(item => {
        item.addEventListener("click", (event) => {
            const parent = item.closest(".nav-item");
            const dropdown = parent.querySelector(".dropdown");
            const isActive = parent.classList.contains("active");

            // Закрытие всех остальных меню
            document.querySelectorAll(".nav-item").forEach(item => {
                item.classList.remove("active");
            });

            if (!isActive) {
                parent.classList.add("active");
                dropdown.style.display = "block"; 
            } else {
                dropdown.style.display = "none";
            }
        });
    });

    // Закрытие всех меню при клике вне
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".nav-item") && !event.target.closest(".burger")) {
            document.querySelectorAll(".nav-item").forEach(item => {
                item.classList.remove("active");
                item.querySelector(".dropdown").style.display = "none"; 
            });
        }
    });
});
