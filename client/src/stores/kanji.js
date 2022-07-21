import { defineStore } from "pinia";
import axios from 'axios';

export const useKanjiStore = defineStore({
  id: "kanji",
  state: () => ({
    kanjis: [],
    kanjiDetails:{
        meaning:'',
        grade: 0,
        stroke: 0,
        kun: [],
        on: []
      }
  }),
  getters: {
   
  },
  actions: {
    async getGrade(grade=1){
        let data = await axios.get('https://kanjiapi.dev/v1/kanji/grade-'+grade)
        data = data.data

        this.kanjis = data

        console.log(this.kanjis, "dari get grade<<<<")
    },

    async getDetails(kanji){
        let {data} = await axios.get('https://kanjiapi.dev/v1/kanji/'+kanji)
        console.log(data)

        this.kanjiDetails.meaning = data.heisig_en
        this.kanjiDetails.grade = data.grade
        this.kanjiDetails.stroke = data.stroke_count
        this.kanjiDetails.kun = data.kun_readings
        this.kanjiDetails.on = data.on_readings

        console.log(this.kanjiDetails, "dari get details<<<")
    }
    
    
  },
});
