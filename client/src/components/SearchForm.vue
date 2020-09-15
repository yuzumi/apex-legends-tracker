<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="platform">Platform</label>
      <select name="platform" id="platform" v-model="platform">
        <option
          v-for="{ label, value } of platformOptions"
          :key="value"
          :value="value"
        >
          {{ label }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="gamertag">Gamertag</label>
      <input type="text" name="gamertag" id="gamertag" v-model.trim="gamertag" />
    </div>
    <div class="form-group">
      <input type="submit" value="Submit" class="btn btn-submit" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  data: () => ({
    platform: 'psn',
    gamertag: '',
    platformOptions: [
      { label: 'Playstation', value: 'psn' },
      { label: 'Xbox', value: 'xbl' },
      { label: 'Origin', value: 'Origin' },
    ],
  }),
  methods: {
    handleSubmit() {
      const { platform, gamertag } = this;

      if (!gamertag) {
        this.$toasted.show('Please enter a gamertag');
      } else {
        this.$router.push({
          name: 'profile',
          params: {
            platform,
            gamertag,
          },
        });
      }
    },
  },
  beforeCreate() {
    document.body.classList.add('body-bg-image');
  },
};
</script>
