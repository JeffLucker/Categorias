let categoriaApartamento = document.getElementById("categoria-apartamento!");
let categoriaApartamento2 = document.getElementById("categoria-apartamento!2");
let categoriaApartamento3 = document.getElementById("categoria-apartamento!3");
let categoriaApartamento4 = document.getElementById("categoria-apartamento!4");

let fotoDoQuarto = document.getElementById("foto-quarto");
let fotoDoQuarto2 = document.getElementById("foto-quarto2");
let fotoDoQuarto3 = document.getElementById("foto-quarto3");
let fotoDoQuarto4 = document.getElementById("foto-quarto4");

let amenitiesPorUH = document.querySelectorAll(".amen");
let amenitiesPorUH2 = document.querySelectorAll(".amen2");
let amenitiesPorUH3 = document.querySelectorAll(".amen3");
let amenitiesPorUH4 = document.querySelectorAll(".amen4");

let imgIndex = 0;
let categoriasApartamentos = ["Quarto", "Frigobar", "Armário", "Banheiro", "Varanda"]
let categoriasblx = ["Quarto", "Sala", "Armário", "Banheiro", "Varanda"]
let imgCategorias = ["quarto-luxo", "frigobar-luxo", "armario-luxo", "banheiro-luxo", "varanda-luxo"]
let blxCategorias = ["quarto-luxo", "sala-luxo", "armario-luxo", "banheiro-luxo", "varanda-luxo"]


window.addEventListener("load", function () {
    amenitiesPorUH[0].style.display = "block";
  });

  window.addEventListener("load", function () {
    amenitiesPorUH2[0].style.display = "block";
  });

  window.addEventListener("load", function () {
    amenitiesPorUH3[0].style.display = "block";
  });
  window.addEventListener("load", function () {
    amenitiesPorUH4[0].style.display = "block";
  });

function passFoward(){
    imgIndex++;
    if(imgIndex < 5){
        categoriaApartamento.textContent = categoriasApartamentos[imgIndex];
        amenitiesPorUH.forEach(function(image) {
            image.style.display = "none";
        })
        fotoDoQuarto.src = `imagens/Jirlane/${imgCategorias[imgIndex]}.jpg`
        amenitiesPorUH[imgIndex].style.display = "block"
        console.log(imgCategorias)
    }
    else if(imgIndex == 5){
        imgIndex = 0;
        categoriaApartamento.textContent = categoriasApartamentos[imgIndex];
        amenitiesPorUH.forEach(function(image) {
            image.style.display = "none";
        })
        amenitiesPorUH[imgIndex].style.display = "block"
        fotoDoQuarto.src = `imagens/Jirlane/${imgCategorias[imgIndex]}.jpg`
        fotoDoQuarto.src = `imagens/Jirlane/${imgCategorias[imgIndex]}.jpg`

    }
}

function passBackwards(){
    amenitiesPorUH.forEach(function(image) {
        image.style.display = "none";
    })
    imgIndex--;
    if(imgIndex < 0){
        amenitiesPorUH.forEach(function(image) {
            image.style.display = "none";
        })
        imgIndex = 4;
        categoriaApartamento.textContent = categoriasApartamentos[imgIndex];
        fotoDoQuarto.src = `imagens/Jirlane/${imgCategorias[imgIndex]}.jpg`
        fotoDoQuarto.src = `imagens/Jirlane/${imgCategorias[imgIndex]}.jpg`
        amenitiesPorUH[imgIndex].style.display = "block"
    }
    else{
            
    categoriaApartamento.textContent = categoriasApartamentos[imgIndex];
    fotoDoQuarto.src = `imagens/Jirlane/${imgCategorias[imgIndex]}.jpg`
    fotoDoQuarto.src = `imagens/Jirlane/${imgCategorias[imgIndex]}.jpg`

    amenitiesPorUH[imgIndex].style.display = "block"
    }
}

function passFoward2(){
  imgIndex++;
  console.log(imgIndex)
  if(imgIndex < 4){
      categoriaApartamento2.textContent = categoriasApartamentos[imgIndex];
      amenitiesPorUH2.forEach(function(image) {
          image.style.display = "none";
      })
      fotoDoQuarto2.src = `imagens/standard/${imgCategorias[imgIndex]}.jpg`
      amenitiesPorUH2[imgIndex].style.display = "block"
      console.log(imgCategorias)
  }
  else if(imgIndex == 4){
      imgIndex = 0;
      categoriaApartamento2.textContent = categoriasApartamentos[imgIndex];
      amenitiesPorUH2.forEach(function(image) {
          image.style.display = "none";
      })
      amenitiesPorUH2[imgIndex].style.display = "block"
      fotoDoQuarto2.src = `imagens/standard/${imgCategorias[imgIndex]}.jpg`
      fotoDoQuarto2.src = `imagens/standard/${imgCategorias[imgIndex]}.jpg`

  }
}

function passBackwards2(){
  amenitiesPorUH2.forEach(function(image) {
      image.style.display = "none";
  })
  imgIndex--;
  if(imgIndex < 0){
      amenitiesPorUH2.forEach(function(image) {
          image.style.display = "none";
      })
      imgIndex = 3;
      categoriaApartamento2.textContent = categoriasApartamentos[imgIndex];
      fotoDoQuarto2.src = `imagens/standard/${imgCategorias[imgIndex]}.jpg`
      fotoDoQuarto2.src = `imagens/standard/${imgCategorias[imgIndex]}.jpg`
      amenitiesPorUH2[imgIndex].style.display = "block"
  }
  else{
          
  categoriaApartamento2.textContent = categoriasApartamentos[imgIndex];
  fotoDoQuarto2.src = `imagens/standard/${imgCategorias[imgIndex]}.jpg`
  fotoDoQuarto2.src = `imagens/standard/${imgCategorias[imgIndex]}.jpg`

  amenitiesPorUH2[imgIndex].style.display = "block"
  }
}

