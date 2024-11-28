<template>
  <footer class="footer">
      <div class="footer-container">
          <!-- Customer Services Section -->
          <div class="footer-section">
              <h4>Müşteri Hizmetleri</h4>
              <ul>
                  <li><a href="#">Kolay İade</a></li>
                  <li><a href="#">Sıkça Sorulan Sorular</a></li>
                  <li><a href="#">İade ve Değişim</a></li>
                  <li><a href="#">Güvenli Alışveriş Kılavuzu</a></li>
                  <li><a href="#">Tıkla Gel Al</a></li>
                  <li><a href="#">Ayakkabı Bakım Rehberi</a></li>
                  <li><a href="#">Fotomic</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Mobil Uygulamalar</a></li>
                  <li><a href="#">Çerez Ayarları</a></li>
              </ul>
          </div>

          <!-- Follow Us Section -->
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

          <!-- Additional Services Section -->
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

      <!-- Payment and Apps Section -->
      <div class="footer-bottom">
          <div class="payment-options">
              <img src="https://www.flo.com.tr/pub/assets/flo-v2/images/footer-bankcard.png" alt="payment 1 " />
              <img src="https://www.flo.com.tr/pub/assets/flo-v2/images/footer-payment_2.png" alt="payment 2 " />
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

<script>
export default {}
</script>

<style scoped>
.footer {
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
  padding: 20px 40px;
  font-size: 14px;
  color: #333;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 10px;
}

.footer-section h4 {
  font-family: Roboto, sans-serif;
  font-size: 18px;
  letter-spacing: -0.25px;
  line-height: 25.92px;
  text-decoration: none solid rgb(0, 0, 0);
  vertical-align: top;
  word-spacing: 0px;
  color: #000000;
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
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
  font-family: Roboto, sans-serif;
  font-size: 16px;
  letter-spacing: -0.25px;
  text-decoration: none solid rgb(94, 94, 94);
  text-align: left;
  vertical-align: top;
  word-spacing: 0px;
  color: #5E5E5E;
  background-color: #FFFFFF;
  display: inline-block;
  height: 51.7143px;
  width: 166.982px;
  margin: 0 0 0 30px;
  padding: 20px 0 6px 5px;
  border-bottom: 2px solid #000000;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.social-media li {
  display: flex;
  align-items: center;
}

.footer-bottom {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #ddd;
}

.payment-options img,
.apps-links img {
  height: 30px;
  margin: 0 10px;
}
</style>
