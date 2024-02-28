//Simpel side 1 

const simpelMinusPortioner = document.getElementById("simpel_portioner_minus");
const simpelPlusPortioner = document.getElementById("simpel_portioner_plus");
const simpelMinusMoltider = document.getElementById("simpel_moltider_minus");
const simpelPlusMoltider = document.getElementById("simpel_moltider_plus");
const portionSelector = document.getElementById("simpel_selectors_portioner");
const moltidSelector = document.getElementById("simpel_selectors_moltider");

const simpelPortionerTotal = document.getElementById("simpel_portioner_total");
const simpelMoltiderTotal = document.getElementById("simpel_moltider_total");
const simpelTotal = document.getElementById( "simpel_total" );
const simpelVejledendePris = document.getElementById("simpel_vejledende_pris")

simpelMinusPortioner.onclick = minusPortiner;
simpelPlusPortioner.onclick = plusPortioner;
simpelMinusMoltider.onclick = minusMoltider;
simpelPlusMoltider.onclick = plusMoltider;

//Portion selector
function minusPortiner(){
    const currentValue = parseInt(portionSelector.value);
    const decreasedValue = currentValue > 1 ? currentValue - 1 : 1;
    portionSelector.value = decreasedValue;
    simpelPortionerTotal.textContent = decreasedValue;
    simpelTotalTotal();
}

function plusPortioner(){
    const currentValue = parseInt(portionSelector.value);
    const increasedValue = currentValue + 1;
    portionSelector.value = increasedValue;
    simpelPortionerTotal.textContent = increasedValue;
    simpelTotalTotal();
}

//Måltid selector
function minusMoltider(){
    const currentValue = parseInt(moltidSelector.value);
    const decreasedValue = currentValue > 1 ? currentValue - 1 : 1;
    moltidSelector.value = decreasedValue;
    simpelMoltiderTotal.textContent = decreasedValue;
    simpelTotalTotal();
}

function plusMoltider(){
    const currentValue = parseInt(moltidSelector.value);
    const increasedValue = currentValue + 1;
    moltidSelector.value = increasedValue;
    simpelMoltiderTotal.textContent = increasedValue;
    simpelTotalTotal();
}

function simpelTotalTotal(){
    const currentValue = parseInt(moltidSelector.value)*parseInt(portionSelector.value)*parseInt(simpelVejledendePris.value);
    simpelTotal.textContent = currentValue;
}

// Send data videre til side 2

