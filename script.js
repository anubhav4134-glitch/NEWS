const apiKey = "YOUR_API_KEY";

fetch(
`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
)
.then(response => response.json())
.then(data => {
    const container = document.getElementById("news-container");

    data.articles.forEach(article => {
        container.innerHTML += `
        <div class="card">
            <img src="${article.urlToImage}">
            <div class="card-content">
                <h3>${article.title}</h3>
                <p>${article.description || ""}</p>
                <a href="${article.url}" target="_blank">
                    Read More
                </a>
            </div>
        </div>`;
    });
});
