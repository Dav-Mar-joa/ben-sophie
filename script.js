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
  // container.style.background = "#f76c6c";
  const colors = ["#f76c6c", "#6c9ff7", "#6cf7b0"]; // rouge / bleu / vert menthe
  let colorIndex = 0;

  setInterval(() => {
    container.style.background = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 1000); // change toutes les 1 seconde

  titreH1.innerHTML = " 🤣 PERDU !!! 🤣";

  
  const ben = document.getElementById("ben");
  const sophie = document.getElementById("sophie");
  setTimeout(() => {
    
    ben.style.display = "block";
    sophie.style.display = "block";


  // On enregistre les tailles d'origine UNE SEULE FOIS
  const benInitialWidth = ben.getBoundingClientRect().width;
  const sophieInitialWidth = sophie.getBoundingClientRect().width;

  // Fonction pour bouger une image aléatoirement à l'écran
  function moveRandomly(img, initialWidth) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const sizeRandom = 0.5 + Math.random(); // minimum 0.5x la taille, max 1.5x
    img.style.width = `${initialWidth * sizeRandom}px`;

    const x = Math.random() * screenWidth/1.3 -screenWidth/2 ;
    const y = Math.random() * screenHeight/1.3 -screenHeight/2;
    const angle = Math.random() * 360;

    img.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
  }

  // Bouge les images toutes les 1 seconde
  setInterval(() => {
    moveRandomly(sophie, sophieInitialWidth);
    moveRandomly(ben, benInitialWidth);
  }, 1000);

  // const images = [image1, image2, image3];
  // images.forEach((img, index) => {
  //   if (index !== 1) {
  //     img.classList.add("animate");
  //   }
  // });
}, 2000);
});
