<template>
  <div class="promo-container">
    <div class="promo-banner">
      <h1 class="promo-header">Binlerce Üründe Kaçırılmayacak Fırsatlar FLO'da!</h1>
      <div class="promo-offers">
        <div
          v-for="campaign in campaigns"
          :key="campaign.id"
          class="offer-card"
        >
          <img :src="campaign.image" :alt="campaign.title" class="promo-image">
          <h2 class="offer-title">{{ campaign.title }}</h2>
          <p class="offer-details">{{ campaign.date }}</p>
          <button @click="showDetails(campaign)" class="offer-button">Kampanya Detayları</button>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="selectedCampaign" class="promo-description">
        <h2>{{ selectedCampaign.title }}</h2>
        <p>{{ selectedCampaign.details }}</p>
        <button @click="closeDetails" class="offer-button">Kapat</button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Campaign {
  id: number;
  image: string;
  title: string;
  date: string;
  details: string;
}

export default defineComponent({
  name: 'PromoComponent',
  data() {
    return {
      selectedCampaign: ref<Campaign | null>(null),
      campaigns: [
        {
          id: 1,
          image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/29/2024-aks-am-kampanyasi-tekli-web-1-alana-1-bedava-10-00.jpg.webp",
          title: "1 ALANA 1 BEDAVA",
          date: "29/11/2024 - 30/11/2024",
          details: "Bu kampanya ile bir ürün aldığınızda ikinci ürünü bedava alabilirsiniz. 29/11/2024 - 30/11/2024 tarihleri arasında geçerlidir."
        },
        {
          id: 2,
          image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/29/flo-efsane-i-ndirim-gu-nleri-web.jpg.webp",
          title: "Efsane Cuma",
          date: "29/11/2024 - 30/11/2024",
          details: "Efsane Cuma indirimleri ile birçok üründe büyük indirimler sizi bekliyor. 29/11/2024 - 30/11/2024 tarihleri arasında geçerlidir."
        },
        {
          id: 3,
          image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/20/2024-ei-g-50yevaran-app.jpg.webp",
          title: "%50 varan indirimler",
          date: "21/11/2024 - 30/11/2024",
          details: "Bu kampanya ile birçok üründe %50'ye varan indirimler sizi bekliyor. 21/11/2024 - 30/11/2024 tarihleri arasında geçerlidir."
        }
      ] as Campaign[]
    };
  },
  methods: {
    showDetails(campaign: Campaign) {
      this.selectedCampaign = campaign;
    },
    closeDetails() {
      this.selectedCampaign = null;
    }
  }
});
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

.promo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
}

.promo-banner {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.promo-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.promo-image:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.promo-header {
  font-size: 32px;
  color: #fd6820;
  margin-bottom: 20px;
  font-weight: bold;
}

.promo-offers {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.offer-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
}

.offer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.offer-title {
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}

.offer-details {
  font-size: 16px;
  color: #777;
  margin-bottom: 20px;
}

.offer-button {
  background: #fd6820;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.offer-button:hover {
  background: #e65b1b;
  transform: scale(1.05);
}

.promo-description {
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-align: left;
}

.promo-description h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}

.promo-description p {
  font-size: 16px;
  color: #777;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
