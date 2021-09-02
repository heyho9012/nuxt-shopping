import { fetchCartItems } from '@/api';

// constants
const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

const state = () => ({
  cartItems: [],
});

const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    };
    return state.cartItems.push(newCartItem);
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  },
};

const actions = {
  async [FETCH_CART_ITEMS]({ commit }, payload) {
    const { data } = await fetchCartItems();
    console.log('FETCH_CART_ITEMS >>> ', data);

    commit(
      `setCartItems`,
      data.map(x => ({
        ...x,
        imageUrl: `${x.imageUrl}?random=${Math.random()}`,
      })),
    );
  },
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   console.log('nuxtServerInit');
  //   await storeContext.dispatch(FETCH_CART_ITEMS);
  // },
};

export { state, mutations, actions };
export { FETCH_CART_ITEMS };
