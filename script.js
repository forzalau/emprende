document.addEventListener("DOMContentLoaded", () => {
    const loader = document.createElement("div");
    loader.id = "loader";
    loader.className = "loader";
    loader.innerHTML = `
        <p class="logo">TROQUE.AR</p>
        <i class="fa-solid fa-circle-notch fa-spin"></i>
    `;

    document.body.appendChild(loader);

    window.addEventListener("load", () => {
        document.body.removeChild(loader);
    });
});

document.addEventListener("DOMContentLoaded", (event) => {
    const words = [
        "emprendimiento",
        "negocio",
        "comercio",
        "proyecto",
        "actividad",
    ];
    let currentIndex = 0;
    const changeTextElement = document.getElementById("change-text");

    function changeText() {
        changeTextElement.classList.add("fade-out");

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            changeTextElement.textContent = words[currentIndex];
            changeTextElement.classList.remove("fade-out");
        }, 500);
    }

    setInterval(changeText, 2500);
});
