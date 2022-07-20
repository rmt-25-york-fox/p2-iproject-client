<script>
import { mapActions } from "pinia";
export default {
    name:'LoginPage'
}
</script>

<template>
<h3 class="text-center" style="margin-right: 200px;">Login</h3>
<form method="post"  class="w-25 mx-auto">
    <label class="form-label">Username:</label>
    <input
    class="form-control"

    type="text"
    name="username"
    placeholder="Masukkan Username"
    />
    <label class="form-label">Email:</label>
    <input
    class="form-control"

    type="text"
    name="email"
    placeholder="Masukkan Email"
    />
    <label class="form-label">Password:</label>
    <input
    class="form-control"

    type="password"
    name="password"
    placeholder="Masukkan Password"
    />
    <button id="btnLogin" class="btn btn-primary d-grid mx-auto">Login</button
    ><br />
    <label
    >Don't have account?
    <router-link to="/regis">
        <a v-on:click="directPage" href="#">Register</a>
    </router-link>
    </label>
</form>
</template>