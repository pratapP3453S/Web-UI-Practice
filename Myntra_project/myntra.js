let bagItemsObjects;
const myntra_items = [
  {
    id: "1",
    itemImage: "images/1.jpg",
    rating: {
      stars: 4.3,
      reviews: "1.4k",
    },
    companyName: "Carlton London",
    itemName: "Rhodium-Plated CZ Floral Studs",
    returnPeriod: "14 days",
    deliveryDate: "4 Dec 2023",
    price: {
      currentPrice: 606,
      originalPrice: 1045,
      discount: 42
    }
  },
  {
    id: "2",
    itemImage: "images/2.jpg",
    rating: {
      stars: 4.1,
      reviews: "1.6k",
    },
    companyName: "Nike",
    itemName: "Air Max 270 Sneakers",
    returnPeriod: "14 days",
    deliveryDate: "4 Dec 2023",
    price: {
      currentPrice: 1800,
      originalPrice: 2609,
      discount: 39
    }
  },
  {
    id: "3",
    itemImage: "images/3.jpg",
    rating: {
      stars: 3.9,
      reviews: "2.4k",
    },
    companyName: "Zara",
    itemName: "Striped Linen Shirt Dress",
    returnPeriod: "14 days",
    deliveryDate: "4 Dec 2023",
    price: {
      currentPrice: 1606,
      originalPrice: 2500,
      discount: 40
    }
  },
  {
    id: "4",
    itemImage: "images/4.jpg",
    rating: {
      stars: 4.2,
      reviews: "1900",
    },
    companyName: "H&M",
    itemName: "Skinny High Ankle Jeans",
    returnPeriod: "14 days",
    deliveryDate: "4 Dec 2023",
    price: {
      currentPrice: 899,
      originalPrice: 1599,
      discount: 44
    }
  },
  {
    id: "5",
    itemImage: "images/5.jpg",
    rating: {
      stars: 3.5,
      reviews: "4.3k",
    },
    companyName: "Gucci",
    itemName: "GG Marmont Matelassé Shoulder Bag",
    returnPeriod: "14 days",
    deliveryDate: "4 Dec 2023",
    price: {
      currentPrice: 4500,
      originalPrice: 7075,
      discount: 46
    }
  },
  {
    id: "6",
    itemImage: "images/6.jpg",
    rating: {
      stars: 4.1,
      reviews: "1.4k",
    },
    companyName: "Levi's",
    itemName: "501 Original Fit Jeans",
    returnPeriod: "14 days",
    deliveryDate: "4 Dec 2023",
    price: {
      currentPrice: 3999,
      originalPrice: 5045,
      discount: 43
    }
  },
  {
    id: "7",
    itemImage: "images/7.jpg",
    rating: {
      stars: 4.8,
      reviews: "1.6k",
    },
    companyName: "Adidas",
    itemName: "Ultraboost 21 Running Shoes",
    returnPeriod: "14 days",
    deliveryDate: "4 Dec 2023",
    price: {
      currentPrice: 499,
      originalPrice: "999",
      discount: 47
    }
  },
  {
    id: "8",
    itemImage: "images/8.jpg",
    rating: {
      stars: 3.6,
      reviews: "30k",
    },
    companyName: "Chanel",
    itemName: "Classic Flap Bag",
    returnPeriod: "14 days",
    deliveryDate: "4 Dec 2023",
    price: {
      currentPrice: 20999,
      originalPrice: 21045,
      discount: 29
    }
  },
  {
    id: "9",
    itemImage: "images/4.jpg",
    rating: {
      stars: 4.4,
      reviews: "700",
    },
    companyName: "Uniqlo",
    itemName: "Heattech Turtleneck Sweater",
    returnPeriod: "14 days",
    deliveryDate: "4 Dec 2023",
    price: {
      currentPrice: 6062,
      originalPrice: 8045,
      discount: 39
    }
  },
  {
    id: "10",
    itemImage: "images/1.jpg",
    rating: {
      stars: 4.3,
      reviews: "14k",
    },
    companyName: " Ralph Lauren",
    itemName: "Polo Ralph Lauren Oxford Shirt",
    returnPeriod: "14 days",
    deliveryDate: "4 Dec 2023",
    price: {
      currentPrice: 4606,
      originalPrice: 5045,
      discount: 44
    }
  },
]
let bagItems;

whenPageLoad();

//When page reload any page reload
function whenPageLoad() {
  let bagItemString = localStorage.getItem('bagItems');
  bagItems = bagItemString ? JSON.parse(bagItemString) : [];
  displayAllProducts();
  displayBagItemIconCount();
  loadBagItemObjects();
  getBagItem();
  totalPriceList(bagItems.length);
}



