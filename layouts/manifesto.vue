<template>
  <div>
    <div id="container">
      <nuxt />
    </div>
    <Ticker />
    <Logo />
    <ButtonManifesto />
    <Navbar />
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("manifestoicon").classList.add("nav-blue-active");
    document.querySelector(".nav-manifesto-link").style.color = "#190dfe";
  }
};
</script>

<style lang="scss">
html ButtonsNoShop {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  display: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  overflow: hidden;
  background-image: linear-gradient(180deg, #cacaff 0%, #efefff 100%);
}

#wrapper {
  white-space: nowrap;
  position: relative;
}

#logo {
  display: inline-block;
  width: 140px;
  position: absolute;
  top: 8%;
  left: 3%;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
  }
}
</style>
