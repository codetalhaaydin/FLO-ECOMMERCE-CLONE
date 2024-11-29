<template>
  <div class="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
    <!-- Başlık -->
    <header class="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8 shadow-lg">
      <div class="container mx-auto text-center">
        <h1 class="text-5xl font-extrabold">Ayakkabı Bakım Rehberi</h1>
        <p class="text-lg mt-2">Ayakkabılarınızın ömrünü uzatacak bakım önerileri</p>
      </div>
    </header>

    <!-- Sekmeler -->
    <div class="container mx-auto py-8">
      <div class="flex justify-center space-x-4 mb-6">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="[ 'tab-btn', activeTab === tab.id ? 'tab-active' : 'tab-inactive' ]"
          @click="selectTab(tab.id)"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- İçerik -->
      <transition name="fade" mode="out-in">
        <div v-if="activeTab" class="bg-white p-8 rounded-lg shadow-lg" :key="activeTab">
          <h2 class="text-3xl font-semibold text-gray-800 mb-6">{{ activeContent.title }}</h2>
          <p class="text-gray-700 leading-relaxed mb-6">{{ activeContent.description }}</p>
          <img v-if="activeContent.image" :src="activeContent.image" alt="Ayakkabı Bakımı" class="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105">
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "deri", // Varsayılan sekme
      tabs: [
        { id: "deri", name: "Deri Ayakkabı Bakımı" },
        { id: "suet", name: "Süet ve Nubuk Ayakkabı Bakımı" },
        { id: "spor", name: "Spor Ayakkabı Bakımı" },
        { id: "genel", name: "Genel Bakım İpuçları" },
      ],
      contents: {
        deri: {
          title: "Deri Ayakkabı Bakımı",
          description:
            "Ayakkabı bakımına başlamadan önce varsa bağcıkları çıkartılır. Deri ayakkabı, temizleme köpüğü, fırça ya da kuru bir bez yardımı ile toz, kir, çamur ve benzeri lekelerinden arındırılır. Temizleme işleminden sonra derinin nemli kalmamasına dikkat edilir. Kuru ve temiz deri yüzeyine likit ya da krem boya uygulaması yapılır. Boya tüm deri yüzeyine eşit miktarda uygulanır. Uygulanacak boya ayakkabının rengine uygun ya da natürel renk olmalıdır. Uygulama esnasında boya ince bir kat şeklinde tüm yüzeye eşit oranda sürülür ve ardından kurumaya bırakılır. Boyası kuruyan ayakkabı, deri parlatma süngeri ya da parlatma fırçası ile daha parlak bir görünüm kazandırılır. Boyama sıklığı en fazla 2-3 günde bir olmalıdır. Aşırı boya kullanımı, kalitesiz boya kullanımı ve sık aralıklarla boyamak, deri üzerindeki gözeneklerin tıkanmasına ve ayak terlemesine neden olacaktır. İçerisine ayakkabı deodorantı sıkılarak ya da koku topu bırakılarak istenmeyen kokulardan arındırılır. Ayakkabının emmiş olduğu nemi atması için, iki gün arayla giyilmelidir. Ayakkabının uzun süreli kullanımı açısından periyodik olarak bakının yapılması gereklidir. Karlı ve yağmurlu havalarda dışarı çıkmadan önce kullanma talimatına uygun olarak su itici sprey uygulanmalıdır.",
          image: "https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/rectangle-3.jpg.webp",
        },
        suet: {
          title: "Süet ve Nubuk Ayakkabı Bakımı",
          description:
            "Ayakkabı bakımına başlamadan önce varsa bağcıkları çıkartılır. Süet Ayakkabılar, süet süngeri ya da süet fırçası ile temizliği yapılır. Temizleme işlemi bağcıklarından, ayakkabının burnuna doğru veya derinin akış yönüne doğru tek bir yönde yapılır. Ayakkabı natürel renk ya da ayakkabıya uygun renk bir süet boyası veya süet spreyi ile boyanır. Sprey boya kullanmadan önce kutusu iyice çalkalanır. En az 20/25 cm mesafeden ve her yüzeyine eşit uygulanacak şekilde sıkılır. En az 30 dakika kurumaya bırakılır. Boyama sıklığı en fazla 2-3 günde bir olmalıdır. Kuruduktan sonra süet fırçası ya da süngeri vasıtasıyla yine derinin yönüne doğru son uygulaması yapılır. İçerisine ayakkabı deodorantı sıkılarak ya da koku topu bırakılarak istenmeyen kokulardan arındırılır. Ayakkabının emmiş olduğu nemi atması için, iki gün arayla giyilmelidir. Ayakkabının uzun süreli kullanımı açısından periyodik olarak bakının yapılması gereklidir. Karlı ve yağmurlu havalarda dışarı çıkmadan önce kullanma talimatına uygun olarak su itici sprey uygulanmalıdır.",
          image: "https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/648x420-1671626227.jpg.webp",
        },
        spor: {
          title: "Spor Ayakkabı Bakımı",
          description:
            "Ayakkabı bakımına başlamadan önce varsa bağcıkları çıkartılır. Fileli sneaker ayakkabılarda temizleme köpüğü yardımı ile toz, kir, çamur ve benzeri lekelerinden arındırılır. Tabanlarına spor ayakkabı temizleme süngeri uygulanarak temizliği yapılır. Deri ve süet sneaker ayakkabılarda ise temizleme köpüğü veya spor ayakkabı temizleme süngeri kullanılarak lekelerden arındırılır. Spor Ayakkabı temizleme süngeri kullanım öncesi nemlendirilir, kuru kullanımdan kaçınılır ve çok fazla deriye bastırılmamalıdır. Beyaz yüzey ve tabanlar için beyaz boya uygulaması yapılır. Ayakkabı içerisine, ayakkabı deodorantı sıkılarak ya da koku topu bırakılarak istenmeyen kokulardan arındırılır. Ayakkabının emmiş olduğu nemi atması için, iki gün arayla giyilmelidir. Ayakkabının uzun süreli kullanımı açısından periyodik olarak bakının yapılması gereklidir. Karlı ve yağmurlu havalarda dışarı çıkmadan önce kullanma talimatına uygun olarak su itici sprey uygulanmalıdır.",
          image: "https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/648x420-2-1671626797.jpg.webp",
        },
        genel: {
          title: "Genel Bakım İpuçları",
          description:
            "Ayakkabının emmiş olduğu nemi atması için, iki gün arayla giyilmelidir. Ayakkabı, temizlenme amacıyla çamaşır makinesine atılmamalıdır. Ayakkabı bakımı için özel üretilmiş kimyasallar ile temizlenmelidir. Çamaşır suyu, deterjan, vb. malzemelerle temizlenmemelidir. Islak mendil ile temizliği yapılmamalıdır. Nemli ayakkabılar ısı kaynaklarından uzakta kurumaya bırakılmalıdır. Ayakkabılar plastik bir torba içinde saklamamalı, kuvvetli ışıkta ya da yoğun güneş ışığında uzun süre bırakılmamalıdır. Ayakkabılar muhafaza edilirken iç tarafına kalıp koyulmalı ya da gazete ve kağıt parçaları yerleştirilmelidir. Ayakkabılar nemli ortamda muhafaza edilmemelidir.",
          image: "https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/648x420-3.jpg.webp",
        },
      },
    };
  },
  computed: {
    activeContent() {
      return this.contents[this.activeTab];
    },
  },
  methods: {
    selectTab(tabId) {
      this.activeTab = tabId;
    },
  },
};
</script>

