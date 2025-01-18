import { defineStore } from 'pinia';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';
import { app } from '@/firebaseConfig'; // Firebase yapılandırmanızı içeren dosya

interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartState {
  cartItems: Product[];
  loading: boolean;
}

const db = getDatabase(app);

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    cartItems: [],
    loading: true,
  }),
  getters: {
    totalPrice(state): number {
      return state.cartItems.reduce(
        (total: number, item: Product) => total + item.price,
        0
      );
    },
  },
  actions: {
    async getCartItems() {
      this.loading = true;
      const cartItemsRef = ref(db, 'cartItems');
      onValue(cartItemsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          this.cartItems = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
        } else {
          this.cartItems = [];
        }
        this.loading = false;
      });
    },
    async addToCart(product: Product) {
      const cartItemRef = ref(db, 'cartItems/' + product.id);
      await set(cartItemRef, product);
      console.log('Ürün sepete eklendi.');
    },
    async removeFromCart(itemId: string | number) {
      const itemRef = ref(db, `cartItems/${itemId}`);
      await remove(itemRef);
      console.log('Ürün sepetten silindi.');
    },
    async confirmCart() {
      if (this.cartItems.length > 0) {
        alert('Sepetiniz başarıyla onaylandı!');
        const cartItemsRef = ref(db, 'cartItems');
        await remove(cartItemsRef); // Sepeti temizle
      } else {
        alert('Sepetinizde ürün bulunmamaktadır.');
      }
    },
  },
});