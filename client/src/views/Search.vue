<template>
  <section class="search">
    <h1>Track Player Stats</h1>
    <SearchForm />
  </section>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';

export default {
  name: 'Search',
  components: {
    SearchForm,
  },
};
</script>
