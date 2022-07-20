<script>
export default {
  name: "Buygas",
};
</script>

<template>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          Gambar bbm
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="bg-light rounded h-100 d-flex align-items-center p-5">
            <form>
              <h2>
                you can buy gas and enter it here so you can see how much you
                buy fuel for your vehicle
              </h2>
              <div class="w-100 col-8 mb-4">
                <label class="form-label" for="liter">Liter</label>
                <input
                  type="integer"
                  id="liter"
                  class="form-control form-control-lg"
                />
              </div>

              <div class="col-12">
                <button class="btn btn-primary w-100 py-3" type="submit">
                  Buy Gas
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
