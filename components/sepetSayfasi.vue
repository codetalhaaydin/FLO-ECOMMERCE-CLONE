<template>
  <div class="cart-page">
    <h1>Sepetim</h1>

   
    <div class="add-product-section">
      <h2>Yeni Ürün Ekle</h2>
      <div class="product-list">
        <div 
          v-for="(product, index) in availableProducts" 
          :key="index" 
          class="product-item">
          <img :src="product.image" alt="Product Image" class="product-image" />
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <div class="item-price">₺{{ product.price.toFixed(2) }}</div>
          </div>
          <button 
            @click="addToCart(product)" 
            class="add-to-cart-btn">Sepete Ekle</button>
        </div>
      </div>
    </div>

   
    <div v-if="cartItems.length > 0">
      <div v-for="(item, index) in cartItems" :key="item.id" class="cart-item">
        <div class="item-details">
          <img :src="item.image" alt="Product Image" class="product-image" />
          <div class="product-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <div class="item-price">₺{{ item.price.toFixed(2) }}</div>
          </div>
        </div>
        <div class="item-actions">
          <button @click="removeFromCart(index)" class="remove-btn">Sil</button>
        </div>
      </div>

   
      <div class="cart-summary">
        <div class="total-price">
          <strong>Toplam Fiyat: ₺{{ totalPrice.toFixed(2) }}</strong>
        </div>
        <button @click="confirmCart" class="confirm-btn">Sepeti Onayla</button>
      </div>
    </div>

    
    <div v-else class="empty-cart">
      <p>Sepetinizde ürün bulunmamaktadır. Alışverişe başlamak için <a href="/shop">buraya tıklayın.</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
   
      availableProducts: [
        { id: 1, name: "U.S. Polo Assn", description: "VANCE 4PR Siyah Erkek Sneaker", price: 1899.99, image: "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-06/10/101812540_f2.jpg?w=600" },
        { id: 2, name: "İnci", description: "INCI HERSON.K 4PR Siyah Kadın Düz Bot", price: 1399.99, image: "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-05/29/101922875_f2.jpg?w=600" },
        { id: 3, name: "Lumberjack", description: "OLIVER 4PR Bej Kadın Outdoor Bot", price: 2599.99, image: "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-10/11/101783596_f2-1728662120.JPG?w=600" }
      ],
      cartItems: [
        { id: 4, name: "Kinetix", description: "ARCTIC PU KRK HI 4PR Siyah Erkek Outdoor Bot", price: 1099.99, image: "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-07/29/101744995_f2.jpg?w=600" }
      ]
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
   
    addToCart(product) {
      this.cartItems.push(product);
    },
    
   
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    
    confirmCart() {
      if (this.cartItems.length > 0) {
        alert("Sepetiniz başarıyla onaylandı!");
        this.cartItems = []; 
      } else {
        alert("Sepetinizde ürün bulunmamaktadır.");
      }
    }
  }
};
</script>

<style scoped>
.cart-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1, h2 {
  font-size: 24px;
  color: #333;
}

.add-product-section {
  margin-bottom: 30px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-item {
  flex: 1 1 calc(33.333% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
}

.product-image {
  width: 150px; 
  height: 150px; 
  object-fit: cover; 
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.add-to-cart-btn {
  background-color: #ff6600;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}

.add-to-cart-btn:hover {
  background-color: #e65c00;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.item-details {
  display: flex;
}

.item-price {
  font-size: 18px;
  font-weight: bold;
  color: #ff6600;
}

.item-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.remove-btn {
  background-color: #ff6600;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.remove-btn:hover {
  background-color: #e65c00;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 18px;
}

.confirm-btn {
  background-color: #ff6600;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.confirm-btn:hover {
  background-color: #e65c00;
}

.empty-cart {
  text-align: center;
  font-size: 16px;
  color: #777;
}

.empty-cart a {
  color: #ff6600;
  text-decoration: none;
}

.empty-cart a:hover {
  text-decoration: underline;
}
</style>
