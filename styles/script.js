function switchTab(tabId) {
    const tabs = document.querySelectorAll('.choice-tech-settings');

    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.classList.remove('hidden'); // Показываем выбранный блок
            tab.classList.add('active');
        } else {
            tab.classList.add('hidden'); // Скрываем остальные блоки
            tab.classList.remove('active');
        }
    });

    // Обновляем кнопки сверху
    const navItems = document.querySelectorAll('.tech-settings');
    navItems.forEach(item => {
        const targetId = item.getAttribute('onclick').match(/'(.+?)'/)[1];
        if (targetId === tabId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

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

    // Функция для управления конкретным модальным окном
    function setupModal(modalId, buttonClass) {
        const modal = document.getElementById(modalId);
        const openModalBtn = document.querySelector(`.${buttonClass}`);
        
        if (!modal || !openModalBtn) return;

        const closeModalBtn = modal.querySelector(".close");

        openModalBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Подключаем разные кнопки к своим окнам
    setupModal("modal-call", "contact-button"); // "Заказать звонок"
    setupModal("modal-req", "request-button");  // "Оставить заявку"

    // Чекбоксы для каждого окна
    document.querySelectorAll(".custom-checkbox").forEach((checkboxContainer) => {
        const checkbox = checkboxContainer.querySelector(".accept-input");
        const checkboxIcon = checkboxContainer.querySelector(".checkbox-icon");

        if (!checkbox || !checkboxIcon) return;

        checkboxIcon.addEventListener("click", (event) => {
            event.preventDefault(); 

            checkbox.checked = !checkbox.checked;

            // Обновляем классы мгновенно
            const unchecked = checkboxIcon.querySelector(".unchecked");
            const checked = checkboxIcon.querySelector(".checked");

            unchecked.style.display = checkbox.checked ? "none" : "block";
            checked.style.display = checkbox.checked ? "block" : "none";
        });
    });
    
    

    const items = document.querySelectorAll('.tech-settings');

    items.forEach(item => {
        item.addEventListener('click', () => {
        items.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        });
    });


    

    
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const toggleBtn = item.querySelector(".toggle-btn");
        const content = item.querySelector(".accordion-content");

        // При клике на заголовок или кнопку, скрываем или показываем контент
        header.addEventListener("click", function() {
        item.classList.toggle("active");

        // Переключаем состояние стрелочек
        const arrowClosed = toggleBtn.querySelector(".arrow-closed");
        const arrowOpen = toggleBtn.querySelector(".arrow-open");

        if (item.classList.contains("active")) {
            arrowClosed.style.display = "none"; // Скрыть стрелку закрытого состояния
            arrowOpen.style.display = "block"; // Показать стрелку открытого состояния
        } else {
            arrowClosed.style.display = "block"; // Показать стрелку закрытого состояния
            arrowOpen.style.display = "none"; // Скрыть стрелку открытого состояния
        }
        });
    });
    


    
});