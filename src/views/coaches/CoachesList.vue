<template>
  <h1>Coaches</h1>

  <form class="search">
    <input type="text" />
    <button>sort</button>
  </form>

  <div>
    <h3>24 Coach Are Available</h3>
    <button>Register as a coach</button>
  </div>

  <ul class="coaches">
    <coach-item v-for="coach in coaches" :key="coach.id" :coach="coach"></coach-item>
  </ul>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";

export default {
  data() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  components: {
    CoachItem,
  },
};
</script>
