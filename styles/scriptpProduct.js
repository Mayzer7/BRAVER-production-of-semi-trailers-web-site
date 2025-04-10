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
    const mainPage = document.querySelector(".main-page");
    const burgerWrapper = document.querySelector(".wrapper");
    const closeBtn = document.querySelector(".close-btn");

    burger.addEventListener("click", () => {
      mainPage.style.display = "none";
      burgerWrapper.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      burgerWrapper.style.display = "none";
      mainPage.style.display = "block";
    });

    // Переключение навигации в бургер меню

    const expandableItems = document.querySelectorAll('.navigate-item.expandable');

    const activeSvg = `
        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="2.36486" cy="2.5" rx="2.36486" ry="2.5" fill="#202020"/>
        </svg>
    `;
    const defaultImgSrc = "../styles/images/svg/Ellipse.svg";

    expandableItems.forEach(item => {
        const content = item.querySelector('.navigate-content');
        const iconWrapper = item.querySelector('.navigate-icon');

        content.addEventListener('click', () => {
        const isAlreadyActive = item.classList.contains('active');

        // Сначала сворачиваем все
        expandableItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            const otherIcon = otherItem.querySelector('.navigate-icon');
            if (otherIcon) {
            otherIcon.innerHTML = `<img src="${defaultImgSrc}" alt="icon" />`;
            }
        });

        // Если текущий раньше не был активен — активируем его
        if (!isAlreadyActive) {
            item.classList.add('active');
            iconWrapper.innerHTML = activeSvg;
        }
        });
    });

    // Переключение языка бургера

    const buttonsBurger = document.querySelectorAll(".lang-button-burger");

    // Переключение языка
    buttonsBurger.forEach(button => {
        // Слушаем оба события: click и touchstart
        button.addEventListener("click", () => {
            buttonsBurger.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
        
        button.addEventListener("touchstart", () => {
            buttonsBurger.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

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




    // Универсальная функция открытия модалки
    function openModal(modal) {
        closeAllModals();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Универсальная функция закрытия модалки
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Закрытие всех модалок
    function closeAllModals() {
        [modalCall, modalReq, modalError, modalSuccess].forEach(m => m.style.display = 'none');
        document.body.style.overflow = '';
    }

    let lastForm = null; // запоминаем, откуда была ошибка

    // Модалка "Заказать звонок"
    const callButton = document.querySelector('.contact-button');
    const modalButtonBurger = document.querySelector('.callback-btn');
    const modalButtonFooter = document.querySelector('.call-button-footer');
    const modalButtonFooterMobile = document.querySelector('.call-button-footer-mobile');
    const modalCall = document.getElementById('modal-call');
    const closeModalCall = modalCall.querySelector('.close');

    [callButton, modalButtonBurger, modalButtonFooter, modalButtonFooterMobile].forEach(btn => {
        btn.addEventListener('click', () => openModal(modalCall));
    });

    closeModalCall.addEventListener('click', () => closeModal(modalCall));
    window.addEventListener('click', e => { if (e.target === modalCall) closeModal(modalCall); });

    // Модалка "Оставить заявку"
    const requestButton = document.querySelector('.request-button');
    const requestButtonRight = document.querySelector('.request-button-right');
    const modalReq = document.getElementById('modal-req');
    const closeModalReq = modalReq.querySelector('.close');

    requestButton.addEventListener('click', e => {
        e.preventDefault();
        openModal(modalReq);
    });

    requestButtonRight.addEventListener('click', e => {
        e.preventDefault();
        openModal(modalReq);
    });

    closeModalReq.addEventListener('click', () => closeModal(modalReq));
    window.addEventListener('click', e => { if (e.target === modalReq) closeModal(modalReq); });

    // Ошибка и успех
    const modalError = document.getElementById('modal-error');
    const modalSuccess = document.getElementById('modal-success');
    const errorRetryBtn = document.querySelector('.submit-button-modal-error');
    const successCloseBtn = document.querySelector('.submit-button-modal-success');

    // Кнопка "Закрыть" в успешной модалке
    successCloseBtn.addEventListener('click', e => {
        e.preventDefault();
        closeAllModals();
    });

    // Кнопка "Заполнить форму ещё раз"
    errorRetryBtn.addEventListener('click', e => {
        e.preventDefault();
        if (lastForm === 'call') {
            openModal(modalCall);
        } else if (lastForm === 'req') {
            openModal(modalReq);
        }
    });

    // === Форма "Заказать звонок" ===
    const submitButton = document.querySelector('.submit-button-modal');
    const phoneInput = modalCall.querySelector('input[placeholder^="+7"]');
    const companyInput = modalCall.querySelector('input[placeholder="Название компании"]');
    const checkbox = modalCall.querySelector('.accept-input');

    submitButton.addEventListener('click', e => {
        e.preventDefault();
        const phone = phoneInput.value.trim();
        const company = companyInput.value.trim();
        const agreed = checkbox.checked;

        if (!phone || !company || !agreed) {
            lastForm = 'call';
            openModal(modalError);
        } else {
            openModal(modalSuccess);
        }
    });

    // === Форма "Оставить заявку" ===
    const nameInput = document.getElementById('name');
    const phoneReqInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');
    const policyCheckbox = document.getElementById('accept-policy');
    const submitRequestBtn = modalReq.querySelector('.submit-button-modal');

    submitRequestBtn.addEventListener('click', e => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const phone = phoneReqInput.value.trim();
        const email = emailInput.value.trim();
        const comment = commentInput.value.trim();
        const agreed = policyCheckbox.checked;

        if (!name || !phone || !email || !comment || !agreed) {
            lastForm = 'req';
            openModal(modalError);
        } else {
            openModal(modalSuccess);
        }
    });
});