<template>
  <li class="badge">
    <slot></slot>
  </li>
</template>

<script></script>
<style lang="scss" scoped>
.badge {
  background-color: #eff8f3;
  border: 1px solid #dbf2e5;
  padding: .5rem 1rem ;
  color: #ababab;
  font-size: 1.2rem;
  border-radius: 10px;
  display: inline-block;
  
  &:not(:first-child){
    margin: 0 0.5rem;
  }
}
</style>
