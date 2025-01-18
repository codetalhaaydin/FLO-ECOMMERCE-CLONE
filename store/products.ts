import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  favorites: number;
  reviews: number;
  oldPrice: string;
  newPrice: string;
  discount: number;
}

interface ProductsState {
  products: Product[];
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    products: [
      {
        id: 1,
        name: "INCI NEVADA 4PR Siyah Erkek Klasik Bot",
        description: "Yeni Sezon, Hakiki Deri",
        image:
          "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-06/24/101923721_f2.jpg?w=600",
        favorites: 2350,
        reviews: 16,
        oldPrice: "2399,99",
        newPrice: "1599,99",
        discount: 33,
      },
      {
        id: 2,
        name: "Art BellaCW23119 3PR",
        description: "Siyah Kadın Postal",
        image:
          "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/23-12/25/101481133_f2.jpg?w=600",
        favorites: 1310,
        reviews: 5,
        oldPrice: "1499,99",
        newPrice: "1199,99",
        discount: 20,
      },
      {
        id: 3,
        name: "ARCTIC PU KRK HI 4PR Siyah Erkek Outdoor Bot",
        description: "Yeni Sezon, Kinetix",
        image:
          "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-07/29/101744995_f2.jpg?w=600",
        favorites: 933,
        reviews: 8,
        oldPrice: "1399,99",
        newPrice: "1099,99",
        discount: 21,
      },
      {
        id: 4,
        name: "Polaris 309185C.Z 4PR Siyah Kadın Postal",
        description: "Yeni Sezon, Polaris",
        image:
          "https://floimages.mncdn.com/mnpadding/600/900/FFFFFF/media/catalog/product/24-08/13/101915668_f2.jpg?w=600",
        favorites: 1584,
        reviews: 4,
        oldPrice: "1199,99",
        newPrice: "999,99",
        discount: 17,
      },
    ],
  }),
});