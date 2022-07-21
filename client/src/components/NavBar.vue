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
    <template text-color="#000" #center>
      <va-button color="#000" text-color="#2C82E0" class="mr-2 mb-2" :rounded="false" flat split>
        <RouterLink to="/">Home</RouterLink>
      </va-button>
      <RouterLink to="/tutorial">
        <va-button-dropdown
          color="#000"
          text-color="#000"
          class="mr-2 mb-2"
          :rounded="false"
          flat
          split
          label="Tutorial"
        >
          <RouterLink to="/tutorial/nodejs" class="mr-2 mb-2" role="button">NodeJs</RouterLink>
          <RouterLink to="/tutorial/java" class="mr-2 mb-2" role="button">Java</RouterLink>
          <RouterLink to="/tutorial/golang" class="mr-2 mb-2" role="button">Golang</RouterLink>
        </va-button-dropdown>
      </RouterLink>

      <va-button color="#000" text-color="#000" class="mr-2 mb-2" :rounded="false" flat split>
        <RouterLink to="/donation">Donation</RouterLink>
      </va-button>
      <va-button color="#000" text-color="#000" class="mr-2 mb-2" :rounded="false" flat split>
        <RouterLink to="/livechat">Livechat</RouterLink>
      </va-button>
    </template>
    <template #right> </template>
  </va-navbar>
  <!-- End Navbar -->
</template>
