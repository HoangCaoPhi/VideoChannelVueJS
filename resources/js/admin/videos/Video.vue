<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header d-flex">
            <span>
              <i class="fas fa-chart-area"></i>
              Tất cả video
            </span>

            <b-button class="btn btn-danger btn-sm ml-auto" @click="newVideoModal">
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
                <tr v-for="(video, index) in videos" :key="index">
                  <td>{{index + 1 }}</td>
                  <td>{{ video.name }}</td>
                  <td>
                    <img
                      :src="`${$store.state.serverPath}/storage/${video.image}`"
                      :alt="video.name"
                      class="table-image"
                    />
                  </td>
                  <td>
                    <button class="btn btn-primary" v-on:click="editVideo(video)">
                      <span>
                        <i class="fa fa-edit"></i>
                      </span>
                    </button>
                    <button class="btn btn-danger" v-on:click="deleteVideo(video)">
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
    <b-modal ref="newVideo" title="Add New Video" hide-footer>
      <form v-on:submit.prevent="createVideo">
        <div class="form-group">
          <label for="name">Enter Name</label>
          <input id="name" v-model="Data.name" class="form-control" placeholder="Enter Video Name" />
          <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
        </div>
        <div class="form-group">
          <label for="image">
            <span>
              <i class="fas fa-images"></i>
            </span> Enter Image
          </label>
          <br />
          <div v-if="Data.image.name">
            <img src ref="newVideoImageDisplay" class="w-150px" />
          </div>
          <input type="file" v-on:change="attachImage" ref="newVideoImage" id="image" />
          <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
        </div>
        <div class="form-group">
          <label for="video">
            <span>
              <i class="fas fa-file-video"></i>
            </span> Enter Video
          </label>
          <br />
          <input type="file" v-on:change="attachImage" ref="newVideoVideo" id="video" />
          <div class="invalid-feedback" v-if="errors.video">{{ errors.video[0] }}</div>
        </div>
        <hr />
        <div class="text-right">
          <button type="button" class="btn btn-danger" v-on:click="hideNewVideoModal">Cancel</button>
          <button type="submit" class="btn btn-success">
            <span class="fa fa-check"></span>Save
          </button>
        </div>
      </form>
    </b-modal>

    <b-modal ref="editVideo" title="Edit Video" hide-footer>
      <form v-on:submit.prevent="updateVideo">
        <div class="form-group">
          <label for="name">Enter Name</label>
          <input
            id="name"
            v-model="editVideoData.name"
            class="form-control"
            placeholder="Enter Video Name"
          />
          <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
        </div>
        <div class="form-group">
          <div>
            <img
              :src="`${$store.state.serverPath}/storage/${editVideoData.image}`"
              ref="editVideoImageDisplay"
              class="w-150px"
            />
          </div>
          <br />
          <input type="file" v-on:change="editAttachImage" ref="editVideoImage" id="image" />
          <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
        </div>
        <hr />
        <div class="text-right">
          <button type="button" class="btn btn-danger" v-on:click="hideEditVideoModal">Cancel</button>
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
import * as videoService from "../../services/video_service";
import * as store from "../../store";
export default {
  data() {
    return {
      videos: [],
      Data: {
        name: "",
        image: "",
        video: ""
      },
      moreExist: false,
      nextPage: 0,
      editVideoData: {
        name: "",
        image: ""
      },
      errors: {}
    };
  },
  mounted() {
    this.loadVideoProfile();
  },
  methods: {
    loadVideoProfile: async function() {
      try {
            const response = await videoService.loadVideo();
        // console.log(response);
        this.videos = response.data;
        console.log(this.videos);
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
      this.Data.image = this.$refs.newVideoImage.files[0];
      this.Data.video = this.$refs.newVideoVideo.files[0];

      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.$refs.newVideoImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.Data.image);
    },
    editAttachImage() {
      // su dung de doc file
      this.editVideoData.image = this.$refs.editVideoImage.files[0];

      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.$refs.editVideoImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.editVideoData.image);
    },
    hideNewVideoModal() {
      this.$refs["newVideo"].hide();
    },
    hideEditVideoModal() {
      this.$refs["editVideo"].hide();
    },
    editVideoModal() {
      this.$refs["editVideo"].show();
    },
    newVideoModal() {
      this.$refs["newVideo"].show();
    },
    createVideo: async function() {
      let formData = new FormData();
      formData.append("name", this.Data.name);
      formData.append("image", this.Data.image);
      formData.append("video", this.Data.video);
      formData.append("user_id", this.$store.state.profile.id);
      try {
        const response = await videoService.createVideo(formData);
        this.videos.unshift(response.data);
        this.hideNewVideoModal();
        this.flashMessage.success({
          message: "Create Video Successed !!",
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
    deleteVideo: async function(video) {
      if (!window.confirm(`Are you sure you want to delete ${video.name} ?`)) {
        return;
      }
      try {
        await videoService.deleteVideo(video.id);

        this.videos = this.videos.filter(obj => {
          return obj.id != video.id;
        });

        this.loadVideo();

        this.flashMessage.success({
          message: "Delete Video Successed !!",
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
    editVideo(videos) {
      this.editVideoData = { ...videos };
      this.editVideoModal();
    },
    updateVideo: async function() {
      try {
        const formData = new FormData();
        formData.append("name", this.editVideoData.name);
        formData.append("image", this.editVideoData.image);
        formData.append("_method", "put");
        const response = await videoService.updateVideo(
          this.editVideoData.id,
          formData
        );
        this.videos.map(video => {
          if (video.id == response.data.id) {
            // video = response.data;
            for (let key in response.data) {
              video[key] = response.data[key];
            }
          }
        });
        this.hideEditVideoModal();
        this.flashMessage.success({
          message: "Update Video Successed !!",
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
        const response = await videoService.loadMore(this.nextPage);
        if (response.current_page < response.data.last_page) {
          this.moreExist = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.moreExist = false;
        }
        response.data.data.forEach(data => {
          this.videos.push(data);
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