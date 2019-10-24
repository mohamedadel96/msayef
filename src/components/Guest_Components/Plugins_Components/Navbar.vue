<template>
  <nav class="navbar navbar-default">
    <div class="bg-b">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/">
            <a class="navbar-brand" href>
              <img class="img-responsive" src="../../../assets/images/logo.png" alt>
            </a>
          </router-link>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/">
                <a class="active" href>{{$t('host.home.navbar.home')}}</a>
              </router-link>
            </li>
            <!-- <li>
                <a class href>Map</a>
            </li>
            <li>
              <a class href>FAQ</a>
            </li>
            <li>
              <a class href>Blog</a>
            </li>
            <li>
              <a class href>LOGIN/SIGNUP</a>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  margin: 0;
  background-color: rgba(8, 95, 188, 1);
  box-shadow: 0px 3px 7px 0px rgba(42, 46, 62, 0.31);
  border-radius: 0;
  border: none;
}

.bg-b {
  background-color: rgba(8, 95, 188, 1);
}

.navbar-default .navbar-brand {
  height: 100%;
  padding: 5px 15px;
}

.navbar-default .navbar-nav li a {
  color: #bbb;
  font-size: 17px;
  padding-top: 25px;
}

.navbar-default .navbar-nav .active {
  color: #fff;
}

.navbar-default .navbar-nav > li a:hover {
  color: #fff;
}

/* Fix responsive devices in small deveices  */
.navbar-header button {
  margin-top: 15px;
}
</style>