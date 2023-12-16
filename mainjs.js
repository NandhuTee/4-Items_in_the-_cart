const products = [
    { name: "Product 1", price: 10.0 },
    { name: "Product 2", price: 5.0 },
    { name: "Product 3", price: 20.0 },
    { name: "Product 4", price: 15.0 },
    { name: "Product 5", price: 2.5 },
  ];
  
  let cart = [];
  
  
  function showProducts() {
    let outputHtml = '';
  
    for(let i = 0;i < products.length;i++){
      outputHtml += `
      <div class="product">
        <span class="product-name">
          ${products[i].name}
        </span>
          <span class="product-price">
          $${products[i].price.toFixed(2)}
        </span>
        <button class="add-to-cart" onClick="addToCart('${products[i].name}', '${products[i].price}')">
        Add to Cart
        </button>
        </div>
      `;
    }
  
    document.getElementsByClassName('products')[0].innerHTML = outputHtml;
  }
  
  function addToCart(name, price){
    let found = cart.find((item) => item.name == name);
    price = parseFloat(price, 10).toFixed(2);
    if (found){
      found.quantity++;
    } else {
      cart.push({
        name,
        price,
        quantity: 1
      })
    }
  
  }
  
  function removeFromCart(name){
    let outputcart = [];
    for(let i = 0;i < cart.length;i++){
      let obj = cart[i];
      if (obj.name != name){
        outputcart.push(obj);
      }
    }
  
    cart = outputcart;
  }
  
  function displayCart(){
    setInterval(() => {
  
      let outputHtml = ``;
  
      for(let i = 0;i < cart.length;i++){
      outputHtml += `
      
        <span>
          ${cart[i].name} x ${cart[i].quantity} -
                
          $${cart[i].price*cart[i].quantity}
            <button class="remove-cart" onClick="removeFromCart('${cart[i].name}')">
        Remove
        </button>
        </span>
        
      `;
    }
  
  
    const total = cart.reduce((total, obj) => total + parseFloat(obj.price*obj.quantity, 10), 0);
  
    document.getElementById("total").innerHTML= `$${total.toFixed(2)}`
  
    if(cart.length == 0){
      document.getElementsByClassName('shopping-cart')[0].innerHTML = ' Cart items will be displayed here';
    } else {
      document.getElementsByClassName('shopping-cart')[0].innerHTML = outputHtml;
  
    }
    }, 500)
  }
  
  
  
  displayCart();
  showProducts();