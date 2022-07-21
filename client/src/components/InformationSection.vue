<script>
export default {
  name: "InformationSection",
  props: ["category"],
};
</script>

<template>
  <div class="information-section container mt-5 mb-2">
    <div class="row pb-0 pe-lg-0 align-items-center bg-white rounded-3 border shadow">
      <div class="col-lg-9 p-3 p-lg-5 pt-lg-3">
        <i :class="category.font" style="font-size: 100px;" ></i>
        <p class="lead">
          {{category.description}}
        </p>
      </div>
      <div class="col-lg-2 offset-1 p-0 overflow-hidden shadow-lg rounded-3 pt-1">
        <img
          class="rounded-3"
          src="https://source.unsplash.com/random/300%C3%97201/?coding"
          alt=""
          style="height: 335px"
        />
      </div>
    </div>
  </div>
</template>
