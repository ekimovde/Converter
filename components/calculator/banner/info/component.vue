<template>
  <div
    class="
    bg-[#EEF5FF]
    border
    border-[#DFE1F0]
    rounded-[16px]
    py-[40px]
    px-[30px]
    xl:py-[33px]
    xl:px-[24px]
    md:py-[22px]
    md:px-[15px]
    xs:py-[26px]
    xs:px-[15px]
  "
    :class="b()"
  >
    <h4
      class="
        text-[#0F4471]
        text-[18px]
        font-roboto
        font-medium
        uppercase
        mb-[50px]
        xl:text-[15px]
        xl:mb-[40px]
        md:text-[13px]
        md:mb-[25px]
        xs:text-[13px]
        xs:mb-[30px]
      "
      :class="b('title')"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:
    </h4>

    <div
      class="
        flex
        items-center
        justify-between
        gap-x-[30px]
        md:gap-x-[20px]
        xs:gap-x-[0px]
        xs:gap-y-[31px]
        xs:flex-col
        xs:items-start
      "
      :class="b('wrapper')"
    >
      <ul
        class="grid grid-cols-1 gap-y-[15px]"
        :class="b('list')"
      >
        <li
          v-for="(item, index) in infoList"
          :key="index"
          class="
          pl-[20px]
          text-[#404456]
          text-[18px]
          font-roboto
          relative
          after:absolute
          after:w-[10px]
          after:h-[10px]
          after:border-[2px]
          after:border-[#E02025]
          after:rounded-[100%]
          after:left-0
          after:top-[50%]
          after:translate-y-[-40%]
          xl:text-[14px]
          md:text-[13px]
          xs:text-[14px]
        "
        >
          {{ item }}
        </li>
      </ul>

      <ul class="
        grid
        grid-cols-2
        gap-x-[15px]
        gap-y-[9px]
        xl:gap-y-[8px]
        xl:gap-x-[12px]
        md:grid-cols-1
        md:gap-y-[5px]
        md:gap-x-[0px]
        xs:grid-cols-4
        xs:gap-y-[0px]
        xs:gap-x-[7px]
        xs:w-full
      ">
        <li
          v-for="(item, index) in imageList"
          :key="index"
          :class="b('item')"
        >
          <img
            :src="item"
            alt=""
            class="xl:w-[116px] xl:h-[116px] md:w-[86px] md:h-[58px] xs:w-full xs:h-[47px]"
            :class="b('image')"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({
    name: 'calculator-banner-info',
  })
  export default class extends Vue {
    infoList = [
      "incididunt ut labore et dolore magna aliqua",
      "incididunt ut labore et",
      "incididunt ut labore et dolore",
      "labore et dolore",
      "incididunt ut",
      "incididunt ut labore et dolore",
      "incididunt ut labore"
    ]
    imageList = [
      require('~/assets/images/home-one.png'),
      require('~/assets/images/home-two.png'),
      require('~/assets/images/home-three.png'),
      require('~/assets/images/home-four.png')
    ]
  }
</script>

<style lang="scss" scoped src="./component.scss"></style>
