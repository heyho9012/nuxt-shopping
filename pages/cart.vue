<template>
  <main class="container">
    <h2 class="list-title">카트 페이지</h2>
    <CartList />
    <div class="extra-panel">
      <button v-show="$store.state.cartItems.length > 0">구매하기</button>
      <p v-show="$store.state.cartItems.length <= 0">
        장바구니에 물건이 없습니다.
      </p>
    </div>
  </main>
</template>

<script>
// import { FETCH_CART_ITEMS } from '@/store';
import CartList from '@/components/CartList';

export default {
  components: { CartList },
  // async asyncData({ store }) {
  //   await store.dispatch(FETCH_CART_ITEMS);
  // },
};
</script>
