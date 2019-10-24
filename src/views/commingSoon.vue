<template>
  <div class="main-area center-text">
    <div class="display-table">
      <div class="display-table-cell">
        <h1 class="title font-white">
          <b>Coming Soon</b>
        </h1>
        <p class="desc font-white">
          Our website is currently undergoing scheduled maintenance.
          We Should be back shortly. Thank you for your patience. info@msayef.net
        </p>

        <!-- <a class="notify-btn" href="#"><b>NOTIFY US</b></a>
        <ul class="social-btn font-white">
        <li><a href="#">facebook</a></li>
        </ul> social-btn-->
      </div>
      <!-- display-table -->
    </div>
    <!-- display-table-cell -->
  </div>
  <!-- main-area -->
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-family: "Poppins", sans-serif;
}

p {
  line-height: 1.6;
  font-size: 1.05em;
  font-weight: 400;
  color: #555;
}
/* ---------------------------------
2. COMMONS FOR PAGE DESIGN
--------------------------------- */

.center-text {
  text-align: center;
}

.display-table {
  display: table;
  height: 100%;
  width: 100%;
}

.display-table-cell {
  display: table-cell;
  vertical-align: middle;
}

::-webkit-input-placeholder {
  font-size: 0.9em;
  letter-spacing: 1px;
}

::-moz-placeholder {
  font-size: 0.9em;
  letter-spacing: 1px;
}

:-ms-input-placeholder {
  font-size: 0.9em;
  letter-spacing: 1px;
}

:-moz-placeholder {
  font-size: 0.9em;
  letter-spacing: 1px;
}

.full-height {
  height: 100%;
}

.position-static {
  position: static;
}

.font-white {
  color: #fff;
}

/* ---------------------------------
3. MAIN SECTION
--------------------------------- */

.main-area {
  background: url('../assets/images/poster.png');
  position: relative;
  height: 100vh;
  z-index: 1;
  padding: 0 20px;
  background-size: cover;
  color: #fff;
}

.main-area:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.4;
  background: #000;
}

.main-area .desc {
  margin: 20px auto;
  max-width: 500px;
}
</style>