var query = document.getElementById("searched");
var imageWrapper = document.getElementById("imageWrapper");
var loaderimg = document.getElementById("loaderimg");
var loader = document.getElementById("loader");
var loadText = document.getElementById("loadText");
var errorPrompt = document.getElementById("errorPrompt");
var errorPrompt2 = document.getElementById("errorPrompt2");
function getImages() {
  imageWrapper.innerHTML = "";
  if (query.value === "") {
    errorPrompt.style.display = "block";
    setTimeout(() => {
      errorPrompt.style.display = "none";
    }, 1200);
  } else {
    loaderimg.style.display = "block";
    loaderimg.style.animation = "spin 1.4s linear infinite";

    var getImgs = fetch(
      `https://free-images-api.p.rapidapi.com/images/${query.value}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
          "X-RapidAPI-Host": "free-images-api.p.rapidapi.com",
        },
      }
    );
    query.value = "";
    getImgs
      .then((gpt) => {
        return gpt.json();
      })
      .then((data) => {
        var arr = data.results;
        var i = 1;
        arr.forEach((image) => {
          imageWrapper.insertAdjacentHTML(
            "beforeend",
            `<div class="cards" id="card${i}">
                  <img src=${image.image} alt="Error" width="200" height="170">
              </div>`
          );

          i = i + 1;
        });
        loaderimg.style.display = "none";
        loadText.innerText =
          "Beautiful, free images and photos that you can download. Better than any royalty free or stock photos.";
      })
      .catch((err) => {
        loaderimg.style.display = "none";
        errorPrompt2.style.display = "block";
        setTimeout(() => {
          errorPrompt2.style.display = "none";
        }, 1200);
      });
  }
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getImages();
  }
});

var changecolor = document.getElementById("changecolor");
setInterval(() => {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  changecolor.style.color = `rgb(${red} ${green} ${blue})`;
  trending.style.backgroundColor = `rgb(${green},${blue},${red})`;
}, 1200);
