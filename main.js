async function fetchData(apiURL) {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    const container = document.getElementById("gif-container");
    container.innerHTML = "";

    data.data.forEach(gif => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-3";

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${gif.images.fixed_height.url}" class="card-img-center" alt="GIF">
          <div class="card-body">
            <p class="card-text text-center text-truncate">${gif.title || "Untitled GIF"}</p>
          </div>
        </div>
      `;

      container.appendChild(col);
    });

  } catch (error) {
    console.error('Error Gif Error:', error);
    document.getElementById("gifresponse").textContent =
      'Failed to load GIFs. Please try again later.';
  }
}

document.getElementById("search-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const searchTerm = document.getElementById("search-input").value;
  const apiKey = 'lH0ENCrqxWHFagXo62tB9FAuQ00meIHc';
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`;
  fetchData(apiURL);
});

