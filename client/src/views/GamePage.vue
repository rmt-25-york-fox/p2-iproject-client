<script>
import { mapActions, mapState } from 'pinia'
import { useAllState } from '../stores/allState'

const choices = ["rock", "paper", "scissors"];
export default {
  name: "GamePage",
  data() {
    return {
      selected: "",
      computerSelected: "",
      catchedPokemon: "",
      userCounter: 0,
      compCounter: 0,
      result: "",
      timerCount: null,
    };
  },
  
  computed: {
    ...mapState(useAllState, ['pokemonDetail']),
    finalResult() {
      // console.log(this.result);
    return this.result
    },
    
  },
  watch: {
      timerCount: {
        handler(value) {
          if (value > 0) {
            setTimeout(() => {
              this.timerCount--;
              }, 1000);
          } else if (value == 0){
            this.localAddBoard(this.userCounter)
          }
        },
        immediate: true // This ensures the watcher is triggered upon creation
      }
  },
  methods: {
    ...mapActions(useAllState,['getPokemonDetail', 'toMain', 'addPokemonToPocket', 'createLeaderBoard']),
    localAddPokemonToPocket(name){
        this.addPokemonToPocket(name)
    },
    localAddBoard(score){
      this.createLeaderBoard(score)
    },

    async play() {
        if (!this.selected) {
            return;
        }
        const computerChoiceIndex = Math.floor(Math.random() * choices.length);
        this.computerSelected = choices[computerChoiceIndex];
        
        const { computerSelected, selected } = this;
        if (computerSelected === selected) {
        this.result = `TIE, PLAY IT AGAIN!`;
        } else {
            if (
              (computerSelected === "rock" && selected === "scissors") ||
              (computerSelected === "paper" && selected === "rock") ||
              (computerSelected === "scissors" && selected === "paper")
              ) {
              this.compCounter++
              this.result = "OOPS.. YOU LOSE! TRY AGAIN! YOUR POKEMON IS WAITING FOR YOU! (⌣̩̩́_⌣̩̩̀) ";
            } else {
            const total_pokemons = 500;
            const name = Math.floor(Math.random() * (total_pokemons - 1 + 1) + 1)
            this.catchedPokemon = await this.getPokemonDetail(name)
            this.localAddPokemonToPocket(name)
            this.userCounter++
            this.result = "🎉🎉🎉 YUPS.. YOU CATCH POKEMON! GO CHECK YOUR POKEMON! 🎉🎉🎉";
            }
        }
    },
    selectMove(type){
        this.selected = type
        this.catchedPokemon = {}
        this.play()
    }
  },
  // created(){
  //   this.play()
  // }

}
</script>

<template>
  <section class="d-flex flex-column min-vh-100">
    <img class="imgtitle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/>
    <img class="imgtitle" src="https://images-na.ssl-images-amazon.com/images/I/61QkvmvEdVL.png"/>
    <button class="btn btncss btn-lg active textsize">{{timerCount}}</button>
    <h2 v-if="this.timerCount == null" id="demo">Let's Catch Pokemon! Click START to Play</h2>
    <h3>{{finalResult}}</h3>
    <div v-if="finalResult == '🎉🎉🎉 YUPS.. YOU CATCH POKEMON! GO CHECK YOUR POKEMON! 🎉🎉🎉'" >
    <div class="flip-box">
    <div class="flip-box-inner">
        <div class="flip-box-front">
            <img :src="catchedPokemon.sprites.other['official-artwork']['front_default']" class="card-img-top cardImg" alt="Wild Landscape"/>
        </div>
        <div class="flip-box-back">
            <h1>{{catchedPokemon.name}}</h1>
        </div>
    </div>
