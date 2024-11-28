<template>
  <div class="home">
  <div class="sidebar">
  <img src="https://www.flo.com.tr/pub/assets/flo-v2/images/flo-logo.svg" alt="Flo Logo" class="logo" />
  <button class="sidebar-button" @click="updateState(0)">Header</button>
  <button class="sidebar-button" @click="updateState(1)">Özel Teklifler</button>
  <button class="sidebar-button" @click="updateState(2)">Footer</button>
  <button class="sidebar-button" @click="updateState(3)">Önerilenler</button>
  <button class="sidebar-button" @click="updateState(4)">Çok satanlar</button>
  <button class="sidebar-button" @click="updateState(5)">Tüm kategoriler</button>
  <button class="sidebar-button" @click="updateState(6)">Hizmetlerimiz</button>
  <button class="sidebar-button" @click="updateState(7)">Fırsatlar</button>
  <button class="sidebar-button" @click="updateState(8)">Kategori önerileri</button>
  <button class="sidebar-button" @click="updateState(9)">Ürün ilanı</button>
  <span>Şuan ki index: {{ state }}</span>
  </div>
   
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
  <Recomendeds />
  </div>
  <div class="main-section" v-if="state === 4">
  <MostSolds />
  </div>
  <div class="main-section" v-if="state === 5">
  <AllCategories />
  </div>
  <div class="main-section" v-if="state === 6">
  <OurServices />
  </div>
  <div class="main-section" v-if="state === 7">
  <Opportunities />
  </div>
  <div class="main-section" v-if="state === 8">
  <CategoryRecomendation />
  </div>
  <div class="main-section" v-if="state === 9">
  <ProductAdvert />
  </div>
  </div>
  </template>
   
    <script>
    import Header from "./components/header.vue";
    import SpecialOffers from "./components/specialOffers.vue";
    import Footer from "./components/footer.vue";
    import Recomendeds from "./components/recomendeds.vue";
    import MostSolds from "./components/mostSolds.vue";
    import AllCategories from "./components/allCategories.vue";
    import OurServices from "./components/ourServices.vue";
    import Opportunities from "./components/opportunities.vue";
    import CategoryRecomendation from "./components/categoryRecomendation.vue";
    import ProductAdvert from "./components/productAdvert.vue";
   
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