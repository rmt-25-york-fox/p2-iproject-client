<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
    name:'RegisPage',
    data(){
        return {
            temp:{
                username: "",
                email: "",
                password: "",
                phoneNumber: "",
                address: ""
            }
        }
    },
    methods:{
        ...mapActions(useUserStore,["regis"]),
        register(){
            this.regis(this.temp)
        }
    }
}
</script>

<template>

<h3 class="text-center" style="margin-right: 20px;">Register</h3>
<form method="post" v-on:submit.prevent="register" class="w-25 mx-auto">
    <div class="mb-3">
    <label class="form-label">Username:</label>
    <input
        class="form-control"
        type="text"
        v-model="temp.username"
        placeholder="Masukkan Username"
    />
    </div>
    <div class="mb-3">
    <label class="form-label">Email:</label>
    <input
        class="form-control"
        type="text"
        v-model="temp.email"
        placeholder="Masukkan Email"
    />
    </div>
    <div class="mb-3">
    <label class="form-label">Password:</label>
    <input
        class="form-control"
        type="password"
        v-model="temp.password"
        placeholder="Masukkan Password"
    />
    </div>
    <div class="mb-3">
    <label class="form-label">Phone Number:</label>
    <input
        class="form-control"
        type="text"
        v-model="temp.phoneNumber"
        placeholder="Masukkan Phone Number"
    />
    </div>
    <div class="mb-3">
    <label class="form-label">Address:</label>
    <input
        class="form-control"
        type="text"
        v-model="temp.address"  
        placeholder="Masukkan Address"
    />
    </div>
    <button id="btnRegis" class="btn btn-primary d-grid mx-auto">
    Register</button
    ><br />
    <label
    >Already have an account?
    <router-link to="/login">
        <a href="#">Login</a>
    </router-link>
    </label>
</form>

</template>