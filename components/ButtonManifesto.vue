<template>
  <div>
    <button id="slideBack" type="button" @click="slideBack()">
      <img src="~/assets/img/arrow-button-left.png" alt="" />
    </button>
    <button id="slide" type="button" @click="slide()">
      <img src="~/assets/img/arrow-button-right.png" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
    document.getElementById("slideBack").classList.add("disabled");
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
    document.getElementById("slideBack").classList.add("disabled");
    document.getElementById("slide").classList.remove("disabled");
  },

  methods: {
    onScroll() {
      let container = document.getElementById("container");
      if (
        container.scrollLeft + container.offsetWidth ===
        container.scrollWidth
      ) {
        document.getElementById("slide").className = "disabled";
      } else if (container.scrollLeft === 0) {
        document.getElementById("slideBack").className = "disabled";
      } else {
        document.getElementById("slideBack").className = "fadeIn";
        document.getElementById("slide").className = "fadeIn";
      }
    },
    slide() {
      var dis = document.querySelector(".inner-section-mobile").clientWidth;
      var container = document.getElementById("container");

      if (window.innerWidth < 600) {
        this.sideScroll(container, "right", 10, dis / 8 - 10, 10);
      } else {
        this.sideScroll(container, "right", 10, 250, 10);
      }
    },
    slideBack() {
      var dis = document.querySelector(".inner-section-mobile").clientWidth;
      var container = document.getElementById("container");

      if (window.innerWidth < 600) {
        this.sideScroll(container, "left", 70, dis / 8 - 10, 10);
      } else {
        this.sideScroll(container, "left", 70, 250, 10);
      }
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
button {
  position: absolute;
  bottom: 10%;
  border: 0;
  padding: 0;
  margin: 0;
  width: 90px;
  height: 90px;
  background: none;

  img {
    width: 100%;
  }

  :hover {
    transform: translate(5px, 7px);
    box-shadow: 8px 6px 6px rgba(25, 13, 254, 0.55);
    cursor: pointer;
  }

  :not(:hover) {
    box-shadow: 13px 13px 13px rgba(25, 13, 254, 0.55),
      1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
  }
}

button#shop-btn {
  position: absolute;
  left: 30%;
  bottom: 8%;
  z-index: 200;
  // box-shadow: 10px 10px 10px rgb(11 0 255 / 53%), 0 2px 4px rgb(0 0 0 / 53%);
  margin: 0 5px 5px 0;
  background-image: url(/images/labelled-button-left.png),
    url(/images/labelled-button-right.png),
    url(/images/labelled-button-middle.png);
  background-position: 0 0, 100% 0, 50%;
  background-size: 50px 100%, 50px 100%, 25px 100%;
  background-repeat: no-repeat, no-repeat, repeat-x;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  text-align: center;
  width: 40%;
  height: 111px;
  overflow: hidden;
  font-family: "VCR OSD Mono", monospace;
  font-size: 1.6vw;
}

button#slide:not(:hover),
button#slideBack:not(:hover) {
  box-shadow: 6px 6px 6px rgba(25, 13, 254, 0.55),
    1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
}

button#slide:hover,
button#slideBack:hover {
  transform: translate(0px, 0px);
  box-shadow: 6px 6px 6px rgba(25, 13, 254, 0.55);
  cursor: pointer;
}

button#shop-btn:not(:hover) {
  box-shadow: 6px 6px 6px rgba(25, 13, 254, 0.55),
    1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
}

button#shop-btn:hover {
  transform: translate(0px, 0px);
  box-shadow: 8px 6px 6px rgba(25, 13, 254, 0.55);
  cursor: pointer;
}

button#shop-btn > span {
  box-shadow: none;
  transform: none;
  color: black;
  font-size: 3rem;
}

#slide {
  right: 58px;
}

#slideBack {
  left: 58px;
}

.disabled {
  transition: opacity 0.3s ease;
  opacity: 0.5;
  pointer-events: none;
}

.show {
  display: block;
}

.hide {
  display: none;
}

.fadeIn {
  transition: opacity 0.3s ease;
  opacity: 1;
}

@media screen and (max-width: 600px) {
  button {
    z-index: 200;
  }

  button :hover {
    transform: translate(0px, 0px) !important;
  }

  button#slide:hover,
  button#slideBack:hover {
    transform: translate(0px, 0px) !important;
  }

  button#shop-btn {
    width: 80%;
    height: 65px;
    left: 10%;
    bottom: 16%;
    font-size: calc(14px + (30 - 14) * ((100vw - 450px) / (600 - 350)));

    span {
      font-size: calc(14px + (30 - 14) * ((100vw - 350px) / (600 - 350)));
    }
  }

  #slideBack,
  #slide {
    top: 50%;
    // transform: translateY(-50%);
    width: 10vw;
    height: 10vw;
  }

  #slideBack {
    left: 3%;
    img {
      box-shadow: 3px 3px 3px rgba(25, 13, 254, 0.55),
        1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
    }
  }
  #slide {
    right: 3%;
    img {
      box-shadow: 3px 3px 3px rgba(25, 13, 254, 0.55),
        1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
    }
  }

  button#slide:not(:hover),
  button#slideBack:not(:hover) {
    box-shadow: 3px 3px 3px rgba(25, 13, 254, 0.55),
      1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
  }

  button#slide:hover,
  button#slideBack:hover {
    transform: translate(0px, 0px);
    box-shadow: 3px 3px 3px rgba(25, 13, 254, 0.55);
    cursor: pointer;
  }

  button#shop-btn:not(:hover) {
    box-shadow: 6px 6px 6px rgba(25, 13, 254, 0.55),
      1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
  }

  button#shop-btn:hover {
    transform: translate(0px, 0px);
    box-shadow: 8px 6px 6px rgba(25, 13, 254, 0.55);
    cursor: pointer;
  }

  .popup-content {
    width: 100%;
    height: 100%;
    border: none;

    .inner-top {
      width: 100%;
      height: 50%;
      padding-top: 19%;

      img {
        margin-top: 8%;
        width: 80%;
      }

      div {
        width: 55%;
        margin: 6% auto;
        height: 45px;
        line-height: 43px;
      }

      .close-btn {
        right: 6%;
      }
    }

    .inner-bottom {
      font-size: 1.2rem;
      padding: 15%;
      height: 50%;

      span {
        display: block;
        margin: 9% 0 2% 0;
      }

      .text-input {
        height: 80px;
        margin-top: 10%;

        input {
          display: block;
          width: 100%;
          height: 48%;
        }

        a {
          display: block;
          width: 100%;
          height: 50%;
          border-top: 1px solid #190dfe;
        }
      }
    }
  }
}
</style>
