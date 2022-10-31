<template>
  <div
    class="bg-[#F8F8F8] py-[16px]"
    :class="b()"
  >
    <div
      class="mx-auto"
      :class="b('inner-wrapper')"
    >
      <ul class="flex items-center justify-flex-start gap-x-[31px]">
        <li
          v-for="(item, index) in links"
          :key="index"
        >
          <nuxt-link
            class="text-[#666666] text-[12px] font-medium font-roboto"
            :class="b('link')"
            :to="{ name: item.routeName }"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({
    name: 'navbar-block',
  })
  export default class extends Vue {
    links = [
      {
        title: 'Калькулятор',
        routeName: 'index'
      },
      {
        title: 'Курс рубля',
        routeName: 'course'
      }
    ]
  }
</script>

<style lang="scss" scoped src="./component.scss"></style>
