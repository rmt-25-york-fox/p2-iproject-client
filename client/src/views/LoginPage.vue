<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>

<template>
  <!-- login -->
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-primary text-white" style="border-radius: 1rem">
            <div class="card-body p-3 text-center">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- login end -->
</template>

<style></style>
