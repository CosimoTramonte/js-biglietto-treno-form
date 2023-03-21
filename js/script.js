//varabili
const name = document.getElementById("name");

const age = document.getElementById("ageselect");
const btnGenera = document.getElementById("btnGenera");
const btnAnnulla = document.getElementById("btnAnnulla");

console.log(name, kilometres, age, btnGenera, btnAnnulla);

//price calculation
const pricePerKilometre = 0.21;


const firstPercentage = 0.2;
const secondPercentage = 0.4;



let finalPrize = 0;

let ageselect = document.getElementById("ageselect");

btnGenera.addEventListener("click", function(){
    const kilometres = document.getElementById("kilometres").value;
    let smallDiscount = (kilometres * pricePerKilometre * firstPercentage);
    let bigDiscount = (kilometres * pricePerKilometre * secondPercentage);
    let prize = kilometres * pricePerKilometre;
    document.getElementById("outputName").innerHTML = name.value;
    name.value = "";

   
    
   

    if(document.getElementById("ageselect").selectedindex == 2){
        finalPrize = prize - smallDiscount
    }else if(document.getElementById("ageselect").selectedindex == 3){
        finalPrize = prize - bigDiscount
    }else{
        finalPrize = prize
    }

    console.log("finalprice",finalPrize, );
    document.getElementById("outputFinalPrize").innerHTML = finalPrize

   
    document.getElementById("outputAgeSelect").innerHTML = age.value;
    age.value = "";
    kilometres.value = "";

})

const maintext = document.querySelector('.main-text');

btnAnnulla.addEventListener("click", function(){

    if(maintext.classList.contains('hide')){
        maintext.classList.remove('hide');
      }else{
        maintext.classList.add('hide');
    }
})






