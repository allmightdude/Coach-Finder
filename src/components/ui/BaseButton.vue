<template>
  <button
    v-if="!link"
    class="btn"
    :class="[mode, border, { dashed: isDashed }]"
  >
    <slot></slot>
  </button>

  <router-link :to="to" class="btn" :class="[mode , {dashed : isDashed}]" v-else>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
    },
    border: {
      type: String,
      required: false,
    },
    isDashed: {
      type: Boolean,
      required: false,
      default: false,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style lang="scss">
.btn,
.btn a {
  padding: 1rem 2rem;
  border-radius: 50px;
  margin: 0 0.2rem;
  color: white;
  border: none;
  background-color: #9fd6b7;
  cursor: pointer;
  text-decoration: none;
}
.orange {
  background-color: #feae87;
}

.green {
  background: #9fd6b7;
}

.dashed {
  border: 1px dashed #000;
}

.bd-green,
.bd-orange {
  background-color: transparent;
  color: #feae87;
}
.bd-green {
  border: 1px solid #9fd6b7;
}
.bd-orange {
  border: 1px solid #feae87;
}

.dashed {
  border: 1px dashed #707070;
  background-color: transparent;
  color: #707070;
}
</style>
