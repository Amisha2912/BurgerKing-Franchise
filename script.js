let burgerOrd=document.querySelector("#burger");
let friesOrd=document.querySelector("#fries");
let drinksOrd=document.querySelector("#drinks");
let items=document.querySelectorAll(".item");
let order=document.querySelector(".order");
let reset=document.querySelector(".reset");
let orderId=document.querySelector("#getOrderID");
let displayItems=document.querySelector(".display-items");

function randomGenerator(){
    return Math.floor((Math.random()*2000)+1000);
}

reset.addEventListener("click",(e)=>{
    e.preventDefault();
    displayItems.innerHTML=`<p>No item is selected</p>`;
    orderId.innerHTML =`Order ID:-`;
});

order.addEventListener("click",(e)=>{
    e.preventDefault();
    displayItems.innerHTML="";
    let promise =new Promise((resolve,rej)=>{
        setTimeout(()=>{
            resolve();
        },randomGenerator);
    });
    promise.then(() => {
        let orderItems = [];
        items.forEach((item) => {
            if (item.childNodes[1].checked) {
                orderItems.push(item.innerText);
            }
        });

        if (orderItems.length === 0) {
            alert("Please,first select your order below!!!");
            order.disabled = false;
            displayItems.innerHTML=`<p>No item is selected</p>`;
            return;
        }

        orderId.innerHTML = `Order ID:-  <b>${randomGenerator()}</b>`;

        orderItems.forEach((food) => {
            let images = document.createElement("img");
            food=food.trim();//issue for related to white space
            switch(food) {
                case "BURGER":
                    images.src = "asset/burger.jpg";
                    break;
                case 'FRIES':
                    images.src = "asset/fries.jpg";
                    break;
                case 'DRINKS':
                    images.src = "asset/drinks.jpg";
                    break;
            }
            displayItems.appendChild(images);

        });
        items.forEach((item) => {
            if (item.childNodes[1].checked) {
                orderItems.push(item.innerText);
            }

            item.childNodes[1].checked=false;
            order.disabled=false;
        });

    });

})