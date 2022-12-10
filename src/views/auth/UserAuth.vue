<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      {{ error }}
    </base-dialog>

    <form @submit.prevent="submitData">
      <base-card>
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>

        <div class="form-control" v-if="!formIsValid">
          <p class="error">
            Please enter a valid email and password ( password must be at least
            6 charecters.)
          </p>
        </div>

        <div class="form-control">
          <div class="actions">
            <div v-if="!isLoading">
              <base-button type="submit">{{ submitBtnText }}</base-button>
              <base-button
                type="button"
                isDashed
                @click="switchMode"
                mode="orange"
                >{{ submitModeBtnText }}</base-button
              >
            </div>
            <base-spinner
              v-else-if="isLoading && error === null"
            ></base-spinner>
          </div>
        </div>
      </base-card>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      mode: "login",
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitBtnText() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "signup";
      }
    },
    submitModeBtnText() {
      if (this.mode === "login") {
        return "SignUp Instealy";
      } else {
        return "Login Instealy";
      }
    },
  },
  methods: {
    switchMode() {
      if (this.mode === "login") {
        this.mode = "singup";
      } else {
        this.mode = "login";
      }
    },
    async submitData() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        console.log(this.email, this.password);
        this.formIsValid = false;
        return;
      }

      const userPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        this.isLoading = true;
        if (this.mode === "login") {
          await this.$store.dispatch("login", userPayload);
        } else {
          await this.$store.dispatch("signup", userPayload);
        }
        this.isLoading = false;
        const redirectUrl = "/" + (this.$route.query.redirect || "coaches");

        this.$router.replace(redirectUrl);
      } catch (error) {
        this.error = error.message || "Failed to Authenticate , try later...";
      }
    },
    handleError() {
      this.error = null;
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  margin-top: 1rem;
  input {
    display: block;
    width: 100%;
    border-radius: 10px;
    border: 1px solid rgb(212, 209, 209);
    padding: 0.5rem 1.5rem;
    margin-top: 0.5rem;
  }
}

.error {
  color: rgb(235, 84, 84);
  font-size: 1.2rem;
}

.loading {
  width: 100%;
  height: 100%;
  background-color: grey;
}

.actions {
  display: flex;
  align-items: center;
}

.spinner {
  display: inline;
}
</style>
