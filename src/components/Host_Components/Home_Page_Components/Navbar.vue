<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
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
        <a class="navbar-brand" href>
          <img class="img-responsive" src="../../../assets/images/logo.png" alt />
        </a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a class="active" href>{{$t("host.home.navbar.home")}}</a>
          </li>
          <li>
            <a
              @click.prevent="changeLang"
              class="currentLang ar"
            >{{$i18n.locale === 'en' ? 'عربي' : 'English'}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    changeLang() {
      if (this.$i18n.locale === "ar") {
        this.$i18n.locale = "en";
        localStorage.setItem("lang", "en");
        location.reload();
      } else {
        this.$i18n.locale = "ar";
        localStorage.setItem("lang", "ar");
        location.reload();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-default {
  margin: 0;
  background-color: rgba(8, 95, 188, 1);
  border-radius: 0;
  border: none;
}

.container-fluid {
  background-color: rgba(8, 95, 188, 1);
}

.navbar-default .navbar-brand {
  height: 100%;
  padding: 5px 15px;
}

.navbar-default .navbar-nav > li > a {
  color: #bbb;
  font-size: 17px;
  padding-top: 25px;
}

.navbar-default .navbar-nav .active {
  color: #fff;
}

.navbar-default .navbar-nav > li > a:hover {
  color: #fff;
}

/* Fix responsive devices in small deveices  */

.navbar-header button {
  margin-top: 15px;
}
</style>
