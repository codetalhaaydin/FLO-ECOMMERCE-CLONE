<template>
  <div>
    <header class="main-header">
      <div class="header-top-info">
        <div class="info-left">
          <span>Mobil Uygulamayı <b>Hemen İndir</b></span>
        </div>
        <div class="info-right">
          <span>Kuponlarım</span>
          <span>Sipariş Takibi</span>
          <span>Kolay İade</span>
          <span>Yardım</span>
        </div>
      </div>
 
      <div class="header-content">
        <div class="logo">
          <img
            src="https://www.flo.com.tr/pub/assets/flo-v2/images/flo-logo.svg"
            alt="Flo Logo"
          />
        </div>
 
        <nav class="main-navigation">
          <ul>
            <li><a href="#">Kadın</a></li>
            <li><a href="#">Erkek</a></li>
            <li><a href="#">Çocuk</a></li>
            <li><a href="#">Yeni Gelenler</a></li>
            <li><a href="#">Ayakkabı</a></li>
            <li><a href="#">Spor</a></li>
            <li><a href="#">Giyim</a></li>
            <li><a href="#">Markalar</a></li>
          </ul>
        </nav>
 
        <div class="search-bar">
          <input type="text" placeholder="Aradığınız ürünü yazınız" />
          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
 
        <div class="user-actions">
          <router-link to="/girisSayfasi" class="action-button">
            <i class="fas fa-user"></i>
            <span>Giriş Yap</span>
          </router-link>
          <router-link to="/sepetSayfasi" class="action-button">
            <i class="fas fa-shopping-cart"></i>
            <span>Sepetim</span>
          </router-link>
        </div>
      </div>
    </header>
 
    <section class="main-banner">
      <div class="banner-container">
        <div class="banner">
          <img
            :src="bannerData[currentBannerIndex].imageUrl"
            :alt="bannerData[currentBannerIndex].altText"
          />
        </div>
        <div class="indicators">
          <span
            v-for="(banner, index) in bannerData"
            :key="index"
            :class="{ active: index === currentBannerIndex }"
            @click="setBanner(index)"
          ></span>
        </div>
      </div>
    </section>
 
    <section class="main-banner">
      <div class="banner">
        <img
          src="https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/19/flo-efsane-i-ndirim-gu-nleri-web.jpg.webp"
          alt="Efsane İndirim Günleri"
        />
      </div>
      <div class="banner">
        <img
          src="https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/2024-ei-g-tekli-web-3000-1500.jpg.webp"
          alt="1000 TL İndirim"
        />
      </div>
    </section>
 
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h4>Müşteri Hizmetleri</h4>
          <ul class="footer-links">
            <li><a href="#">Kolay İade</a></li>
            <li><a href="#">Kampanyalar</a></li>
            <li><a href="#">Sıkça Sorulan Sorular</a></li>
            <li><a href="#">Mağazalarımız</a></li>
            <li><a href="#">İade ve Değişim</a></li>
            <li><a href="#">Sipariş Takibi</a></li>
            <li><a href="#">Güvenli Alışveriş Kılavuzu</a></li>
            <li><a href="#">İşlem Rehberi</a></li>
            <li><a href="#">Tıkla Gel Al</a></li>
            <li><a href="#">Kişisel Verilerin Korunması</a></li>
            <li><a href="#">Ayakkabı Bakım Rehberi</a></li>
            <li><a href="#">Kurumsal</a></li>
            <li><a href="#">Fotomic</a></li>
            <li><a href="#">İnsan Kaynakları</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">İletişim</a></li>
            <li><a href="#">Mobil Uygulamalar</a></li>
            <li><a href="#">Kullanım Koşulları</a></li>
            <li><a href="#">Çerez Ayarları</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Takip Edin</h4>
          <ul class="footer-links social-links">
            <li>
              <a href="#"><i class="fab fa-facebook-f"></i> Flo Facebook</a>
            </li>
            <li><a href="#"><i class="fab fa-twitter"></i> Flo X</a></li>
            <li>
              <a href="#"><i class="fab fa-pinterest-p"></i> Flo Pinterest</a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram"></i> Flo Instagram</a>
            </li>
            <li><a href="#"><i class="fab fa-youtube"></i> Flo Youtube</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>FLO Pazaryeri</h4>
          <ul class="footer-links">
            <li><a href="#">Kolay İade</a></li>
            <li><a href="#">Kargo Bedava</a></li>
            <li><a href="#">Yardım Merkezi</a></li>
            <li><a href="#">6 Taksit Seçeneği</a></li>
            <li><a href="#">Güvenli Alışveriş</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="payment-options">
          <img
            src="https://www.flo.com.tr/pub/assets/flo-v2/images/footer-bankcard.png"
            alt="Bank Cards"
          />
          <img
            src="https://www.flo.com.tr/pub/assets/flo-v2/images/footer-payment_2.png"
            alt="Payment Methods"
          />
        </div>
        <div class="apps-links">
          <a href="#"
            ><img
              src="https://www.flo.com.tr/pub/assets/flo-v2/images/google_play.svg"
              alt="Google Play"
          /></a>
          <a href="#"
            ><img
              src="https://www.flo.com.tr/pub/assets/flo-v2/images/app_store.svg"
              alt="App Store"
          /></a>
          <a href="#"
            ><img
              src="https://www.flo.com.tr/pub/assets/flo-v2/images/app_gallery.svg"
              alt="App Gallery"
          /></a>
        </div>
        <p class="copyright">&copy; 2024 FLO.COM.TR. TÜM HAKLARI SAKLIDIR.</p>
      </div>
    </footer>
  </div>
