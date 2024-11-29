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
              :class="{'bg-gray-100 text-primary': selectedCategory === category}"
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
<div v-else-if="selectedCategory === 'İADE'">
  <h2 class="text-lg font-semibold mb-2">İade Süreci</h2>
  <p>İade işlemleri için ürünün orijinal ambalajında ve kullanılmamış olması gerekmektedir. İade talebinizi, müşteri hizmetlerimiz üzerinden iletebilirsiniz. Detaylı bilgiler için "İade Politikamız" sayfamızı ziyaret edin.</p>

  <h2 class="text-lg font-semibold mb-2">İade Politikanız Nedir?</h2>
  <ol class="list-decimal list-inside mt-4 space-y-2">
    <li>Satıcısı FLO olan ürünler için iade süresi fatura tarihi itibari ile 30 gündür.</li>
    <li>Diğer satıcı firmalardan aldığınız ürünlerde ise iade süresi 14 ve 30 gün olarak değişiklik gösterebilir.</li>
    <li>Ürünlerinizi ÜCRETSİZ iade edebilmek için iade kargo kodu almanız gerekir. İade kargo kodu almak için “İade işlemini nasıl yapabilirim?” bölümündeki adımları takip edin.</li>
    <li>Ürünlerinizi iade adımında gösterilen kargo firması aracılığı ile iade edebilirsiniz.</li>
    <li>Tek kullanımlık ürünler ile hızlı bozulan veya son kullanma tarihi geçme ihtimali olan ürünlerin iadesi kabul edilmez.</li>
    <li>Kozmetik/kişisel bakım ve iç giyim ürünleri, mayo, bikini gibi ürünlerin iadesi ancak şu şartlarda kabul edilir:
      <ul class="list-inside mt-2">
        <li>Ambalajı açılmamış</li>
        <li>Denenmemiş</li>
        <li>Bozulmamış</li>
        <li>Kullanılmamış olmaları halinde iade edilebilir.</li>
      </ul>
    </li>
    <li>Ürünler kullanılmış, yıpranmış ya da yıkanmış bir şekilde ulaşırsa size geri gönderilecektir. Bu durumda ücret iadesi yapılmayacaktır.</li>
  </ol>
