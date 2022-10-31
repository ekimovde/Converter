<template>
  <div :class="b()">
    <navbar-block />
    <nuxt />
  </div>
</template>

<script>
  import { Component, Vue } from 'nuxt-property-decorator';
  import Navbar from '~/components/navbar/component.vue'

  @Component({
    name: 'default-layout',
    components: {
      NavbarBlock: Navbar
    }
  })
  export default class extends Vue {
    //
  }
</script>

<style lang="scss" scoped>
  .default-layout {
    //
  }
</style>
