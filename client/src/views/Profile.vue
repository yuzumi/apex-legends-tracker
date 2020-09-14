<template>
  <section class="profile">
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else-if="error">
      <p>{{ error.message }}</p>
      <RouterLink to="/">Go back</RouterLink>
    </div>
    <div class="container" v-else>
      <ProfileStats :profile="data" />
      <RouterLink to="/">Go back</RouterLink>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import ProfileStats from '@/components/ProfileStats.vue';

export default {
  name: 'Profile',
  data: () => ({
    data: {},
    error: null,
    isLoading: false,
  }),
  props: {
    platform: {
      type: String,
      required: true,
    },
    gamertag: {
      type: String,
      required: true,
    },
  },
  computed: {
    apiUrl() {
      return `/api/v1/profile/${this.platform}/${this.gamertag}`;
    },
  },
  methods: {
    async loadStats() {
      this.isLoading = true;

      try {
        const response = await axios.get(this.apiUrl);

        this.data = response.data.data;
        this.error = null;
      } catch (error) {
        this.data = {};
        this.error = error.response.data;
      } finally {
        this.isLoading = false;
      }
    },
  },
  beforeCreate() {
    document.body.classList.remove('body-bg-image');
  },
  async created() {
    await this.loadStats();
  },
  components: {
    ProfileStats,
  },
};
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 20px;
}

a {
  display: inline-block;
  margin-top: 2rem;
  border: #fff 2px solid;
  padding: 0.5rem 0.8rem;
}

a:hover {
  border: #ccc 2px solid;
  color: #ccc;
}
</style>
