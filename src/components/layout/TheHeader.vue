<template>
  <header class="header">
    <nav>
      <ul class="header__menu">
        <li v-if="isLoggedIn && isCoach && myInfo" class="name">
          Hi {{ myInfo.firstName }}
        </li>

        <li>
          <router-link to="/coaches">Coaches</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>

        <li v-else-if="!isLoggedIn && hasCoaches">
          <base-button isDashed link to="/auth">LogIn</base-button>
        </li>

        <li v-if="isLoggedIn" @click="logout">
          <base-button isDashed>Log out</base-button>
        </li>
      </ul>
    </nav>

    <div class="header__title">
      <h1>Choose your Coach</h1>
      <h3 class="mt-1">choose best coach for your needs</h3>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters["isAuthenticated"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
    myInfo() {
      return this.$store.getters["coaches/myInfo"];
    },
    isCoach(){
      return this.$store.getters["isCoach"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
}

header {
  background-color: #9fd6b7;
  color: white;
  padding: 3rem 8rem;
  width: 100%;
  height: 45vh;
  background-size: 100%;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  position: relative;
  margin-bottom: 5rem;

  h1 {
    font-size: 3rem;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    list-style: none;
    font-size: 1.5rem;

    li {
      padding: 0.5rem 1.5rem;
    }
  }
}

.header__title {
  background-image: url(@/assets/bg-square.png);
  background-repeat: no-repeat;
  height: 100%;
  display: inline-block;
  background-size: cover;
  margin-top: 2rem;
}

.name{
  margin-right: auto;
  font-size: 1.7rem;
  border: 1px solid #fff;
  border-radius: 10px;
}
</style>
