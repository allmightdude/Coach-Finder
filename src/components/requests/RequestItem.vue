<template>
  <base-card>
    <li class="request">
      <span>E-Mail : </span>
      <a href="" class="email">{{requestItem.userEmail}}</a>
      <p>{{requestItem.message}}</p>
    </li>
  </base-card>
</template>

<script>
export default {
  props :['requestItem'],
  computed: {
    emailLink(){
      return 'mailto:' + this.request.email;
    }
  },
}
</script>

<style lang="scss" scoped>
.request {
  padding: 2rem;
  position: relative;
  a {
    color: #9fd6b7;
    margin-top: 1rem;
  }

  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 0.5rem;
    background-color: #9fd6b7;
    top: 0;
    left: 0;
  }
}
</style>
