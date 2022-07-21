<script>
export default {
  name: "Footer",
};
</script>
<template>
  <footer class="mt-auto">
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2S-uOxnT9_3X1lGteoQDcbueJfD1dQerCvYT4sgStrOIMKJFoLZtlSowLOat9KfkF0o&usqp=CAU"
      />
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2022 Copyright: POCKETMON
      </div>
    </div>
    <!-- Copyright -->
  </footer>
</template>
<style scoped>
img {
  margin: 5px;
  width: 44px;
  border: 3px solid white  ;
  border-radius: 50%;
}
div {
  padding: 10px;
  background-color: rgb(7, 4, 4);
  color:white;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
