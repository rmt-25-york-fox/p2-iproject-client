<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <!-- Start Navbar -->
  <va-navbar color="#f8f9fc" shape text-color="#2C82E0"
    >s
    <template #left> </template>
    <template text-color="#2C82E0" #center>
      <va-button text-color="#2C82E0" class="mr-2 mb-2" :rounded="false" flat split> Home </va-button>
      <va-button-dropdown class="mr-2 mb-2" :rounded="false" flat split label="Tutorial">
        <a class="mr-2 mb-2" role="button">NodeJs</a>
        <a class="mr-2 mb-2" role="button">Java</a>
        <a class="mr-2 mb-2" role="button">Golang</a>
      </va-button-dropdown>
      <va-button text-color="#2C82E0" class="mr-2 mb-2" :rounded="false" flat split> Donation </va-button>
    </template>
    <template #right> </template>
  </va-navbar>
  <!-- End Navbar -->
</template>
