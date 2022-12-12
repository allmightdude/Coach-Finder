<template>
  <base-card>
    <span class="filter-option">
      <input type="checkbox" id="frontend" value="frontend" @change="setFilter" v-model="filters.frontend" checked />
      <label class="label" for="frontend">Front-End</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" id="backend" value="backend" @change="setFilter" v-model="filters.backend" checked />
      <label class="label" for="backend">Back-End</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" id="career" value="career" @change="setFilter" v-model="filters.career" checked />
      <label class="label" for="career">Career</label>
    </span>
  </base-card>
</template>


<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend : true,
        backend : true,
        career : true
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isChecked = event.target.checked;

      const updatedFilters = {
        ...this.filters ,
        [inputId] : isChecked
      }

      this.filters = updatedFilters;
      this.$emit('change-filter' , updatedFilters);
    } 
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
