<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/AllStore";
export default {
  name: "TableRow",
  props: ["order", "index"],
  methods: {
    ...mapActions(useCounterStore, ["deleteMyOrder"]),
    localDeleteHanlder() {
      this.deleteMyOrder(this.order.id);
    },
  },
};
</script>

<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>
      <p>{{ order.Product.name }}</p>
    </td>
    <td>{{ order.Product.description }}</td>
    <td>Rp {{ order.Product.price }}</td>
    <td><img :src="order.Product.imageUrl" :alt="order.Product.imageUrl" /></td>
    <td>{{ order.Product.Category.name }}</td>
    <td>
      <button class="btn btn-danger" @click.prevent="localDeleteHanlder">
        Delete
      </button>
    </td>
  </tr>
</template>
