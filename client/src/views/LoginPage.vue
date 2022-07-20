<script>
import { mapState, mapActions } from 'pinia'
import { useAllState } from '../stores/allState'

  export default {
    name: 'LoginPage',
    data(){
      return {
        objLogin: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      ...mapActions(useAllState, ["loginHandler", 'toRegister']),
      localLoginHandler(){
        this.loginHandler(this.objLogin)
      }
    },
}
</script>
<!-- https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png -->
<template>

  <section>
      <div class="register-container">
        <div class="form-container">
          <form v-on:submit.prevent="localLoginHandler" class="form-component">
            <h1>ARE YOU READY TO PLAY ?</h1>
            <input
              type="text"
              name="email"
              v-model="objLogin.email"
              placeholder="EMAIL"
            />
            <input
              type="password"
              name="password"
              v-model="objLogin.password"
              placeholder="PASSWORD"
            />
            <button class="btn" type="submit">LOGIN</button>
            <h4>Don't have an account yet? Register now!</h4>
            <button  @click.prevent="toRegister" class="btn">REGISTER</button>
            <!-- <div id="g_id_onload"></div> -->
          </form>
        </div>
      </div>
  </section>

</template>
<style scoped>
  .register-container {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  gap:20px;
  background-image: linear-gradient(to right bottom,rgba(0, 0, 0, 0.356),rgba(1, 5, 22, 0.555)),url(https://www.teahub.io/photos/full/95-957272_hd-pokemon-wallpapers-for-pc.jpg);
  background-position:center;
  background-size:cover;
  height:100%;
}
/* https://deifoexkvnt11.cloudfront.net/assets/article/2020/07/06/pokemongofest2020-lookcloser_feature.jpg */

.form-container {
  margin: 200px;
  display:flex;
  padding:30px;
  width:20%;
  border-radius:12px;
  background-color:#0c3330a9;
  justify-content: center;
  align-items:center;
  box-shadow: 0 4px 6px 0 hsla(175, 65%, 58%, 0.959);
}
.form-component{
  display:flex;
  flex-direction:column;
  justify-content: center;
  width:80%;
  gap:30px;
  color: white;
  font-weight: bold;
}
.form-component input{
  font-size:20px;
  padding: 10px;
  border-radius:12px;
  border:none;
  border:1px solid transparent;
  object-fit: contain;
}
.register-container h1{
  font-family: Roboto,sans-serif;
  font-weight: 800;
  display:flex;
  justify-content: center;
  font-size:30px;color:whitesmoke
}

.btn{
  font-size:16px;
  padding: 10px;
  border-radius:12px;
  border:none;
  border:1px solid transparent;
  cursor: pointer;
  color: white;
  background-color: rgba(60, 175, 127, 0.685);
}

button:hover{
    color: rgb(246, 248, 252);
    background-color: rgba(197, 90, 48, 0.719);
    border-color: black;
}
</style>