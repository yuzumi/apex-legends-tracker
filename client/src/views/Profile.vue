<template>
  <ProfileStatsProvider
    :platform="platform"
    :gamertag="gamertag"
    :service="service"
    v-slot="{ data, error, isLoading }"
  >
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
  </ProfileStatsProvider>
</template>

<script>
import HttpClient from '@/services/HttpClient';
import ProfileStatsService from '@/services/ProfileStatsService';

import ProfileStats from '@/components/ProfileStats.vue';
import ProfileStatsProvider from '@/providers/ProfileStatsProvider.vue';

const httpClient = new HttpClient({ baseURL: '/api/v1' });
const profileStatsService = new ProfileStatsService(httpClient, '/profile');

export default {
  name: 'Profile',
  data: () => ({
    service: profileStatsService,
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
  beforeCreate() {
    document.body.classList.remove('body-bg-image');
  },
  components: {
    ProfileStats,
    ProfileStatsProvider,
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
