import { getArticles }
from './api.js';

const saveBtn =
document.getElementById("save-btn");
const clearBtn =
document.getElementById("clear-btn");

const titleInput =
document.getElementById("title");

const contentInput =
document.getElementById("content");

const listArticle =
document.getElementById("list-article");

const successMsg =
document.getElementById("success-msg");

// LOGIN GUARD
if (
    localStorage.getItem("login")
    !== "true"
) {

    window.location.href =
    "login.html";

}

// DARK MODE
const themeBtn =
document.getElementById("theme-btn");

themeBtn.addEventListener(
    "click",
    function () {

        const currentTheme =
        document.documentElement
        .getAttribute("data-theme");

        if (currentTheme === "light") {

            document.documentElement
            .setAttribute(
                "data-theme",
                "dark"
            );

            themeBtn.textContent =
            "☀️";

        } else {

            document.documentElement
            .setAttribute(
                "data-theme",
                "light"
            );

            themeBtn.textContent =
            "🌙";

        }

    }
);

// LOGOUT
function logout() {

    localStorage.removeItem("login");

    window.location.href =
    "login.html";

}

// TAMPILKAN ARTIKEL
async function tampilArtikel(){

    try {

        const articles =
        await getArticles();

        let html = '';

        articles.forEach(article => {

            html += `

            <div class="card">

                <h3>${article.title}</h3>

                <p>${article.content}</p>

                <small>
                    Penulis:
                    ${article.author}
                </small>

                <br>

                <small>
                    ${new Date(
                        article.created_at
                    ).toLocaleString()}
                </small>

                <button onclick="hapusArtikel(${article.id})" > Hapus </button>

            </div>

            `;

        });

        listArticle.innerHTML = html;

    } catch(error){

        console.log(error);

    }

}

// SIMPAN ARTIKEL
saveBtn.addEventListener(
    "click",
    async function () {

        const title =
        titleInput.value.trim();

        const content =
        contentInput.value.trim();

        if (
            title === '' ||
            content === ''
        ){

            alert('Isi dulu!');
            return;

        }

        try {

            await fetch(

                'http://127.0.0.1:5002/api/articles',

                {

                    method: 'POST',

                    headers: {

                        'Content-Type':
                        'application/json'

                    },

                    body: JSON.stringify({

                        title,
                        content,
                        author:
                        'Nur Alifah'

                    })

                }

            );

            titleInput.value = '';
            contentInput.value = '';

            tampilArtikel();

            successMsg.style.display =
            "block";

            setTimeout(() => {

                successMsg.style.display =
                "none";

            }, 2000);

        } catch(err){

            console.log(err);

        }

    }
);

// INIT
tampilArtikel();

async function hapusArtikel(id){

    const yakin =
    confirm('Yakin mau hapus?');

    if(!yakin) return;

    try {

        await fetch(

            `http://127.0.0.1:5002/api/articles/${id}`,

            {

                method: 'DELETE'

            }

        );

        tampilArtikel();

    } catch(err){

        console.log(err);

    }

}

window.hapusArtikel =
hapusArtikel;
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {
        console.log("Service Worker berhasil didaftarkan");
      })
      .catch((error) => {
        console.log("Service Worker gagal didaftarkan:", error);
      });
  });
}


clearBtn.addEventListener("click", async function () {
  const yakin = confirm("Yakin ingin menghapus semua artikel?");

  if (!yakin) return;

  const articles = await getArticles();

  for (const article of articles) {
    await fetch(`http://127.0.0.1:5002/api/articles/${article.id}`, {
      method: "DELETE"
    });
  }

  await tampilArtikel();
});