const projects = [
  {
    title: "Snake Game",
    img: "images/snake_game.png",
    desc: "Classic snake game. Learn loops & collision detection.",
    tags: ["Pygame"]
  },
  {
    title: "Tic-Tac-Toe",
    img: "images/tic_tac_toe.png",
    desc: "Simple 3x3 game — practice win logic.",
    tags: ["Tkinter", "Pygame"]
  },
  {
    title: "Pong",
    img: "images/pong.png",
    desc: "Two-player paddle game with simple AI.",
    tags: ["Pygame"]
  },
  {
    title: "Space Invaders",
    img: "images/space_invaders.png",
    desc: "Move spaceship & shoot enemies. Collision system.",
    tags: ["Pygame"]
  },
  {
    title: "Flappy Bird Clone",
    img: "images/flappy_bird.png",
    desc: "Endless runner with gravity.",
    tags: ["Pygame"]
  },
  {
    title: "Brick Breaker",
    img: "images/brick_breaker.png",
    desc: "Break bricks by bouncing a ball.",
    tags: ["Pygame"]
  },
  {
    title: "Memory Puzzle",
    img: "images/memory_puzzle.png",
    desc: "Reveal cards, match pairs.",
    tags: ["Pygame"]
  },
  {
    title: "Hangman",
    img: "images/hangman.png",
    desc: "Text-based word guessing game.",
    tags: ["Console"]
  },
  {
    title: "Typing Speed Test",
    img: "images/typing_test.png",
    desc: "Type random words fast. Timer & input handling.",
    tags: ["Pygame", "Tkinter"]
  }
];

let currentPage = 1;
const itemsPerPage = 6;

function displayProjects() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedProjects = projects.slice(start, end);

  paginatedProjects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="card-content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.getElementById("nextPage").onclick = () => {
  if (currentPage * itemsPerPage < projects.length) {
    currentPage++;
    displayProjects();
  }
};

document.getElementById("prevPage").onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    displayProjects();
  }
};

displayProjects();
