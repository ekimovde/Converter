<template>
  <div
    class="py-[30px]"
    :class="b()"
  >
    <div
      class="mx-auto"
      :class="b('inner-wrapper')"
    >
      <h1
        class="
          text-[#0F4471]
          text-[36px]
          font-roboto
          font-bold
          mb-[40px]
          xl:text-[26px]
          md:text-[26px]
          md:mb-[20px]
          xs:text-[20px]
        "
        :class="b('title')"
      >
        Курс рубля
      </h1>

      <ul
        class="
          grid
          grid-cols-3
          gap-[30px]
          md:grid-cols-2
          md:gap-x-[20px]
          md:gap-y-[19px]
          xs:grid-cols-1
          xs:gap-y-[20px]
          mb-[30px]
          xl:mb-[48px]
          md:mb-[30px]
          xs:mb-[16px]
        "
        :class="b('list')"
      >
        <li
          v-for="(item, index) in cards"
          :key="index"
        >
          <course-card :card="item" />
        </li>
      </ul>

      <course-banner />
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from 'nuxt-property-decorator';
  import CourseCard from "@/components/course/card/component.vue";
  import CourseBanner from "@/components/course/banner/component.vue";

  @Component({
    name: 'course-page',
    components: {
      CourseCard,
      CourseBanner
    }
  })
  export default class extends Vue {
    cards = [
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
    ]
  }
</script>

<style lang="scss" scoped>
  .course-page {
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
