// Countdown Timer
const weddingDate = new Date("November 14, 2023 15:00:00").getTime();

function updateCountdown() {
    const targetDate = new Date('November 14, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById('timer').innerHTML = 'Свадьба уже состоялась!';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
const endings = {
days: ['день', 'дня', 'дней'],
hours: ['час', 'часа', 'часов'],
minutes: ['минута', 'минуты', 'минут'],
seconds: ['секунда', 'секунды', 'секунд']
};

function getEnding(number, endingsArray) {
const n = Math.abs(number) % 100;
const n1 = n % 10;
if (n > 10 && n < 20) {
return endingsArray;
}
if (n1 > 1 && n1 < 5) {
return endingsArray;
}
if (n1 === 1) {
return endingsArray;
}
return endingsArray;
}

function getDaysEnding(number) {
return getEnding(number, endings.days);
}

function getHoursEnding(number) {
return getEnding(number, endings.hours);
}

function getMinutesEnding(number) {
return getEnding(number, endings.minutes);
}

function getSecondsEnding(number) {
return getEnding(number, endings.seconds);
}

function updateCountdown() {
    const targetDate = new Date('November 14, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
    document.getElementById('timer').innerHTML = 'Свадьба уже состоялась!';
    return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function updateTextCountdown() {
    const targetDate = new Date('November 14, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const endings = {
        days: ['День', 'Дня', 'Дней'],
        hours: ['Час', 'Часа', 'Часов'],
        minutes: ['Минута', 'Минуты', 'Минут'],
        seconds: ['Секунда', 'Секунды', 'Секунд']
    };

    function getEnding(number, endingsArray) {
        const n = Math.abs(number) % 100;
        const n1 = n % 10;
        if (n > 10 && n < 20) {
            return endingsArray[2];
        }
        if (n1 > 1 && n1 < 5) {
            return endingsArray[1];
        }
        if (n1 === 1) {
            return endingsArray[0];
        }
        return endingsArray[2];
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Обновляем текст с числом и правильным окончанием
    document.querySelector('#days_text').textContent = `${getEnding(days, endings.days)}`;
    document.querySelector('#hours_text').textContent = `${getEnding(hours, endings.hours)}`;
    document.querySelector('#minutes_text').textContent = `${getEnding(minutes, endings.minutes)}`;
    document.querySelector('#seconds_text').textContent = `${getEnding(seconds, endings.seconds)}`;
}


updateCountdown();
setInterval(updateCountdown, 1000);
setInterval(updateTextCountdown, 1000);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');
    const menuItems = document.querySelectorAll('nav ul li a'); // выбираем все пункты меню
    
    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });
    
    // Добавляем обработчик для каждого пункта меню
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navUl.classList.remove('active'); // закрываем меню при клике
        });
    });
});