document.getElementById("clickBtn").addEventListener("click", () => {
    const images = document.querySelectorAll(".gain");
    images.forEach((img, index) => {
      if (index !== 1) {
        img.classList.add("animate");
      }
    });
    alert("Perdu !");
  });
  