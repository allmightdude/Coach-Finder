<template>
  <header class="header">
    <nav>
      <ul class="header__menu">
        <li>
          <router-link to="/coaches">Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>

    <div class="header__title">
      <h1>Choose your Coach</h1>
      <h3 class="mt-1">choose best coach for your needs</h3>
    </div>
  </header>
</template>

<style lang="scss" scoped>
a{
  color: white;
  text-decoration: none;
}
header {
  background-color: #9fd6b7;
  color: white;
  padding: 3rem;
  width: 100%;
  height: 35vh;
  background-size: 100%;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
  position: relative;
  
  h1 {
    font-size: 3rem;
  }

  ul {
    display: flex;
    justify-content: flex-end;
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
}
</style>
