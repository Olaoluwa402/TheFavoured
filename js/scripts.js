
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

const {log} = console;

function ready(){
    let removeCartItemButton = document.getElementsByClassName('cart-items-remove');
    for(let i=0; i<removeCartItemButton.length; i++){
    const button = removeCartItemButton[i];
          button.addEventListener('click', removeCartItem)    
        }
}

function removeCartItem(e){
    let buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal();
}

function updateCartTotal(){
    let cart = document.getElementsByClassName('cart')[0];
    let cartItems = cart.getElementsByClassName('cart-items')
    let total = 0
    for(let i=0; i<cartItems.length; i++){
        const cartItem = cartItems[i]
        const priceElement = cartItem.getElementsByClassName('cart-items-price')[0]
        const qtyElement = cartItem.getElementsByClassName('cart-items-qty')[0]
        const price = Number(priceElement.innerText.replace('₦', ''))
        const qty = qtyElement.value

          total = total + (price * qty)
    }
    document.getElementsByClassName('cart-total')[0].innerText = `Total: ₦${total}`
}



