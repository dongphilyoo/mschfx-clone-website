<template>
  <div>
    <button id="slideBack" type="button" @click="slideBack()">
      <img src="~/assets/img/arrow-button-left.png" alt="" />
    </button>
    <button id="slide" type="button" @click="slide()">
      <img src="~/assets/img/arrow-button-right.png" alt="" />
    </button>
    <button id="shop-btn" type="button" @click="modal()">
      <span>DROPPING MONDAY,JUNE 22ND</span>DOWNLOAD OPEN SOURCE PATTERN
    </button>
    <!-- popup overlay: display when labeled shop button clicked -->
    <div id="popup-overlay" class="hide">
      <div class="popup-content">
        <div class="inner-top">
          <strong>MSCHF X GARMENT PATTERN</strong
          ><img src="~assets/img/pattern.svg" alt="" />
          <div>
            <a href="/MSCHFX_CutPattern_v2.pdf" target="_blank">GET PATTERN</a>
          </div>
          <span class="close-btn" @click="modalClose()"
            ><strong>X</strong></span
          >
        </div>

        <div class="inner-bottom">
          <span><strong>MSCHF X WAS MSCHF DROP #25</strong></span>
          Every drop is different and we never do the same thing twice. <br />
          Download the MSCHF app to hear about drops early.
          <div class="text-input">
            <input type="text" placeholder="ENTER PHONE NUMBER" /><a href="#"
              >TEXT ME THE MSCHF APP</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
    document.getElementById("slideBack").classList.add("disabled");

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document
      .getElementById("popup-overlay")
      .style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document
        .getElementById("popup-overlay")
        .style.setProperty("--vh", `${vh}px`);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
    document.getElementById("slideBack").classList.add("disabled");
    document.getElementById("slide").classList.remove("disabled");
    document.getElementById("slideBack").classList.remove("show");
    document.getElementById("slide").classList.remove("show");
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
    },
    modal() {
      document.getElementById("popup-overlay").className = "show";
    },
    modalClose() {
      document.getElementById("popup-overlay").className = "hide";
    },
    isModal() {
      let container = document.getElementById("container");
      if (
        container.scrollLeft + container.offsetWidth ===
        container.scrollWidth
      ) {
        document.getElementById("shop-btn").animate(
          [
            // keyframes
            {
              opacity: "0"
            }
          ],
          {
            // timing options
            duration: 1000,
            // easing: "cubic-bezier(.17,.67,.9,.34)",
            easing: "ease"
          }
        );
        setTimeout(function() {
          document.getElementById("shop-btn").style.display = "none";
        }, 1000);
      } else if (container.scrollLeft === 0) {
        document.getElementById("shop-btn").animate(
          [
            // keyframes
            {
              opacity: "0"
            }
          ],
          {
            // timing options
            duration: 1000,
            // easing: "cubic-bezier(.17,.67,.9,.34)",
            easing: "ease"
          }
        );
        setTimeout(function() {
          document.getElementById("shop-btn").style.display = "none";
        }, 1000);
      } else {
        document.getElementById("shop-btn").style.display = "flex";
        //   "opacity 1s ease";
        document.getElementById("shop-btn").animate(
          [
            // keyframes
            {
              opacity: "1"
            }
          ],
          {
            // timing options
            duration: 1000,
            // easing: "cubic-bezier(.17,.67,.9,.34)",
            easing: "ease"
          }
        );
      }
    },
    fadeOut(el, speed) {
      var seconds = speed / 1000;
      el.style.transition = "opacity " + seconds + "s ease";

      el.style.opacity = 0;
      setTimeout(function() {
        // el.parentNode.removeChild(el);
        el.style.display = "none";
      }, speed);
    },
    fadeIn(el, speed) {
      var seconds = speed / 1000;
      console.log(el.style.opacity);
      el.style.display = "flex";
      el.style.transition = "opacity " + seconds + "s ease";

      setTimeout(function() {
        el.style.opacity = 1;
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
  z-index: 50;

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

button#shop-btn:not(:hover) {
  box-shadow: 13px 13px 13px rgba(25, 13, 254, 0.55),
    1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
}

button#shop-btn:hover {
  transform: translate(5px, 7px);
  box-shadow: 8px 6px 6px rgba(25, 13, 254, 0.55);
  cursor: pointer;
}

button#shop-btn > span {
  box-shadow: none;
  transform: none;
  color: black;
  font-size: calc(14px + (30 - 14) * ((100vh - 500px) / (600 - 350)));
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

#popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 999;
}

.popup-content {
  position: absolute;
  width: 590px;
  background-color: #fff;
  border: 1px solid #190dfe;
  box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
    1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
  height: 540px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "FoundersGrotesk";
  text-align: center;

  .inner-top {
    width: 100%;
    height: 60%;
    border-bottom: 1px solid #190dfe;
    padding-top: 6%;

    img {
      margin-top: 3%;
    }

    div {
      width: 35%;
      margin: 3% auto;
      height: 42px;
      line-height: 40px;
      font-family: "VCR OSD Mono";
      font-size: 1.2rem;
      border: 1px solid #190dfe;
      box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
        1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
      background-color: #efefff;

      a {
        display: block;
        width: 100%;
        height: 100%;
        color: black;
        text-decoration: none;
      }
    }

    span {
      position: absolute;
      top: 3%;
      right: 3%;
      font-size: 1.2rem;
    }
    span:hover {
      cursor: pointer;
    }
  }

  .inner-bottom {
    width: 100%;
    height: 40%;

    span {
      display: block;
      margin: 6% 0 2% 0;
    }

    .text-input {
      border: 1px solid #190dfe;
      box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
        1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
      width: 90%;
      height: 40px;
      margin: 0 auto;
      margin-top: 5%;
      line-height: 40px;
      font-family: "VCR OSD Mono";
      font-size: 1.2rem;

      input {
        display: inline-block;
        width: 50%;
        border: none;
        font-family: "VCR OSD Mono";
        font-size: 1.2rem;
        text-align: center;
        height: 98%;
        padding: 0;
      }

      textarea:focus,
      input:focus {
        outline: none;
      }

      ::placeholder {
        color: #f35b25;
        opacity: 0.6;
      }

      :-ms-input-placeholder {
        color: #f35b25;
      }

      ::-ms-input-placeholder {
        color: #f35b25;
      }

      a {
        display: inline-block;
        width: 50%;
        height: 100%;
        color: black;
        text-decoration: none;
        text-align: center;
        border-left: 1px solid #190dfe;
        background-color: #efefff;
      }
    }
  }
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
  display: block;
}

.fadeOut {
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
  display: none;
}

@media screen and (max-width: 780px) {
  button#shop-btn > span {
    font-size: calc(14px + (30 - 14) * ((100vw - 500px) / (600 - 350)));
  }
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
      padding-top: 14%;

      img {
        margin-top: 8%;
        width: 80%;
      }

      div {
        width: 45%;
        margin: 2% auto;
        height: 45px;
        line-height: 43px;
        font-size: calc(100vh * 0.025 - 3.3px);
      }

      .close-btn {
        right: 6%;
      }
    }

    .inner-bottom {
      padding: 10%;
      height: 50%;

      span {
        display: block;
        margin: 9% 0 2% 0;
      }

      .text-input {
        height: 70px;
        margin-top: 4%;

        input {
          display: block;
          width: 100%;
          height: 48%;
          font-size: calc(100vh * 0.025 - 3.3px);
        }

        a {
          display: block;
          width: 100%;
          height: 50%;
          border-top: 1px solid #190dfe;
          font-size: calc(100vh * 0.025 - 3.3px);
        }
      }
    }
  }
}
</style>
