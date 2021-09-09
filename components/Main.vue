<template>
  <div id="main">
    <div class="product-image product-image__video product-image__video1">
      <video
        src="~/assets/img/render-cropped.mp4"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        playsinline
      ></video>
    </div>
    <!-- mobile layout: Mobile component imported -->
    <div class="product-image product-image__mobile">
      <Mobile />
    </div>
    <!--  -->
    <div class="product-image product-image__1">
      <img src="~assets/img/HMU_8679-Edit.jpeg" alt="" />
    </div>
    <div class="product-image product-image__2">
      <img src="~assets/img/Malak 1.jpeg" alt="" />
    </div>
    <div class="product-image product-image__3">
      <img src="~assets/img/Ellie CS.jpeg" alt="" />
    </div>
    <div class="product-image product-image__4">
      <div id="order-section">
        <div class="top">
          MSCHF
          <img src="~assets/img/x.png" alt="" />
          Supreme
          <img src="~assets/img/x.png" alt="" />
          The North <br />
          Face
          <img src="~assets/img/x.png" alt="" />
          Adidas
          <img src="~assets/img/x.png" alt="" />
          Stüssy
          <img src="~assets/img/x.png" alt="" />
          Kith
          <img src="~assets/img/x.png" alt="" />
          <br />
          Palace
          <img src="~assets/img/x.png" alt="" />
          Chinatown Market
          <img src="~assets/img/x.png" alt="" />

          <br />
          Off-White
          <img src="~assets/img/x.png" alt="" />
          BAPE
          <img src="~assets/img/x.png" alt="" />
          <a href="/statement.pdf" target="_blank">[CENSORED]</a>
          <div>[NO SHIT WE DIDN'T ASK FOR THEIR PERMISSION]</div>
        </div>
        <div class="middle">
          <div class="mid-left">
            10 BRANDS, 1 SHIRT = <br /><span>$1010.10</span>
          </div>
          <div class="mid-right-mobile">
            EVERY SHIRT HAS PIECES FROM <br />
            ALL 10 BRANDS. <br /><br />
            EVERY GARMENT IS COMPLETELY <br />
            DIFFERENT.
          </div>
          <div class="mid-right">
            EVERY SHIRT HAS <br />
            PIECES FROM ALL 10 <br />
            BRANDS. <br /><br />
            EVERY GARMENT IS <br />
            COMPLETELY DIFFERENT.
          </div>
        </div>
        <div class="bottom">
          <div class="sizing">
            <div class="bottom-text">
              <p><strong>SELECT SIZE</strong></p>
              <p><a href="#" @click="sizeModal()">SEE SIZE GUIDE</a> ></p>

              <!-- size chart modal -->
              <div id="size-chart" @click="closeModal()">
                <table>
                  <tr>
                    <th>SIZE</th>
                    <th>NECK</th>
                    <th>CHEST</th>
                  </tr>
                  <tr>
                    <th>S/M</th>
                    <th>7.75"</th>
                    <th>24.5"</th>
                  </tr>
                  <tr>
                    <th>M/L</th>
                    <th>8"</th>
                    <th>26"</th>
                  </tr>
                </table>

                <span class="size-close">X</span>
              </div>
            </div>
            <div class="bottom-btn">
              <div class="sm-btn size-focused" @click="smSelected()">
                <span>S/M</span>
              </div>
              <div class="ml-btn" @click="mlSelected()"><span>M/L</span></div>
            </div>
          </div>
          <a
            href="https://apps.apple.com/us/app/mschf/id1500457154"
            target="_blank"
            ><div id="order-btn">
              <span>DROPPING MONDAY,JUNE 22ND</span>DOWNLOAD THE MSCHF APP TO BE
              NOTIFIED
            </div></a
          >
        </div>
      </div>
    </div>
    <div class="product-image product-image__5">
      <img src="~assets/img/HMU_8117.jpeg" alt="" />
    </div>
    <div class="product-image product-image__6">
      <img src="~assets/img/HMU_8300.jpeg" alt="" />
    </div>
    <div class="product-image product-image__7">
      <img src="~assets/img/HMU_8711.jpeg" alt="" />
    </div>
    <div class="product-image product-image__8">
      <img src="~assets/img/HMU_8615.jpeg" alt="" />
    </div>
    <div class="product-image product-image__9">
      <img src="~assets/img/HMU_7516-Edit.jpeg" alt="" />
    </div>
    <div class="product-image product-image__10">
      <img src="~assets/img/HMU_7637.jpeg" alt="" />
    </div>
    <div class="product-image product-image__11">
      <img src="~assets/img/ContactSheet.jpeg" alt="" />
    </div>
    <div class="product-image product-image__12">
      <img src="~assets/img/render2.png" alt="" />
    </div>
    <div class="product-image product-image__13">
      <img src="~assets/img/Malak 2.jpeg" alt="" />
    </div>
    <div class="product-image product-image__14">
      <img src="~assets/img/Vienna CS.png" alt="" />
    </div>
    <div class="product-image product-image__15">
      <img src="~assets/img/render1.png" alt="" />
    </div>
    <div class="product-image product-image__video product-image__video2">
      <video
        src="~/assets/img/IG_Hand.mp4"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        playsinline
      ></video>
    </div>

    <div id="about">
      <div class="text-section">
        <h2>ABOUT MSCHF X</h2>
        <p>10 Brands, 1 Shirt: 1 Impossible Collab.</p>
        <hr />
        <p>
          This is MSCHF Drop #25 - Shirts from ten ubiquitous streetwear brands,
          chopped to bits and re-assembled. Every MSCHF X shirt is different,
          and the pieces are random; every shirt has at least one piece from
          each brand.
        </p>
        <p>
          The cut pieces range from classic staples (Supreme box logo tees:
          $40-60 retail) to the rare and iconic (Supreme x Louis Vuitton hoodie:
          $8-10k resale).
        </p>
        <p>Re-assembled in USA. Edition of 1000, strictly limited.</p>
        <a class="terms" href="/terms-and-conditions.pdf" target="_blank">
          <li class="nav-terms">
            <svg
              width="24px"
              height="25px"
              viewBox="0 0 24 25"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="MSCHFX"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Desktop-|-Terms-and-Conditions"
                  transform="translate(-1149.000000, -69.000000)"
                  fill="#000000"
                >
                  <g
                    id="FORGROUND-ELEMENTS"
                    transform="translate(0.000000, 54.000000)"
                  >
                    <g
                      id="navigation"
                      transform="translate(797.000000, 0.000000)"
                    >
                      <g id="terms" transform="translate(352.000000, 2.000000)">
                        <path
                          id="termicon"
                          d="M7.5,13.75 L7.5,17.5 L9.72437081,17.5 L9.72437081,15.6342422 L14.064681,15.6342422 L14.064681,17.5 L16.25,17.5 L16.25,13.75 L7.5,13.75 Z M16.2150625,18.7135 L16.2150625,18.7865 L16.2849375,18.7135 L16.2150625,18.7135 Z M7.07331272,17.5095302 L7.07331272,19.9730979 L16.6119286,19.9730979 L16.6119286,17.5095302 L23.75,17.5095302 L23.75,37.5 L0,37.5 L0,17.5095302 L7.07331272,17.5095302 Z M21.3128966,20.0196848 L18.9769864,20.0196848 L18.9769864,22.466288 L4.69883943,22.466288 L4.69883943,20.0246628 L2.36372162,20.0246628 L2.36372162,35.0047794 L21.3128966,35.0047794 L21.3128966,20.0196848 Z M18.7374898,29.932699 L18.75,32.5 L5,32.5 L5.01251017,29.932699 L18.7374898,29.932699 Z M18.7374898,25 L18.75,27.567301 L5,27.567301 L5.01251017,25 L18.7374898,25 Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g></svg
            >TERMS + CONDITIONS
          </li>
        </a>
      </div>
    </div>
    <div class="space"><div class="inner"></div></div>
  </div>
</template>

<script>
// import Mobile from "./Mobile.vue";
export default {
  // components: { Mobile },
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
  },
  methods: {
    onScroll() {
      let target = document.getElementById("order-section");
      let elem = document.querySelector(".product-image__4");
      let bounding = elem.getBoundingClientRect();

      // determine big labeled button's behavior based on what kind of screen device. desktop or mobile
      if (window.innerWidth > 600) {
        if (bounding.left < 1920) {
          document.getElementById("shop-btn").className = "fadeOut";
        }
        if (bounding.left > 1920) {
          document.getElementById("shop-btn").className = "fadeIn";
        }
        if (bounding.right < 0) {
          document.getElementById("shop-btn").className = "fadeIn";
        }
      } else {
        // mobile screen
        if (bounding.right < target.offsetWidth * 2) {
          document.getElementById("shop-btn").className = "fadeOut";
        }
        if (bounding.right > target.offsetWidth * 2) {
          document.getElementById("shop-btn").className = "fadeIn";
        }
        if (bounding.right < 0) {
          document.getElementById("shop-btn").className = "fadeIn";
          this.closeShopBtn();
        }
        if (bounding.right < -4075) {
          document.getElementById("shop-btn").className = "fadeOut";
        }
      }
    },
    sizeModal() {
      document.getElementById("size-chart").style.display = "block";
    },
    closeModal() {
      document.getElementById("size-chart").style.display = "none";
    },
    smSelected() {
      document.querySelector(".sm-btn").className = "sm-btn size-focused";
      document.querySelector(".ml-btn").classList.remove("size-focused");
    },
    mlSelected() {
      document.querySelector(".ml-btn").className = "ml-btn size-focused";
      document.querySelector(".sm-btn").classList.remove("size-focused");
    },
    closeShopBtn() {
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
    }
  }
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: calc(100vh - 100px);
  // position: relative;
  display: inline-flex;
  margin-left: 18vh;
}

