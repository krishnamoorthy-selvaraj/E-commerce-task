import { addToCart, cart, loadFromStorage } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";

describe('test suite: addToCart', () => {
    it('add an existing product to the cart', () => {
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: '6b07d4e7-f540-454e-8a1e-363f25dbae7d',
                quantity: 1,
                deliveryOptionId: '1'
        }]);
        });
        loadFromStorage();

        addToCart('6b07d4e7-f540-454e-8a1e-363f25dbae7d');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('6b07d4e7-f540-454e-8a1e-363f25dbae7d');
        expect(cart[0].productId).toEqual(2);
    });

    it('add an new product to the cart', () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        console.log(localStorage.getItem('cart'));
        loadFromStorage();

        addToCart('6b07d4e7-f540-454e-8a1e-363f25dbae7d');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('6b07d4e7-f540-454e-8a1e-363f25dbae7d');
        expect(cart[0].productId).toEqual(1);
        });
});