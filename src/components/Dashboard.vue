<template>
  <div class="dashboard">
    <div class="page-main">
      <div
        class="header d-md-flex p-0">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md order-md-first">
              <ul class="nav nav-tabs border-0 flex-column flex-md-row">
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    tag="a"
                    class-active="active"
                    to="/planning"
                    exact><i class="fe fe-home"/> Planning</router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    tag="a"
                    class-active="active"
                    to="/customers"
                    exact><i class="fe fe-home"/> Customers</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <router-view/>
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
