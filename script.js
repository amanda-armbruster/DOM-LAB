let money = document.querySelectorAll(".money");
let total = 0;
let moneyParagraph = document.querySelector(".total");
    money.forEach((item)=>{
        item.addEventListener("click",() => {
            let amount = parseInt(item.getAttribute("data-amount"))
            console.log(amount);
            total += amount;   
            moneyParagraph.innerText = total;
        });
   });



   let coinForm = document.querySelector(".count");

   coinForm.addEventListener("submit", (create) =>{
       create.preventDefault();
       let data = new FormData(coinForm)
       let number = data.get("number");
       let coins = data.get("coins");
       

if(coins === "Penny"){
    for(i=0; i<number; i++){
       let pennyDiv = document.createElement("div");
       pennyDiv.setAttribute("class", "penny");
       pennyDiv.innerText = ("penny");
       let coinContainer = document.querySelector(".coin-container");
       coinContainer.append(pennyDiv);
       
    }
}else if(coins === "Nickle"){
    for(i=0; i<number; i++){
      let nickleDiv = document.createElement("div");
        nickleDiv.setAttribute("class", "nickle");
        nickleDiv.innerText = ("nickle");
        let coinContainer = document.querySelector(".coin-container");
        coinContainer.append(nickleDiv);
    }
    }else if(coins === "Dime"){
        for(i=0; i<number; i++){
            let dimeDiv = document.createElement("div");
            dimeDiv.setAttribute("class", "dime");
            dimeDiv.innerText = ("dime");
            let coinContainer = document.querySelector(".coin-container");
            coinContainer.append(dimeDiv);
        }
    }else{
        for(i=0; i<number; i++){
            let quarterDiv = document.createElement("div");
            quarterDiv.setAttribute("class", "quarter");
            quarterDiv.innerText = ("quarter");
            let coinContainer = document.querySelector(".coin-container");
            coinContainer.append(quarterDiv);
        }
    
    };
console.log(number," ",coins);
    });

    




    let bulb = document.querySelector(".bulb");
    let onButton = document.querySelector(".on");
    let offButton = document.querySelector(".off");
    let toggleButton = document.querySelector(".toggle");
    let endButton = document.querySelector(".end");
        
       onButton.addEventListener("click",()=>{
       bulb.classList.add("light");
});

offButton.addEventListener("click",()=>{
    bulb.classList.remove("light");
});

toggleButton.addEventListener("click",()=>{
    bulb.classList.toggle("light");
});

endButton.addEventListener("click",()=>{
    bulb.classList.remove("light");
});



    

   










