<script>
import { mapActions } from "pinia";
export default {
    name:'RegisPage'
}
</script>

<template>

<h3 class="text-center" style="margin-right: 180px;">Register</h3>
<form method="post" class="w-25 mx-auto">
    <div class="mb-3">
    <label class="form-label">Username:</label>
    <input
        class="form-control"
        type="text"
        placeholder="Masukkan Username"
    />
    </div>
    <div class="mb-3">
    <label class="form-label">Email:</label>
    <input
        class="form-control"
        type="text"

        placeholder="Masukkan Email"
    />
    </div>
    <div class="mb-3">
    <label class="form-label">Password:</label>
    <input
        class="form-control"
        type="password"

        placeholder="Masukkan Password"
    />
    </div>
    <div class="mb-3">
    <label class="form-label">Phone Number:</label>
    <input
        class="form-control"
        type="text"

        placeholder="Masukkan Phone Number"
    />
    </div>
    <div class="mb-3">
    <label class="form-label">Address:</label>
    <input
        class="form-control"
        type="text"

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