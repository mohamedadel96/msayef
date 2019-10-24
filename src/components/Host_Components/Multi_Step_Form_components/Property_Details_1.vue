<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 propertyDetails">
        <h3>{{$t("host.MS_form.property_details_1.title")}}</h3>
        <form action>
          <input
            type="text"
            v-model="req.title_en"
            :placeholder="$t('host.MS_form.property_details_1.form_input')"
          >
          <textarea
            v-model="req.description_en"
            :placeholder="$t('host.MS_form.property_details_1.form_textarea')"
          ></textarea>
          <div class="file-upload">
            <label for="upload" class="file-upload__label">+</label>
            <input
              @change="handleFile($event)"
              multiple
              id="upload"
              class="file-upload__input"
              type="file"
              name="file-upload"
            >
          </div>

            <ul class="imgPreview">
              <li class="imgs" v-for="(doc,i) in imgs" :key="i">
                <i class="fa fa-times" @click="dltImg(i)"></i>
                <img :src="doc.img" alt="flat image">
              </li>
            </ul>

          <button
            type="submit"
            @click.prevent="update_properties"
          >{{$t("host.AuthPages.continue")}}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      req: {
        property_id: localStorage.getItem("property_id"),
        title_en: "",
        description_en: "",
        step: "main_details",
        image: null
      },
      files: [],
      imgs: []
    };
  },
  methods: {
    async handleFile(e) {
      let files = await e.target.files;
      Object.keys(files).map(k => {
        let file = files[k];
        this.files.push(files[k]);
        let body = {
          id: file.lastModified,
          img: URL.createObjectURL(file),
          name: file.name
        };
        this.imgs.push(body);
      });
    },

    dltImg(i) {
      console.log(this.files);
      this.files = this.files.filter(
        file => file.lastModified != this.files[i].lastModified
      );
      this.imgs = this.imgs.filter(attach => attach.id != this.imgs[i].id);
    },
    update_properties() {
      let images = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        images.append("image", file);
      }
      let req_body = {};
      if (this.$i18n.locale == "ar") {
        req_body = {
          property_id: this.req.property_id,
          title_ar: this.req.title_en,
          description_ar: this.req.description_en,
          image: images,
          step: "main_details"
        };
      } else {
        this.req.image = images;
        req_body = this.req;
      }

      this.$store.dispatch("UPDATE_PROPERTIES", req_body);
    }
  }
};
</script>

<style scoped>
.propertyDetails {
  margin-top: 50px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 3px 6px 0px #9198b1;
  border-radius: 5px;
}

.propertyDetails form {
  margin: 36px 0px;
}

.propertyDetails form input[type="text"],
.propertyDetails form textarea {
  display: block;
  padding: 10px 15px;
  width: 100%;
  border: 1px solid #9298b1;
  border-radius: 8px;
  margin: 20px auto;
  outline: none;
  font-size: 15px;
}

.propertyDetails form textarea {
  min-height: 150px;
}

.propertyDetails form button {
  height: 60px;
  background-color: #085fbc;
  border-radius: 8px;
  width: 100%;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  margin: 30px auto;
  margin-bottom: 0;
  outline: none;
}

/*****************************************
  upload button styles
******************************************/
.file-upload {
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 100px;
}

.file-upload__label {
  display: block;
  padding: 5px;
  color: #fff;
  border-radius: 0.4em;
  height: 100%;
  line-height: 90px;
  font-size: 18px;
  border: 1px solid #9298b1;
  color: #9298b1;
}

.file-upload__label:hover {
  cursor: pointer;
}

.file-upload__input {
  width: 0px;
  height: 0px;
  opacity: 0;
}

.imgPreview{
  list-style: none;
  padding:0;
  margin-bottom:0;
}
.imgPreview li {
  width:100px;
  display: inline-block;
  margin:10px;
  position:relative;
  overflow: hidden;
  height:100px;
}
.imgPreview li img{
  width:100%;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
}
</style>