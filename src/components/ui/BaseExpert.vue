<template>
  <div class="coaches__expert">
    <div>
      <svg class="check-icon">
        <use xlink:href="@/assets/sprite.svg#icon-check-circle"></use>
      </svg>
      Coach Expert
    </div>
    <div>
      <svg class="dollar-icon">
        <use xlink:href="@/assets/sprite.svg#icon-dollar"></use>
      </svg>
      ${{rate}} per hours
    </div>
  </div>
</template>

<script>
export default {
    props : ['rate']
}
</script>


<style lang="scss" scoped>
.coaches__expert {
  padding: 1rem 2rem;
  border: 1px solid #000;
  border-left-color: transparent;
  border-right-color: transparent;
  display: flex;
  justify-content: space-around;
  width: 100%;

  div {
    width: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  :nth-child(2) {
    border-left: 1px solid #000;
  }
}
</style>
