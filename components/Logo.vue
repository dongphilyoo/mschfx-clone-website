<template>
  <h1 id="logo" @click="scrollBack()">
    <img src="~/assets/img/mschf-x-logo.gif" alt="" class="logo-black" /><img
      src="~/assets/img/mschf-x-logo-blue.gif"
      alt=""
      class="logo-overlay"
    />
  </h1>
</template>

<script>
export default {
  methods: {
    scrollBack() {
      document
        .getElementById("lookbook-icon")
        .classList.remove("nav-blue-active");
      document
        .querySelector(".nav-lookbook")
        .classList.remove("nav-blue-active");
      document
        .getElementById("manifestoicon")
        .classList.remove("nav-blue-active");
      document
        .querySelector(".nav-manifesto")
        .classList.remove("nav-blue-active");
      let container = document.getElementById("container");

      if (this.$route.path === "/") {
        container.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      } else {
        container.scrollTo({
          left: 0
        });
        this.$router.push("/");
      }
    },
    slide() {
      var container = document.getElementById("container");
      this.sideScroll(container, "right", 10, 250, 10);
    },
    slideBack() {
      var container = document.getElementById("container");
      this.sideScroll(container, "left", 10, 250, 10);
    },
    sideScroll(element, direction, speed, distance, step) {
      var scrollAmount = 0;
      var slideTimer = setInterval(function() {
        if (direction == "left") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    }
  }
};
</script>

<style lang="scss" scoped>
#logo {
  z-index: 999;

  .logo-black {
    display: block;
  }

  .logo-overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
}

#logo:hover {
  cursor: pointer;

  .logo-overlay {
    display: block;
  }
  .logo-black {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  #logo {
    display: inline-block;
    width: 95px;
    position: absolute;
    top: 4%;
    left: 3%;
    .logo-overlay {
      display: none;
    }
  }

  #logo:hover {
    .logo-overlay {
      display: none;
    }
    .logo-black {
      display: block;
    }
  }
}
</style>
