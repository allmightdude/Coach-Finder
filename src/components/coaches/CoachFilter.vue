<template>
  <base-card>
    <span class="filter-option">
      <input type="checkbox" id="frontend" value="frontend" @change="setFilter" v-model="areas.frontend" checked />
      <label class="label" for="frontend">Front-End</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" id="backend" value="backend" @change="setFilter" v-model="areas.backend" checked />
      <label class="label" for="backend">Back-End</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" id="career" value="career" @change="setFilter" v-model="areas.career" checked />
      <label class="label" for="career">Career</label>
    </span>
  </base-card>
</template>


<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      areas: {
        frontend : true,
        backend : true,
        career : true
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit("update:modelValue", this.areas);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-option {
  padding: 0 0.5rem;

  label {
    margin-left: 0.5rem;
    font-size: 1.1rem;
  }
}
</style>
