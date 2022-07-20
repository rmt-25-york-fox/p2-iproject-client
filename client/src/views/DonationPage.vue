<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "DonationPage",
  components: { NavBar, Footer },
};
</script>

<template>
  <NavBar />
  <div class="mt-5 pt-5">
    <div class="container">
      <div class="row mb-4 mb-lg-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2 class="fw-bold">SUPPORT US!!</h2>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-xl-4">
          <div class="card shadow">
            <div class="card-body text-center align-items-center">
              <div class="mb-3 p-2"><i class="fa-solid fa-money-bill-1 fs-4"></i></div>
              <form method="post" @submit.prevent="">
                <div class="mb-3">
                  <input class="form-control" type="text" name="name" placeholder="Name" />
                </div>
                <div class="mb-3">
                  <input class="form-control" type="text" name="email" placeholder="Email" />
                </div>
                <div class="mb-3">
                  <input class="form-control" type="number" name="amount" placeholder="Amount" />
                </div>
                <div class="mb-3">
                  <input class="form-control" type="text" name="message" placeholder="Message" />
                </div>
                <div class="mb-3">
                  <button @click.prevent="" id="btn-login" class="btn btn-primary shadow w-100" type="submit">
                    DONATE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
