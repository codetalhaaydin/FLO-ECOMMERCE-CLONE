<template>
  <div class="flex flex-col lg:flex-row gap-8 p-6 bg-gray-50">
    <div class="w-full lg:w-1/4">
      <div class="bg-white shadow-lg rounded-lg">
        <h2 class="text-lg font-semibold px-4 py-3 border-b">
          Sıkça Sorulan Sorular
        </h2>
        <ul class="mt-4">
          <li
            v-for="category in categories"
            :key="category"
            class="border-b"
          >
            <button
              class="w-full text-left px-4 py-3 hover:bg-gray-200 transition-transform duration-300 flex items-center text-base font-medium"
              :class="{ 'bg-gray-100 text-primary': selectedCategory === category }"
              @click="selectCategory(category)"
            >
              <span class="mr-3 text-xl" v-if="icons[category]">
                <i :class="icons[category]"></i>
              </span>
              <span>{{ category }}</span>
              <i class="fas fa-chevron-right ml-auto"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-full lg:w-3/4">
      <div class="bg-white shadow-lg rounded-lg p-6">
        <div class="flex justify-between items-center border-b pb-4 mb-6">
          <h1 class="text-2xl font-bold">{{ selectedCategory }}</h1>
        </div>
        <transition name="fade" mode="out-in">
          <div :key="selectedCategory" class="faq-content">
            <div v-if="selectedCategory === 'SİPARİŞLER'">
              <h2 class="text-lg font-semibold mb-2">
                Nasıl sipariş oluşturabilirim?
              </h2>
              <p class="mb-4">
                Aşağıdaki adımları izleyerek kolayca sipariş
                oluşturabilirsiniz:
              </p>
              <ol class="list-decimal list-inside mt-4 space-y-2">
                <li>
                  Satın almak istediğiniz ürünü ve size uygun olacağını
                  düşündüğünüz doğru bedeni seçerek "Sepete Ekle" butonuna
                  tıklayın (Beden seçimi için 'Beden Tablosu
                  bölümümüzden yararlanabilirsiniz.).
                </li>
                <li>
                  Sepete ekleme işleminden sonra açılan ekrandan
                  alışverişinize devam edebilir ya da siparişinizi
                  tamamlamak için "Sepete Git" butonuna tıklayabilirsiniz.
                </li>
                <li>
                  Siparişlerinizde kullanabileceğiniz indirim kuponunuz
                  varsa "Kampanya Kodu / Kupon" alanına yazarak "Uygula"
                  butonuna basın. Sonraki adıma geçmek için "Sepeti
                  Onayla" butonuna basın.
                </li>
                <li>
                  Teslimat Seçenekleri alanında tercih ettiğiniz teslimat
                  adresini seçtikten sonra ödeme adımına geçebilirsiniz.
                </li>
                <li>
                  Tercih ettiğiniz ödeme yöntemini seçin ve gerekli
                  bilgileri doldurun.
                </li>
                <li>
                  "ÖDEMEYİ TAMAMLA" butonuna tıklayın, siparişiniz
                  oluşturuldu!
                </li>
              </ol>
              <div class="mt-6">
                <h2
                  class="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center"
                  @click="toggleQuestion('siparisTakip')"
                >
                  <span>Siparişimi nasıl takip edebilirim?</span>
                  <i
                    :class="{
                      'fas fa-plus': !questions.siparisTakip,
                      'fas fa-minus': questions.siparisTakip,
                    }"
                  ></i>
                </h2>
                <transition name="fade">
                  <p v-if="questions.siparisTakip" class="mb-4">
                    Siparişinizi takip etmek için, hesabınıza giriş
                    yaptıktan sonra "Siparişlerim" bölümüne gidin.
                    Burada, siparişinizin durumunu ve kargo takip
                    bilgilerini görüntüleyebilirsiniz.
                  </p>
                </transition>
              </div>
              <div class="mt-6">
                <h2
                  class="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center"
                  @click="toggleQuestion('magazaSiparisTakip')"
                >
                  <span
                    >Mağazadan oluşturduğum siparişimi nasıl takip
                    edebilirim?</span
                  >
                  <i
                    :class="{
                      'fas fa-plus': !questions.magazaSiparisTakip,
                      'fas fa-minus': questions.magazaSiparisTakip,
                    }"
                  ></i>
                </h2>
                <transition name="fade">
                  <p v-if="questions.magazaSiparisTakip" class="mb-4">
                    Mağazadan oluşturduğunuz siparişinizi takip etmek
                    için, size gönderilen onay e-postasındaki veya SMS'teki
                    takip bağlantısını kullanabilirsiniz. Ayrıca,
                    müşteri hizmetlerimizle iletişime geçerek de
                    siparişinizin durumunu öğrenebilirsiniz.
                  </p>
                </transition>
              </div>
              <div class="mt-6">
                <h2
                  class="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center"
                  @click="toggleQuestion('siparisIptal')"
                >
                  <span>Siparişimi nasıl iptal edebilirim?</span>
                  <i
                    :class="{
                      'fas fa-plus': !questions.siparisIptal,
                      'fas fa-minus': questions.siparisIptal,
                    }"
                  ></i>
                </h2>
                <transition name="fade">
                  <p v-if="questions.siparisIptal" class="mb-4">
                    Siparişinizi iptal etmek için, hesabınıza giriş
                    yaptıktan sonra "Siparişlerim" bölümüne gidin. İptal
                    etmek istediğiniz siparişi seçin ve "Siparişi İptal
                    Et" butonuna tıklayın. Siparişiniz henüz kargoya
                    verilmemişse, iptal işlemi hemen
                    gerçekleştirilecektir.
                  </p>
                </transition>
              </div>
            </div>
            <div v-else-if="selectedCategory === 'İADE'">
              <h2 class="text-lg font-semibold mb-2">İade Süreci</h2>
              <p class="mb-4">
                İade işlemleri için ürünün orijinal ambalajında ve
                kullanılmamış olması gerekmektedir. İade talebinizi,
                müşteri hizmetlerimiz üzerinden iletebilirsiniz.
                Detaylı bilgiler için "İade Politikamız" sayfamızı
                ziyaret edin.
              </p>
              <h2 class="text-lg font-semibold mb-2">
                İade Politikanız Nedir?
              </h2>
              <ol class="list-decimal list-inside mt-4 space-y-2">
                <li>
                  Satıcısı FLO olan ürünler için iade süresi fatura
                  tarihi itibari ile 30 gündür.
                </li>
                <li>
                  Diğer satıcı firmalardan aldığınız ürünlerde ise iade
                  süresi 14 ve 30 gün olarak değişiklik gösterebilir.
                </li>
                <li>
                  Ürünlerinizi ÜCRETSİZ iade edebilmek için iade kargo
                  kodu almanız gerekir. İade kargo kodu almak için “İade
                  işlemini nasıl yapabilirim?” bölümündeki adımları
                  takip edin.
                </li>
                <li>
                  Ürünlerinizi iade adımında gösterilen kargo firması
                  aracılığı ile iade edebilirsiniz.
                </li>
                <li>
                  Tek kullanımlık ürünler ile hızlı bozulan veya son
                  kullanma tarihi geçme ihtimali olan ürünlerin iadesi
                  kabul edilmez.
                </li>
                <li>
                  Kozmetik/kişisel bakım ve iç giyim ürünleri, mayo,
                  bikini gibi ürünlerin iadesi ancak şu şartlarda
                  kabul edilir:
                  <ul class="list-inside mt-2">
                    <li>Ambalajı açılmamış</li>
                    <li>Denenmemiş</li>
                    <li>Bozulmamış</li>
                    <li>Kullanılmamış olmaları halinde iade edilebilir.</li>
                  </ul>
                </li>
                <li>
                  Ürünler kullanılmış, yıpranmış ya da yıkanmış bir
                  şekilde ulaşırsa size geri gönderilecektir. Bu
                  durumda ücret iadesi yapılmayacaktır.
                </li>
              </ol>
            </div>
            <div v-else-if="selectedCategory === 'HESABIM'">
              <h2 class="text-lg font-semibold mb-2">
                Hesap Oluşturma
              </h2>
              <p class="mb-4">
                FLO hesabı oluşturmak için ana sayfanın üst kısmındaki
                "Hesap Oluştur" seçeneğine tıklayın ve kişisel
                bilgilerinizi girin. Hesabınız oluşturulduktan sonra,
                siparişlerinizi daha kolay takip edebilir ve
                kampanyalardan faydalanabilirsiniz.
              </p>
              <h2 class="text-lg font-semibold mt-6 mb-2">
                Şifremi unuttum, ne yapmalıyım?
              </h2>
              <p class="mb-4">
                Şifrenizi unuttuysanız, giriş ekranındaki "Şifremi
                Unuttum" seçeneğine tıklayarak e-posta adresinizi
                girin. Şifrenizi sıfırlamak için talimatlar e-posta
                adresinize gönderilecektir.
              </p>
            </div>
            <div v-else-if="selectedCategory === 'E-BÜLTEN'">
              <h2 class="text-lg font-semibold mb-2">
                E-bültene nasıl abone olabilirim?
              </h2>
              <p class="mb-4">
                FLO'nun kampanyaları ve fırsatları hakkında bilgi
                almak için, ana sayfanın alt kısmındaki "E-bültene
                Abone Ol" bölümüne e-posta adresinizi girin. Böylece
                tüm güncel haberlerden anında haberdar olabilirsiniz.
              </p>
            </div>
            <div v-else-if="selectedCategory === 'ÖDEME'">
              <h2 class="text-lg font-semibold mb-2">
                Ödeme Yöntemleri
              </h2>
              <p class="mb-4">
                FLO, kredi kartı, banka kartı, havale/EFT ve kapıda
                ödeme gibi çeşitli ödeme seçenekleri sunmaktadır.
                Sipariş sırasında ödeme yöntemlerini seçebilirsiniz.
                Ayrıca, ödeme işleminizde herhangi bir sorun
                yaşarsanız, müşteri hizmetleriyle iletişime
                geçebilirsiniz.
              </p>
            </div>
            <div v-else-if="selectedCategory === 'FATURA'">
              <h2 class="text-lg font-semibold mb-2">
                Faturamı nasıl alabilirim?
              </h2>
              <p class="mb-4">
                Fatura bilgilerinize, "Hesabım" bölümünden
                ulaşabilirsiniz. Siparişinizle birlikte fatura e-posta
                adresinize gönderilecektir. Ayrıca siparişlerim
                sayfasında da geçmiş siparişlerinizin faturalarına
                ulaşabilirsiniz.
              </p>
            </div>
            <div
              v-else-if="selectedCategory === 'MAĞAZADAN TESLİMAT'"
            >
              <h2 class="text-lg font-semibold mb-2">
                Mağazadan Teslimat Nasıl Yapılır?
              </h2>
              <p class="mb-4">
                Mağazadan teslimat, siparişinizi seçtiğiniz mağazadan
                almanızı sağlar. Siparişinizi tamamladıktan sonra
                mağazadan teslimat seçeneğini tercih edebilirsiniz.
                Mağaza stok durumu ve teslimat süreleri hakkında bilgi
                almak için mağaza ile iletişime geçebilirsiniz.
              </p>
            </div>
            <div v-else-if="selectedCategory === 'flo.com.tr HAKKINDA'">
              <h2 class="text-lg font-semibold mb-2">
                flo.com.tr Hakkında
              </h2>
              <p class="mb-4">
                flo.com.tr, Türkiye'nin önde gelen ayakkabı ve
                aksesuar perakendecilerinden biridir. Türkiye
                genelindeki mağazalarımızdan ve çevrimiçi
                platformumuzdan geniş bir ürün yelpazesiyle hizmet
                vermektedir. Misyonumuz, müşterilerimize kaliteli ve
                şık ürünleri en uygun fiyatlarla sunmaktır.
              </p>
            </div>
            <div v-else>
              <h2 class="text-lg font-semibold mb-2">
                Kargo Bilgileri
              </h2>
              <p class="mb-4">
                Siparişiniz onaylandıktan sonra belirtilen teslimat
                süresi içerisinde adresinize gönderilecektir. Kargo ve
                teslimat süreci ile ilgili detaylar aşağıda yer
                almaktadır.
              </p>
              <h2 class="text-lg font-semibold mt-6 mb-2">
                Kargo ve Teslimat Süreci nasıldır?
              </h2>
              <ol class="list-decimal list-inside mt-4 space-y-2">
                <li>
                  Siparişiniz onaylandıktan sonra, kargo firması
                  tarafından belirlenen teslimat süresi içinde ürününüz
                  adresinize gönderilecektir.
                </li>
                <li>
                  Genellikle, standart teslimat süresi 2-5 iş günü
                  arasındadır. Teslimat süresi, kargonun sevk
                  edildiği şehre bağlı olarak değişiklik
                  gösterebilir.
                </li>
                <li>
                  Farklı teslimat seçenekleri sunulmaktadır, örneğin
                  hızlı teslimat veya mağazadan teslim al seçeneği
                  gibi.
                </li>
              </ol>
              <h2 class="text-lg font-semibold mt-6 mb-2">
                Kargo Ücretleri nedir?
              </h2>
              <ol class="list-decimal list-inside mt-4 space-y-2">
                <li>
                  Kargo ücreti, siparişinizin toplam tutarına, teslimat
                  adresinize ve seçtiğiniz kargo seçeneğine bağlı
                  olarak değişiklik gösterebilir.
                </li>
                <li>
                  Yerli teslimatlar için kargo ücreti genellikle 10 TL
                  civarındadır, ancak belirli kampanyalarla ücretsiz
                  kargo avantajlarından faydalanabilirsiniz.
                </li>
                <li>
                  Uluslararası teslimatlarda, teslimat yapılan ülkeye
                  göre değişen kargo ücretleri uygulanmaktadır.
                </li>
              </ol>
              <h2 class="text-lg font-semibold mt-6 mb-2">
                Kargo Takip Bilgisi nasıl öğrenebilirim?
              </h2>
              <ol class="list-decimal list-inside mt-4 space-y-2">
                <li>
                  Siparişiniz gönderildikten sonra, kargo takip
                  numaranız e-posta adresinize gönderilecektir.
                </li>
                <li>
                  Bu takip numarasını kullanarak, kargo firmasının web
                  sitesinden teslimat durumunu takip edebilirsiniz.
                </li>
              </ol>
              <h2 class="text-lg font-semibold mt-6 mb-2">
                Mağazadan teslimat nasıl yapılır?
              </h2>
              <ol class="list-decimal list-inside mt-4 space-y-2">
                <li>
                  Mağazadan teslimat seçeneği ile siparişiniz,
                  seçtiğiniz mağazada teslim edilecektir.
                </li>
                <li>
                  Mağazadan teslimat, mağazaya bağlı olarak birkaç iş
                  günü sürebilir.
                </li>
                <li>
                  Siparişiniz hazır olduğunda, teslimat için mağazadan
                  bir bildirim alacaksınız.
                </li>
              </ol>
            </div>
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
        "flo.com.tr HAKKINDA",
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
"flo.com.tr HAKKINDA": "fas fa-info-circle",
} as Record<string, string>,
questions: {
siparisTakip: false,
magazaSiparisTakip: false,
siparisIptal: false,
} as Record<string, boolean>,
};
},
methods: {
selectCategory(category: string) {
this.selectedCategory = category;
// Kategori değiştiğinde tüm soruları kapat
for (const key in this.questions) {
this.questions[key] = false;
}
},
toggleQuestion(question: string) {
this.questions[question] = !this.questions[question];
},
},
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

body,
h1,
h2,
p,
button,
li {
font-family: "Poppins", sans-serif;
}

/***** Geçiş Animasyonları *****/
.fade-enter-active,
.fade-leave-active {
transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
opacity: 0;
}

/***** Buton Stilleri *****/
button {
font-size: 1rem;
color: #333;
background-color: transparent;
border: none;
border-radius: 0;
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
background-color: white;
border-radius: 5px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: transform 0.3s, box-shadow 0.3s;
}

.bg-white:hover {
transform: translateY(-5px);
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.shadow-lg {
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.faq-content > div + div {
margin-top: 1.5rem;
}
</style>