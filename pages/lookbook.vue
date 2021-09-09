<template>
  <div>
    <ul id="lookbook"></ul>
  </div>
</template>

<script>
export default {
  layout: "lookbook",
  mounted: function() {
    this.add_el(); //method1 will execute at pageload

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.getElementById("container").style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.getElementById("container").style.setProperty("--vh", `${vh}px`);
    });
  },
  methods: {
    add_el() {
      if (window.innerWidth > 600) {
        let container = document.getElementById("lookbook");
        let i = 0;
        do {
          container.appendChild(document.createElement("li"));
          i++;
        } while (i < 60);
        let index = 1;

        [...container.children].forEach(li => {
          li.innerHTML =
            "<img src='/images/shirts/" + index + ".jpg' alt=' ' />";
          li.style.display = "inline";
          li.style.margin = "10px";
          li.childNodes[0].style.height = "25vh";
          li.childNodes[0].style.border = "1px solid #190dfe";
          li.childNodes[0].style.boxShadow =
            "10px 10px 10px rgba(25, 13, 254, 0.55), 1px 2px 5px 1.5px rgba(0, 0, 0, 0.3)";

          index++;
        });
        container.appendChild(document.createElement("div"));
        container.lastChild.style.width = "35px";
        container.lastChild.style.height = "100px";
      } else {
        let container = document.getElementById("lookbook");
        let i = 0;
        do {
          container.appendChild(document.createElement("li"));
          i++;
        } while (i < 60);
        let index = 1;

        [...container.children].forEach(li => {
          li.innerHTML =
            "<img src='/images/shirts/" + index + ".jpg' alt=' ' />";
          li.style.display = "inline";
          li.style.margin = "5px";
          li.childNodes[0].style.height = "22vh";
          li.childNodes[0].style.border = "1px solid #190dfe";
          li.childNodes[0].style.boxShadow =
            "10px 10px 10px rgba(25, 13, 254, 0.55), 1px 2px 5px 1.5px rgba(0, 0, 0, 0.3)";

          index++;
        });
        container.appendChild(document.createElement("div"));
        container.lastChild.style.width = "35px";
        container.lastChild.style.height = "100px";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#lookbook {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  white-space: normal;
  vertical-align: top;
  width: calc(100vh / 3);
  height: 89vh;
  margin-left: 9%;
}

@media screen and (max-width: 600px) {
  #lookbook {
    // height: calc(100vh - 50px);
    height: calc((var(--vh, 1vh) * 100) - 50px);

    margin: 25px 0 25px 0;
  }

  #lookbook li {
    margin: 5px;
    img {
      height: 22vh;
    }
  }
}
</style>