</div>
    </div>
    <div class="container">
        <div class="section">
            <div class="info">
                <h3>You :</h3><span id="playerScore">{{userCounter}}</span>
            </div>
            <div class="show">
              <!-- <i v-if="!selected" class="fa fa-question" aria-hidden="true"></i> -->
                <i v-if="selected === 'rock'" class="fas fa-hand-rock active"></i>
                <i v-if="selected === 'paper'" class="fas fa-hand-paper"></i>
                <i v-if="selected === 'scissors'" class="fas fa-hand-scissors"></i>
            </div>
        </div>

        <div class="section">
            <div class="info">
                <h3>Computer :</h3><span id="computerScore">{{compCounter}}</span>
            </div>
            <div class="show computer">
                <i v-if="!computerSelected" class="fa fa-question" aria-hidden="true"></i>
                <i v-if="computerSelected === 'rock'" class="fas fa-hand-rock"></i>
                <i v-if="computerSelected === 'paper'" class="fas fa-hand-paper"></i>
                <i v-if="computerSelected === 'scissors'" class="fas fa-hand-scissors"></i>
            </div>
        </div>
    </div>
    <div v-if="this.timerCount !== null">
    <h2 style="color: rgb(233, 33, 19);" id="demo2">Choose One !</h2>
    <div class="selection">
        <button @click="selectMove('rock')" class="fas fa-hand-rock"></button>
        <button @click="selectMove('paper')" class="fas fa-hand-paper"></button>
        <button @click="selectMove('scissors')" class="fas fa-hand-scissors"></button>
    </div>
    </div>
    <div>
      <button v-if="this.timerCount == null" class="btn btncss btn-lg active textsize" @click="timerCount=15">START</button>
    </div>

</section>
</template>
<style scoped>
* {
    padding: 0;
    margin: 100;
    box-sizing: border-box;
}

body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    overflow: hidden;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
    margin: 40px;
    padding: auto;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.flip-box {
    margin-left: 550px;
    display: flex;
    justify-content: center;
    background-color: transparent;
    width: 40vw;
    perspective: 1000px;
    cursor: pointer;
}

.flip-box-inner {
    position: relative;
    width: 50%;
    /* height: 50%; */
    padding-top: 52.65%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    box-shadow: red;
}

.flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
}

img {
    padding: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}

.flip-box-front,
.flip-box-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}

.flip-box-front {
    padding: 20px;
    color: black;
    box-shadow: 0 4px 6px 0 hsla(214, 91%, 13%, 0.61);

}

.flip-box-back {
    padding: 20px;
    background-color: #ffffff;
    color: rgb(1, 0, 3);
    transform: rotateY(180deg);
    display: grid;
    align-content: center;
    box-shadow: 0 4px 6px 0 hsla(209, 98%, 16%, 0.61);

}

@media screen and (max-width: 400px) {
    .flip-box-inner {
        padding-top: 100%;
    }
    .flip-box {
        width: 90vw;
    }
}

.container{
    display: flex;
    justify-content: center;
}
.container .section{
    width: 350px;
    margin: 20px 50px;
}
.section .info{
    background: rgb(17, 27, 53);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
}
.info span , .info h3{
    font-size: 25px;
    font-weight: bold;
    margin: 0px 10px;
    font-family: sans-serif;
    color: white;
}
.show{
    display: flex;
    box-shadow: 0 4px 6px 0 hsla(175, 46%, 16%, 0.959);
    align-items: center;
    justify-content: center;
    background : rgba(221, 224, 61, 0.692);
    height: 220px;
}
.show i{
    font-size: 100px;
    color: rgba(14, 67, 240, 0.692);
}
h2{
    font-family: sans-serif;
    font-weight: bold;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;

}
h3 {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-weight: 100px;
}
.selection{
    margin-left:780px;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 350px;
    height: 100px;
}
.selection button{
    margin: 0 20px;
    padding: 25px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    background : rgb(29, 97, 97);
    font-size: 33px;
    color: orange;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
button:hover{
    font-weight: bold;
    color: rgb(17, 80, 197);
    background-color: whitesmoke;
    border-color: black;
}
.textsize {
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 5px;
  margin-left: 920px;
  font-weight: 100px;
  width:100px;
  font-size: 25px;
  color: red;
  
}

.imgtitle {
  width: 25%;
  margin-left: 700px
}

.btncss{
    margin-left:900px;
    margin-bottom: 60px;
    padding: 10px;
    border-radius: 10%;
    widows: 70px;
    border: none;
    outline: none;
    cursor: pointer;
    background : rgb(165, 36, 36);
    font-size: 25px;
    color: rgb(255, 252, 244);
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>