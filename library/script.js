const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("book-form");

// handle the 3 static tiles
document.querySelectorAll(".removeBtn").forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.remove();
  });
});

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});
closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.querySelector('input[name="read"]:checked').value;
  const book = { title, author, pages, read };
  displaybook(book);
  dialogElem.close();
  form.reset();
});

function displaybook(book) {
  const bottom = document.querySelector(".bottom");
  const tile = document.createElement("div");
  tile.classList.add("book-tile");
  tile.innerHTML = `
    <h3 class="title">${book.title}</h3>
    <h3 class="author">${book.author}</h3>
    <h3 class="pages">${book.pages}</h3>
    <h3 class="read">${book.read === "read" ? "READ" : "NOT READ"}</h3>
    <button class="removeBtn">remove</button>
  `;
  const removeBtn = tile.querySelector(".removeBtn");
  removeBtn.addEventListener('click', () => {
    tile.remove();
  });
  bottom.appendChild(tile);
}
