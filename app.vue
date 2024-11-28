<template>
  <div class="home">
    <div class="sidebar">
      <img src="https://www.flo.com.tr/pub/assets/flo-v2/images/flo-logo.svg" alt="Flo Logo" class="logo" />
      
      <!-- Sidebar Buttons with Updated Names -->
      <button class="sidebar-button" @click="updateState(0)">Header</button>
      <button class="sidebar-button" @click="updateState(1)">Özel Teklifler</button>
      <button class="sidebar-button" @click="updateState(2)">Footer</button>
      <button class="sidebar-button" @click="updateState(3)">Giriş Sayfası</button>
      <button class="sidebar-button" @click="updateState(4)">Sepet Sayfası</button>
      <button class="sidebar-button" @click="updateState(5)">Kategori Sayfası (Filtreleme Sayfası)</button>
      <button class="sidebar-button" @click="updateState(6)">Yardım Sayfası</button>
      <button class="sidebar-button" @click="updateState(7)">İletişim Sayfası</button>
      <button class="sidebar-button" @click="updateState(8)">Kampanya Sayfası</button>
      <button class="sidebar-button" @click="updateState(9)">Ayakkabı Bakım Rehberi Sayfası</button>

      <span>Şuan ki index: {{ state }}</span>
    </div>
    
    <!-- Main Sections Render Based on State -->
    <div class="main-section" v-if="state === 0">
      <Header />
    </div>
    <div class="main-section" v-if="state === 1">
      <SpecialOffers />
    </div>
    <div class="main-section" v-if="state === 2">
      <Footer />
    </div>
    <div class="main-section" v-if="state === 3">
      <GirisSayfasi />
    </div>
    <div class="main-section" v-if="state === 4">
      <SepetSayfasi />
    </div>
    <div class="main-section" v-if="state === 5">
      <KategoriSayfasi />
    </div>
    <div class="main-section" v-if="state === 6">
      <YardimSayfasi />
    </div>
    <div class="main-section" v-if="state === 7">
      <IletisimSayfasi />
    </div>
    <div class="main-section" v-if="state === 8">
      <KampanyaSayfasi />
    </div>
    <div class="main-section" v-if="state === 9">
      <AyakkabiBakimRehberiSayfasi />
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import SpecialOffers from "./components/specialOffers.vue";
import Footer from "./components/footer.vue";
import GirisSayfasi from "./components/girisSayfasi.vue";
import SepetSayfasi from "./components/sepetSayfasi.vue";
import KategoriSayfasi from "./components/kategoriSayfasi.vue";
import YardimSayfasi from "./components/yardimSayfasi.vue";
import IletisimSayfasi from "./components/iletisimSayfasi.vue";
import KampanyaSayfasi from "./components/specialOffers.vue";
import AyakkabiBakimRehberiSayfasi from "./components/ayakkabiBakimRehberiSayfasi.vue";

export default {
  data() {
    return {
      state: 0, // Başlangıçta 0. indexi seçili
    };
  },
  methods: {
    // state'i değiştirecek method
    updateState(index) {
      this.state = index;
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: white;
  padding: 20px;
  border-right: 2px solid #ddd;
}

.logo {
  display: block;
  margin-bottom: 30px;
  width: 100%;
  max-width: 150px;
}

.sidebar-button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
}

.sidebar-button:hover {
  background-color: #e65c00;
}

.main-section {
  flex-grow: 1;
  padding: 20px;
  background-color: #f9f9f9;
}

span {
  font-size: 14px;
  margin-top: 10px;
  display: block;
}
</style>
