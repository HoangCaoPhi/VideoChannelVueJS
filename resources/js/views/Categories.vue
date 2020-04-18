<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header d-flex">
            <span>
              <i class="fas fa-chart-area"></i>
              Video Management
            </span>

            <b-button class="btn btn-danger btn-sm ml-auto" @click="newCategoryModal">
              <span>
                <i class="fa fa-plus"></i>
              </span> Upload Video
            </b-button>
          </div>

          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Image</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(category, index) in categories" :key="index">
                  <td>{{index + 1 }}</td>
                  <td>{{ category.name }}</td>
                  <td>
                    <img
                      :src="`${$store.state.serverPath}/storage/${category.image}`"
                      :alt="category.name"
                      class="table-image"
                    />
                  </td>
                  <td>
                    <button class="btn btn-primary" v-on:click="editCategory(category)">
                      <span>
                        <i class="fa fa-edit"></i>
                      </span>
                    </button>
                    <button class="btn btn-danger" v-on:click="deleteCategory(category)">
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-center" v-show="moreExist">
              <button type="button" class="btn btn-primary btn-sm" v-on:click="loadMore">
                <span class="fa fa-arrow-down"></span>Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal ref="newCategory" title="Add New Category" hide-footer>
      <form v-on:submit.prevent="createCategory">
        <div class="form-group">
          <label for="name">Enter Name</label>
          <input
            id="name"
            v-model="Data.name"
            class="form-control"
            placeholder="Enter Category Name"
          />
          <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
        </div>
        <div class="form-group">
          <div v-if="Data.image.name">
            <img src ref="newCategoryImageDisplay" class="w-150px" />
          </div>
          <input
            type="file"
            v-on:change="attachImage"
            ref="newCategoryImage"
            class="form-control"
            id="image"
          />
          <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
        </div>
        <div class="form-group">
          <!-- <div v-if="Data.video.name">
            <img src ref="newCategoryImageDisplay" class="w-150px" />
          </div>-->
          <input
            type="file"
            v-on:change="attachImage"
            ref="newCategoryVideo"
            class="form-control"
            id="video"
          />
          <div class="invalid-feedback" v-if="errors.video">{{ errors.video[0] }}</div>
        </div>
        <hr />
        <div class="text-right">
          <button type="button" class="btn btn-danger" v-on:click="hideNewCategoryModal">Cancel</button>
          <button type="submit" class="btn btn-success">
            <span class="fa fa-check"></span>Save
          </button>
        </div>
      </form>
    </b-modal>

    <b-modal ref="editCategory" title="Edit Category" hide-footer>
      <form v-on:submit.prevent="updateCategory">
        <div class="form-group">
          <label for="name">Enter Name</label>
          <input
            id="name"
            v-model="editCategoryData.name"
            class="form-control"
            placeholder="Enter Category Name"
          />
          <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
        </div>
        <div class="form-group">
          <div>
            <img
              :src="`${$store.state.serverPath}/storage/${editCategoryData.image}`"
              ref="editCategoryImageDisplay"
              class="w-150px"
            />
          </div>
          <input
            type="file"
            v-on:change="editAttachImage"
            ref="editCategoryImage"
            class="form-control"
            id="image"
          />
          <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
        </div>
        <hr />
        <div class="text-right">
          <button type="button" class="btn btn-danger" v-on:click="hideEditCategoryModal">Cancel</button>
          <button type="submit" class="btn btn-success">
            <span class="fa fa-check"></span>Update
          </button>
        </div>
      </form>
    </b-modal>
  </div>
  <!-- npm i bootstrap-vue 
        npm i vuex --save
  -->
</template>
<script>
import * as categoryService from "../services/category_service";
import * as store from "../store";
export default {
  name: "category",
  data() {
    return {
      categories: [],
      Data: {
        name: "",
        image: "",
        video: ""
      },
      moreExist: false,
      nextPage: 0,
      editCategoryData: {
        name: "",
        image: ""
      },
      errors: {}
    };
  },
  mounted() {
    this.loadCategoryProfile();
  },
  methods: {
    loadCategoryProfile: async function() {
      try {
        const response = await categoryService.loadCategoryProfile(
          this.$store.state.profile.id
        );
        // console.log(response);
        this.categories = response.data;
        console.log(this.categories);
      } catch (error) {
        this.flashMessage.error({
          title: "Error Message Title",
          message: "Some Error Occurred, Please Try Again!",
          time: 5000
        });
      }
    },
    attachImage() {
      // su dung de doc file
      this.Data.image = this.$refs.newCategoryImage.files[0];
      this.Data.video = this.$refs.newCategoryVideo.files[0];

      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.$refs.newCategoryImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.Data.image);
    },
    editAttachImage() {
      // su dung de doc file
      this.editCategoryData.image = this.$refs.editCategoryImage.files[0];

      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.$refs.editCategoryImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.editCategoryData.image);
    },
    hideNewCategoryModal() {
      this.$refs["newCategory"].hide();
    },
    hideEditCategoryModal() {
      this.$refs["editCategory"].hide();
    },
    editCategoryModal() {
      this.$refs["editCategory"].show();
    },
    newCategoryModal() {
      this.$refs["newCategory"].show();
    },
    createCategory: async function() {
      let formData = new FormData();
      formData.append("name", this.Data.name);
      formData.append("image", this.Data.image);
      formData.append("video", this.Data.video);
      formData.append("user_id", this.$store.state.profile.id);
      try {
        const response = await categoryService.createCategory(formData);
        this.categories.unshift(response.data);
        this.hideNewCategoryModal();
        this.flashMessage.success({
          message: "Create Category Successed !!",
          time: 5000
        });
        this.Data = {
          name: "",
          image: ""
        };
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;

          default:
            this.flashMessage.error({
              title: "Error Message Title",
              message: "Some Error Occurred, Please Try Again!",
              time: 5000
            });
            break;
        }
      }
    },
    deleteCategory: async function(category) {
      if (
        !window.confirm(`Are you sure you want to delete ${category.name} ?`)
      ) {
        return;
      }
      try {
        await categoryService.deleteCategory(category.id);

        this.categories = this.categories.filter(obj => {
          return obj.id != category.id;
        });
        this.loadCategory();
        this.flashMessage.success({
          message: "Delete Category Successed !!",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Error Message Title",
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    editCategory(category) {
      this.editCategoryData = { ...category };
      this.editCategoryModal();
    },
    updateCategory: async function() {
      try {
        const formData = new FormData();
        formData.append("name", this.editCategoryData.name);
        formData.append("image", this.editCategoryData.image);
        formData.append("_method", "put");
        const response = await categoryService.updateCategory(
          this.editCategoryData.id,
          formData
        );
        this.categories.map(category => {
          if (category.id == response.data.id) {
            // category = response.data;
            for (let key in response.data) {
              category[key] = response.data[key];
            }
          }
        });
        this.hideEditCategoryModal();
        this.flashMessage.success({
          message: "Update Category Successed !!",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Error Message Title",
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    loadMore: async function() {
      try {
        const response = await categoryService.loadMore(this.nextPage);
        if (response.current_page < response.data.last_page) {
          this.moreExist = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.moreExist = false;
        }
        response.data.data.forEach(data => {
          this.categories.push(data);
        });
      } catch (error) {
        this.flashMessage.error({
          title: "Error Message Title",
          message: "Some Error Occurred",
          time: 5000
        });
      }
    }
  }
};
</script>