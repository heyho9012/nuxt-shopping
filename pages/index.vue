<template>
  <main>
    <SearchInput
      :search-keyword="searchKeyword"
      @input="updateSearchKeyword"
      @search="searchProducts"
    />
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
        class="item flex"
        @click="moveToDetailPage(product.id)"
      >
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
        <p>{{ product.name }}</p>
        <span>${{ product.price }}</span>
      </li>
    </ul>
    <div class="cart-wrapper">
      <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import SearchInput from '@/components/SearchInput.vue';
import { fetchProductsByKeyword } from '~/api';

export default {
  components: { SearchInput },
  // Nuxt => Server Side Rendering
  // NOTE: page component(pages 폴더 안에 있는 파일)에만 제공되는 속성
  async asyncData({ params, $http }) {
    const response = await axios.get('http://localhost:3000/products');
    const products = response.data.map(x => ({
      ...x,
      imageUrl: `${x.imageUrl}?random=${Math.random()}`,
    }));

    return { products };
  },

  data() {
    return {
      // products: []
      searchKeyword: '',
    };
  },

  // Vue => Client Side Rendering
  // async created() {
  //   const response = await axios.get('http://loc nb h80alhost:3000/products');
  //   console.log(response);
  //   this.products = response.data;
  // },

  methods: {
    updateSearchKeyword(keyword) {
      this.searchKeyword = keyword;
    },
    async searchProducts() {
      const response = await fetchProductsByKeyword(this.searchKeyword);
      console.log(response.data);
      this.products = response.data.map(x => ({
        ...x,
        imageUrl: `${x.imageUrl}?random=${Math.random()}`,
      }));
    },
    moveToDetailPage(id) {
      console.log(id);
      this.$router.push(`detail/${id}`);
    },
    moveToCartPage() {
      this.$router.push(`/cart`);
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem 1rem;
  cursor: pointer;
}
.item p {
  margin: 0.25rem 0;
}
.product-image {
  width: 400px;
  height: 250px;
}

.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
ul {
  margin: 1rem 0 0;
}
</style>
