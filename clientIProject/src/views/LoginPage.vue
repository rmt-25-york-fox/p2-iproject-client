<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
    name:'LoginPage',
    data(){
        return {
            temp:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        ...mapActions(useUserStore,["login"]),
        logiin(){
            this.login(this.temp)
        }
    }
}
</script>

<template>
<h3 class="text-center" style="margin-right: 20px;">Login</h3>
<form method="post" v-on:submit.prevent="logiin" class="w-25 mx-auto">
    <label class="form-label">Email:</label>
    <input
    class="form-control"
    v-model="temp.email"
    type="text"
    name="email"
    placeholder="Masukkan Email"
    />
    <label class="form-label">Password:</label>
    <input
    class="form-control"
    v-model="temp.password"
    type="password"
    name="password"
    placeholder="Masukkan Password"
    />
    <button id="btnLogin" class="btn btn-primary d-grid mx-auto">Login</button
    ><br />
    <label
    >Don't have account?
    <router-link to="/register">
        <a v-on:click="directPage" href="#">Register</a>
    </router-link>
    </label>
</form>
</template>