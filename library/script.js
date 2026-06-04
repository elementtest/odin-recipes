const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("book-form");

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
  let uniqueid = crypto.randomUUID();
  const book = { title, author, pages, read, uniqueid };
  console.log(book);
  displaybook(book);

  // close after submit
  // dialogElem.close();
  // reset form after submit
  // form.reset();
});
function displaybook(book) {
  const bottom = document.querySelector(".bottom");

  const tile = document.createElement("div");
  tile.classList.add("book-tile");
  tile.dataset.id = book.uniqueid;

  tile.innerHTML = `
      <h3 class="title">${book.title}</h3>
      <h3 class="author">${book.author}</h3>
      <h3 class="pages">${book.pages}</h3>
      <h3 class="read">${book.read === "read" ? "READ" : "NOT READ"}</h3>
      <button>remove</button>
      `;

  bottom.appendChild(tile);
}
