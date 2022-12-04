<template>
  <li class="coaches__item">
    <figure>
      <figcaption class="coaches__info">
        <img :src="this.coach.img" class="coaches__img" />
        <div class="coaches__info-box">
          <p class="coaches__info-name">{{ fullName }}</p>
          <p class="coaches__info-caption">{{caption}}</p>
          <p class="coaches__info-rate">
            <svg class="star-icon">
              <use xlink:href="@/assets/sprite.svg#icon-star"></use>
            </svg>
            14.5 from 120 reviews
          </p>
        </div>
        <div class="coaches__rating">
          <svg class="heart-icon">
            <use xlink:href="@/assets/sprite.svg#icon-heart"></use>
          </svg>
        </div>
      </figcaption>

      <ul class="coaches__areas">
        <base-badge v-for="area in areas" :key="area">{{ area }}</base-badge>
      </ul>

      <div class="coaches__actions">
        <base-button link :to="coachContactLink" mode="green"
          >contact</base-button
        >
        <base-button link :to="coachDetailLink" mode="orange">View</base-button>
      </div>

      <base-expert :rate="rate"></base-expert>
    </figure>
  </li>
</template>

<script>
export default {
  props: ["coach"],
  data() {
    return {
      selectedCoach: null,
    };
  },

  computed: {
    fullName() {
      return this.coach.firstName + " " + this.coach.lastName;
    },
    coachImg() {
      return this.coach.img;
    },
    areas() {
      return this.coach.areas;
    },
    rate() {
      return this.coach.hourlyRate;
    },
    caption() {
      return this.coach.caption;
    },
    coachDetailLink() {
      return this.$route.path + "/" + this.coach.id;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.coach.id + "/contact";
    },
  },
};
</script>

<style lang="scss" scoped>
.coaches {
  &__item {
    margin-top: 1rem;
    padding: 2rem 0;
  }

  &__info {
    display: flex;

    &-name {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    &-caption,
    &-rate {
      margin-bottom: 0.5rem;
      color: #686868;
      font-size: 1.2rem;
    }

    &-rate {
      display: flex;
      align-items: center;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  &__rating {
    margin-left: auto;
    margin-right: 1rem;
  }

  &__img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
  }

  &__actions {
    float: right;
    margin-bottom: 2rem;
  }

  &__expert {
    padding: 1rem 2rem;
    border: 1px solid #000;
    border-left-color: transparent;
    border-right-color: transparent;
    display: flex;
    justify-content: space-around;
    width: 100%;

    div {
      width: 50%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    :nth-child(2) {
      border-left: 1px solid #000;
    }
  }

  &__areas {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
}
</style>
