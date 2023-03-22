//varabili
const name = document.getElementById("name");
const kilometres = document.getElementById("kilometres");
const age = document.getElementById("ageselect");

let ageselect = document.getElementById("ageselect");


const btnGenera = document.getElementById("btnGenera");

let validForm = true;

let finalPrize = 0;

btnGenera.addEventListener("click", function(){

    document.getElementById("outputName").innerHTML = name.value
    

    const pricePerKilometre = 0.21;
    const firstPercentage = 0.2;
    const secondPercentage = 0.4;
    
    
    let prize = kilometres.value * pricePerKilometre;
    let smallDiscount = (prize * firstPercentage);
    let bigDiscount = (prize * secondPercentage);

    console.log(smallDiscount)
    
    if(document.getElementById("ageselect").value === "scontoSilverTicket"){
        finalPrize = prize - smallDiscount
    }else if(document.getElementById("ageselect").value === "scontoGoldTicket"){
        finalPrize = prize - bigDiscount
    }else{
        finalPrize = prize
    }

    document.getElementById("outputAgeSelect").innerHTML = age.value;


    document.getElementById("outputFinalPrize").innerHTML = `${finalPrize} $`

    const carrozza = Math.ceil(Math.random() * 10)
    const codiceCP = Math.floor(Math.random() * (99000 - 10000 + 1) + 99000)

    document.getElementById("output1").innerHTML = carrozza
    document.getElementById("output2").innerHTML = codiceCP

    document.querySelector("card").classList.remove("hide")


})

 const btnAnnulla = document.getElementById("btnAnnulla")

 btnAnnulla.addEventListener("click", function(){
    age.value = "";
    kilometres.value = "";
    name.value = "";

    document.querySelector("card").classList.add("hide")
 })