</div>

            <div v-else-if="selectedCategory === 'HESABIM'">
              <h2 class="text-lg font-semibold mb-2">Hesap Oluşturma</h2>
              <p>FLO hesabı oluşturmak için ana sayfanın üst kısmındaki "Hesap Oluştur" seçeneğine tıklayın ve kişisel bilgilerinizi girin. Hesabınız oluşturulduktan sonra, siparişlerinizi daha kolay takip edebilir ve kampanyalardan faydalanabilirsiniz.</p>

              <h2 class="text-lg font-semibold mt-6 mb-2">Şifremi unuttum, ne yapmalıyım?</h2>
              <p>Şifrenizi unuttuysanız, giriş ekranındaki "Şifremi Unuttum" seçeneğine tıklayarak e-posta adresinizi girin. Şifrenizi sıfırlamak için talimatlar e-posta adresinize gönderilecektir.</p>
            </div>
            <div v-else-if="selectedCategory === 'E-BÜLTEN'">
              <h2 class="text-lg font-semibold mb-2">E-bültene nasıl abone olabilirim?</h2>
              <p>FLO'nun kampanyaları ve fırsatları hakkında bilgi almak için, ana sayfanın alt kısmındaki "E-bültene Abone Ol" bölümüne e-posta adresinizi girin. Böylece tüm güncel haberlerden anında haberdar olabilirsiniz.</p>
            </div>
            <div v-else-if="selectedCategory === 'ÖDEME'">
              <h2 class="text-lg font-semibold mb-2">Ödeme Yöntemleri</h2>
              <p>FLO, kredi kartı, banka kartı, havale/EFT ve kapıda ödeme gibi çeşitli ödeme seçenekleri sunmaktadır. Sipariş sırasında ödeme yöntemlerini seçebilirsiniz. Ayrıca, ödeme işleminizde herhangi bir sorun yaşarsanız, müşteri hizmetleriyle iletişime geçebilirsiniz.</p>
            </div>
            <div v-else-if="selectedCategory === 'FATURA'">
              <h2 class="text-lg font-semibold mb-2">Faturamı nasıl alabilirim?</h2>
              <p>Fatura bilgilerinize, "Hesabım" bölümünden ulaşabilirsiniz. Siparişinizle birlikte fatura e-posta adresinize gönderilecektir. Ayrıca siparişlerim sayfasında da geçmiş siparişlerinizin faturalarına ulaşabilirsiniz.</p>
            </div>
            <div v-else-if="selectedCategory === 'MAĞAZADAN TESLİMAT'">
              <h2 class="text-lg font-semibold mb-2">Mağazadan Teslimat Nasıl Yapılır?</h2>
              <p>Mağazadan teslimat, siparişinizi seçtiğiniz mağazadan almanızı sağlar. Siparişinizi tamamladıktan sonra mağazadan teslimat seçeneğini tercih edebilirsiniz. Mağaza stok durumu ve teslimat süreleri hakkında bilgi almak için mağaza ile iletişime geçebilirsiniz.</p>
            </div>
            <div v-else-if="selectedCategory === 'flo.com.tr HAKKINDA'">
              <h2 class="text-lg font-semibold mb-2">flo.com.tr Hakkında</h2>
              <p>flo.com.tr, Türkiye'nin önde gelen ayakkabı ve aksesuar perakendecilerinden biridir. Türkiye genelindeki mağazalarımızdan ve çevrimiçi platformumuzdan geniş bir ürün yelpazesiyle hizmet vermektedir. Misyonumuz, müşterilerimize kaliteli ve şık ürünleri en uygun fiyatlarla sunmaktır.</p>
            </div>
            <div v-else>
              <h2 class="text-lg font-semibold mb-2">Kargo Bilgileri</h2>
  <p>Siparişiniz onaylandıktan sonra belirtilen teslimat süresi içerisinde adresinize gönderilecektir. Kargo ve teslimat süreci ile ilgili detaylar aşağıda yer almaktadır.</p>

  <h2 class="text-lg font-semibold mt-6 mb-2">Kargo ve Teslimat Süreci nasıldır?</h2>
  <ol class="list-decimal list-inside mt-4 space-y-2">
    <li>Siparişiniz onaylandıktan sonra, kargo firması tarafından belirlenen teslimat süresi içinde ürününüz adresinize gönderilecektir.</li>
    <li>Genellikle, standart teslimat süresi 2-5 iş günü arasındadır. Teslimat süresi, kargonun sevk edildiği şehre bağlı olarak değişiklik gösterebilir.</li>
    <li>Farklı teslimat seçenekleri sunulmaktadır, örneğin hızlı teslimat veya mağazadan teslim al seçeneği gibi.</li>
  </ol>

  <h2 class="text-lg font-semibold mt-6 mb-2">Kargo Ücretleri nedir?</h2>
  <ol class="list-decimal list-inside mt-4 space-y-2">
    <li>Kargo ücreti, siparişinizin toplam tutarına, teslimat adresinize ve seçtiğiniz kargo seçeneğine bağlı olarak değişiklik gösterebilir.</li>
    <li>Yerli teslimatlar için kargo ücreti genellikle 10 TL civarındadır, ancak belirli kampanyalarla ücretsiz kargo avantajlarından faydalanabilirsiniz.</li>
    <li>Uluslararası teslimatlarda, teslimat yapılan ülkeye göre değişen kargo ücretleri uygulanmaktadır.</li>
  </ol>

  <h2 class="text-lg font-semibold mt-6 mb-2">Kargo Takip Bilgisi nasıl öğrenebilirim?</h2>
  <ol class="list-decimal list-inside mt-4 space-y-2">
    <li>Siparişiniz gönderildikten sonra, kargo takip numaranız e-posta adresinize gönderilecektir.</li>
    <li>Bu takip numarasını kullanarak, kargo firmasının web sitesinden teslimat durumunu takip edebilirsiniz.</li>
  </ol>

  <h2 class="text-lg font-semibold mt-6 mb-2">Mağazadan teslimat nasıl yapılır?</h2>
  <ol class="list-decimal list-inside mt-4 space-y-2">
    <li>Mağazadan teslimat seçeneği ile siparişiniz, seçtiğiniz mağazada teslim edilecektir.</li>
    <li>Mağazadan teslimat, mağazaya bağlı olarak birkaç iş günü sürebilir.</li>
    <li>Siparişiniz hazır olduğunda, teslimat için mağazadan bir bildirim alacaksınız.</li>
  </ol>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YardimSayfasi",
  data() {
    return {
      selectedCategory: "SİPARİŞLER",
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
      ],
      icons: {
        "SİPARİŞLER": "fas fa-shopping-cart",
        "İADE": "fas fa-undo",
        "KARGO VE TESLİMAT": "fas fa-shipping-fast",
        "HESABIM": "fas fa-user",
        "E-BÜLTEN": "fas fa-envelope",
        "ÖDEME": "fas fa-credit-card",
        "FATURA": "fas fa-file-invoice",
        "MAĞAZADAN TESLİMAT": "fas fa-store",
        "flo.com.tr HAKKINDA": "fas fa-info-circle"
      }
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
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
