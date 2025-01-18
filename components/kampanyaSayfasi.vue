<template>
  <div class="promo-container">
    <div class="tabs-container">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab"
        :class="{ active: selectedTab === tab }"
        class="tab-button"
      >
        {{ tab }}
      </button>
    </div>
    <div class="promo-banner">
      <h1 class="promo-header">
        Binlerce Üründe Kaçırılmayacak Fırsatlar FLO'da!
      </h1>
      <div class="promo-offers">
        <div
          v-for="campaign in filteredCampaigns"
          :key="campaign.id"
          class="offer-card"
        >
          <img
            :src="campaign.image"
            :alt="campaign.title"
            class="promo-image"
          />
          <h2 class="offer-title">{{ campaign.title }}</h2>
          <p class="offer-details">{{ campaign.date }}</p>
          <button @click="showDetails(campaign)" class="offer-button">
            <span v-if="campaign.buttonText">
              {{ campaign.buttonText }}
            </span>
            <span v-else>
              {{ selectedTab === 'Marka İş Birlikleri' ? 'İncele' : (selectedTab === 'Kredi Kartı Kampanyaları' ? 'Kampanya Detayları' : 'ALIŞVERİŞE BAŞLA') }}
            </span>
          </button>
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
import { defineComponent, ref, computed } from "vue";

interface Campaign {
  id: number;
  image: string;
  title: string;
  date: string;
  details: string;
  type: string;
  buttonText?: string;
}

export default defineComponent({
  name: "PromoComponent",
  setup() {
    const selectedCampaign = ref<Campaign | null>(null);
    const selectedTab = ref<string>("FLO.com.tr Kampanyaları");
    const tabs = ["FLO.com.tr Kampanyaları", "Marka İş Birlikleri", "Kredi Kartı Kampanyaları"];

    const campaigns = [
      {
        id: 1,
        image:
          "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/25-01/17/kampanyalar-global-2000-800-1737138265.jpg.webp?w=768",
        title: "DÜNYACA ÜNLÜ MARKALARDA 2000 TL VE ÜZERİ ALIŞVERİŞİNİZE 800 TL İNDİRİM",
        date: "17/01/2025-20/01/2025 tarihleri arasında geçerlidir.",
        details: "Dünyaca ünlü markalarda 2000 TL ve üzeri alışverişinize 800 TL indirim.",
        type: "FLO.com.tr Kampanyaları",
      },
      {
        id: 2,
        image:
          "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-12/06/kampanyalar-kargo-bedava-1733486477.jpg.webp?w=768",
        title: "300 TL ve Üzeri Alışverişlerde KARGO BEDAVA",
        date: "17/01/2025-20/01/2025 tarihleri arasında geçerlidir.",
        details: "300 TL ve üzeri alışverişlerde kargo bedava.",
        type: "FLO.com.tr Kampanyaları",
      },
      {
        id: 3,
        image:
          "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-12/06/kampanyalar-kargo-bedava-1733486477.jpg.webp?w=768",
        title: "300 TL ve Üzeri Alışverişlerde KARGO BEDAVA",
        date: "15/01/2025-16/01/2025 tarihleri arasında geçerlidir.",
        details: "300 TL ve üzeri alışverişlerde kargo bedava.",
        type: "FLO.com.tr Kampanyaları",
      },
      {
        id: 4,
        image:
          "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/25-01/15/crm-pop-up-15-1736931957.jpg.webp?w=768",
        title: "Üyeliğe Özel Seçili Ürünlerde %15",
        date: "",
        details: "Üyeliğe özel seçili ürünlerde %15 indirim.",
        type: "FLO.com.tr Kampanyaları",
      },
      {
        id: 5,
        image:
          "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-01/11/flo-fitty-1704961785.png.webp?w=768",
        title: "Fitty'den FLO Müşterilerine Özel",
        subtitle: "<b>TOPLAM 150 TL İNDİRİM</b>",
        date: "05/01/2024-08/03/2024 tarihleri arasında geçerlidir.",
        details:
          "Fitty'den FLO müşterilerine özel toplam 150 TL indirim. 30 TL, 50 TL ve 70 TL'lik üç ayrı kupon şeklinde.",
        type: "Marka İş Birlikleri",
      },
      {
        id: 6,
        image:
          "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-03/04/crm-akbank-1709556191.jpg.webp?w=768",
        title: "300 TL İNDİRİM HEDİYE",
        subtitle:
          "Akbank Mobil'den <b>1039FL0300</b> koduyla ilk kez müşteri olanlar<br> 300 TL FLO indirim kodu kazanıyor.",
        date: "01/03/2024-30/04/2024 tarihleri arasında geçerlidir.",
        details: "Akbank Mobil'den 1039FL0300 koduyla ilk kez müşteri olanlar 300 TL FLO indirim kodu kazanıyor.",
        type: "Kredi Kartı Kampanyaları",
      },
    ] as Campaign[];

    const filteredCampaigns = computed(() => {
      return campaigns.filter((c) => c.type === selectedTab.value);
    });

    const showDetails = (campaign: Campaign) => {
      selectedCampaign.value = campaign;
    };

    const closeDetails = () => {
      selectedCampaign.value = null;
    };

    return {
      selectedCampaign,
      campaigns,
      showDetails,
      closeDetails,
      selectedTab,
      tabs,
      filteredCampaigns,
    };
  },
});
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}

.promo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
}

.tabs-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tab-button {
  background: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-weight: 600;
}

.tab-button:hover {
  background: #e5e7eb;
}

.tab-button.active {
  background: #fd6820;
  color: #fff;
}

.promo-banner {
  text-align: center;
  max-width: 1200px;
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
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.promo-header {
  font-size: 28px;
  color: #fd6820;
  margin-bottom: 20px;
  font-weight: bold;
}

.promo-offers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
}

.offer-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
}

.offer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.offer-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}

.offer-details {
  font-size: 14px;
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
  font-size: 14px;
  font-weight: 600;
  width: 100%;
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
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}

.promo-description p {
  font-size: 14px;
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