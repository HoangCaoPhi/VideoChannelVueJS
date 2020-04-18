<template>
  <div class="container">
    <br />
    <div class="row">
      <div class="col-md-3" v-for="(video, index) in videos" :key="index">
        <router-link :to="{name:'detail', params:{id: video.id}}" >
          <img
            :src="`${$store.state.serverPath}/storage/${video.image}`"
            :alt="video.name"
            class="img-responsive"
            style="width: 200px"
          />
          <span class="btn">{{ video.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import * as videoService from "../services/video_service";
export default {
  data() {
    return {
      videos: []
    };
  },
  mounted() {
    this.loadVideo();
  },
  methods: {
    loadVideo: async function() {
      try {
        const response = await videoService.loadVideo();
        // console.log(response);
        this.videos = response.data.data;
        // console.log(this.videos);
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