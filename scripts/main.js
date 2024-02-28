/*-------------------------
----------Forside----------
-------------------------*/

//banner 
let banner = document.getElementById("banner");
let bestsellers = document.getElementById("Bestsellers");
let traditionel = document.getElementById("Traditionel");
let vegetar = document.getElementById("Vegetar");
let bannerBillede = document.getElementById("banner-billede");
let cta = document.getElementById("CTA-banner");


bestsellers.addEventListener("click", function() {
    bannerBillede.src = "img/mad/ramen.jpg";
    cta.innerHTML = "Gå til bestsellers";
    bestsellers.classList.replace("btn-banner-passiv", "btn-banner-aktiv");
    traditionel.classList.replace("btn-banner-aktiv", "btn-banner-passiv");
    vegetar.classList.replace("btn-banner-aktiv", "btn-banner-passiv");
    console.log("click");

  });

traditionel.addEventListener("click", function() {
    console.log("click");
    bannerBillede.src = "img/mad/forside_billede_2.jpeg";
    cta.innerHTML = "Gå til traditionel";
    bestsellers.classList.replace("btn-banner-aktiv", "btn-banner-passiv");
    traditionel.classList.replace("btn-banner-passiv", "btn-banner-aktiv");
    vegetar.classList.replace("btn-banner-aktiv", "btn-banner-passiv");
  });

vegetar.addEventListener("click", function() {
    bannerBillede.src = "img/mad/forside_billede_3.png";
    cta.innerHTML = "Gå til vegetar";
    bestsellers.classList.replace("btn-banner-aktiv", "btn-banner-passiv");
    traditionel.classList.replace("btn-banner-aktiv", "btn-banner-passiv");
    vegetar.classList.replace("btn-banner-passiv", "btn-banner-aktiv");
    console.log("click");

  });

  //nyhedsbrev
  let tilmeldNyhedsbrev = document.getElementById("tilmeld-nyhedsbrev");
  let nyhedsbrev = document.getElementById("nyhedsbrev");
  let luk = document.getElementById("luk");

  //Når siden loader, slider modemmet ind på skærmen
  
  if (window.location.pathname === '/index.html') {
    nyhedsbrev.style.animationDelay = "1s";
    nyhedsbrev.style.animationName = "slideIn";
  }

  //Når Man trykker på "tilmeld nyhedsbrev" 
  tilmeldNyhedsbrev.addEventListener("click", function() {
    nyhedsbrev.style.animationDelay = "0.2s";
    nyhedsbrev.style.animationDuration = "0.5s";
    nyhedsbrev.style.animationName = "slideIn";
  });
  
  luk.addEventListener("click", function() {
    nyhedsbrev.style.animationDelay = "0.2s";
    nyhedsbrev.style.animationDuration = "0.5s";
    nyhedsbrev.style.animationName = "slideOut";
  });







