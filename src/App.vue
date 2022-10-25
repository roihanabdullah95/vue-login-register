<template>
  <div id="app">
    <router-view :cart="cart" :setCart="setCart" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    setCart(newValue) {
      this.cart = newValue;
    },
  },
};
</script>
