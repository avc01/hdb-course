document.addEventListener("click", (event) => {
  if (event.target.dataset.short) {
    const url = `http://localhost:777/${event.target.dataset.short}`;

    navigator.clipboard
      .writeText(url)
      .then(() => console.log("Copied"))
      .catch((error) => console.log("Failed"));
  }
});
