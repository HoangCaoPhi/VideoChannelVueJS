<template>
  <div class="container">
    <div class="col-sm-9">
      <video width="800" height="500" controls autoplay>
        <source
          :src="`${$store.state.serverPath}/storage/${categories.video}`"
         type="video/mp4" />

        <source 
         :src="`${$store.state.serverPath}/storage/${categories.video}`"
        type="video/ogg" />
      </video>
      <h3 class="title btn btn-danger btn-block">{{ categories.name }}</h3>
    </div>
  </div>
</template>
<script>
import * as categoryService from "../services/category_service";
export default {
  props: ["id"],
  data() {
    return {
      categories: null
    };
  },
  mounted() {
    this.loadCategory();
  },
  methods: {
    loadCategory: async function() {
      try {
        const response = await categoryService.getDetail(this.id);
        console.log(response);
        this.categories = response.data;
        console.log(this.categories);
        // console.log(this.categories);
      } catch (error) {
        this.flashMessage.error({
          title: "Error Message Title",
          message: "Some Error Occurred, Please Try Again!",
          time: 5000
        });
      }
    }
  }
};
</script>