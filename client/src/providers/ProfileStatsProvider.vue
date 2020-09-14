<script>
export default {
  name: 'ProfileStatsProvider',
  props: {
    service: {
      type: Object,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    gamertag: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    data: {},
    error: null,
    isLoading: false,
  }),
  methods: {
    async loadStats() {
      this.isLoading = true;

      try {
        const response = await this.service.getStats(this.platform, this.gamertag);

        this.data = response.data;
        this.error = null;
      } catch (error) {
        this.data = {};
        this.error = error.response.data;
      } finally {
        this.isLoading = false;
      }
    },
  },
  render() {
    return this.$scopedSlots.default({
      data: this.data,
      error: this.error,
      isLoading: this.isLoading,
    });
  },
  async created() {
    await this.loadStats();
  },
};
</script>
