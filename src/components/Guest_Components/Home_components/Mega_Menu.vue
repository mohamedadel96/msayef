<template>
  <!-- <div class="mega-menu">
    <div class="container">
      <hr>
      <div class="row">
        <div class="col-md-3">
          <div class="menu-logo">
            <img src="../../../assets/images/logo.png">
            <div class="dropdown">
              <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                Dropdown button
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">English</a>
                <a class="dropdown-item" href="#">Arbic</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="mega">
            <h1>{{$t("guest.home.mega_menu.li.Msayef")}}</h1>
            <ul>
              <li>{{$t("guest.home.mega_menu.li.AboutUs")}}</li>
              <li>{{$t("guest.home.mega_menu.li.Map")}}</li>
              <li>{{$t("guest.home.mega_menu.li.Press")}}</li>
              <li>{{$t("guest.home.mega_menu.li.Policies")}}</li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="mega">
            <h1>{{$t("guest.home.mega_menu.li.Discover")}}</h1>
            <ul>
              <li>{{$t("guest.home.mega_menu.li.Trust")}}</li>
              <li>{{$t("guest.home.mega_menu.li.TravelCredit")}}</li>
              <li>{{$t("guest.home.mega_menu.li.GidtCards")}}</li>
              <li>{{$t("guest.home.mega_menu.li.Blog")}}</li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="mega">
            <h1>{{$t("guest.home.mega_menu.li.Hosting")}}</h1>
            <ul>
              <li>{{$t("guest.home.mega_menu.li.WhyHost")}}</li>
              <li>{{$t("guest.home.mega_menu.li.Hospitality")}}</li>
              <li>{{$t("guest.home.mega_menu.li.ResponsibleHosting")}}</li>
              <li>{{$t("guest.home.mega_menu.li.CommunityCenter")}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-div"></div>
    </div>
  </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
.mega-menu {
  margin-top: 71px;
}
.mega-menu hr {
  margin: 0;
}
.mega-menu .menu-logo {
  padding-bottom: 25px;
  margin-top: 24px;
}
.mega-menu .menu-logo img {
  margin-bottom: 17px;
}

.mega-menu .menu-logo .dropdown .btn {
  height: 41px;
  width: 219px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(219, 219, 219, 1);
  border-radius: 2px;
  font-size: 16px;
  color: rgba(72, 72, 72, 1);
}
.mega-menu .menu-logo .dropdown .btn i {
  padding-left: 20px;
  color: rgba(72, 72, 72, 1);
}
.mega-menu .menu-logo .dropdown .dropdown-menu a {
  display: block;
  color: rgba(72, 72, 72, 1);
  padding: 5px;
}
.mega-menu .menu-logo .dropdown .dropdown-menu a:hover {
  text-decoration: none;
}
.mega-menu {
  margin-bottom: 20px;
}
.mega-menu .mega {
  margin-top: 24px;
}
.mega-menu .border-div {
  height: 1px;
  width: 100%;
  background-color: #eee;
}
.mega-menu .mega ul {
  list-style: none;
  padding: 0;
}
.mega-menu .mega h1 {
  margin: 0;
  margin-bottom: 16px;
  font-size: 12px;
  color: rgba(72, 72, 72, 1);
}
.mega-menu .mega ul li {
  font-size: 12px;
  color: rgba(118, 118, 118, 1);
  margin-bottom: 7px;
}
</style>