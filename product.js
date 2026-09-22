let URL = "https://dummyjson.com/products";
let products = [];

async function getProducts() {
  const response = await fetch(URL);
  const data = await response.json();
  products = data.products;
  console.log(data);
  let cardList = document.getElementById("cardList");

  products.forEach((product) => {
    cardList.innerHTML += `
        <div class="card">
          <div class="card-image">
            <img
              src="${product.thumbnail}"
              alt="${product.title}"
              description="${product.description}"
            />
          </div>
          <div class="card-body">
            <h2>${product.title}</h2>
            <p style="font-size: small; color: gray;">${product.description}</p>
            <p>${"⭐".repeat(Math.round(product.rating))}</p>
            <p class="price">₹${product.price}</p>
            <button type="button" onclick="addcart(${product.id})">Add to cart</button>
          </div>
        </div>
    `;
  });
}

getProducts();
