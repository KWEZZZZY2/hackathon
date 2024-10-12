const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navigation a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (sectionTop <= window.innerHeight / 100 && sectionTop + sectionHeight > window.innerHeight / 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        const targetId = link.getAttribute('href'); // Получаем id целевого элемента
        const targetSection = document.querySelector(targetId); // Находим целевой элемент

        // Прокручиваем к целевому элементу с плавной анимацией
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleVisibility(element, isHovered) {
    const title = element.querySelector('.title');
    const description = element.querySelector('.description');
    
    if (isHovered) {
        title.style.display = 'none'; // Скрыть заголовок
        description.style.display = 'inline'; // Показать описание
    } else {
        title.style.display = 'inline'; // Показать заголовок
        description.style.display = 'none'; // Скрыть описание
    }
}

function navigate(name){
    let filename = name + '.html'
    window.location.href = filename;
}

document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("icon");
    const overlay = document.getElementById("overlay");
    const close = document.getElementById("close");

    // Проверяем, существуют ли элементы
    if (icon && overlay && close) {
        icon.addEventListener("click", function () {
            overlay.style.display = "flex"; // Показываем оверлей
            document.body.style.backgroundColor = "#616161";
            document.ul.style.display = "none"; // Темнеем фон
        });

        close.addEventListener("click", closeOverlay);

        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) { // Проверяем, кликнули ли на сам оверлей
                closeOverlay();
            }
        });
    } else {
        console.error("Один или несколько элементов не найдены.");
    }

    function closeOverlay() {
        overlay.style.display = "none"; // Скрываем оверлей
        document.body.style.backgroundColor = ""; // Возвращаем фон
    }
});