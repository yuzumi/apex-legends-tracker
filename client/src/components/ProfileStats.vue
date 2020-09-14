<template>
  <div class="profile-stats">
    <h1 class="gamertag">
      <img class="platform-avatar" :src="profile.platformInfo.avatarUrl" alt="" />
      {{ `` }}
      {{ profile.platformInfo.platformUserId }}
    </h1>
    <div class="grid">
      <div>
        <img :src="profile.segments[1].metadata.imageUrl" alt="" />
      </div>
      <div>
        <ul>
          <li>
            <h4>Selected legend</h4>
            <p>{{ profile.metadata.activeLegendName }}</p>
          </li>
          <li v-if="profile.segments[0].stats.season2Wins">
            <h4>Season 2 Wins</h4>
            <p>
              {{ profile.segments[0].stats.season2Wins.displayValue }}
            </p>
          </li>
          <li v-if="profile.segments[0].stats.level">
            <h4>Apex level</h4>
            <p>
              {{ profile.segments[0].stats.level.displayValue }}
            </p>
          </li>
          <li v-if="profile.segments[0].stats.kills">
            <h4>Lifetime kills</h4>
            <p>
              {{ profile.segments[0].stats.kills.displayValue }}
            </p>
          </li>
          <li v-if="profile.segments[0].stats.damage">
            <h4>Damage done</h4>
            <p>
              {{ profile.segments[0].stats.damage.displayValue }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileStats',
  props: {
    profile: {
      type: Object,
    },
  },
};
</script>

<style scoped>
h1.gamertag {
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

.platform-avatar {
  width: 40px;
  margin-right: 0.7rem;
}

img {
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

li {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}

li p {
  font-size: 2rem;
}

li:first-child p {
  font-size: 1.5rem;
}

li span {
  font-size: 1rem;
  color: #ccc;
}

@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }
  .platform-avatar {
    display: none;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  li p {
    font-size: 1.5rem;
  }
}
</style>
