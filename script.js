document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Удаляем активные классы
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Добавляем активный класс текущей вкладке
            tab.classList.add("active");
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        const fullText = tab.innerText;
        if (fullText.length > 50) {
            tab.setAttribute("title", fullText);
            tab.innerText = fullText.slice(0, 47) + "...";
        }
    });
});
