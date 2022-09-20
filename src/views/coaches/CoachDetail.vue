<template>
  <div class="coach">
    <div class="coach__profile">
      <img src="@/assets/images/6.jpg" alt="" />
      <h2 class="coach__name">{{ fullName }}</h2>
      <h4 class="coach__loaction">Poland</h4>
      <ul class="coach__areas mt-1">
        <base-badge v-for="area in areas" :key="area">{{ area }}</base-badge>
      </ul>
      <div class="mt-2">
        <base-button mode="orange">Contact Coach</base-button>
      </div>

      <div class="mt-2">
        <base-expert :rate="rate"></base-expert>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
  },

  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
    console.log(this.selectedCoach);
    console.log("red");
  },
};
</script>
