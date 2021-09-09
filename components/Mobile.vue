<template>
  <div>
    <div class="container">
      <video
        src="~/assets/img/render-cropped.mp4"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        playsinline
      ></video>
      <div class="brand-logo">
        <img src="~/assets/img/brand-logos.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid;
  width: 44vh;
  height: 46vh;
  background-color: #efefff;
  border: 1px solid #190dfe;
  box-shadow: 10px 10px 10px rgba(25, 13, 254, 0.55),
    1px 2px 5px 1.5px rgba(0, 0, 0, 0.3);

  video {
    width: 81%;
    object-fit: cover;
    height: 100%;
    border-right: 1px solid #190dfe;
  }

  .brand-logo {
    position: absolute;
    width: 19%;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
