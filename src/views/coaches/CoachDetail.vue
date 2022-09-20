<template>
  <div class="coach">
    <div class="coach__profile">
      <img src="@/assets/images/6.jpg" class="coach__img" />
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

      <div class="coach__activity">
        <div class="coach__articles coach__activity-item">
          <div class="coach__articles-icon coach__activity-icon">
            <svg class="file-icon">
              <use xlink:href="@/assets/sprite.svg#icon-file-empty"></use>
            </svg>
          </div>

          <span class="mt-1">Articles(117)</span>
        </div>

        <div class="coach__videos coach__activity-item">
          <div class="coach__videos-icon coach__activity-icon">
            <svg class="camera-icon">
              <use xlink:href="@/assets/sprite.svg#icon-video-camera"></use>
            </svg>
          </div>

          <span class="mt-1">Videos(10)</span>
        </div>

        <div class="coach__podcasts coach__activity-item">
          <div class="coach__podcasts-icon coach__activity-icon">
            <svg class="mic-icon">
              <use xlink:href="@/assets/sprite.svg#icon-mic1"></use>
            </svg>
          </div>

          <span class="mt-1">Podcasts(105)</span>
        </div>
      </div>
    </div>

    <h3 class="mt-2">About</h3>
    <p class="mt-1">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea <br />
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea
    </p>

    <h3 class="mt-2">Reviews</h3>
    <coach-review></coach-review>
    <coach-review></coach-review>


  </div>
</template>

<script>
import CoachReview from '../../components/coaches/CoachReview.vue'
export default {
  props: ["id"],
  components :{
    CoachReview
  },
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

<style lang="scss" scoped>
.coach__profile {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.coach {
  &__img {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-color: red;
    margin: 0 auto;
  }
  &__activity {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    div svg {
      width: 5rem;
      height: 5rem;
    }
  }

  &__activity-item {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  &__activity-icon {
    width: 15rem;
    height: 12rem;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #707070;
    border-radius: 10px;
  }

  &__articles-icon {
    background-color: #eff8f3;
    svg {
      fill: #c6dbc6;
    }
  }

  &__videos-icon {
    background-color: #fff1ea;
    svg {
      fill: #f8a176;
    }
  }

  &__podcasts-icon {
    background-color: #f9f3e3;
    svg {
      fill: #e8c158;
    }
  }
}
</style>
