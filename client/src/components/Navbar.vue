<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <a
      href="index.html"
      class="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h1 class="m-0 text-primary">
        <i class="fa-solid fa-gas-pump"></i> My Kelimax
      </h1>
    </a>
    <button
      type="button"
      class="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <a href="index.html" class="nav-item nav-link active">Home</a>
        <a href="contact.html" class="nav-item nav-link">Buy gas</a>
        <a href="about.html" class="nav-item nav-link">My Gas</a>
      </div>
      <a
        href=""
        class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >Log Out <i class="fa-solid fa-arrow-right-from-bracket"></i
      ></a>
    </div>
  </nav>
</template>

<style></style>