function passFoward3(){
  imgIndex++;
  console.log(imgIndex)
  if(imgIndex < 4){
      categoriaApartamento3.textContent = categoriasblx[imgIndex];
      amenitiesPorUH3.forEach(function(image) {
          image.style.display = "none";
      })
      fotoDoQuarto3.src = `imagens/blx/${blxCategorias[imgIndex]}.jpg`
      amenitiesPorUH3[imgIndex].style.display = "block"
      console.log(imgCategorias)
  }
  else if(imgIndex == 4){
      imgIndex = 0;
      categoriaApartamento3.textContent = categoriasblx[imgIndex];
      amenitiesPorUH3.forEach(function(image) {
          image.style.display = "none";
      })
      amenitiesPorUH3[imgIndex].style.display = "block"
      fotoDoQuarto3.src = `imagens/blx/${blxCategorias[imgIndex]}.jpg`
      fotoDoQuarto3.src = `imagens/blx/${blxCategorias[imgIndex]}.jpg`

  }
}

function passBackwards3(){
  amenitiesPorUH3.forEach(function(image) {
      image.style.display = "none";
  })
  imgIndex--;
  if(imgIndex < 0){
      amenitiesPorUH3.forEach(function(image) {
          image.style.display = "none";
      })
      imgIndex = 3;
      categoriaApartamento3.textContent = categoriasblx[imgIndex];
      fotoDoQuarto3.src = `imagens/blx/${blxCategorias[imgIndex]}.jpg`
      fotoDoQuarto3.src = `imagens/blx/${blxCategorias[imgIndex]}.jpg`
      amenitiesPorUH2[imgIndex].style.display = "block"
  }
  else{
          
  categoriaApartamento3.textContent = categoriasblx[imgIndex];
  fotoDoQuarto3.src = `imagens/blx/${blxCategorias[imgIndex]}.jpg`
  fotoDoQuarto3.src = `imagens/blx/${blxCategorias[imgIndex]}.jpg`

  amenitiesPorUH3[imgIndex].style.display = "block"
  }
}

function passFoward4(){
  imgIndex++;
  console.log(imgIndex)
  if(imgIndex < 4){
      categoriaApartamento4.textContent = categoriasApartamentos[imgIndex];
      amenitiesPorUH4.forEach(function(image) {
          image.style.display = "none";
      })
      fotoDoQuarto4.src = `imagens/bs/${imgCategorias[imgIndex]}.jpg`
      amenitiesPorUH4[imgIndex].style.display = "block"
      console.log(imgCategorias)
  }
  else if(imgIndex == 4){
      imgIndex = 0;
      categoriaApartamento4.textContent = categoriasApartamentos[imgIndex];
      amenitiesPorUH4.forEach(function(image) {
          image.style.display = "none";
      })
      amenitiesPorUH4[imgIndex].style.display = "block"
      fotoDoQuarto4.src = `imagens/bs/${imgCategorias[imgIndex]}.jpg`
      fotoDoQuarto4.src = `imagens/bs/${imgCategorias[imgIndex]}.jpg`

  }
}

function passBackwards4(){
  amenitiesPorUH4.forEach(function(image) {
      image.style.display = "none";
  })
  imgIndex--;
  if(imgIndex < 0){
      amenitiesPorUH4.forEach(function(image) {
          image.style.display = "none";
      })
      imgIndex = 3;
      categoriaApartamento4.textContent = categoriasApartamentos[imgIndex];
      fotoDoQuarto4.src = `imagens/bs/${imgCategorias[imgIndex]}.jpg`
      fotoDoQuarto4.src = `imagens/bs/${imgCategorias[imgIndex]}.jpg`
      amenitiesPorUH4[imgIndex].style.display = "block"
  }
  else{
          
  categoriaApartamento4.textContent = categoriasApartamentos[imgIndex];
  fotoDoQuarto4.src = `imagens/bs/${imgCategorias[imgIndex]}.jpg`
  fotoDoQuarto4.src = `imagens/bs/${imgCategorias[imgIndex]}.jpg`

  amenitiesPorUH2[imgIndex].style.display = "block"
  }
}

let menuList = document.getElementById("menu-list");
console.log(menuList.style.display);

let paginaIniciou = false;

window.addEventListener("load", function () {
    paginaIniciou = true;
  });

function displayMenu(){
    if(paginaIniciou){
        console.log(paginaIniciou)
        console.log(menuList.style.display)
        document.getElementById("ondas").style.display = "block";
        document.getElementById("menu-list").style.display = "block";
        document.getElementById("menu").textContent = "esconder"
        paginaIniciou = false;
    }
    else
    {
        document.getElementById("ondas").style.display = "none";
        document.getElementById("menu-list").style.display = "none";
                document.getElementById("menu").textContent = "mostrar"
        paginaIniciou = true;
    }
}

// Seleciona o botão
const backToTopButton = document.getElementById('backToTop');

// Mostra o botão quando o usuário rola para baixo
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Volta ao topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Suaviza o movimento
  });
});