<template>
  <div class="form">
    <div class="row text-center">
      <div class="col">
        <h2>Create New Account</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">UserName</label>
            <input type="text" class="form-control" id="usernameRegis" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="emailRegis" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="passwordRegis" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <div class="text-center">
            <span class="txt1"> Already have an account ?</span>
            <router-link to="/login" id="btnRegis" href="#" class="txt2 hov1"> Login </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
