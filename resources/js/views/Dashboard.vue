<template>
  <div class="container">
    <br />
    <div class="row">
      <div class="col-md-3" v-for="(category, index) in categories" :key="index">
        <router-link :to="{name:'detail', params:{id: category.id}}" >
          <img
            :src="`${$store.state.serverPath}/storage/${category.image}`"
            :alt="category.name"
            class="img-responsive"
            style="width: 200px"
          />
          <span class="btn">{{ category.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import * as categoryService from "../services/category_service";
export default {
  data() {
    return {
      categories: []
    };
  },
  mounted() {
    this.loadCategory();
  },
  methods: {
    loadCategory: async function() {
      try {
        const response = await categoryService.loadCategory();
        // console.log(response);
        this.categories = response.data.data;
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