<script>
import { mapActions, mapWritableState } from 'pinia';
import { useKanjiStore } from '../stores/kanji';

export default{
  computed: {
    ...mapWritableState(useKanjiStore, ["kanjis", "kanjiDetails"])
  },

   data(){
    return{
      randomKanji: '',
      showDetails: false,
    }
  },


  methods:{
    ...mapActions(useKanjiStore, ["getGrade", "getDetails"]),

    changeKanji(){
      console.log('aaaa')
      this.randomKanji = this.kanjis[Math.round(Math.random()*(this.kanjis.length-1))]

      this.showDetails = false

      console.log(this.randomKanji, "<<<random kanji")
    },

    async showKanjiDetails(kanji){
      await this.getDetails(kanji)
      this.showDetails = !this.showDetails
    },

    async changeGrade(grade){
      await this.getGrade(grade)
      this.changeKanji()
    }
  },

  async created(){
    console.log('ayam')
    await this.getGrade()
    this.changeKanji()
  },

  mounted(){
    console.log('bebek')
    this.changeKanji()
  }

}

</script>

<template>
 <!-- Flashcard -->

            <div class="rounded overflow-hidden shadow-lg bg-white mb-2 p-5" style="width: 800px;">
                <div>
                    <h1 class="text-4xl text-center font-bold my-5 pb-5">Flashcard</h1>
                </div>
                <div>
                    <span>Choose Grade:</span>
                    <br>
                    <br>
                    <a @click.prevent="changeGrade(1)"><span class="bg-red-700 rounded-full px-5 py-2 text-bold text-white mx-2">Grade 1</span></a>
                    <a @click.prevent="changeGrade(2)"><span class="bg-orange-700 rounded-full px-5 py-2 text-bold text-white mx-2">Grade 2</span></a>
                    <a @click.prevent="changeGrade(3)"><span class="bg-yellow-600 rounded-full px-5 py-2 text-bold text-white mx-2">Grade 3</span></a>
                    <a @click.prevent="changeGrade(4)"><span class="bg-green-700 rounded-full px-5 py-2 text-bold text-white mx-2">Grade 4</span></a>
                    <br>
                    <br>
                    <a @click.prevent="changeGrade(5)"><span class="bg-blue-700 rounded-full px-5 py-2 text-bold text-white mx-2">Grade 5</span></a>
                    <a @click.prevent="changeGrade(6)"><span class="bg-indigo-700 rounded-full px-5 py-2 text-bold text-white mx-2">Grade 6</span></a>
                    <a @click.prevent="changeGrade(8)"><span class="bg-pink-700 rounded-full px-5 py-2 text-bold text-white mx-2">Others</span></a>
                </div>

                <div class="my-16">
                    <div class="border-2 p-5 w-5/12 mx-auto">
                        <h1 class="text-center text-8xl">{{randomKanji}}</h1>
                        <button @click.prevent="showKanjiDetails(randomKanji)" class="px-3 py-1 text-sm font-semibold text-white mt-16 w-56 mx-auto bg-sky-900 rounded">Show Details</button>
                        <button @click.prevent="changeKanji()" class="px-3 py-1 text-sm font-semibold text-sky-900 mt-5 w-56 mx-auto border-2 border-sky-900 rounded">Next Kanji</button>
                    </div>
                    
                    <div v-if="showDetails">
                        <p class="text-center font-bold mt-5">{{kanjiDetails.meaning}}</p>
                        <table class="border-collapse border border-slate-500 mx-auto w-48 mt-5">
                            <tbody>
                                <tr>
                                    <td class="border border-slate-700">Grade</td>
                                    <td class="border border-slate-700 text-center">{{kanjiDetails.grade}}</td>
                                  </tr>
                              <tr>
                                <td class="border border-slate-700">Stroke Count</td>
                                <td class="border border-slate-700 text-center">{{kanjiDetails.stroke}}</td>
                              </tr>
                              <tr>
                                <td class="border border-slate-700">Kunyomi</td>
                                <td class="border border-slate-700 text-center py-3 px-2">
                                  <span class="font-bold" v-for="kun in kanjiDetails.kun">{{kun}} <br>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td class="border border-slate-700">Onyomi</td>
                                <td class="border border-slate-700 text-center py-3">
                                  <span class="font-bold" v-for="on in kanjiDetails.on">{{on}} <br>
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                    </div>
                </div>
            </div>
</template>