<template>
  <base-dialog :show="!!error" title="Error Occured!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>

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

    <button class="btn-sort">
      <svg class="sort-icon">
        <use xlink:href="@/assets/sprite.svg#icon-sort"></use>
      </svg>
    </button>

    <coach-filter
      @change-filter="setFilter"
      ref="dropdown"
      class="dropdown"
    ></coach-filter>
  </form>

  <div class="coaches__title mt-2">
    <h2><span>24</span> Coach Are Available</h2>
    <base-button isDashed @click="loadCoaches(true)">Refresh</base-button>

    <base-button link isDashed to="/register" v-if="!isCoach && !isLoading"
      >Register as a coach</base-button
    >
  </div>
  <section>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <ul class="coaches mt-2" v-else-if="hasCoaches">
      <coach-item
        v-for="coach in filterCoaches"
        :key="coach.id"
        :coach="coach"
      ></coach-item>
    </ul>
    <base-card v-else>
      <h3>Not Coach Find</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filterCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  components: {
    CoachItem,
    CoachFilter,
  },
  methods: {
    setFilter(filters) {
      this.activeFilters = filters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong...";
      }
      this.isLoading = false;
    },

    handleError() {
      this.error = null;
    },
  },

  created() {
    document.addEventListener("click", this.documentClick);
    this.loadCoaches();
  },

  beforeUnmount() {
    document.removeEventListener("click", this.documentClick);
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  flex-wrap: wrap;
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

  input {
    width: 100%;
    border: none;
    padding: 0 1.5rem;
    border-radius: 10px;
  }

  .clear-input {
    background-color: #efefef;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 4rem;
    height: 100%;
  }
}

.btn-sort {
  background-color: #5dbee7;
  width: 5rem;
  height: 4rem;
  border-radius: 10px;
  border: 2px solid #000;
  color: white;

  svg {
    fill: white;
  }
}

.coaches__title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: $bp-medium) {
    flex-direction: column-reverse;
    align-items: first baseline;
    gap: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  span {
    color: #9fd6b7;
  }
}

.filter-coach {
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  right: 0;
  top: 4.5rem;
  border-radius: 5px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background-color: orange;
  width: 100%;
  display: flex;

  li {
    padding: 0.3rem;
  }
}
</style>
