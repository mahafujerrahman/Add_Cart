
function incdec (isAdd, price, quantity,basePrice)
{

    const GetItem = document.getElementById(quantity);
    const GetItemValue = GetItem.value;
    let convertValue = parseInt(GetItemValue);
    const priceOFItem = document.getElementById(basePrice);
    if (isAdd==true)
    {
        convertValue= convertValue+1;
        GetItem.value = convertValue;
        priceOFItem.innerText = convertValue*price;
    }
    else if ( convertValue>0)
    {
        convertValue = convertValue-1;
        GetItem.value = convertValue;
        priceOFItem.innerText = convertValue*price;
    }
    calPrice();
}
function getquantity(finalquantity)
{
    const quant = document.getElementById(finalquantity);
    const qunatvalue = quant.value;
    return qunatvalue;
}
function calPrice()
{
    const PhoneTotal = getquantity("Iphone_Quantity")*190;
    const CaseTotal = getquantity("Case_Quantity")*210;
    const subtotal = PhoneTotal+CaseTotal;
    const tax = (subtotal*8)/100;
    const total = subtotal+tax;
    document.getElementById("subtotal").innerText= subtotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText=total;

}
document.getElementById("plus_phone").addEventListener('click',function(){
   
    incdec(true,190,"Iphone_Quantity","phone_price");
    
    
   
})
document.getElementById("minus_phone").addEventListener('click',function(){
     
    incdec(false,190,"Iphone_Quantity","phone_price");
})

document.getElementById("plus_case").addEventListener('click',function(){
       
    incdec(true,210,"Case_Quantity","case_price");

})

document.getElementById("minus_case").addEventListener("click",function(){
        
    incdec(false,210,"Case_Quantity","case_price");

})