.product-image {
  &__video {
    border: 1px solid #190dfe;
    box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
      1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);

    video {
      width: 82vh;
    }
  }

  &__mobile {
    display: none;
  }

  img {
    width: 45vh;
    border: 1px solid #190dfe;
    box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
      1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
  }
  &__1 {
    margin-left: 49vh;
    margin-top: 11vh;
    z-index: 2;
  }
  &__2 {
    margin-left: -5vh;
    z-index: 1;
    img {
      width: 90vh;
    }
  }
  &__3 {
    margin-top: 35vh;
    margin-left: -4vh;
    z-index: 3;
    img {
      width: 52vh;
    }
  }
  &__4 {
    height: calc(100vh - 100px);
    margin-left: 14vh;

    z-index: 5;
    background-color: #efefff;

    #order-section {
      box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
        1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
      width: 81vh;
      height: 100%;

      font-family: "FoundersGrotesk";

      img {
        border: none;
        box-shadow: none;
      }

      .top,
      .middle,
      .bottom {
        width: 100%;
      }
      .top,
      .bottom {
        height: 37.5%;
      }

      .top {
        font-size: calc(100vh * 0.055 - 3.3px);
        font-weight: bold;
        line-height: 1em;
        padding: 5vh 6.5vh;

        img {
          width: calc(100vh * 0.027 - 3.3px);
        }

        a {
          color: black;
        }

        :last-child {
          font-size: calc(100vh * 0.02 - 3.3px);
          line-height: 1;
        }
      }

      .middle {
        height: 25%;
        display: inline-flex;

        .mid-left {
          width: 60%;
          height: 100%;
          border-right: 1px solid #190dfe;
          font-size: calc(14px + (32 - 12) * ((100vh - 250px) / (1600 - 400)));
          font-weight: bold;
          padding-top: 6.5vh;
          padding-left: 3.5vh;

          span {
            display: inline-block;
            margin-top: 1.4vh;
            font-family: "TitlingGothicFB Extended Medium";
            font-size: calc(100vh * 0.063 - 3.3px);
          }
        }
        .mid-right {
          width: 40%;
          height: 100%;
          white-space: normal;
          padding: 4.2vh 2.2vh;

          font-family: "VCR OSD Mono", monospace;
          font-size: calc(100vh * 0.026 - 3.3px);
        }
        .mid-right-mobile {
          display: none;
        }
      }
      .top {
        height: 34%;
        border-bottom: 1px solid #190dfe;
      }
      .bottom {
        position: relative;
        height: 41%;
        border-top: 1px solid #190dfe;

        .sizing {
          position: absolute;
          left: 50%;
          width: 90%;
          white-space: normal;
          display: inline-flex;
          margin-top: 7%;
          margin-left: -45%;

          .bottom-text {
            width: 27%;

            p {
              font-size: calc(
                10px + (32 - 12) * ((100vh - 250px) / (1600 - 400))
              );
              margin: 1vh 0;
            }
            a {
              color: black;
            }
          }

          #size-chart {
            position: absolute;
            display: none;

            top: -17vh;
            left: 40%;
            padding: 2.4rem;
            border: 1px solid #190dfe;
            background-color: #efefff;

            z-index: 5;

            font-family: "FoundersGrotesk";
            font-size: calc(8px + (28 - 10) * ((100vh - 50px) / (1600 - 400)));

            :hover {
              cursor: pointer;
            }

            table {
              border-collapse: collapse;
            }

            tr:nth-child(1) th {
              font-weight: bold;
            }

            th {
              border: 1px solid #190dfe;
              padding: 0.7rem;
              font-weight: lighter;
            }

            span.size-close {
              position: absolute;
              top: 5%;
              right: 5%;
            }
          }

          .bottom-btn {
            display: flex;
            justify-content: space-between;
            width: 73%;
            font-family: "VCR OSD Mono", monospace;
            font-size: calc(
              32px + (44 - 10) * ((100vh - 150px) / (1600 - 400))
            );
            text-align: center;

            .sm-btn {
              width: 46%;
              border: 1px solid #190dfe;
              box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
                1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
            }

            .ml-btn {
              width: 46%;
              border: 1px solid #190dfe;
              box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
                1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
            }

            .sm-btn:hover,
            .ml-btn:hover {
              transform: translate(5px, 7px);
              box-shadow: 8px 6px 6px rgba(25, 13, 254, 0.55);
              cursor: pointer;
            }

            .sm-btn:not(:hover),
            .ml-btn:not(:hover) {
              box-shadow: 13px 13px 13px rgba(25, 13, 254, 0.55),
                1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
            }

            .size-focused {
              background-color: #190dfe;
              color: white;
            }

            .sm-btn span,
            .ml-btn span {
              line-height: 8vh;
            }
          }
        }

        span#no-underline {
          text-decoration: none !important;
        }

        #order-btn {
          position: absolute;
          bottom: 13%;
          left: 50%;
          margin-left: -45%;
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
          width: 90%;
          height: 32%;
          overflow: hidden;
          font-family: "VCR OSD Mono", monospace;
          font-size: 2.7vh;
        }

        #order-btn:not(:hover) {
          box-shadow: 13px 13px 13px rgba(25, 13, 254, 0.55),
            1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
        }

        #order-btn:hover {
          transform: translate(5px, 7px);
          box-shadow: 8px 6px 6px rgba(25, 13, 254, 0.55);
          cursor: pointer;
        }

        #order-btn > span {
          box-shadow: none;
          transform: none;
          color: black;
          font-size: 4.4vh;
        }
      }
    }
  }
  &__5 {
    margin-top: 8vh;
    margin-left: -1vh;
    z-index: 4;
    img {
      width: 49vh;
    }
  }
  &__6 {
    margin-top: 18vh;
    margin-left: -4vh;
    z-index: 3;

    img {
      width: 50vh;
    }
  }
  &__7 {
    margin-top: 2vh;
    margin-left: -3vh;
    z-index: 2;
    img {
      width: 50vh;
    }
  }
  &__8 {
    margin-top: 21vh;
    margin-left: -5vh;
    z-index: 1;
    img {
      width: 48vh;
    }
  }
  &__9 {
    margin-top: 2vh;
    margin-left: -11vh;
    z-index: 2;
    img {
      width: 52.5vh;
    }
  }
  &__10 {
    margin-top: 23.5vh;
    margin-left: -5vh;
    z-index: 1;
    img {
      width: 46vh;
    }
  }
  &__11 {
    margin-top: 7vh;
    margin-left: 14vh;
    z-index: 1;
    img {
      width: 42vh;
    }
  }
  &__12 {
    margin-top: 44vh;
    margin-left: -21vh;
    z-index: 2;
    img {
      width: 43.5vh;
    }
  }
  &__13 {
    margin-top: 0;
    margin-left: -13.5vh;
    z-index: 1;
    img {
      width: 71vh;
    }
  }
  &__14 {
    margin-top: 22.5vh;
    margin-left: -4vh;
    z-index: 1;
    img {
      width: 103.83vh;
    }
  }
  &__15 {
    margin-top: 4vh;
    margin-left: -72vh;
    z-index: 2;
    img {
      width: 36vh;
    }
  }

  $video2-dim: 43.5vh;

  &__video2 {
    height: $video2-dim;
    margin-top: 42vh;
    margin-left: 22vh;
    z-index: 2;
    video {
      width: $video2-dim;
    }
  }
}
#about {
  margin-top: 15vh;
  margin-left: 21vh;

  font-family: "FoundersGrotesk";
  font-size: calc(12px + (32 - 14) * ((100vh - 400px) / (1600 - 400)));

  .terms {
    display: none;
  }

  .text-section {
    width: 70vh;
    height: 60vh;
    padding: 11vh;
    background-color: #efefff;
    border: 1px solid #190dfe;
    box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
      1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
  }
  h2 {
    font-family: "FoundersGroteskSemiBold";

    font-size: calc(14px + (30 - 14) * ((100vh - 500px) / (1600 - 400)));
  }
  p {
    width: 100%;
    white-space: normal;
    margin: 1.2vh 0;
    line-height: 2.8vh;
  }
}
.space {
  .inner {
    width: 6vh;
  }
}

