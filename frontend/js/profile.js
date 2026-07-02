function goCMS() {
    window.location.href = "cms.html";
}

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    const currentTheme =
    document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        themeBtn.textContent = "☀️";

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );

        themeBtn.textContent = "🌙";

    }

});

function toggleDark() {
    document.body.classList.toggle("dark-mode");
}

async function tampilArtikel() {

    try {

        const response = await fetch(
            'http://127.0.0.1:5002/api/articles'
        );

        const result = await response.json();

        const articles = result.data;

        const container =
        document.getElementById("article-container");

        if (!articles || articles.length === 0) {

            container.innerHTML =
            "<p>Belum ada artikel</p>";

            return;

        }

        let html = '';

        articles.forEach(article => {

            html += `
                <div class="cms-card">
                    <h3>${article.title}</h3>
                    <p>${article.content}</p>
                    <small>${article.author}</small>
                </div>
            `;

        });

        container.innerHTML = html;

    } catch(error) {

        console.log(error);

    }

}

tampilArtikel();