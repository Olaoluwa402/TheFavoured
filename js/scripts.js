let removeCartItemButton = document.getElementsByClassName('cart-items-remove');
for(let i=0; i<removeCartItemButton.length; i++){
    const button = removeCartItemButton[i];
          button.addEventListener('click', (e)=>{
                let buttonClicked = e.target;
                    buttonClicked.parentElement.parentElement.remove()
                    updateCartTotal();
          })
}

function updateCartTotal(element){
    
}



