<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { mapActions, mapState } from "pinia";
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
      value: 0,
      items: [
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1502465771179-51f3535da42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      ],
    };
  },
  components: { NavBar, Footer },
  computed: {
    ...mapState(useDonationStore, ["donations"]),
  },
  methods: {
    ...mapActions(useDonationStore, ["paymentHandler", "updateStatusHandler", "getDonations"]),
    localPaymentHandler() {
      this.paymentHandler(this.objPayment);
    },
  },
  created() {
    this.getDonations();
  },
};
</script>

<template>
  <div id="homepage" class="container-fluid">
    <NavBar />
    <div class="mt-5 mb-5">
      <div class="container">
        <div class="row mb-4 mb-lg-5">
          <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h1 class="fw-bold">SUPPORT US!!</h1>
          </div>
        </div>
        <!-- Card Donation Form -->
        <div class="row d-flex justify-content-center">
          <div class="col-4">
            <div class="card shadow">
              <div class="card-body text-center align-items-center">
                <div class="mb-3 p-2"><i class="fa-solid fa-money-bill-1 fs-4"></i></div>
                <form method="post" @submit.prevent="localPaymentHandler">
                  <div class="mb-3">
                    <input v-model="objPayment.name" class="form-control" type="text" name="name" placeholder="Name" />
                  </div>
                  <div class="mb-3">
                    <input
                      v-model="objPayment.email"
                      class="form-control"
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
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
                      class="btn btn-outline-dark shadow w-100"
                      type="submit"
                    >
                      DONATE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- Card Donator -->
          <div class="col-3">
            <div class="card shadow">
              <div class="card-body text-center align-items-center">
                <div class="mb-3 p-2"><i class="fa-solid fa-users fs-4"></i></div>
                <h6 class="mb-2" v-if="donations.length > 0" v-for="donation in donations">{{ donation.name }}</h6>
                <h6 class="mb-2" v-else>No Donator Yet</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
