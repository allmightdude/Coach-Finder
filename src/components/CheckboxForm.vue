<template>
  <div>
    <input
      type="checkbox"
      id="career"
      value="career"
      class="check"
      v-model="areas"
      @change="setAreas"
    />
    <label for="career">Career</label>
  </div>

    <div>
    <input
      type="checkbox"
      id="backend"
      value="backend"
      class="check"
      v-model="areas"
      @change="setAreas"
    />
    <label for="frontend">Back End</label>
  </div>

    <div>
    <input
      type="checkbox"
      id="frontend"
      value="frontend"
      class="check"
      v-model="areas"
      @change="setAreas"
    />
    <label for="frontend">Front End</label>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      areas: [],
    };
  },
  methods: {
    setAreas() {
      this.$emit("update:modelValue", this.areas);
    },
  },
};
</script>

<style lang="scss" scoped>
label{
  margin-left: 1rem;
}
</style>
