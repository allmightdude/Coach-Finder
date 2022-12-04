<template>
  <div>
    <div>
      <section>
        <base-card>
          <header>
            <h3>Requests Received</h3>
          </header>
        </base-card>
      </section>
    </div>
    <ul class="requests" v-if="hasRequests">
      <request-item
        v-for="request in requests"
        :requestItem="request"
        :key="request"
      ></request-item>
    </ul>
  </div>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
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
};
</script>
