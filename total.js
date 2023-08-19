document.getElementById("apply-coupon-value").addEventListener("keyup",function(event){
    const promoValue = document.getElementById("promo-code-value").innerText;
    const text = event.target.value;
    
   if(text === promoValue){
   document.getElementById("apply-coupon-btn").removeAttribute("disabled");
   document.getElementById("apply-coupon-btn").style.background ='#E527B2';
   }
   else{
    document.getElementById("apply-coupon-btn").setAttribute("disabled",true);
   }
   
  
})
function convertStringToNumber(id){
const stringValue =document.getElementById(id).innerText;
const value = parseFloat(stringValue);


return value;
}

document.getElementById("apply-coupon-btn").addEventListener("click",function(){
    document.getElementById("apply-coupon-value").value =" ";
   const totalPrice = convertStringToNumber("total-price");
   const discountFix = totalPrice*.2;
   const discount =discountFix.toFixed(2);
   const newTotalFix =totalPrice-discount;
   const newTotal =newTotalFix.toFixed(2);
   document.getElementById("discount").innerText=discount;
   document.getElementById("total").innerText=newTotal;

})


function calculationAndSetting(input1,input2){
const input =convertStringToNumber(input1);
const previousTotalPrice = convertStringToNumber("total-price");
const newTotalPrice =input+previousTotalPrice;


document.getElementById("total-price").innerText=newTotalPrice;
document.getElementById("total").innerText=newTotalPrice;

const addp = document.getElementById(input2).innerText;
const add = document.createElement("p");
const addElement =document.getElementById("add-item");
const count = addElement.childElementCount;

add.innerHTML =`${count+1}.${addp}  `
addElement.appendChild(add);
document.getElementById("purchase").removeAttribute("disabled");

}

document.getElementById("home").addEventListener("click",function(){
    document.getElementById("total-price").innerText="0";
    document.getElementById("total").innerText="0";
    document.getElementById("discount").innerText="0";
   const parent = document.getElementById("add-item");
   const child =parent.querySelectorAll("p");
   const count =parent.childElementCount;
   console.log(count);
  for(i=0;i<count;i++)
  {
    parent.removeChild(child[i]);
  }
  window.location.href="index.html";
})












