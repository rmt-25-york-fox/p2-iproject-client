<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
// import { mapActions, mapState } from "pinia";
import swal from "sweetalert2";
import { mapActions, mapState } from "pinia";
import { useAllStateStore } from "../stores/allState";
import { pushScopeId } from "vue";
// import { useAllStateStore } from "../stores/allState.js";
export default {
  name: "homepage",
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey =
      "pk_test_51LNdfZKr6Ku81LiIh0oEQaQmO2CuqOwXF5bYbBJfuevksJi2jm5ljcefzXr7VIcF6tJeUhYyqbVaF80hQiLjDfiS00wYdSXs3I";
    return {
      loading: false,
      lineItems: [
        {
          price: "price_1LNfqRKr6Ku81LiIQ8rNzbK3",
          quantity: 1,
        },
      ],
      successURL: "http://localhost:8080/success",
      cancelURL: "http://localhost:8080/error",
    };
  },
  computed: {
    ...mapState(useAllStateStore, ["listData", "isLoggedin"]),
  },
  methods: {
    ...mapActions(useAllStateStore, ["getAllData"]),
    submit(params) {
      if (params === 1) {
        this.publishableKey.lineItems.pushScopeId({
          price: "price_1LNfqRKr6Ku81LiIQ8rNzbK3",
          quantity: 1,
        });
      }
      if (this.isLoggedin === false) {
        swal.fire("login first");
      } else {
        this.$refs.checkoutRef.redirectToCheckout();
      }
    },
  },
  created() {
    this.getAllData();
  },
};
</script>

<template>
  <section class="product" id="product">
    <img class="imgUp" src="../assets/5684302.jpg" alt="" />
    <h3 class="sub-heading">Sport Store</h3>
    <h1 class="heading">List Product</h1>

    <div class="box-container">
      <div class="box">
        <div class="image">
          <img src="../assets/sepatu.jpg" />
        </div>
        <div class="content">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <h3>ADIDAS ADIZERO BOSTON 10 Men's Running Shoes - Indigo</h3>
          US$ 153,55
          <p>original guarantee from sport official store</p>
          <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
            @loading="(v) => (loading = v)"
          />
          <p class="btn" @click="submit">Buy</p>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src="../assets/sepatu.jpg" />
        </div>
        <div class="content">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <h3>ADIDAS ADIZERO BOSTON 10 Men's Running Shoes - Indigo</h3>
          US$ 153,55
          <p>original guarantee from sport official store</p>
          <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
            @loading="(v) => (loading = v)"
          />
          <p class="btn" @click="submit">Buy</p>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src="../assets/sepatu.jpg" />
        </div>
        <div class="content">
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <h3>ADIDAS ADIZERO BOSTON 10 Men's Running Shoes - Indigo</h3>
          US$ 153,55
          <p>original guarantee from sport official store</p>
          <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
            @loading="(v) => (loading = v)"
          />
          <p class="btn" @click="submit">Buy</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import url("../assets/home.css");
</style>
