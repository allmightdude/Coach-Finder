<template>
  <form class="search">
    <div class="search__input">
      <input type="text" placeholder="Leadership" />
      <button class="clear-input">&#x2716;</button>
    </div>
    <button class="btn-sort">
      <svg class="sort-icon">
        <use xlink:href="@/assets/sprite.svg#icon-sort"></use>
      </svg>
    </button>
  </form>

  <div class="coaches__title mt-2">
    <h2><span>24</span> Coach Are Available</h2>
    <base-button link isDashed to="/register" >Register as a coach</base-button>
  </div>

  <ul class="coaches mt-2">
    <coach-item
      v-for="coach in coaches"
      :key="coach.id"
      :coach="coach"
    ></coach-item>
  </ul>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";

export default {
  components: {
    CoachItem,
  },
  computed : {
    coaches(){
      return this.$store.getters['coaches/coaches'];
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  &__input {
    flex: 1 0 0;
    border-radius: 10px;
    border: 2px solid #000;
    color: #000;
    display: flex;
    flex-direction: row-reverse;
  }

  input{
    width: 100%;
    border: none;
    padding: 0 1.5rem;
    border-radius: 10px;
  }

  .clear-input{
    background-color: #EFEFEF;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 4rem;
    height: 100%;
  }
}

.btn-sort{
  background-color: #5dbee7;
  width: 5rem;
  height: 4rem;
  border-radius: 10px;
  border: 2px solid #000;
  color: white;

  svg{
    fill: white;
  }
}

.coaches__title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #9fd6b7;
  }
}
</style>
