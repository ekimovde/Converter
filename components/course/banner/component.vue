<template>
  <div
    class="
      bg-[#F8F8F8]
      py-[37px]
      px-[31px]
      rounded-[16px]
      flex
      items-center
      flex-row
      xl:px-[25px]
      xl:py-[40px]
      md:px-[25px]
      md:py-[30px]
      xs:px-[28px]
      xs:py-[32px]
      max-xs:flex-col
      max-xs:items-start
    "
    :class="b()"
  >
    <img :src="icon" alt="">

    <div
      class="
        ml-[30px]
        xl:ml-[20px]
        md:ml-[25px]
        max-xs:mt-[30px]
        max-xs:ml-[0]
      "
      :class="b('contacts')"
    >
      <div
        class="
          text-[#0F4471]
          text-[20px]
          font-roboto
          font-bold
          max-xl:text-[20px]
          max-md:text-[18px]
          max-xs:text-[16px]
        "
        :class="b('wrapper')"
      >
        <span>
          Телефон: <a href="tel:8(800)8889028">8 (800) 888-90-28</a>
        </span>

        <span>
          email: <a href="mailto:info@example.ru">info@example.ru</a>.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({
    name: 'course-banner',
  })
  export default class extends Vue {
    icon = require('~/assets/svg/info.svg')
  }
</script>

<style lang="scss" scoped src="./component.scss"></style>
