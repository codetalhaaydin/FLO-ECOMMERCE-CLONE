<template>
  <div>
    <header class="main-header">

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
        <button @click="openLoginPopup" class="action-button">
          <i class="fas fa-user"></i>
          <span>Giriş Yap</span>
        </button>
        <button @click="toggleCartPopup" class="cart-button">
          <i class="fas fa-shopping-cart"></i> Sepetim
        </button>
      </div>
    </header>

    <!-- Cart Popup -->
    <div v-if="showCartPopup" class="cart-popup-overlay">
      <div class="cart-popup">
        <!-- Main Cart Section -->
        <div v-if="!showProductSelection" class="cart-main">
          <header class="cart-header">
            <h2><i class="fas fa-shopping-cart"></i> Alışveriş Sepeti</h2>
            <span class="item-count">({{ cartItems.length }} Ürün)</span>
          </header>

          <div v-if="cartItems.length > 0" class="cart-content">
            <ul class="cart-items-list">
              <li v-for="item in cartItems" :key="item.id" class="cart-item">
                <div class="item-image-container">
                  <img :src="item.image" :alt="item.name" class="cart-item-image" />
                  <div class="image-overlay">
                    <button @click="removeItemFromCart(item.id)" class="remove-item-btn" title="Ürünü Kaldır">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <div class="cart-item-details">
                  <h3>{{ item.name }}</h3>
                  <div class="price-section">
                    <span class="price">₺{{ item.price.toFixed(2) }}</span>
                    <div class="quantity-controls">
                      <button class="qty-btn"><i class="fas fa-minus"></i></button>
                      <span class="qty">1</span>
                      <button class="qty-btn"><i class="fas fa-plus"></i></button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div class="cart-summary">
              <div class="summary-details">
                <div class="summary-row">
                  <span>Ara Toplam:</span>
                  <span>₺{{ totalPrice.toFixed(2) }}</span>
                </div>
                <div class="summary-row">
                  <span>Kargo:</span>
                  <span class="free-shipping">Ücretsiz</span>
                </div>
                <div class="summary-row total">
                  <span>Toplam:</span>
                  <span>₺{{ totalPrice.toFixed(2) }}</span>
                </div>
              </div>
              <button class="checkout-btn">
                <i class="fas fa-lock"></i> Güvenli Ödeme
              </button>
            </div>
          </div>

          <div v-else class="empty-cart">
            <i class="fas fa-shopping-basket empty-cart-icon"></i>
            <p>Sepetiniz şu an boş</p>
            <button class="continue-shopping" @click="showProductSelection = true">
              Alışverişe Başla
            </button>
          </div>
        </div>

        <!-- Product Selection Section -->
        <div v-if="showProductSelection" class="product-selection">
          <header class="product-header">
            <h2><i class="fas fa-store"></i> Ürünler</h2>
            <button class="back-btn" @click="showProductSelection = false">
              <i class="fas fa-arrow-left"></i> Sepete Dön
            </button>
          </header>

          <div class="product-grid">
            <div v-for="product in availableProducts" 
                 :key="product.id" 
                 class="product-card"
                 :class="{ 'hover-effect': true }">
              <div class="product-image-wrapper">
                <img :src="product.image" :alt="product.name" />
                <div class="quick-add">
                  <button @click="addItemToCart(product)" class="quick-add-btn">
                    <i class="fas fa-plus"></i> Sepete Ekle
                  </button>
                </div>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
                <span class="price">₺{{ product.price.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>

        <button class="close-popup-btn" @click="toggleCartPopup" title="Kapat">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <!-- Login Popup -->
    <div v-if="showLoginPopup" class="login-popup-overlay">
      <div class="login-popup">
        <h2>Giriş Yap</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" placeholder="Email" required />
          </div>
          <div class="input-group">
            <label for="password">Şifre</label>
            <input v-model="password" type="password" id="password" placeholder="Şifre" required />
          </div>
          <button type="submit" class="action-button">Giriş Yap</button>
          <button type="button" class="close-button" @click="closeLoginPopup">İptal</button>
        </form>
      </div>
    </div>

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

    <section class="secondary-banners">
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
            <li><a href="#"><i class="fab fa-facebook-f"></i> Flo Facebook</a></li>
            <li><a href="#"><i class="fab fa-twitter"></i> Flo X</a></li>
            <li><a href="#"><i class="fab fa-pinterest-p"></i> Flo Pinterest</a></li>
            <li><a href="#"><i class="fab fa-instagram"></i> Flo Instagram</a></li>
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
import { defineComponent, onMounted, onUnmounted, ref, computed } from 'vue';
import GirisSayfasi from './girisSayfasi.vue';
import SepetSayfasi from './sepetSayfasi.vue';

export default defineComponent({
  name: "Header",
  components: { GirisSayfasi, SepetSayfasi },
  setup() {
    const bannerData = ref([
      { imageUrl: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-12/31/1200x160.png.webp", altText: "1 Alana 1 Bedava" },
      { imageUrl: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-12/02/mplp-slider-web.jpg.webp", altText: "Global İndirim" },
      { imageUrl: "https://floimages.mncdn.com/media/catalog/product/img/banners/25-01/06/1200x160.jpg.webp", altText: "Efsane İndirim Günleri" },
      { imageUrl: "https://floimages.mncdn.com/media/catalog/product/img/banners/25-01/06/web-slider-pes-in-fiyatina-6-taksit.jpg.webp", altText: "1000 TL İndirim" }
    ]);
    const currentBannerIndex = ref(0);

    const prevBanner = () => {
      currentBannerIndex.value = (currentBannerIndex.value - 1 + bannerData.value.length) % bannerData.value.length;
    };
    const setBanner = (index: number) => { currentBannerIndex.value = index; };
    const nextBanner = () => { currentBannerIndex.value = (currentBannerIndex.value + 1) % bannerData.value.length; };

    let intervalId: number;
    onMounted(() => { intervalId = setInterval(nextBanner, 4000) as unknown as number; });
    onUnmounted(() => { clearInterval(intervalId); });

    const showCartPopup = ref(false);
    const cartItems = ref([
      { id: 1, name: 'Lumberjack', price: 2599.99, image: 'https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-10/11/101783596_f2-1728662120.JPG?w=600' },
      { id: 2, name: 'İnci', price: 1399.99, image: 'https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-05/29/101922875_f2.jpg?w=600' }
    ]);

    const totalPrice = computed(() => cartItems.value.reduce((acc, item) => acc + item.price, 0));
    const toggleCartPopup = () => { showCartPopup.value = !showCartPopup.value; };
    const removeItemFromCart = (id: number) => { cartItems.value = cartItems.value.filter(item => item.id !== id); };

    const showProductSelection = ref(false);
    const availableProducts = ref([
      {
        id: 3,
        name: "Lumberjack",
        description: "Rahat ve şık spor ayakkabı.",
        price: 2599.99,
        image: "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-10/11/101783596_f2-1728662120.JPG?w=600",
      },
      {
        id: 4,
        name: "İnci",
        description: "Şık ve modern bayan ayakkabı.",
        price: 1399.99,
        image: "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-05/29/101922875_f2.jpg?w=600",
      },
      {
        id: 5,
        name: "Nike Air Max",
        description: "Yüksek konforlu spor ayakkabı.",
        price: 3199.99,
        image: "https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/24-09/09/201335649-1-1725880044.jpg?w=600",
      },
    ]);
    
    const addItemToCart = (product: { id: number; name: string; price: number; image: string }) => {
      cartItems.value.push({ ...product });
      showProductSelection.value = false;
    };

    const showLoginPopup = ref(false);
    const email = ref('');
    const password = ref('');

    const openLoginPopup = () => { showLoginPopup.value = true; };
    const closeLoginPopup = () => { showLoginPopup.value = false; };
    const handleLogin = () => {
      console.log("Logging in with:", email.value, password.value);
      closeLoginPopup();
    };

    return {
      bannerData,
      currentBannerIndex,
      nextBanner,
      prevBanner,
      setBanner,
      showLoginPopup,
      email,
      password,
      openLoginPopup,
      closeLoginPopup,
      handleLogin,
      showCartPopup,
      cartItems,
      totalPrice,
      toggleCartPopup,
      removeItemFromCart,
      showProductSelection,
      availableProducts,
      addItemToCart
    };
  },
});

</script>

<style scoped>
/* General Styles */
.main-header {
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  max-height: 600px;
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
  font-family: 'Roboto', sans-serif;
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
  padding: 12px 15px;
  margin-left: 10px;
  border-radius: 5px; /* Yuvarlatılmış köşeler */
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Hafif gölge efekti */
  transition: all 0.3s ease; /* Geçiş efekti */
}

.action-button:hover {
  background-color: #e65500;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.action-button i {
  margin-right: 8px;
  font-size: 1.2em;
}

.user-actions {
  display: flex;
  align-items: center;
}

.cart-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(15px);
}

.cart-popup {
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  width: 550px;
  max-width: 90%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.4s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.cart-popup h2 {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 25px;
  text-align: center;
  color: #333;
}

.cart-items-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.cart-item-image {
  width: 120px;
  height: 180px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 8px;
}

.cart-item-details {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-item-details span {
  font-size: 18px;
  color: #333;
}

.remove-item-btn {
  background-color: #ff6600;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-item-btn:hover {
  background-color: #e65500;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.checkout-btn {
  background-color: #ff6600;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.checkout-btn:hover {
  background-color: #e65500;
  transform: translateY(-2px);
}

.close-popup-btn {
  background-color: #ccc;
  color: #333;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.close-popup-btn:hover {
  background-color: #bbb;
}

.cart-button {
      background-color: #ff6600;
      color: white;
      padding: 12px 15px;
      border: none;
      border-radius: 5px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

.cart-button:hover {
  background-color: #e65500;
  transform: translateY(-2px);
}

.cart-button i {
  margin-right: 8px;
  font-size: 1.2em;
}

.product-selection {
  padding: 20px;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.product-header h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.back-btn {
  background-color: #ff6600;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-btn:hover {
  background-color: #e65500;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: calc(33.333% - 20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-image-wrapper {
  position: relative;
}

.product-image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

.quick-add {
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
}

.product-card:hover .quick-add {
  display: block;
}

.quick-add-btn {
  background-color: #ff6600;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quick-add-btn:hover {
  background-color: #e65500;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.product-info p {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.product-info .price {
  font-size: 16px;
  font-weight: bold;
  color: #ff6600;
}

.login-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease-in-out;
}

/* Popup Box */
.login-popup {
  background-color: white;
  padding: 40px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.login-popup h2 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.login-popup .input-group {
  margin-bottom: 15px;
}

.login-popup label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #666;
}

.login-popup input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.login-popup input:focus {
  border-color: #ff6600;
  outline: none;
}

.login-popup button {
  width: 100%;
  padding: 12px;
  background-color: #ff6600;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.login-popup button:hover {
  background-color: #e65500;
  transform: translateY(-2px);
}

.login-popup .close-button {
  background-color: #ccc;
  color: #333;
}

.login-popup .close-button:hover {
  background-color: #bbb;
}
</style>
