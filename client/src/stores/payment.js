import { defineStore } from 'pinia'

import axios from 'axios'

import Swal from 'sweetalert2'

// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://iproject-server-marsetio2.herokuapp.com'

export const usePaymentStore = defineStore({
  id: 'payment',

  state: () => ({
    payments: [],
    isSubscribe2: false
  }),

  getters: {},

  actions: {
    async paymentHandler(obj) {
      try {
        const access_token = localStorage.getItem('access_token')
        console.log('access_token', access_token)
        const { data } = await axios({
          method: 'post',
          url: `${baseUrl}/payment`,
          headers: { access_token },
          data: {
            email: obj.email,
            amount: obj.amount,
            name: obj.name
          }
        })

        console.log('data>>>', data)

        let tio = this

        window.snap.pay(data.token, {
          onSuccess(result) {
            tio.updateStatusHandler(result.order_id)
            console.log(result.order_id)
            tio.isSubscribe2 = obj.isSubscribe2

            tio.router.push({ name: 'subscribe' })

            // let baseUrl = 'http://localhost:3000'
            let baseUrl = 'https://iproject-server-marsetio2.herokuapp.com'

            axios({
              method: 'patch',
              url: `${baseUrl}/changeSubscribe`,
              headers: { access_token: access_token },
              data: { email: localStorage.email }
            })

            // this.isSubscribe2

            Swal.fire(
              'Payment Success',
              'You are subscribed! Thank you for using our service!',
              'success'
            )
          },

          onPending(result) {
            tio.router.push({ name: 'subscribe' })
          },
          onClose(result) {
            tio.router.push({ name: 'subscribe' })
          },

          onError(result) {
            Swal.fire('Payment Failed', '', 'error')
          }
        })
      } catch (err) {
        console.log(err)
        // Swal.fire(`${err.response.data.message}`, '', 'error')
      }
    },

    async updateStatusHandler(OrderId) {
      try {
        await axios.patch(`${baseUrl}/payment`, {
          OrderId
        })
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, '', 'error')
      }
    },

    async getpayments() {
      try {
        const { data } = await axios.get(`${baseUrl}/payment`)
        this.payments = data
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, '', 'error')
      }
    }
  }
})
