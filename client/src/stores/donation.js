import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useDonationStore = defineStore({
  id: "donation",
  state: () => ({}),
  getters: {},
  actions: {
    async paymentHandler(objPayment) {
      try {
        const { data } = await axios.post(`${baseUrl}/donation/payment`, {
          email: objPayment.email,
          amount: objPayment.amount,
          name: objPayment.name,
          message: objPayment.message,
        });

        window.snap.pay(data.token, {
          onSuccess(result) {
            console.log(result);
            Swal.fire("Payment Success", "", "success");
          },
        });
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, "", "error");
      }
    },
  },
});
