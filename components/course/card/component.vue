<template>
  <div
    class="bg-[#F8F8F8] drop-shadow-[0_2x_10px_rgba(0,0,0,0.15)] rounded-[16px]"
    :class="b()"
  >
    <div
      class="py-[39px] px-[30px] text-left w-full h-full xl:px-[24px] xs:p-[25px]"
      :class="b('wrapper')"
    >
      <img :src="dispayedIcon" alt="">

      <div
        class="font-roboto mt-[37px] mb-[40px] xs:mt-[24px] xs:mb-[30px]"
        :class="b('header')"
      >
        <h4
          class="text-[#0F4471] text-[20px] font-bold mb-[30px] md:text-[18px] xs:mb-[23px] xs:text-[17px]"
          :class="b('title')"
        >
          {{ card.CharCode }}
        </h4>

        <p
          class="text-[#111111] text-[16px] xl:text-[15px] md:text-[14px]"
          :class="b('text')"
        >
          {{ card.Name }}
        </p>
      </div>

      <ul
        class="text-[#1C1C1C] text-[16px] font-medium"
        :class="b('list')"
      >
        <li
          v-for="(item, index) in displayedParams"
          :key="index"
          class="
            pl-[20px]
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
          "
          :class="b('item')"
        >
          <p class="text-[#1C1C1C] text-[16px] font-roboto font-medium xl:text-[15px] md:text-[14px]">
            {{ item.title }}: {{ item.value }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Component, Vue, Prop } from 'nuxt-property-decorator';

  @Component({
    name: 'course-card',
  })
  export default class extends Vue {
    @Prop({
      type: Object,
      required: true
    }) card;

    get dispayedIcon() {
      return this.card.CharCode === 'AZN'
        ? require('~/assets/svg/currency-alt.svg')
        : require('~/assets/svg/currency.svg');
    }

    get displayedParams() {
      return [
        {
          title: 'Номинал',
          value: this.card.Nominal
        },
        {
          title: 'Курс',
          value: this.card.Value
        }
      ]
    }
  }
</script>

<style lang="scss" scoped src="./component.scss"></style>
