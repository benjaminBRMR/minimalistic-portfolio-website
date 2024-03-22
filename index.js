document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = [
        "Hello!",
        "Servus!",
        "¡Hola!",
        "Bonjour!",
        "Hallo!",
        "Ciao!",
        "Olá!",
        "Привет!",
        "你好!",
        "こんにちは!",
        "مرحبا!",
        "नमस्ते!",
        "안녕하세요!",
        "Hej!",
        "Γεια σας!",
        "Merhaba!",
        "Cześć!",
        "Helló!",
        "สวัสดี!",
        "Hei!"
    ];

    let currentIndex = 0;

    function getNextWelcomeText() {
        const text = welcomeText[currentIndex];
        currentIndex = (currentIndex + 1) % welcomeText.length;
        return text;
    }

    function animateWelcomeText() {
        const welcomeElement = document.getElementById('welcome-text');
        const newText = getNextWelcomeText();

        welcomeElement.style.transform = 'scale(1.2) rotate(5deg)';

        setTimeout(() => {
            welcomeElement.textContent = newText;

            setTimeout(() => {
                welcomeElement.style.transform = 'none';
            }, 500);
        }, 500);
    }

    animateWelcomeText();

    setInterval(animateWelcomeText, 5000);
});
