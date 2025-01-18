<template>
  <q-page>
    <div class="contact-container">
      <div class="contact-info">
        <div class="header">
          <span class="header-text">Flo Merkez Ofis</span>
        </div>
        <div class="bottom-line"></div>
        <div class="contact-details">
          <div class="contact-detail">
            <q-icon name="location_on" class="contact-icon" />
            <span class="contact-label">Adres:</span>
            <span class="contact-value">
              Taşocağı Caddesi No:24 Bağcılar 34217<br />İstanbul / Türkiye
            </span>
          </div>
          <div class="contact-detail">
            <q-icon name="email" class="contact-icon" />
            <span class="contact-label">Email:</span>
            <span class="contact-value">flomagazacilik@hs03.kep.tr</span>
          </div>
          <div class="contact-detail">
            <q-icon name="qr_code_2" class="contact-icon" />
            <span class="contact-label">MERSİS Numarası:</span>
            <span class="contact-value">0388023942900019</span>
          </div>
          <div class="contact-detail">
            <q-icon name="store" class="contact-icon" />
            <span class="contact-label">Bağlı Olduğu Odalar:</span>
            <span class="contact-value">İstanbul Ticaret Odası</span>
          </div>
          <div class="contact-detail">
            <q-icon name="layers" class="contact-icon" />
            <span class="contact-label">Sektörel Kuruluşlar:</span>
            <span class="contact-value">ITKIB - İstanbul Tekstil ve Konfeksiyon İhracatçı Birlikleri</span>
          </div>
        </div>
      </div>
      <div class="contact-links">
        <a href="tel:08502903356" class="contact-link">
          <q-icon name="phone" class="contact-link-icon" />
          <span class="contact-link-label">Bizi Arayın</span>
        </a>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactPage",
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
}

.contact-info,
.contact-links {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
}

.header {
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #fd6820;
  text-align: center;
  margin-bottom: 10px;
}

.bottom-line {
  width: 80px;
  height: 4px;
  background-color: #cecece;
  margin: 0 auto 20px auto;
  border-radius: 2px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact-detail {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  transition: transform 0.3s;
}

.contact-detail:hover {
  transform: translateX(10px);
}

.contact-icon {
  font-size: 24px;
  margin-right: 10px;
  color: #fd6820;
}

.contact-label {
  font-weight: 600;
  margin-right: 5px;
  font-family: "Poppins", sans-serif;
}

.contact-value {
  color: #555555;
  font-family: "Poppins", sans-serif;
}

.contact-links {
  display: flex;
  justify-content: center;
}

.contact-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  background-color: #fd6820;
  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.contact-link:hover {
  background-color: #e55d1e;
}

.contact-link-icon {
  font-size: 24px;
  margin-right: 10px;
  color: #fff;
}
</style>
