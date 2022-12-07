<template>
  <div>
    <h2>Register as a coach now!</h2>

    <base-card>
      <coach-form></coach-form>
    </base-card>
  </div>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
export default {
  components: {
    CoachForm,
  },
};
</script>
