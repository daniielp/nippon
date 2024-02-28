
    const opskriftMinus = document.getElementById("opskrift_minus");
    const opskriftPlus = document.getElementById("opskrift_plus");
    const portionSelector = document.getElementById("opskrift_selectors_moltider");
    const totalPriceDisplay = document.getElementById("totalPrice");
    
    opskriftMinus.onclick = minus;
    opskriftPlus.onclick = plus;
    
    function minus(){ 
        // portionSelector.value = parseInt(portionSelector.value) - 1;
        const currentValue = parseInt(portionSelector.value);
        const decreasedValue = currentValue > 1 ? currentValue - 1 : 1;

        portionSelector.value = decreasedValue;

        // Update the total price by subtracting 25 kroner for each decrease
        const totalPrice = decreasedValue * 25;
        totalPriceDisplay.textContent = totalPrice;
    }
    
    function plus(){
        // portionSelector.value = parseInt(portionSelector.value) + 1;
        const currentValue = parseInt(portionSelector.value);
        const increasedValue = currentValue + 1;
    
        portionSelector.value = increasedValue;
    
        // Update the total price by adding 25 kroner for each increase
        const totalPrice = increasedValue * 25;
        totalPriceDisplay.textContent = totalPrice;
    }

    const heartBtn = document.getElementById("heartBtn");
    const heartImage = document.getElementById("heartImage");
    
    let isLiked = false;
    
    heartBtn.addEventListener("click", toggleLike);
    
    function toggleLike() {
        if (isLiked) {
            // If already liked, switch to empty heart
            heartImage.src = "img/icons/heart-tomt.png";
        } else {
            // If not liked, switch to full heart
            heartImage.src = "img/icons/heart-udfyldt.png";
        }
    
        // Toggle the liked status
        isLiked = !isLiked;
    }
