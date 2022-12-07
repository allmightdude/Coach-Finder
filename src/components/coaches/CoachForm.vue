<template>
  <base-dialog :show="!!error" title="An error occured" @close="handleError">{{error}}</base-dialog>

  <form @submit.prevent="submitaData">
    <div class="form-control">
      <label for="firstName">FirstName</label>
      <input type="text" id="firstName" v-model.trim="firstName" required />
    </div>

    <div class="form-control">
      <label for="lastName">LastName</label>
      <input type="text" id="lastName" v-model.trim="lastName" required />
    </div>

    <div class="form-control">
      <label for="description">description</label>
      <textarea rows="5" cols="" v-model.trim="description"> required</textarea>
    </div>

    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="hourlyRate" required />
    </div>

    <div class="form-control">
      <label for="caption">Caption</label>
      <input type="text" id="caption" v-model.trim="caption" required />
    </div>

    <div class="form-control">
      <label for="caption">Your Picture</label>
      <input type="file" id="picture" required />
    </div>

    <div class="form-control demo">
      <h4>area's experiense</h4>
      <div class="mt-2">
        <checkbox-form v-model="areas"></checkbox-form>
      </div>
    </div>
    <p v-if="!formIsValid" class="error">Please fill all fields</p>

    <base-button v-if="!isLoading" type="submit">Register</base-button>
    <base-spinner v-else class="loader"></base-spinner>
  </form>
</template>

<script>
import CheckboxForm from "../CheckboxForm.vue";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      description: "",
      caption: "",
      hourlyRate: null,
      areas: [],
      error: null,
      formIsValid: true,
      isLoading: false,
    };
  },
  components: {
    CheckboxForm,
  },
  methods: {
    async submitaData() {
      this.formIsValid = true;
      if (
        this.firstName === "" ||
        this.lastName === "" ||
        this.description === "" ||
        this.hourlyRate === "" ||
        this.caption === ""
      ) {
        this.formIsValid = false;
      }
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        hourlyRate: this.hourlyRate,
        caption: this.caption,
        areas: [...this.areas],
      };

      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/registerCoach", data);
        this.$router.replace("/coaches");
      } catch (error) {
        this.error = error.message || "Can not register as a coach";
      }
      this.isLoading = false;
    },
    handleError(){
      this.error = null;
      this.isLoading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
form {
  padding: 2rem;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  padding: 0.5rem 2rem;
  border-radius: 10px;

  input:focus,
  textarea:focus {
    background-color: #d9ffe9;
    outline: none;
    border-color: #3d008d;
  }

  input[type="checkbox"] {
    display: inline;
    width: auto;
    border: none;
  }

  input[type="checkbox"]:focus {
    outline: #deffed solid 1px;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.loader {
  text-align: left;
}
</style>
