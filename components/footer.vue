<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h4>Müşteri Hizmetleri</h4>
        <ul class="grid-layout">
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
        <ul class="social-media">
          <li><a href="#">Flo Facebook</a></li>
          <li><a href="#">Flo X</a></li>
          <li><a href="#">Flo Pinterest</a></li>
          <li><a href="#">Flo Instagram</a></li>
          <li><a href="#">Flo Youtube</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>FLO Pazaryeri</h4>
        <ul>
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
        <img src="https://www.flo.com.tr/pub/assets/flo-v2/images/footer-bankcard.png" alt="Bank Cards" />
        <img src="https://www.flo.com.tr/pub/assets/flo-v2/images/footer-payment_2.png" alt="Payment Methods" />
      </div>
      <div class="apps-links">
        <a href="#"><img src="https://www.flo.com.tr/pub/assets/flo-v2/images/google_play.svg" alt="Google Play" /></a>
        <a href="#"><img src="https://www.flo.com.tr/pub/assets/flo-v2/images/app_store.svg" alt="App Store" /></a>
        <a href="#"><img src="https://www.flo.com.tr/pub/assets/flo-v2/images/app_gallery.svg" alt="App Gallery" /></a>
      </div>
      <p>&copy; 2024 FLO.COM.TR. TÜM HAKLARI SAKLIDIR.</p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  background-color: #f8f8f8;
  padding: 20px 40px;
  font-family: Roboto, sans-serif;
  color: #333;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Footer Sections */
.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 10px;
}

.footer-section h4 {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin: 5px 0;
}

.footer-section ul li a {
  text-decoration: none;
  color: #5e5e5e;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #000;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.social-media li {
  margin: 5px 0;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.payment-options img,
.apps-links img {
  height: 30px;
  margin: 0 10px;
}
</style>
