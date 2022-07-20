<template>
  <div class="form">
    <div class="row text-center">
      <div class="col">
        <h2>Login</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-3">
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <hr />
          <div class="text-center">
            <span class="txt1"> Create an account ?</span>
            <router-link to="/register" id="btnRegis" href="#" class="txt2 hov1"> Register </router-link>
          </div>
          <hr />
        </form>
      </div>
    </div>
  </div>
</template>
