<template>
  <input
    class="border border-[#DFDFDF] outline-none rounded-[5px] px-[20px] py-[10px]"
    :class="b()"
    :value="value"
    :placeholder="placeholder"
    :type="type"
    :disabled="isDisabled"
    @input="input"
  />
</template>

<script>
  import { Component, Vue, Prop } from 'nuxt-property-decorator';

  export const UiInputType = {
    text: 'text',
    number: 'number'
  }

  const UiInputEvent = {
    input: 'input'
  }

  @Component({
    name: 'ui-input',
  })
  export default class extends Vue {
    @Prop({
      type: [String, Number]
    }) value;

    @Prop({
      type: String,
      default: 'Введите текст'
    }) placeholder;

    @Prop({
      type: String,
      validator: val => Object.values(UiInputType).includes(val),
      default: UiInputType.text
    }) type;

    @Prop({
      type: Boolean,
      default: false
    }) isDisabled;

    input(event) {
      this.$emit(UiInputEvent.input, event.target.value);
    }
  }
</script>

<style lang="scss" scoped src="./component.scss"></style>
