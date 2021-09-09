<template>
  <div class="main-section">
    <Main />
    <Shirtswap />
  </div>
</template>

<script>
import Shirtswap from "~/components/Shirtswap.vue";
export default {
  components: { Shirtswap }
};
</script>

<style lang="scss" scoped>
.main-section {
  width: 100%;
  height: 100%;
}
</style>
