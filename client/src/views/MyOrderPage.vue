<script>
import { useBankStore } from "../stores/bankStore";
import { mapState, mapActions } from "pinia";
export default {
  name: "MyOrderPage",
  computed: {
    ...mapState(useBankStore, ["myOrderList"]),
  },
  methods: {
    ...mapActions(useBankStore, ["myOrderById", "deleteMyOrder"]),
    localCheckoutHandler(id) {
      this.myOrderById(id);
    },
    localDeleteHandler(id) {
      console.log(id, "asdsa");
      this.deleteMyOrder(id);
    },
  },
};
</script>

<template>
  <!-- <pre>
  {{ myOrderList }}
</pre
  > -->
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption
        class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
      >
        My Order List
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Browse a list of Flowbite products designed to help you work and play,
          stay organized, get answers, keep in touch, grow your business, and
          more.
        </p>
      </caption>
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Order Id</th>
          <th scope="col" class="py-3 px-6">Vga</th>
          <th scope="col" class="py-3 px-6">Processor</th>
          <th scope="col" class="py-3 px-6">Psu</th>
          <th scope="col" class="py-3 px-6">Ram</th>
          <th scope="col" class="py-3 px-6">Ssd</th>
          <th scope="col" class="py-3 px-6">Power</th>
          <th scope="col" class="py-3 px-6">Estimated Price</th>
          <th scope="col" class="py-3 px-6">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="el in myOrderList"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            # 2022-07-{{ el.id }}
          </th>
          <td v-if="el.Vga" class="py-4 px-6 text-xs text-black text-center">
            {{ el.Vga.name }}
          </td>
          <td v-else class="py-4 px-6 text-xs italic text-center">
            not yet choose
          </td>
          <td
            v-if="el.Processor"
            class="py-4 px-6 text-xs text-black text-center"
          >
            {{ el.Processor.name }}
          </td>
          <td v-else class="py-4 px-6 text-xs italic text-center">
            not yet choose
          </td>
          <td v-if="el.Psu" class="py-4 px-6 text-xs text-black text-center">
            {{ el.Psu.name }}
          </td>
          <td v-else class="py-4 px-6 text-xs italic text-center">
            not yet choose
          </td>
          <td v-if="el.Ram" class="py-4 px-6 text-xs text-black text-center">
            {{ el.Ram.name }}
          </td>
          <td v-else class="py-4 px-6 text-xs italic text-center">
            not yet choose
          </td>
          <td v-if="el.Ssd" class="py-4 px-6 text-xs text-black text-center">
            {{ el.Ssd.name }}
          </td>
          <td v-else class="py-4 px-6 text-xs italic text-center">
            not yet choose
          </td>
          <td
            v-if="el.Vga && el.Ram && el.Processor && el.Ssd && el.Psu"
            class="py-4 px-6 text-xs text-black text-center"
          >
            {{
              (el.Vga.power +
                el.Ram.power +
                el.Processor.power +
                el.Psu.power +
                el.Ssd.power) /
              5
            }}
            / 100
          </td>
          <td v-else class="py-4 px-6 text-xs italic text-center">-</td>
          <td
            v-if="el.Vga && el.Ram && el.Processor && el.Ssd && el.Psu"
            class="py-4 px-6 text-xs text-black text-xs text-center"
          >
            {{
              (
                el.Vga.price +
                el.Ram.price +
                el.Processor.price +
                el.Psu.price +
                el.Ssd.price
              )
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .split(",")[0]
            }}
          </td>
          <td v-else class="py-4 px-6 py-4 px-6 text-xs italic text-center">
            -
          </td>
          <td
            v-if="el.Vga && el.Ram && el.Processor && el.Ssd && el.Psu"
            class="py-4 px-6 text-right"
          >
            <div>
              <a
                @click.prevent="myOrderById(el.id)"
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Checkout</a
              >
            </div>
            <div>
              <a
                @click.prevent="deleteMyOrder(el.id)"
                href="#"
                class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                >Delete</a
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
