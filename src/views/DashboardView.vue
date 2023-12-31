<template>
  <div class="dashboard">
    <img
      class="dashboard-image"
      alt="Not-Yet-Developed"
      src="../assets/NoResult.svg"
    />
    <div class="dashboard-text">
      <div class="dashboard-text-heading">This page is not yet available</div>
      <div class="dashboard-text-text">Try accessing other pages</div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "DashboardView",
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style scoped lang="scss">
.dashboard {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  &-image {
    width: 392px;
    height: 298px;
  }
  &-text {
    display: flex;
    flex-direction: column;
    width: 392px;
    gap: 8px;
    &-heading {
      color: var(--Text-blu-black-high, rgba(0, 0, 0, 0.87));
      text-align: center;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Source Sans Pro;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
    }
    &-text {
      color: var(--Text-blu-black-medium, rgba(0, 0, 0, 0.6));
      text-align: center;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Source Sans Pro;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
}
</style>
