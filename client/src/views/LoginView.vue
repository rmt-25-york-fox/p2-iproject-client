<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="row">
        <div class="col-6">
          <h2>Welcome Back</h2>
          <p>please enter your details</p>
          <button class="mt-2">Dummy</button>
          <p class="mt-3"><span>or</span></p>
          <form class="form">
            <div class="form-floating mb-3">
              <input
                class="form-control"
                type="text"
                id="email"
                name="email"
                placeholder="name@test.com"
              />
              <label for="email">Email</label>
            </div>
            <div class="form-floating">
              <input
                class="form-control"
                type="password"
                id="password"
                name="password"
                placeholder="password"
              />
              <label for="password">Password</label>
            </div>
            <div class="mt-4">
              <button class="btn btn-primary">Sign In</button>
            </div>
          </form>
          <p class="mt-4">
            Dont have an account?
            <span class="register fw-bold">Sign up here</span>
          </p>
        </div>
        <div class="col-6">
          <img
            class="cat w-100 h-100"
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="cat-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$theme-pink: #fc72b7;

.cat {
  object-fit: cover;
}
.form-floating {
  width: 300px;
}

.register {
  color: $theme-pink;
}
</style>
