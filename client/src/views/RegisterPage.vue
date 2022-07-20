<script>
import { mapActions } from 'pinia'
import { useAllState } from '../stores/allState'
  export default {
    name: 'RegisterPage',
    data(){
      return {
        objRegister: {
          username: "",
          email: "",
          password: "",
        }
      }
    },
    methods: {
      ...mapActions(useAllState, ['toLogin', 'registerHandler']),
      localRegisterHandler (){
        this.registerHandler({
          username: this.username,
          email: this.email,
          password: this.password,

        })
      }
    }
}
</script>
<template>
  <section class="vh-100">
    <div id="login">
      <div class="register-container">
        <div class="form-container">
          <form v-on:submit.prevent="localRegisterHandler" class="form-component">
            <h1>REGISTER NOW</h1>
            <input
              type="password"
              name="password"
              v-model="username"
              placeholder="USERNAME"
            />
            <input
              type="text"
              name="email"
              v-model="email"
              placeholder="EMAIL"
            />
            <input
              type="password"
              name="password"
              v-model="password"
              placeholder="PASSWORD"
            />
            <button class="btn" type="submit">REGISTER</button>
            <h4>Don't have an account yet? Register Now!</h4>
            <button  @click.prevent="toLogin" class="btn">LOGIN</button>
            <!-- <div id="g_id_onload"></div> -->
          </form>
        </div>
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
  background-image: linear-gradient(to right bottom,rgba(0, 0, 0, 0.356),rgba(1, 5, 22, 0.555)),url(https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Download-Pokemon-Black-And-White-Wallpaper.jpg);
  background-position:center;
  background-size:cover;
  height:100%;
}

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
  background-color:  rgba(60, 175, 127, 0.685);
}

button:hover{
    color: rgb(246, 248, 252);
    background-color: rgba(197, 90, 48, 0.719);
    border-color: black;
}
</style>