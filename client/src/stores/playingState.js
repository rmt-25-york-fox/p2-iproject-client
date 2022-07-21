import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

export const usePlayingState = defineStore({
  id: "playingState",
  state: () => ({
    afterWin: false,
  }),
  getters: {},
  actions: {
    rollUserDice() {
      return Math.floor(Math.random() * 6) + 1;
    },
    rollComputerDice() {
      return Math.floor(Math.random() * 6) + 1;
    },
    async updateScore() {
      try {
        const response = await axios.put(
          `https://api.globalstats.io/v1/statistics/${localStorage.getItem(
            "_id"
          )}`,
          {
            values: {
              score: "+100",
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tkn-gtd")}`,
            },
          }
        );
      } catch (err) {
        Swal.fire("Error");
      }
    },
    async compareWinner() {
      let userDice = this.rollUserDice();
      let computerDice = this.rollComputerDice();

      while (userDice == computerDice) {
        computerDice = this.rollComputerDice();
      }
      if (userDice > computerDice) {
        Swal.fire({
          title: "You Win!",
          text: `Your dice is ${userDice} and opponent dice is ${computerDice}. You win!`,
          icon: "success",
          confirmButtonText: "Play again",
        });
        this.afterWin = true;
        await this.updateScore();
        this.router.push("/characters");
        await Swal.fire("Choose your digimon");
      } else if (userDice < computerDice) {
        Swal.fire({
          title: "You Lose!",
          text: `Your dice is ${userDice} and opponent dice is ${computerDice}. You lose!`,
          icon: "error",
          confirmButtonText: "Play again",
        });
        this.afterWin = false;
      }
    },
  },
});
