<template>
  <the-header></the-header>

  <div class="main">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
<style lang="scss">
.main {
  padding: 2rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  font-size: 1.5rem;
  line-height: 1.4;
}

html {
  font-size: 62.5%;

  @media only screen and (max-width: $bp-medium) {
    font-size: 50.25%;
  }
}

h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 1.8rem;
}

.mt-1 {
  margin-top: 1rem;
}

.mt-2 {
  margin-top: 2rem;
}

.main {
  max-width: 60rem;
  margin: 0 auto;
}

ul {
  list-style-type: none;
}

[class*="-icon"] {
  width: 2rem;
  height: 2rem;
}

.check-icon {
  fill: #9fd6b7;
}

.dollar-icon {
  fill: #feae87;
}

.heart-icon {
  fill: #e92d2d;
}

.star-icon {
  fill: #ffe600;
}

input {
  outline: none;

  &:focus {
    outline: none;
  }
}

img {
  display: inline-block;
  object-fit: cover;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-enter-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-leave-active {
  transition: all 0.3s ease-out;
}

.error {
  color: rgb(255, 110, 110);
  font-size: 1.2rem;
  margin: 1rem 0;
}
</style>
