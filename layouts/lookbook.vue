<template>
  <div>
    <div id="container">
      <nuxt />
    </div>
    <Ticker />
    <Logo />
    <Buttonsnoshop />
    <Navbar />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  components: { Navbar },
  mounted() {
    document.getElementById("lookbook-icon").classList.add("nav-blue-active");
    document.querySelector(".nav-lookbook-link").style.color = "#190dfe";

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.getElementById("container").style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.getElementById("container").style.setProperty("--vh", `${vh}px`);
    });
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

@media screen and (max-width: 600px) {
  #container {
    // height: calc(100vh - 50px);
    height: calc((var(--vh, 1vh) * 100) - 50px);

    margin: 25px 0 25px 0;
  }
}
</style>
