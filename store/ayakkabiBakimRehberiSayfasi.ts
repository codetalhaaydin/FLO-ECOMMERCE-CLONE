import { defineStore } from 'pinia';

type Content = {
  title: string;
  description: string;
  image: string;
};

export const useTabStore = defineStore('tabStore', {
  state: () => {
    const contents = {
      deri: {
        title: 'Deri Ayakkabı Bakımı',
        description: 'Ayakkabı bakımına başlamadan önce varsa bağcıkları çıkartılır...',
        image: 'https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/rectangle-3.jpg.webp',
      },
      suet: {
        title: 'Süet ve Nubuk Ayakkabı Bakımı',
        description: 'Ayakkabı bakımına başlamadan önce varsa bağcıkları çıkartılır...',
        image: 'https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/648x420-1671626227.jpg.webp',
      },
      spor: {
        title: 'Spor Ayakkabı Bakımı',
        description: 'Ayakkabı bakımına başlamadan önce varsa bağcıkları çıkartılır...',
        image: 'https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/648x420-2-1671626797.jpg.webp',
      },
      genel: {
        title: 'Genel Bakım İpuçları',
        description: 'Ayakkabının emmiş olduğu nemi atması için...',
        image: 'https://floimages.mncdn.com/media/catalog/product/img/banners/22-12/21/648x420-3.jpg.webp',
      },
    } as const;

    return {
      activeTab: 'deri' as keyof typeof contents, // ✅ Ensuring type safety
      tabs: [
        { id: 'deri', name: 'Deri Ayakkabı Bakımı' },
        { id: 'suet', name: 'Süet ve Nubuk Ayakkabı Bakımı' },
        { id: 'spor', name: 'Spor Ayakkabı Bakımı' },
        { id: 'genel', name: 'Genel Bakım İpuçları' },
      ],
      contents,
    };
  },
  getters: {
    activeContent: (state) => state.contents[state.activeTab],
  },
  actions: {
    selectTab(tabId: keyof typeof this.contents): void {
      this.activeTab = tabId;
    },
  },
});
