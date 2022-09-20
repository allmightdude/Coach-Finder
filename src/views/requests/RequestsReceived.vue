<template>
  <ul class="requests">
    <request-item></request-item>
  </ul>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue'
export default {
    components : {
        RequestItem
    }
};
</script>
