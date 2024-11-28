<template>
  <div class="special-offers">
    <h2>Özel Teklifler</h2>
    <p>İndirimli ürünler ve fırsatlar burada yer almakta!</p>
    <div class="offer-item" v-for="offer in offers" :key="offer.id">
      <img :src="offer.image" alt="Offer Image" />
      <h3>{{ offer.name }}</h3>
      <p>{{ offer.description }}</p>
      <button>Satın Al</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialOffers',
  data() {
    return {
      offers: [
        { id: 1, name: 'Ürün 1', description: 'Harika indirim', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Ürün 2', description: 'Şimdi al, %50 indirim!', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Ürün 3', description: 'Fırsatları kaçırma', image: 'https://via.placeholder.com/150' },
      ],
    };
  },
};
</script>

<style scoped>
.special-offers {
  background-color: #f9f9f9;
  padding: 20px;
}

.offer-item {
  background-color: #fff;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.offer-item img {
  width: 100px;
  height: 100px;
}

.offer-item h3 {
  margin: 10px 0;
}

.offer-item button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.offer-item button:hover {
  background-color: #0056b3;
}
</style>
