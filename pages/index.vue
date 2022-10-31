<template>
  <div :class="b()">
    <div
      class="py-[30px] mx-auto"
      :class="b('inner-wrapper')"
    >
      <h1
        class="
          text-[#0F4471]
          font-roboto
          font-medium
          text-[36px]
          max-xl:text-[26px]
          max-md:text-[26px]
          max-xs:text-[20px]
          mb-[40px]
          max-xl:mb-[40px]
          max-md:mb-[20px]
          max-xs:mb-[20px]
        "
      >
        Валютный калькулятор
      </h1>

      <div
        class="
          grid
          grid-cols-2
          gap-x-[36px]
          mb-[40px]
          xl:gap-x-[39px]
          xl:mb-[24px]
          md:gap-x-[27px]
          md:mb-[21px]
          xs:grid-cols-1
          xs:gap-x-[0px]
          xs:mb-[22px]
        "
        :class="b('wrapper')"
      >
        <div
          class="xs:mb-[17px]"
          :class="b('form-wrapper')"
        >
          <calculator-form :currencies="currencies" />
        </div>

        <calculator-info />
      </div>

      <calculator-help />
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from 'nuxt-property-decorator';
  import CalculatorForm from "~/components/calculator/form/component.vue";
  import CalculatorInfo from "~/components/calculator/banner/info/component.vue";
  import CalculatorHelp from "~/components/calculator/banner/help/component.vue";

  @Component({
    name: 'index-page',
    components: {
      CalculatorForm,
      CalculatorInfo,
      CalculatorHelp
    }
  })
  export default class extends Vue {
    get currencies() {
      return [
        {
          ID: "R01010",
          NumCode: "036",
          CharCode: "AUD",
          Nominal: 1,
          Name: "Австралийский доллар",
          Value: 39.3322,
          Previous: 38.7929,
        },
        {
          ID: "R01020A",
          NumCode: "944",
          CharCode: "AZN",
          Nominal: 1,
          Name: "Азербайджанский манат",
          Value: 36.1339,
          Previous: 36.078,
        },
        {
          ID: "R01035",
          NumCode: "826",
          CharCode: "GBP",
          Nominal: 1,
          Name: "Фунт стерлингов Соединенного королевства",
          Value: 70.3839,
          Previous: 69.3917,
        },
        {
          ID: "R01060",
          NumCode: "051",
          CharCode: "AMD",
          Nominal: 100,
          Name: "Армянских драмов",
          Value: 15.3808,
          Previous: 15.2983,
        },
        {
          ID: "R01090B",
          NumCode: "933",
          CharCode: "BYN",
          Nominal: 1,
          Name: "Белорусский рубль",
          Value: 24.8042,
          Previous: 24.7628,
        },
      ];
    };
  }
</script>

<style lang="scss" scoped>
  .index-page {
    &__inner-wrapper {
      max-width: 1440px;
      width: 90%;

      @media screen and (max-width: 1280px) {
        width: 95%;
      }

      @media screen and (max-width: 768px) {
        width: 95%;
      }

      @media screen and (max-width: 360px) {
        width: 95%;
      }
    }
  }
</style>
