document.addEventListener("DOMContentLoaded", () => {
    // Переключение языка
    const buttons = document.querySelectorAll(".lang-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Функциональность бургер-меню
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    const contact = document.querySelector(".contact");

    if (burger) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            nav.classList.toggle("active");
            contact.classList.toggle("active");
        });
    }

    // Обработка кликов по пунктам меню с точками
    const navItems = document.querySelectorAll(".nav-item > a");

    navItems.forEach(item => {
        item.addEventListener("click", (event) => {
            const parent = item.closest(".nav-item");
            const dropdown = parent.querySelector(".dropdown");
            const isActive = parent.classList.contains("active");

            // Закрытие всех остальных меню
            document.querySelectorAll(".nav-item").forEach(navItem => {
                navItem.classList.remove("active");
                const navDropdown = navItem.querySelector(".dropdown");
                if (navDropdown) navDropdown.style.display = "none";
            });

            // Открытие текущего меню, если оно не активно
            if (!isActive) {
                parent.classList.add("active");
                if (dropdown) dropdown.style.display = "block";
            } else {
                if (dropdown) dropdown.style.display = "none";
            }
        });
    });

    // Закрытие всех меню при клике вне
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".nav-item") && !event.target.closest(".burger")) {
            document.querySelectorAll(".nav-item").forEach(item => {
                item.classList.remove("active");
                const dropdown = item.querySelector(".dropdown");
                if (dropdown) dropdown.style.display = "none";
            });
        }
    });

    // Всплывающие модальное окно "Заказать звонок"
    const modal = document.getElementById("modal");
    const openModalBtn = document.querySelector(".contact-button");
    const closeModalBtn = document.querySelector(".close");

    if (modal) {
        modal.style.display = "none"; 
    }

    if (openModalBtn) {
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const checkbox = document.querySelector(".accept-input");
    const checkboxIcon = document.querySelector(".checkbox-icon");

    if (checkbox && checkboxIcon) {
        checkboxIcon.addEventListener("click", (event) => {
            event.preventDefault(); 

            checkbox.checked = !checkbox.checked;

            // Обновляем классы мгновенно
            const unchecked = checkboxIcon.querySelector(".unchecked");
            const checked = checkboxIcon.querySelector(".checked");

            if (checkbox.checked) {
                unchecked.style.display = "none";
                checked.style.display = "block";
            } else {
                unchecked.style.display = "block";
                checked.style.display = "none";
            }
        });
    }
});