//Saving items in web storage 
function addToBag(itemsId) {
  bagItems.push(itemsId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagItemIconCount();
}

//Updating bag's item number available in bag.........for header(navigation bar/bag icon)
function displayBagItemIconCount() {
  let bagIconCount = document.querySelector('.itemCountBag');
  if (bagItems.length > 0) {
    bagIconCount.style.visibility = 'visible';
    bagIconCount.innerHTML = bagItems.length;
  }
  else {
    bagIconCount.style.visibility = 'hidden';
  }
}



//Displaying all products for purchase and adding items to bag.........file : shopping.html
function displayAllProducts() {
  let itemsContainerElement = document.querySelector('.itemsContainer');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = ``;
  myntra_items.forEach(items => {
    innerHtml += `
  <div class="itemContainer">
  <img class="itemImage" src=${items.itemImage} alt="item image">
  <div class="rating">${items.rating.stars} ⭐ | ${items.rating.reviews} reviews</div>
  <div class="companyName">${items.companyName}</div>
  <div class="itemName">${items.itemName}</div>
  <div class="price">
    <span class="currentPrice">₹${items.price.currentPrice}</span>
    <span class="originalPrice">₹${items.price.originalPrice}</span>
    <span class="discount">(${items.price.discount}% OFF)</span>
  </div>
  <button class="addBagButton" onclick="addToBag(${items.id});">Add to Bag</button>
  </div>
  `;
  })
  itemsContainerElement.innerHTML = innerHtml;
}



//loading items in variable(bagItemObjects) selected from shopping 
function loadBagItemObjects() {
  bagItemsObjects = bagItems.map(itemId => {
    for (let i = 0; i < myntra_items.length; i++) {
      if (itemId == myntra_items[i].id) {
        return myntra_items[i];
      }
    }
  });
}



//removing items from web storage and website(myntra_Bag.html)
function cancelItem(itemId) {
  bagItems = bagItems.filter(cancelId => cancelId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagItemIconCount();
  getBagItem();
  totalPriceList(bagItems.length);
}




// adding item to website(myntra_Bag.html)
function getBagItem() {
  console.log(bagItems);
  console.log(myntra_items.length);
  let bagContainer = document.querySelector('.bagItemContainer');
  if (!bagContainer) {
    return;
  }
  let innerhtml = ``;
  bagItemsObjects.forEach(itemObj => {
    innerhtml += `
    <div class="bagItemBorder">
      <div class="imageHolder">
        <img src=${itemObj.itemImage} alt="an bag image" class="bagImage">
      </div>
      <div class="itemDetailsContainer">
        <div class="companyName">${itemObj.companyName}</div>
        <div class="itemName">${itemObj.itemName}</div>
        <div class="price">
          <span class="currentPrice">₹${itemObj.price.currentPrice}</span>
          <span class="originalPrice">₹${itemObj.price.originalPrice}</span>
          <span class="discount">(${itemObj.price.discount}% OFF)</span>
        </div>
        <div class="returnAvailable">
          <span class="returnDays"><strong>${itemObj.returnPeriod}</strong></span>
          <span class="returnDetails">&nbsp;return available</span>
        </div>
        <div class="deliveryDetails">
          <span class="deliveryBy">Delivery by</span>
          <span class="deliveryDate">${itemObj.deliveryDate}</span>
        </div>
      </div>
      <div class="crossButtonContainer">
        <button class="crossButton" onclick="cancelItem(${itemObj.id});"></button>
      </div>
    </div>
`;
  })
  bagContainer.innerHTML = innerhtml;
}



//calculating all selected items price and rendering on website(myntra_Bag.html) 
function totalPriceList(totalItem) {
  let bagItemPrice = document.querySelector('.bagItemPriceContainer');
  if(!bagItemPrice){
    return;
  }
  let MRP = 0;
  let discountedPrice = 0;
  let finalPrice = 0;
  let convenienceAddon = 0;
  bagItemsObjects.forEach(itemPrice => {
    MRP += parseInt(itemPrice.price.originalPrice);
    discountedPrice += parseInt(itemPrice.price.originalPrice) - parseInt(itemPrice.price.currentPrice);
    finalPrice += parseInt(itemPrice.price.currentPrice);
  })
  if(finalPrice == 0){
    convenienceAddon = 0;
  }
  else{
    convenienceAddon = 99;
  }
  finalPrice += convenienceAddon;
  bagItemPrice.innerHTML = `
  <div class="placeOrderDiv">
   <div class="priceItemContainer">
    <div class="rightColumn">
      <div class="head">
        <h4>PRICE DETAILS ${totalItem} Items)</h4>
      </div>
      <div class="mrpDetails">Total MRP</div>
      <div class="mrpDetails">Discount on MRP</div>
      <div class="mrpDetails">Convenience Fee</div>
      <div class="totalAmount">Total Amount</div>
    </div>
    <div class="leftColumn">
      <br>
      <div class="rupees">₹${MRP}</div>
      <div class="rupees discountRupee">-₹${discountedPrice}</div>
      <div class="rupees">+₹99</div>
      <div class="totalRupees">₹${finalPrice}</div>
    </div>
  </div>
  <button class="placeOrder">PLACE ORDER</button>
</div>
  `;
}


//sidebar or menu bar button for mobile or small screen devices
function showSideBar(){
  const openSideBar = document.querySelector('.sideBar');
  openSideBar.style.display = "flex";
}
function closeSideBar(){
  const openSideBar = document.querySelector('.sideBar');
  openSideBar.style.display = "none";
}

