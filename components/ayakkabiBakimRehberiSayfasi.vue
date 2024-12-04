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

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

interface Tab {
  id: string;
  name: string;
}

interface Content {
  title: string;
  description: string;
  image?: string;
}

export default defineComponent({
  name: 'AyakkabiBakimRehberi',
  setup() {
    const activeTab = ref<string>('deri');

    const tabs: Tab[] = [
      { id: 'deri', name: 'Deri Ayakkabı Bakımı' },
      { id: 'suet', name: 'Süet ve Nubuk Ayakkabı Bakımı' },
      { id: 'spor', name: 'Spor Ayakkabı Bakımı' },
      { id: 'genel', name: 'Genel Bakım İpuçları' },
    ];

    const contents: Record<string, Content> = {
      deri: {
        title: 'Deri Ayakkabı Bakımı',
        description:
          'Ayakkabı bakımına başlamadan önce varsa bağcıkları çıkartılır...',
        image: 'https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/rectangle-3.jpg.webp',
      },
      suet: {
        title: 'Süet ve Nubuk Ayakkabı Bakımı',
        description:
          'Ayakkabı bakımına başlamadan önce varsa bağcıkları çıkartılır...',
        image: 'https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/648x420-1671626227.jpg.webp',
      },
      spor: {
        title: 'Spor Ayakkabı Bakımı',
        description:
          'Ayakkabı bakımına başlamadan önce varsa bağcıkları çıkartılır...',
        image: 'https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/648x420-2-1671626797.jpg.webp',
      },
      genel: {
        title: 'Genel Bakım İpuçları',
        description: 'Ayakkabının emmiş olduğu nemi atması için...',
        image: 'https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/648x420-3.jpg.webp',
      },
    };

    const activeContent = computed<Content>(() => contents[activeTab.value]);

    const selectTab = (tabId: string) => {
      activeTab.value = tabId;
    };

    return {
      activeTab,
      tabs,
      contents,
      activeContent,
      selectTab,
    };
  },
});
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