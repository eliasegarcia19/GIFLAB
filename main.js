async function fetchData(apiURL) {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    document.getElementById("giflabimages").innerHTML = "";

    data.data.forEach(gif => {
      const img = document.createElement("img");
      img.src = gif.images.fixed_height.url;
      document.getElementById("giflabimages").appendChild(img);
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
