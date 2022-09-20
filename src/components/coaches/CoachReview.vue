<template>
  <div class="review">
    <div class="review__item">
      <div class="review__item-img">
        <img src="@/assets/images/5.jpg" alt="" />
      </div>

      <div class="review__item-info">
        <div class="review__title">
          <h4 class="review__name">Farid Sabzi</h4>
          <div class="review__rate">
            <svg class="star-icon">
              <use xlink:href="@/assets/sprite.svg#icon-star"></use>
            </svg>
            <svg class="star-icon">
              <use xlink:href="@/assets/sprite.svg#icon-star"></use>
            </svg>
            <svg class="star-icon">
              <use xlink:href="@/assets/sprite.svg#icon-star"></use>
            </svg>
            <svg class="star-icon">
              <use xlink:href="@/assets/sprite.svg#icon-star"></use>
            </svg>
            <svg class="star-icon">
              <use xlink:href="@/assets/sprite.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.review {
  margin-top: 3rem;

  &__item {
    display: flex;

    &-info {
      width: 100%;
    }
  }

  &__item-img {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 6rem;
      height: 6rem;
      border-radius: 56%;
      border: 1px solid #000;
      padding: 0.3rem;
      margin: 0 1rem;
    }
  }
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
  }

  p {
    color: #848484;
  }
}
</style>
