<template>
  <div class="special-offers-container">
    <header class="text-center py-6 bg-orange-500 text-white">
      <h1 class="text-3xl font-bold">Özel Teklifler</h1>
      <p class="text-lg mt-2">En İyi Fiyatlarla Sezon Ürünlerini Kaçırmayın!</p>
    </header>
 
    <div class="offers-grid">
      <!-- Teklifler Dinamik Olarak Listeleniyor -->
      <div v-for="product in products" :key="product.id" class="offer-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-info">
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-stats">
            <span class="favorites">{{ product.favorites }} kişi favoriledi!</span>
            <span class="reviews">({{ product.reviews }} yorum)</span>
          </div>
          <div class="price-section">
            <span class="old-price">{{ product.oldPrice }} TL</span>
            <span class="new-price">{{ product.newPrice }} TL</span>
            <span class="discount-button">-%{{ product.discount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Ürün veri yapısını tanımlamak için bir interface
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  favorites: number;
  reviews: number;
  oldPrice: string;
  newPrice: string;
  discount: number;
}

export default defineComponent({
  data() {
    return {
      products: [
        {
          id: 1,
          name: "INCI NEVADA 4PR Siyah Erkek Klasik Bot",
          description: "Yeni Sezon, Hakiki Deri",
          image:
            "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-06/24/101923721_f2.jpg?w=600",
          favorites: 2350,
          reviews: 16,
          oldPrice: "2399,99",
          newPrice: "1599,99",
          discount: 33,
        },
        {
          id: 2,
          name: "Art BellaCW23119 3PR",
          description: "Siyah Kadın Postal",
          image:
            "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/23-12/25/101481133_f2.jpg?w=600",
          favorites: 1310,
          reviews: 5,
          oldPrice: "1499,99",
          newPrice: "1199,99",
          discount: 20,
        },
        {
          id: 3,
          name: "ARCTIC PU KRK HI 4PR Siyah Erkek Outdoor Bot",
          description: "Yeni Sezon, Kinetix",
          image:
            "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-07/29/101744995_f2.jpg?w=600",
          favorites: 933,
          reviews: 8,
          oldPrice: "1399,99",
          newPrice: "1099,99",
          discount: 21,
        },
        {
          id: 4,
          name: "Polaris 309185C.Z 4PR Siyah Kadın Postal",
          description: "Yeni Sezon, Polaris",
          image:
            "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-08/13/101915668_f2.jpg?w=600",
          favorites: 1584,
          reviews: 4,
          oldPrice: "1199,99",
          newPrice: "999,99",
          discount: 17,
        },
      ] as Product[],
    };
  },
});
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}
 
/* Genel Stil */
.special-offers-container {
  padding: 20px;
  background-color: #f7f7f7;
}
 
header {
  background-color: #fd6820;
  padding: 20px;
  color: white;
}
 
.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
 
.offer-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}
 
.offer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
 
.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
 
.product-info {
  padding: 20px;
}
 
.product-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
 
.product-description {
  font-size: 14px;
  color: #666;
  margin: 10px 0;
}
 
.product-stats {
  font-size: 14px;
  color: #888;
}
 
.favorites {
  display: block;
}
 
.reviews {
  display: block;
  margin-top: 5px;
}
 
.price-section {
  margin-top: 15px;
}
 
.old-price {
  font-size: 16px;
  text-decoration: line-through;
  color: #888;
}
 
.new-price {
  font-size: 18px;
  font-weight: bold;
  color: #fd6820;
  margin-left: 10px;
}
 
/* İndirim Butonu Tasarımı */
.discount-button {
  display: inline-block;
  padding: 5px 15px;
  margin-top: 10px;
  background-color: rgba(253, 104, 32, 0.3);
  color: #fd6820;
  font-weight: bold;
  border-radius: 25px;
  font-size: 14px;
  text-transform: uppercase;
  transition: background-color 0.3s;
}
 
.discount-button:hover {
  background-color: rgba(253, 104, 32, 0.5);
}
</style>
