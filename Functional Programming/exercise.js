// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

let amazonHistory = []

const compose = (f,g) => (...args) => f(g(...args));

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name:'laptop', price: 200})

// buyItem(applyTax(addItemToCart(things)))

const purchaseItem = (...fns) => {
    console.log(fns)
    return fns.reduce(compose)
}

const addItemToCart = (user,item) => {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {cart: updateCart})
}



function applyTaxToItems(user){
    amazonHistory.push(user)
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })

    return Object.assign({}, user, {cart: updatedCart})
}

function buyItem(user){
    return Object.assign({}, user, {purchases: user.cart})
}

function emptyCart(user){
    return Object.assign({}, user, {cart: []})
}






// Implement cart feature:
/* 1. Add items to cart 
    2. Add 3% tax in cart
    3. Buy item: cart --> purchases
    4. Empty card

    Bonus:
    1. Accept refunds
    2. Track user history
*/