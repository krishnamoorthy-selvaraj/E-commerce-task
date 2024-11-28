const cart = {
    cartItems: undefined,

    loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));
      
      if(!this.cartItems) {
        this.cartItems = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId:'1'
        },{
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId:'2'
        }];
      }
      },

      saveToStorage () {
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
      },

      addToCart (productId, deliveryOptionId) {
        let matchingItem;
        this.cartItems.forEach((item) => {
          if(productId == item.productId){
            matchingItem = item;
          }
        });
        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
        let quantity = 1; // Default quantity
        if (quantitySelector) {
          quantity = Number(quantitySelector.value);
        }
        if(matchingItem){
          matchingItem.quantity += quantity;
        }
        else{
          this.cartItems.push({
            productId,
            quantity,
            deliveryOptionId
          });
        }
    
        this.saveToStorage();
      },

      removeFromCart (productId) {
        const newCart = [];
    
        this.cartItems.forEach((cartItem) => {
    
          if(cartItem.productId !== productId) {
            newCart.push(cartItem);
          }
        });
    
        this.cartItems = newCart;
    
        this.saveToStorage();
      },

      calculateCartQuantity () {
        let cartQuantity = 0;
      
        this.cartItems.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
        });
      
        return cartQuantity;
      },

      updateQuantity(productId, newQuantity) {
        let matchingItem;
      
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });
      
        matchingItem.quantity = newQuantity;
      
        this.saveToStorage();
      },

      updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
          this.cartItems.forEach((item) => {
            if(productId == item.productId){
              matchingItem = item;
            }
          });
      
          matchingItem.deliveryOptionId = deliveryOptionId;
      
          this.saveToStorage();
      }
}; 


  cart.loadFromStorage();
  cart.addToCart('4df68c27-fd59-4a6a-bbd1-e754ddb6d53c', '2');
  console.log(cart);







  



 