// Ugeplan script

const ugeplanSelectors = document.querySelectorAll('.ugeplan-week .placeholder');

if (ugeplanSelectors != null) {
    ugeplanSelectors.forEach((selector) => {
        selector.addEventListener('click', () => toggleMeals())
    })

    const cardButtons = document.querySelectorAll('.ugeplan-card .ugeplan-card-footer button');
    cardButtons.forEach((button) => {
        button.addEventListener('click', () => pickMeal())
    })
}

function toggleMeals() {
    const meals = document.getElementById("ugeplan-meals")
    meals.classList.toggle('hidden');
}

function pickMeal() {
    const images = ["img/mad/ramen.jpg", "img/mad/Billede2.png", "img/mad/Billede5.png"]
    const selectedImage = images[randomNumber(images.length)]

    const imageElement = document.createElement('img');
    imageElement.src = selectedImage;
    imageElement.alt = "billede af mad";

    const monday = document.getElementById("monday");
    console.log(monday.childNodes.length)
    monday.innerHTML = "";
    
    monday.appendChild(imageElement);
    toggleMeals();
}

function randomNumber(length) {
    return Math.floor(Math.random() * length);
}