<template>
  <section>
    <h1>404 Page not found!</h1>
    <p>
      this page not be found - check coaches on landing page
      <router-link to="/coaches">Coaches</router-link>
    </p>
  </section>
</template>


<style lang="scss" scoped>
    section{
        text-align: center;
    }

    h1{
        font-size: 4rem;
        color: #67ce93;
        text-shadow: 0 .5rem 1rem rgba(#9fd6b7 , .5);
    }

    p{
        font-size: 2rem;
        color: #afafaf;
    }

    a{
        color: #67ce93;
    }
</style>