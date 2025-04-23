document.getElementById("clickBtn").addEventListener("click", () => {
    const image1 = document.getElementById("gain1");
    const image2 = document.getElementById("gain2");
    const image3 = document.getElementById("gain3");
    const titreH1 = document.getElementById("titreH1");
    const container = document.querySelector(".container");
    const button = document.querySelector("button");
  
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    button.style.display = "none";
    container.style.background = "#f76c6c";
    

    titreH1.innerHTML="PERDU !!!"

    const sophie = document.getElementById("sophie");
const ben = document.getElementById("ben");

// Affiche les images
sophie.style.display = "block";
ben.style.display = "block";

// Fonction pour bouger une image aléatoirement à l'écran
function moveRandomly(img) {
  const screenWidth = window.innerWidth - img.width;
  const screenHeight = window.innerHeight - img.height;

  const x = Math.random() * screenWidth/2;
  const y = Math.random() * screenHeight/2;
  const angle = Math.random() * 360;

  img.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg`;
}

// Bouge les images toutes les 1 seconde
setInterval(() => {
  moveRandomly(sophie);
  moveRandomly(ben);
}, 1000);


    images.forEach((img, index) => {
      if (index !== 1) {
        img.classList.add("animate");
      }
    });
    // alert("Perdu !");
  });
  