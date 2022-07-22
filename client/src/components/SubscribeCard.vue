<script>
// card
import { mapActions, mapState, mapWritableState } from 'pinia'
import { usePaymentStore } from '../stores/payment'
import { useSportStore } from '../stores/sport'

export default {
  data() {
    return { name: '', email: '', amounts: [0, 100000, 1000000], amount: '' }
  },
  name: 'Card',
  props: ['plan'],

  data() {
    return { isLogin: false, page: 'login' }
  },
  computed: {
    ...mapState(useSportStore, ['title', 'rating', 'genreId'])
  },

  methods: {
    ...mapActions(useSportStore, [
      'toDetailPage',
      'fetchMovies',
      'addFavorite',
      'pagination',
      'sliceString',
      'changeSubscribe'
    ]),
    ...mapActions(usePaymentStore, ['paymentHandler']),
    payment() {
      this.paymentHandler({
        email: localStorage.getItem('email'),
        name: localStorage.getItem('name'),
        amount: this.plan.price
      })
    },
    formattedPrice() {
      return `Rp. ${this.plan.price.toLocaleString('id-ID')},00`
    }
  },
  getters() {}
}
</script>
<template>
  <div style="margin-bottom: 10px" class="col-3 col-md-3">
    <div class="card h-100">
      <img style="height: 150px; object-fit: cover" class="card-img-top" />
      <div class="card-body">
        <div style="flex-direction: row" class="row">
          <div class="col-10">
            <h5 class="card-title">{{ plan.name }}</h5>
            <h5 class="">{{ formattedPrice(plan.price) }}</h5>
            <h5 v-if="plan.benefit2 && !plan.benefit3">Monthly</h5>
            <h5 v-if="plan.benefit3">Anually (save 16.67%)</h5>
            <br />
            <ul>
              <li>
                <h5 class="">{{ plan.benefit1 }}</h5>
              </li>
              <li v-if="plan.benefit2">
                <h5 class="">{{ plan.benefit2 }}</h5>
              </li>
              <li v-if="plan.benefit3">
                <h5 class="">{{ plan.benefit3 }}</h5>
              </li>
            </ul>

            <button
              v-if="this.plan.price <= 0"
              @click.prevent="changeSubscribe"
              style="
                margin-left: 10px;
                justify-content: flex-end;
                padding: 0px 2px;
                border-round: 50px;
              "
              class="btn btn-primary"
              type="submit"
            >
              Subscribe
            </button>

            <button
              v-if="this.plan.price > 0"
              @click.prevent="payment"
              style="
                margin-left: 10px;
                justify-content: flex-end;
                padding: 0px 2px;
                border-round: 50px;
              "
              class="btn btn-primary"
              type="submit"
            >
              Subscribe
            </button>
          </div>
          <div
            style="
              cursor: pointer;
              padding-left: 0;
              background-color: white;
              outline-color: white;
            "
            class="col-2"
          >
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="blue"
              class="bi bi-bookmark-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
              />
            </svg> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
