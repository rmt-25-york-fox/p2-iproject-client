<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/AllStore";
export default {
  name: "ProductCard",
  computed: {
    ...mapState(useCounterStore, ["isLoggedin"]),
  },
  props: ["product"],
  methods: {
    ...mapActions(useCounterStore, ["addOrder"]),
    localAddOrder() {
      this.addOrder(this.product.id);
    },
  },
};
</script>

<template>
  <!-- Topic Cards -->
  <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
    <a href="#">
      <div class="card-flyer">
        <div class="text-box">
          <div class="image-box">
            <img
              :src="product.imageUrl"
              :alt="product.name"
              @click.prevent="detailView"
            />
          </div>
          <div class="text-container">
            <h2>{{ product.name }}</h2>
            <h6>{{ product.Category.name }}</h6>
            <p>
              {{ product.description }}
            </p>
          </div>
          <div class="card-footer">
            <div>
              <span>Rp{{ product.price }}</span>
            </div>
            <div v-if="isLoggedin">
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="localAddOrder"
              >
                Add to My Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
#cards_landscape_wrap-2 {
  text-align: center;
  background: #f7f7f7;
}

#cards_landscape_wrap-2 .container {
  padding-top: 80px;
  padding-bottom: 100px;
}

#cards_landscape_wrap-2 a {
  text-decoration: none;
  outline: none;
}

#cards_landscape_wrap-2 .card-flyer {
  border-radius: 5px;
}

#cards_landscape_wrap-2 .card-flyer .image-box {
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

#cards_landscape_wrap-2 .card-flyer .image-box img {
  width: 100%;
  height: 200px;
}

#cards_landscape_wrap-2 .card-flyer:hover .image-box img {
  opacity: 0.7;
  -webkit-transform: scale(1.15);
  -moz-transform: scale(1.15);
  -ms-transform: scale(1.15);
  -o-transform: scale(1.15);
  transform: scale(1.15);
}

#cards_landscape_wrap-2 .card-flyer .text-box {
  text-align: center;
}

#cards_landscape_wrap-2 .card-flyer .text-box .text-container {
  padding: 30px 18px;
}

#cards_landscape_wrap-2 .card-flyer {
  background: #ffffff;
  margin-top: 50px;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
}

#cards_landscape_wrap-2 .card-flyer:hover {
  background: #fff;
  box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-top: 50px;
}

#cards_landscape_wrap-2 .card-flyer .text-box p {
  margin-top: 10px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #000000;
}

#cards_landscape_wrap-2 .card-flyer .text-box h6 {
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Roboto Black", sans-serif;
  letter-spacing: 1px;
  color: #00acc1;
}
</style>
