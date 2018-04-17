<template>
  <div class="login">
    <div class="row">
      <div class="col col-login mx-auto">
        <form
          class="card"
          action=""
          method="post">
          <div class="card-body p-6">
            <div class="card-title">Login to your account</div>
            <div class="form-group">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                autocomplete="off">
            </div>
            <div class="form-group">
              <label class="form-label">
                Password
                <a
                  href="#"
                  class="float-right small">I forgot password</a>
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                autocomplete="off">
            </div>
            <div class="form-group">
              <label class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input">
                <span class="custom-control-label">Remember me</span>
              </label>
            </div>
            <div class="form-footer">
              <button
                type="submit"
                class="btn btn-primary btn-block">Sign in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  form {
    margin-top: 10rem;
    width: 25rem;
  }
</style>

<script>
export default {
  name: 'Login'
}
</script>