<style scoped>
/* Genel Stil */
.container {
  max-width: 800px;
  margin: 0 auto;
}

/* Sekmeler */
.tab-btn {
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s;
  cursor: pointer;
}

.tab-active {
  background-color: #ff6600;
  color: white;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.tab-inactive {
  background-color: #f3f4f6;
  color: #333;
}

.tab-inactive:hover {
  background-color: #e5e7eb;
}

/* Animasyon */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Başlık */
header {
  background: linear-gradient(90deg, rgba(255,102,0,1) 0%, rgba(255,0,0,1) 100%);
  color: white;
  padding: 2rem 0;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

header h1 {
  font-size: 3rem;
  font-weight: 800;
}

header p {
  font-size: 1.25rem;
  margin-top: 0.75rem;
}

/* İçerik */
.bg-white {
  background-color: #ffffff;
}

.p-8 {
  padding: 2rem;
}

.rounded-lg {
  border-radius: 1rem;
}

.shadow-lg {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.text-gray-800 {
  color: #2d3748;
}

.text-gray-700 {
  color: #4a5568;
}

.leading-relaxed {
  line-height: 1.75;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.w-full {
  width: 100%;
}

.h-auto {
  height: auto;
}

img {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
}

img:hover {
  transform: scale(1.05);
}
</style>