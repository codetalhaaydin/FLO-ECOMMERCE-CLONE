<template>
  <div class="cart-page">
    <h1>Sepetim</h1>

    <div class="add-product-section">
      <h2>Yeni Ürün Ekle</h2>
      <div class="product-list">
        <div
          v-for="(product, index) in availableProducts"
          :key="index"
          class="product-card"
        >
          <div class="badge-container">
            <span class="badge">Yeni Sezon</span>
          </div>
          <img :src="product.image" alt="Product Image" class="product-image" />
          <h3 class="product-title">{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <div class="price-section">
            <span class="product-price">₺{{ product.price.toFixed(2) }}</span>
          </div>
          <button @click="cartStore.addToCart(product)" class="add-to-cart-btn">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>

    <div v-if="cartStore.loading">Yükleniyor...</div>
    <div v-else-if="cartStore.cartItems.length > 0">
      <div v-for="(item, index) in cartStore.cartItems" :key="item.id" class="cart-item">
        <div class="item-details">
          <img :src="item.image" alt="Product Image" class="product-image" />
          <div class="product-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <div class="item-price">₺{{ item.price.toFixed(2) }}</div>
          </div>
        </div>
        <div class="item-actions">
          <button @click="cartStore.removeFromCart(item.id)" class="remove-btn">
            Sil
          </button>
        </div>
      </div>

      <div class="cart-summary">
        <div class="total-price">
          <strong
            >Toplam Fiyat: ₺{{ cartStore.totalPrice.toFixed(2) }}</strong
          >
        </div>
        <button @click="cartStore.confirmCart" class="confirm-btn">
          Sepeti Onayla
        </button>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p>
        Sepetinizde ürün bulunmamaktadır. Alışverişe başlamak için
        <a href="/shop">buraya tıklayın.</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/store/cart';

interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default defineComponent({
  setup() {
    const cartStore = useCartStore();

    return {
      cartStore,
    };
  },
  data() {
    return {
      availableProducts: [
        {
          id: '1', // string id
          name: "U.S. Polo Assn",
          description: "VANCE 4PR Siyah Erkek Sneaker",
          price: 1899.99,
          image:
            "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-06/10/101812540_f2.jpg?w=600",
        },
        {
          id: '2', // string id
          name: "İnci",
          description: "INCI HERSON.K 4PR Siyah Kadın Düz Bot",
          price: 1399.99,
          image:
            "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-05/29/101922875_f2.jpg?w=600",
        },
        {
          id: '3', // string id
          name: "Lumberjack",
          description: "OLIVER 4PR Bej Kadın Outdoor Bot",
          price: 2599.99,
          image:
            "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-10/11/101783596_f2-1728662120.JPG?w=600",
        },
      ] as Product[],
    };
  },
  mounted() {
    this.cartStore.getCartItems();
  },
});
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
  margin-bottom: 100px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}

.product-card {
  flex: 1 1 calc(30% - 20px);
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
}

.badge {
  background-color: #f2f2f2;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  color: #000;
}

.product-image {
  width: 220px;
  height: 350px;
  object-fit: OVERLAY;
  margin-bottom: 0px;
}

.product-title {
  font-size: 19px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 2px;
}

.product-description {
  font-size: 15px;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
}

.price-section {
  font-size: 16px;
  font-weight: bold;
  color: #ff6600;
  margin-bottom: 10px;
}

.add-to-cart-btn {
  background-color: #ff6600;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;
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
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 25px;
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