</template>
 
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
 
export default defineComponent({
  name: "Header",
  setup() {
    const bannerData = ref([
      {
        imageUrl:
          "https://floimages.mncdn.com/media/catalog/product/img/banners/24-12/31/1200x160.png.webp",
        altText: "1 Alana 1 Bedava",
      },
      {
        imageUrl:
          "https://floimages.mncdn.com/media/catalog/product/img/banners/24-12/02/mplp-slider-web.jpg.webp",
        altText: "Global İndirim",
      },
      {
        imageUrl:
          "https://floimages.mncdn.com/media/catalog/product/img/banners/25-01/06/1200x160.jpg.webp",
        altText: "Efsane İndirim Günleri",
      },
      {
        imageUrl:
          "https://floimages.mncdn.com/media/catalog/product/img/banners/25-01/06/web-slider-pes-in-fiyatina-6-taksit.jpg.webp",
        altText: "1000 TL İndirim",
      },
    ]);
 
    const currentBannerIndex = ref(0);
 
    const prevBanner = () => {
      currentBannerIndex.value =
        (currentBannerIndex.value - 1 + bannerData.value.length) %
        bannerData.value.length;
    };
 
    const setBanner = (index: number) => {
      currentBannerIndex.value = index;
    };
 
    const nextBanner = () => {
      currentBannerIndex.value =
        (currentBannerIndex.value + 1) % bannerData.value.length;
    };
 
    let intervalId: number;
 
    onMounted(() => {
      let intervalId: NodeJS.Timeout;
      intervalId = setInterval(nextBanner, 4000); // Change banner every 4 seconds
    });
 
    onUnmounted(() => {
      let intervalId: NodeJS.Timeout | null = null;
      if (intervalId) {
        clearInterval(intervalId);
      }
    });
 
    return {
      bannerData,
      currentBannerIndex,
      nextBanner,
      prevBanner,
      setBanner,
    };
  },
});
</script>
   
   <style scoped>
   /* General Styles */
   .main-header {
     font-family: Roboto, sans-serif;
     background-color: #fff;
     border-bottom: 1px solid #ddd;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
     padding: 10px 20px;
   }
   
   /* Üst Bilgi Bölümü */
   .header-top-info {
     background-color: #f8f8f8;
     padding: 10px 20px;
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   
   .header-top-info .info-left,
   .header-top-info .info-right {
     font-size: 14px;
   }
   
   .header-top-info .info-left span,
   .header-top-info .info-right span {
     margin-right: 15px;
   }
   
   /* Ana İçerik Bölümü */
   .header-content {
     padding: 10px 20px;
     display: flex;
     align-items: center;
     justify-content: space-between;
   }
   
   /* Logo Stilleri */
   .logo {
     margin-right: 30px;
   }
   
   .logo img {
     height: 50px;
   }
   
   /* Navigasyon Menüsü Stilleri */
   .main-navigation ul {
     list-style: none;
     padding: 0;
     margin: 0;
     display: flex;
   }
   
   .main-navigation li {
     margin-right: 20px;
   }
   
   .main-navigation a {
     text-decoration: none;
     color: #333;
     font-weight: bold;
     font-size: 14px;
   }
   
   .main-navigation a:hover {
     color: #FF6600;
   }
   
   /* Arama Çubuğu Stilleri */
   .search-bar {
     display: flex;
     align-items: center;
   }
   
   .search-bar input {
     border: 1px solid #ddd;
     padding: 8px;
     border-radius: 4px;
     margin-right: 8px;
     width: 300px;
   }
   
   .search-bar button {
     background-color: #FF6600;
     color: white;
     border: none;
     padding: 8px 16px;
     border-radius: 4px;
     cursor: pointer;
   }
   
   .search-bar button:hover {
     background-color: #e65500;
   }
   
   .icons {
     display: flex;
     align-items: center;
   }
   
   .icons i {
     font-size: 20px;
     margin-left: 15px;
     cursor: pointer;
   }
   
   /* Banner Section */
   .main-banner {
     margin-top: 10px;
     display: flex;
     flex-direction: column;
   }
   
   .banner-container {
     position: relative;
     display: flex;
     align-items: center;
     justify-content: center;
     padding: 0 20px;
   }
   
   .banner img {
     width: 100%;
     max-height: 6000px;
     object-fit: cover;
     border-radius: 8px;
     margin-bottom: 7px;
   }
   
   .banner img:hover {
     transform: scale(1.02);
     transition: 0.3s ease;
   }
   
   /* Banner Indicators */
   .indicators {
     position: absolute;
     bottom: 10px;
     display: flex;
     justify-content: center;
     width: 100%;
   }
   
   .indicators span {
     background-color: rgba(255, 255, 255, 0.6);
     width: 10px;
     height: 10px;
     margin: 0 5px;
     border-radius: 50%;
     cursor: pointer;
     transition: background-color 0.3s ease;
   }
   
   .indicators span.active {
     background-color: rgba(255, 255, 255, 1);
   }
   
   /* Footer Stilleri */
   .footer {
     background-color: #f5f5f5;
     padding: 40px 20px;
     font-family: Roboto, sans-serif;
     color: #333;
     margin-top: 20px;
   }
   
   .footer-container {
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
   }
   
   .footer-section {
     flex: 1;
     min-width: 250px;
     margin-bottom: 30px;
   }
   
   .footer-section h4 {
     font-size: 18px;
     font-weight: bold;
     margin-bottom: 15px;
   }
   
   .footer-links {
     list-style: none;
     padding: 0;
     margin: 0;
   }
   
   .footer-links li {
     margin-bottom: 10px;
   }
   
   .footer-links li a {
     color: #666;
     text-decoration: none;
     font-size: 14px;
   }
   
   .footer-links li a:hover {
     color: #333;
   }
   
   .social-links li a {
     display: flex;
     align-items: center;
   }
   
   .social-links li a i {
     margin-right: 8px;
     font-size: 18px;
   }
   
   .footer-bottom {
     display: flex;
     justify-content: space-between;
     align-items: center;
     border-top: 1px solid #ddd;
     padding-top: 20px;
   }
   
   .payment-options img {
     height: 30px;
     margin-right: 10px;
   }
   
   .apps-links {
     display: flex;
   }
   
   .apps-links a {
     margin-right: 10px;
   }
   
   .apps-links img {
     height: 40px;
   }
   
   .copyright {
     font-size: 14px;
     color: #666;
   }
   .action-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ff6600; /* Buton arkaplan rengi */
  color: white; /* Buton yazı rengi */
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px; /* Yuvarlatılmış köşeler */
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Hafif gölge efekti */
  transition: all 0.3s ease; /* Geçiş efekti */
}
 
.action-button:hover {
  background-color: #e65500; /* Hover durumunda arkaplan rengi */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Hover durumunda daha belirgin gölge */
  transform: translateY(-2px); /* Hover durumunda hafif yukarı hareket */
}
 
.action-button i {
  margin-right: 8px;
  font-size: 1.2em;
}
   </style>