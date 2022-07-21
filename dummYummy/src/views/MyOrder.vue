<script>
import TableRow from "../components/TableRow.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/AllStore";
export default {
  name: "MyOrder",
  components: {
    TableRow,
  },
  computed: {
    ...mapState(useCounterStore, ["grossOrder", "myOrder"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getPaymentLink", "getMyOrder"]),
    localPaymentHandler() {
      this.getPaymentLink();
    },
  },
  created() {
    this.getMyOrder();
  },
};
</script>

<template>
  <div class="container">
    <div class="table-responsive">
      <table class="table table-striped table-hover table-sm" id="dataTable">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image Url</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            v-for="(order, index) in myOrder"
            :key="index"
            :order="order"
            :index="index"
          />
          <tr>
            <th>Total Order</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Rp {{ grossOrder }}</th>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          @click.prevent="localPaymentHandler"
        >
          Pay
        </button>
      </div>
    </div>
  </div>
</template>
