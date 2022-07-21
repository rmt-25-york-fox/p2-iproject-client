<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
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
          price: "price_1LNdwmKr6Ku81LiIlQaLbGCa",
          quantity: 1,
        },
      ],
      successURL: "http://localhost:8080/success",
      cancelURL: "http://localhost:8080/error",
    };
  },
  methods: {
    submit() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>Stripe Payment Gateway</h1>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
    <button @click="submit">Pay now</button>
  </div>
</template>
