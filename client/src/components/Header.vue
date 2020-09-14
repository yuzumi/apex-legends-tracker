<template>
  <header class="header">
    <img :src="logo" />
  </header>
</template>

<script>
import logo from '@/assets/images/logo.png';

export default {
  name: 'Header',
  data: () => ({
    logo,
  }),
};
</script>

<style scoped>
img {
  width: 300px;
}

@media(max-width: 700px) {
  img {
    display: block;
    margin: auto;
  }
}
</style>
