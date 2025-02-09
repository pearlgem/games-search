const games = [
  {
    name: "Counter-Strike-2",
    description: "A multiplayer FPS game.",
    requirements: {
      minimum: "Xeon x3",
      recommended: "core i7 6th gen",
    },
    platforms: "Steam",
    image: "img2.jpg",
    genre: ["action", "FPS"],
  },
  {
    name: "Hollow-Knight",
    description:
      "Forge your own path in Hollow Knight! ruined kingdom of insects and heroes",
    requirements: {
      minimum: "core i3",
      recommended: "Xeon X3",
    },
    platforms: "PS5",
    image: "img1.jpg",
    genre: ["action", "FPS"],
  },
  {
    name: "Grand-theft-auto",
    description: "A multiplayer open-word game.",
    requirements: {
      minimum: "core i3 4th Gen",
      recommended: "core i7 8th Gen",
    },
    platforms: "Steam",
    image: "img4.jpg",
    genre: ["Graphics", "FPS"],
  },
  {
    name: "PUBG",
    description:
      "A multiplayer FPS survival game winner is the last team standing.",
    requirements: {
      minimum: "Xeon X3",
      recommended: "core i5 4th gen",
    },
    platforms: "Steam",
    image: "img8.jpg",
    genre: ["FPS", "action"],
  },

  {
    name: "Gris",
    description: "An aesthetic graphics Game full of visiuals.",
    requirements: {
      minimum: "Xeon X3",
      recommended: "core i5 4th gen",
    },
    platforms: "PS5",
    image: "img5.jpg",
    genre: ["Graphics"],
  },
];
document.getElementById("clear").addEventListener("click", function () {
  location.reload();
});
const search = function () {
  let genre = document.getElementById("genre").value;
  let platform = document.getElementById("platform").value;

  const genreGames = games.filter((game) => game.genre.includes(genre));
  const genreResults = genreGames.map(
    (game) => `<div class="card" data-name="pic9">
          <div class="image_container">
            <img
              class="object-center w-full h-full"
              src="${game.image}"
              alt=""
            />
          </div>
          <div class="title">
            <span>${game.name}</span>
          </div>
          <div class="size">
            <span>${game.description}</span>
            <ul class="list-size">
              <li class="item-list">
                <button class="item-list-button">${game.platforms}</button>
              </li>
              <li class="item-list">
                <button class="item-list-button">${game.requirements.recommended}</button>
              </li>

            </ul>
          </div>
          <div class="action">
            <div class="price">
              <span class="text-green-600">$8.99</span>
            </div>
            <button class="cart-button">
              <span>Add to cart</span>
            </button>
          </div>
        </div> `
  );
  const platformGames = games.filter(
    (game) => game.genre.includes(genre) && game.platforms === platform
  );
  const platformResults = platformGames.map(
    (game) => `<div class="card" data-name="pic9">
          <div class="image_container">
            <img
              class="object-center w-full h-full"
              src="${game.image}"
              alt=""
            />
          </div>
          <div class="title">
            <span>${game.name}</span>
          </div>
          <div class="size">
            <span>${game.description}</span>
            <ul class="list-size">
              <li class="item-list">
                <button class="item-list-button">${game.platforms}</button>
              </li>
              <li class="item-list">
                <button class="item-list-button">${game.requirements.recommended}</button>
              </li>

            </ul>
          </div>
          <div class="action">
            <div class="price">
              <span class="text-green-600">$8.99</span>
            </div>
            <button class="cart-button">
              <span>Add to cart</span>
            </button>
          </div>
        </div> `
  );
  document.getElementById("result").innerHTML = platformResults;
  document.querySelectorAll(".allCards").forEach((card) => {
    card.classList.add("hidden");
  });

  document.getElementById("result").innerHTML = genreResults;
};

// const search = function () {
//   let genre = document.getElementById("genre").value;
//   genre = document.getElementById("genre").value;
//   let platform = document.getElementById("platform").value;
// };
