<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/AllStore";
import ProductList from "../components/ProductList.vue";
export default {
  name: "HomeView",
  data() {
    return {
      objState: {
        name: "",
      },
    };
  },
  components: {
    ProductList,
  },
  computed: {
    ...mapState(useCounterStore, ["categories"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["changeStateProduct"]),
    localChangeState() {
      this.changeStateProduct(this.objState);
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block pt-3">
        <div class="card px-4 pt-3 pb-3" style="width: 20rem">
          <h4>Filter</h4>
          <form action="" class="col-12" @submit.prevent="localChangeState">
            <div class="form-group">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01"
                    >Category</label
                  >
                </div>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="inputGroupSelect01"
                  v-model="objState.name"
                >
                  <option value="" disable>Choose...</option>
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.name"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button type="submit" class="btn btn-primary">Search</button>
              </div>
            </div>
          </form>
        </div>
      </nav>

      <main role="main" class="col-md-9 ml-sm-auto col-lg-10">
        <ProductList />
        <div></div>
      </main>
    </div>
  </div>
</template>
