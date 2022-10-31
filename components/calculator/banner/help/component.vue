<template>
  <div
    class="
      flex
      items-center
      justify-between
      bg-[#EEF5FF]
      rounded-[16px]
      py-[65px]
      pl-[51px]
      pr-[138px]
      xl:py-[55px]
      xl:px-[33px]
      md:py-[33px]
      md:px-[20px]
      xs:py-[26px]
      xs:px-[14px]
      xs:flex-col
      xs:gap-y-[29px]
    "
    :class="b()"
  >
    <div
      class="font-['Roboto'] xs:text-center"
      :class="b('info')"
    >
      <h2
        class="
        text-[#093078]
        text-[36px]
        font-roboto
        font-bold
        leading-[35px]
        mb-[15px]
        xl:text-[29px]
        xl:mb-[12px]
        md:text-[18px]
        md:leading-[25px]
        md:mb-[10px]
        xs:text-[16px]
        xs:leading-[20px]
        xs:mb-[10px]
      "
        :class="b('title')"
      >
        Нужна помощь? <br />
        Мы поможем! Просто свяжитесь с нами.
      </h2>

      <p class="text-[16px] text-[#404456] font-roboto xl:text-[13px] md:text-[10px] xs:text-[12px]">
        Наши специалисты с радостью ответят на все ваши вопросы и дадут профессиональную консультацию по товарам.
      </p>
    </div>

    <div
      class="flex flex-col items-center"
      :class="b('contacts')"
    >
      <a
        href="tel:88008889028"
        class="text-[#093078] text-[50px] font-roboto font-medium xl:text-[40px] md:text-[24px] xs:text-[26px]"
      >
        8 (800) 888-90-28
      </a>

      <p class="text-[24px] text-[#404456] font-roboto xl:text-[18px] md:text-[12px] xs:text-[12px]">
        или
      </p>

      <a
        href="mailto:info@example.ru"
        class="text-[34px] text-[#093078] font-roboto xl:text-[24px] md:text-[20px] xs:text-[18px]"
      >
        info@example.ru
      </a>
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({
    name: 'calculator-banner-help',
  })
  export default class extends Vue {
    //
  }
</script>

<style lang="scss" scoped src="./component.scss"></style>
