<template>
  <div class="container">
    <div class="col-sm-9">
      <video width="800" height="500" controls autoplay>
        <source
          :src="`${$store.state.serverPath}/storage/${videos.video}`"
         type="video/mp4" />

        <source 
         :src="`${$store.state.serverPath}/storage/${videos.video}`"
        type="video/ogg" />
      </video>
      <h3 class="title btn btn-danger btn-block">{{ videos.name }}</h3>
    </div>
  </div>
</template>
<script>
import * as videoService from "../services/video_service";
export default {
  props: ["id"],
  data() {
    return {
      videos: ""
    };
  },
  mounted() {
    this.loadVideo();
  },
  methods: {
    loadVideo: async function() {
      try {
        const response = await videoService.getDetail(this.id);
        this.videos = response.data;

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