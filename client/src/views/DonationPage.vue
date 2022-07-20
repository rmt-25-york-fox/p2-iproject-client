<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { mapActions } from "pinia";
import { useDonationStore } from "../stores/donation";
export default {
  name: "DonationPage",
  data() {
    return {
      objPayment: {
        email: "",
        amount: "",
        name: "",
        message: "",
      },
    };
  },
  components: { NavBar, Footer },
  methods: {
    ...mapActions(useDonationStore, ["paymentHandler", "updateStatusHandler"]),
    localPaymentHandler() {
      this.paymentHandler(this.objPayment);
    },
  },
};
</script>

<template>
  <NavBar />
  <div class="mt-5 mb-5">
    <div class="container">
      <div class="row mb-4 mb-lg-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h1 class="fw-bold">SUPPORT US!!</h1>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-xl-4">
          <div class="card shadow">
            <div class="card-body text-center align-items-center">
              <div class="mb-3 p-2"><i class="fa-solid fa-money-bill-1 fs-4"></i></div>
              <form method="post" @submit.prevent="localPaymentHandler">
                <div class="mb-3">
                  <input v-model="objPayment.name" class="form-control" type="text" name="name" placeholder="Name" />
                </div>
                <div class="mb-3">
                  <input v-model="objPayment.email" class="form-control" type="text" name="email" placeholder="Email" />
                </div>
                <div class="mb-3">
                  <input
                    v-model="objPayment.amount"
                    class="form-control"
                    type="number"
                    name="amount"
                    placeholder="Amount"
                  />
                </div>
                <div class="mb-3">
                  <input
                    v-model="objPayment.message"
                    class="form-control"
                    type="text"
                    name="message"
                    placeholder="Message"
                  />
                </div>
                <div class="mb-3">
                  <button
                    @click.prevent="localPaymentHandler"
                    id="btn-login"
                    class="btn btn-primary shadow w-100"
                    type="submit"
                  >
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
