<script>
export default {
  name: "TutorialCard",
};
</script>

<template>
  <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
    <div class="card-flyer bg-white ">
      <div class="text-box">
        <div class="image-box">
          <img @click.prevent="" src="https://source.unsplash.com/random" alt="" role="button" />
        </div>
        <div class="text-container">
          <h6>INI TITLE</h6>
          <p class="fw-bold">Ini nama channel</p>
        </div>
      </div>
    </div>
  </div>
</template>
