<template>
  <div class="flex flex-col lg:flex-row gap-8 p-6 bg-gray-50">
    <!-- Sol Menü -->
    <div class="w-full lg:w-1/4">
      <div class="bg-white shadow-lg rounded-lg p-4">
        <h2 class="text-lg font-semibold px-2 py-3 border-b">Sıkça Sorulan Sorular</h2>
        <ul class="mt-4 space-y-3">
          <li v-for="category in categories" :key="category">
            <button
              class="w-full text-left px-4 py-3 hover:bg-gray-200 transition-transform duration-300 flex items-center text-lg font-medium"
              :class="{ 'bg-gray-100 text-primary': selectedCategory === category }"
              @click="selectCategory(category)"
            >
              <span class="mr-3 text-xl" v-if="icons[category]">
                <i :class="icons[category]"></i>
              </span>
              {{ category }}
            </button>
          </li>
        </ul>
      </div>
    </div>
 
    <!-- İçerik Bölümü -->
    <div class="w-full lg:w-3/4">
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h1 class="text-2xl font-bold border-b pb-4 mb-6">{{ selectedCategory }}</h1>
        <transition name="fade" mode="out-in">
          <div :key="selectedCategory">
            <div v-if="selectedCategory === 'SİPARİŞLER'">
              <h2 class="text-lg font-semibold mb-2">Nasıl sipariş oluşturabilirim?</h2>
              <p>Aşağıdaki adımları izleyerek kolayca sipariş oluşturabilirsiniz:</p>
              <ol class="list-decimal list-inside mt-4 space-y-2">
                <li>Satın almak istediğiniz ürünü ve size uygun olacağını düşündüğünüz doğru bedeni seçerek "Sepete Ekle" butonuna tıklayın.</li>
                <li>Sepete ekleme işleminden sonra açılan ekrandan alışverişinize devam edebilir ya da siparişinizi tamamlamak için "Sepete Git" butonuna tıklayabilirsiniz.</li>
                <li>Siparişlerinizde kullanabileceğiniz indirim kuponunuz varsa "Kampanya Kodu / Kupon" alanına yazarak "Uygula" butonuna basın. Sonraki adıma geçmek için "Sepeti Onayla" butonuna basın.</li>
                <li>Teslimat Seçenekleri alanında tercih ettiğiniz teslimat adresini seçtikten sonra ödeme adımına geçebilirsiniz.</li>
                <li>Tercih ettiğiniz ödeme yöntemini seçin ve gerekli bilgileri doldurun.</li>
                <li>"ÖDEMEYİ TAMAMLA" butonuna tıklayın, siparişiniz oluşturuldu!</li>
              </ol>
            </div>
            <!-- Add other category-specific content here -->
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
 
<script lang="ts">
import { defineComponent } from "vue";
 
export default defineComponent({
  name: "YardimSayfasi",
  data() {
    return {
      selectedCategory: "SİPARİŞLER" as string,
      categories: [
        "SİPARİŞLER",
        "İADE",
        "KARGO VE TESLİMAT",
        "HESABIM",
        "E-BÜLTEN",
        "ÖDEME",
        "FATURA",
        "MAĞAZADAN TESLİMAT",
        "flo.com.tr HAKKINDA"
      ] as string[],
      icons: {
        SİPARİŞLER: "fas fa-shopping-cart",
        İADE: "fas fa-undo",
        "KARGO VE TESLİMAT": "fas fa-shipping-fast",
        HESABIM: "fas fa-user",
        "E-BÜLTEN": "fas fa-envelope",
        ÖDEME: "fas fa-credit-card",
        FATURA: "fas fa-file-invoice",
        "MAĞAZADAN TESLİMAT": "fas fa-store",
        "flo.com.tr HAKKINDA": "fas fa-info-circle"
      } as Record<string, string>
    };
  },
  methods: {
    selectCategory(category: string) {
      this.selectedCategory = category;
    }
  }
});
</script>
 
 
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
 
body, h1, h2, p, button, li {
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;
}
 
/***** Geçiş Animasyonları *****/
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
 
/***** Buton Stilleri *****/
button {
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  background-color: #f9f9f9;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.2s;
}
 
button:hover {
  background-color: #e5e7eb;
}
 
button:active {
  background-color: #d1d5db;
  transform: scale(0.98);
}
 
/***** Genel Stil Güncellemeleri *****/
body {
  font-family: 'Poppins', sans-serif;
}
 
h1, h2 {
  font-family: 'Poppins', sans-serif;
  color: #333;
}
 
.text-primary {
  color: #ff6600;
}
 
.bg-primary {
  background-color: #ff6600;
  color: white;
}
 
.text-gray-100 {
  color: #f1f1f1;
}
 
.text-gray-200 {
  color: #e5e5e5;
}
 
/***** Sol Menü ve İçerik Bölümü Stilleri *****/
.bg-white {
  width: 90%;
  margin: 0 auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
}
 
.bg-white:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
 
.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>