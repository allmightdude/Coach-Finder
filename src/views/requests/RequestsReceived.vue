<template>
  <div>
    <base-dialog :show="!!error" title="Error Occured!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>

    <div>
      <section>
        <header>
          <h3>Requests Received</h3>
        </header>
      </section>
    </div>

    <base-card v-if="isLoading">
      <base-spinner></base-spinner>
    </base-card>

    <ul class="requests" v-else-if="hasRequests && !isLoading">
      <request-item
        v-for="request in requests"
        :requestItem="request"
        :key="request"
      ></request-item>
    </ul>
    <p v-else>There aren't no requests...</p>
  </div>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  components: {
    RequestItem,
  },
  computed: {
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
    requests() {
      return this.$store.getters["requests/requests"];
    },
  },

  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/fetchRequests");
      } catch (error) {
        this.error = error.message || "Can't fetch requests!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadRequests();
  },
};
</script>
