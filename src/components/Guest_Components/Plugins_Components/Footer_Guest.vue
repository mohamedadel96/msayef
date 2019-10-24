<template>
  <div class="footer">
    <hr />
    <div class="container">
      <div class></div>
      <div class="row">
        <div class="col-md-4 right">
          <h1>&copy; Msayef, Inc.</h1>
        </div>
        <div class="col-md-4 text-center condition">
          <a href="https://msayef.net/guest_terms_and_conditions">Terms and confititon</a>
        </div>
        <div class="col-md-4 left">
          <ul>
            <!-- <li>Privacy</li> -->
            <li>
              <a href="https://www.facebook.com/msayef.net">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <!-- 
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  margin-bottom: 18px;
}

.footer hr{
  margin-top: 18px;
  margin-bottom: 18px;
}

.footer h1 {
  font-size: 12px;
  color: rgba(118, 118, 118, 1);
  text-align: left;
  display: inline;
}

.footer ul {
  /* float: right;
  margin-right: 20%; */
  list-style: none;
  margin-bottom: 0;
}

.footer ul li {
  display: inline-block;
  font-size: 12px;
  color: rgba(118, 118, 118, 1);
  padding-left: 20px;
}

.footer .left {
  text-align: left;
}

.footer .condition a,
.footer .right h1 {
  color: #9298b1;
  font-weight: 100;
  font-size: 12px;
}
</style>