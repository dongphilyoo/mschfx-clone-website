<template>
  <div
    v-if="showPreloader"
    id="MSCHFPreloader"
    :class="{ 'has-password': shouldShowPasswordForm }"
  >
    <div class="content">
      <div ref="marqueeTop" class="marquee top">
        <div v-for="i in 20" :key="i" class="inner">
          ///////// MSCHF DROP&nbsp;
        </div>
      </div>
      <div class="middle">
        <img src="~assets/img/drop-logo.svg" />
        <div class="line">----------------------------</div>
        <h3>
          * MSCHF <span v-if="isSecret">Secret</span> DROP #{{
            ("0" + dropNumber).slice(-2)
          }}
          *
        </h3>
        <div class="line">----------------------------</div>
      </div>

      <client-only>
        <div v-if="shouldShowPasswordForm" class="content-form">
          <form @submit="sendCode">
            <label>
              <input
                v-model="code"
                autocapitalize="off"
                class="input code"
                :class="{ error: isCodeWrong }"
                type="text"
                placeholder="Password"
                @keypress="isNotNumber($event)"
              />
            </label>
            <label>
              <button type="submit" @click="sendCode">
                Enter
                <!-- <img src="~assets/img/icon-next.svg" alt="enter" /> -->
              </button>
            </label>

            <span v-if="isCodeWrong" class="code-error"
              >INCORRECT PASSWORD</span
            >
          </form>
        </div>
      </client-only>

      <div ref="marqueeBottom" class="marquee bottom reverse">
        <div v-for="i in 20" :key="i" class="inner">
          ///////// MSCHF DROP&nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function wait(t) {
  return new Promise(resolve => {
    setTimeout(resolve, t);
  });
}

export default {
  props: {
    dropNumber: {
      type: Number,
      required: true
    },
    dropId: {
      type: String,
      default: "",
      required: false
    },
    isSecret: {
      type: Boolean,
      required: false,
      default: false
    },
    passwordData: {
      type: Object,
      required: false,
      default: null,
      validator: function(value) {
        if (value.password) {
          return value.password && value.deeplink && value.pwCookieMaxAge >= 0;
        } else {
          return true;
        }
      }
    },
    delay: {
      type: Number,
      default: 2000,
      required: false
    }
  },
  data() {
    return {
      showPreloader: true,
      code: "",
      isCodeWrong: false
    };
  },
  computed: {
    hasPassword() {
      return (
        this.passwordData &&
        this.passwordData.password &&
        this.passwordData.deeplink
      );
    },
    shouldShowPasswordForm() {
      // return this.hasPassword && !this.hasPasswordCookie;
      return false;
    },
    hasPasswordCookie() {
      return this.$cookies.get(this.pwCookieName);
    },
    password() {
      return this.passwordData.password;
    },
    deeplink() {
      return this.passwordData.deeplink;
    },
    pwCookieName() {
      return `mschf-${this.dropId}-cpw`;
    }
  },
  async created() {
    this.$emit("didLoad");

    if (!this.shouldShowPasswordForm) {
      await wait(this.delay || 2000);

      this.$emit("willDisappear");
      this.showPreloader = false;
    }
  },
  mounted() {
    if (window.location.href.indexOf("?ref=mschfapp") > 1) {
      this.code = this.passwordData.password;
      this.$router.replace(window.location.pathname);
    }
  },
  methods: {
    isNotNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        (charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46) ||
        evt.keyCode === 13
      ) {
        return true;
      } else {
        evt.preventDefault();
      }
    },
    sendCode(event) {
      event.preventDefault();
      const code = this.code.replace(/\s/g, "");
      if (code.toUpperCase() !== this.password.toUpperCase()) {
        this.isCodeWrong = true;
        this.code = "";
        return;
      }
      this.$cookies.set(this.pwCookieName, true, {
        path: "/",
        maxAge: this.password.pwCookieMaxAge
      });
      this.isCodeWrong = false;
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
      this.$emit("willDisappear");
      this.showPreloader = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Space Mono";
  src: url("~assets/fonts/SpaceMono-Regular.ttf");
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

#MSCHFPreloader {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 999999;
  font-family: "Space Mono";
  background: #ff0400;
  color: black;

  .content {
    .marquee {
      white-space: nowrap;
      overflow: hidden;
      height: 24px;
      line-height: 24px;

      position: absolute;
      left: 0;
      font-size: 16px;
      color: black;

      &.top {
        top: 10px;
      }
      &.bottom {
        bottom: 10px;
      }

      .inner {
        display: inline-block;
        animation-name: scroll;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: 5s;
      }
      &.reverse {
        .inner {
          animation-direction: reverse;
        }
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: black;
      line-height: 1.5em;
      text-align: center;

      @media only screen and (max-width: 400px) {
        font-size: 5vw;
      }

      img {
        width: 80vw;
        max-width: 232px;
        margin-bottom: 2.5em;
      }

      h3 {
        font-weight: 400;
        padding: 0;
        margin: 0;
        margin-bottom: -4px;
        color: black;
      }
    }
  }
}

form {
  margin: 40px auto 0;
  max-width: 345px;

  label {
    display: block;
  }

  input,
  button {
    font-family: inherit;

    width: 100%;

    -webkit-appearance: none;
    border: 0;
    outline: 0;

    background-color: transparent;

    padding: 12px;

    text-transform: uppercase;
    font-size: 20px;

    text-align: center;
  }

  input {
    border: 1px solid black;

    margin-bottom: 15px;

    &::placeholder {
      color: black;
    }
  }

  button {
    background-color: black;
    color: rgb(255, 4, 0);

    cursor: pointer;

    &:hover,
    &:focus-visible {
      color: rgba(255, 4, 0, 0.75);
    }
  }
}
.code-error {
  display: block;

  text-align: center;

  padding: 10px;
  font-size: 15px;
}
</style>