@media screen and (max-width: 600px) {
  #main {
    margin-left: 3vh;
  }

  .product-image__video {
    display: none;
  }

  .product-image__mobile {
    display: block;
    position: absolute;
    left: 6%;
    top: 21%;
    z-index: 10;
  }

  .product-image__1 {
    margin-left: 42vh;
    margin-top: 11vh;
    img {
      width: 39vh;
    }
  }

  .product-image__2 {
    margin-left: -5vh;
    img {
      width: 79vh;
    }
  }

  .product-image__3 {
    margin-top: 35vh;
    margin-left: -4vh;
    img {
      width: 41.2vh;
    }
  }

  .product-image__4 {
    margin-left: 14vh;
    margin-top: calc(27vh * 0.5);
    #order-section {
      width: 45vh;
      height: 70%;
      font-family: "FoundersGrotesk";
      background: #efefff;

      .top {
        font-size: calc(100vh * 0.025 - 3.3px);
        padding: 4vh 2.5vh;
      }

      .middle {
        height: 30%;
        display: block;

        .mid-left {
          width: 100%;
          height: 50%;
          border-bottom: 1px solid #190dfe;
          font-size: calc(9px + (32 - 12) * ((100vh - 250px) / (1600 - 400)));
          font-weight: bold;
          padding-top: 3%;
          padding-left: 28%;

          span {
            font-size: calc(100vh * 0.033 - 3.3px);
          }
        }

        .mid-right-mobile {
          width: 100%;
          height: 50%;
          font-size: calc(100vh * 0.018 - 3.3px);
          padding: 2% 29%;
          line-height: 1;
        }
      }

      .mid-right {
        display: none;
      }

      .bottom {
        height: 36%;

        .sizing {
          position: absolute;
          left: 50%;
          width: 90%;
          white-space: normal;
          display: inline-flex;
          margin-top: 7%;
          margin-left: -45%;

          .bottom-text {
            width: 27%;
            font-size: calc(100vh * 0.08 - 3.3px);

            p {
              font-size: calc(100vh * 0.018 - 3.3px);
            }
          }

          .bottom-btn {
            display: flex;
            justify-content: space-between;
            width: 65%;
            font-family: "VCR OSD Mono", monospace;
            font-size: calc(100vh * 0.03 - 3.3px);
            text-align: center;
            margin-left: 4%;

            .ml-btn,
            .sm-btn {
              box-shadow: 7px 7px 7px rgba(25, 13, 254, 0.55),
                1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
              span {
                line-height: 6vh;
              }
            }
          }
        }
      }
    }
  }

  .product-image__4 #order-section .bottom .sizing .bottom-btn .sm-btn:hover,
  .product-image__4 #order-section .bottom .sizing .bottom-btn .ml-btn:hover {
    box-shadow: 7px 7px 7px rgba(25, 13, 254, 0.55),
      1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
  }

  .product-image__4 #order-section .bottom .sizing .bottom-btn .sm-btn:hover,
  .product-image__4 #order-section .bottom .sizing .bottom-btn .ml-btn:hover {
    transform: translate(0px, 0px);
    box-shadow: 7px 7px 7px rgba(25, 13, 254, 0.55),
      1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
  }

  .product-image__4
    #order-section
    .bottom
    .sizing
    .bottom-btn
    .sm-btn:not(:hover),
  .product-image__4
    #order-section
    .bottom
    .sizing
    .bottom-btn
    .ml-btn:not(:hover) {
    transform: translate(0px, 0px);
    box-shadow: 7px 7px 7px rgba(25, 13, 254, 0.55),
      1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
  }

  .product-image__4 #order-section .middle .mid-right-mobile {
    display: block;
  }

  .product-image__4 #order-section .bottom #order-btn:not(:hover) {
    box-shadow: 7px 7px 7px rgba(25, 13, 254, 0.55),
      1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
  }

  .product-image__4 #order-section .bottom #order-btn:hover {
    transform: translate(0px, 0px);
    box-shadow: 7px 7px 7px rgba(25, 13, 254, 0.55);
    cursor: pointer;
  }

  .product-image__4 #order-section .bottom #order-btn {
    font-size: 1.4vh;

    span {
      font-size: 2.4vh;
    }

    .product-image__14 img {
      width: calc(103.83vh * 0.85);
    }
  }

  .product-image__5 {
    margin-top: 8vh;
    margin-left: -1vh;
    img {
      width: 43vh;
    }
  }

  .product-image__6 {
    margin-top: 18vh;
    margin-left: -4vh;
    img {
      width: 42vh;
    }
  }

  .product-image__7 {
    margin-top: 2vh;
    margin-left: -3vh;
    img {
      width: 45vh;
    }
  }

  .product-image__8 {
    margin-top: 21vh;
    margin-left: -5vh;
    img {
      width: 40vh;
    }
  }

  .product-image__9 {
    margin-top: 2vh;
    margin-left: -11vh;
    img {
      width: 45.5vh;
    }
  }

  .product-image__10 {
    margin-top: 23.5vh;
    margin-left: -5vh;
    img {
      width: 38vh;
    }
  }

  .product-image__11 {
    margin-top: 7vh;
    margin-left: 8vh;
    img {
      width: 36vh;
    }
  }

  .product-image__12 {
    margin-top: 39vh;
    margin-left: -21vh;
    img {
      width: 38.5vh;
    }
  }

  .product-image__13 {
    margin-top: 0;
    margin-left: -13.5vh;
    img {
      width: 61vh;
    }
  }

  .product-image__14 {
    margin-top: 22vh;
    margin-left: -4vh;
    img {
      width: 86.83vh;
    }
  }

  .product-image__15 {
    margin-top: 4vh;
    margin-left: -63vh;
    img {
      width: 32vh;
    }
  }

  .product-image__video.product-image__video2 {
    display: block !important;

    height: 43.5vh;
    margin-top: 39vh;
    margin-left: 14vh;

    border: none;
    box-shadow: none;

    video {
      border: 1px solid #190dfe;
      box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
        1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
      width: 35.5vh;
    }
  }

  #about {
    margin-top: calc(22vh * 0.5);
    margin-left: 22vh;
    font-family: "FoundersGrotesk";
    font-size: calc(10px + (32 - 14) * ((100vh - 400px) / (1600 - 400)));

    .terms {
      display: block;
      font-weight: bold;
      color: black;
      text-decoration: none;

      li {
        display: inline;
      }

      svg {
        margin-right: 2%;
        padding-top: 12px;
        width: 6%;
      }
    }

    .text-section {
      width: 43vh;
      height: 60vh;
      padding: 4vh;
    }
  }

  .space .inner {
    width: 3vh;
  }
}
</style>
