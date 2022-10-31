<template>
  <div :class="b()">
    <div
      class="flex flex-col gap-y-[30px] xs:gap-y-[21px]"
      :class="b('form-wrapper')"
    >
      <div
        class="flex flex-col"
        :class="b('input-wrapper')"
      >
        <label
          class="
            text-[#2C3A4B]
            text-[16px]
            font-roboto
            font-medium
            xl:text-[14px]
            md:text-[14px]
            xs:text-[14px]
          "
        >
          Валюта 1
        </label>

        <ui-input
          class="mt-[10px]"
          placeholder="Введите название или код"
          v-model="currencyOne"
        />
      </div>

      <div
        class="flex flex-col"
        :class="b('input-wrapper')"
      >
        <label
          class="
            text-[#2C3A4B]
            text-[16px]
            font-roboto
            font-medium
            xl:text-[14px]
            md:text-[14px]
            xs:text-[14px]
          "
        >
          Валюта 2
        </label>

        <ui-input
          class="mt-[10px]"
          placeholder="Введите название или код"
          v-model="currencyTwo"
        />
      </div>

      <div
        class="flex flex-col"
        :class="b('input-wrapper')"
      >
        <label
          class="
            text-[#2C3A4B]
            text-[16px]
            font-roboto
            font-medium
            xl:text-[14px]
            md:text-[14px]
            xs:text-[14px]
          "
        >
          Количество
        </label>

        <ui-input
          class="mt-[10px]"
          placeholder="Введите число"
          v-model="count"
        />
      </div>
    </div>

    <div
      class="
        bg-[#EEF5FF]
        rounded-[16px]
        py-[37px]
        px-[31px]
        flex
        items-center
        gap-x-[33px]
        xl:py-[29px]
        xl:gap-x-[38px]
        md:py-[34px]
        md:px-[27px]
        md:gap-x-[21px]
        xs:py-[19px]
        xs:px-[26px]
        xs:gap-x-[19px]
        mt-[31px]
        xl:mt-[20px]
        md:mt-[23px]
        xs:mt-[19px]
      "
      :class="b('result')"
    >
      <p class="text-[#0F4471] text-[24px] font-roboto font-bold xl:text-[20px] md:text-[16px] xs:text-[14px]">
        Итого: {{ displayedResult }}
      </p>
    </div>
  </div>
</template>

<script>
  import { Component, Vue, Prop } from 'nuxt-property-decorator';
  import uiInput from '~/components/ui/input/component.vue'

  @Component({
    name: 'calculator-form',
    components: {
      uiInput
    }
  })
  export default class extends Vue {
    @Prop({
      type: Array,
      required: true
    }) currencies;

    currencyOne = '';
    currencyTwo = '';
    count = '';

    get hasCount() {
      return Boolean(this.count.length) && Boolean(Number(this.count))
    }

    get displayedResult() {
      const currentFirstCurrency = this.currencies.find(item => this.isCurrentCharCode(item.CharCode, this.currencyOne) ||
        this.isCurrentNumCode(item.NumCode, this.currencyOne)
      );
      const currentSecondCurrency = this.currencies.find(item => this.isCurrentCharCode(item.CharCode, this.currencyTwo) ||
        this.isCurrentNumCode(item.NumCode, this.currencyTwo)
      );

      if (!currentFirstCurrency || !currentSecondCurrency || !this.hasCount) {
        return '...'
      }

      return Number(this.count) * (currentSecondCurrency?.Value / currentFirstCurrency?.Value)
    }

    isCurrentCharCode(CharCode, value) {
      return String(CharCode).toLowerCase() === String(value).toLowerCase();
    }

    isCurrentNumCode(NumCode, value) {
      return String(NumCode).toLowerCase() === String(value).toLowerCase();
    }

    onChangeValute1(value) {
      this.valute1 = value;
    }

    onChangeCount(value) {
      this.count = value;
    }
  }
</script>

<style lang="scss" scoped src="./component.scss"></style>
