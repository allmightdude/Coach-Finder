<template>
  <base-card>
    <li class="request">
      <div>E-Mail</div>
      <a href="" class="email">sabzi_f@yahoo.com</a>
    </li>
  </base-card>
</template>

<script>
export default {
  props :['request'],
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
    display: block;
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
