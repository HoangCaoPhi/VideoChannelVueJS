<template>
  <div class="container">
    <br />
    <div class="row">
      <div class="col-md-3" v-for="(video, index) in videos" :key="index">
        <b-card-group deck>
          <b-card
            :img-src="`${$store.state.serverPath}/storage/${video.image}`"
            img-alt="Image"
            img-top
            img-height="150px"
          >
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-circle"
                  style="width: 50px;
                             height: 50px;"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-text>{{ video.name }}</b-card-text>
              </b-col>
            </b-row>

            <router-link :to="{name:'detail', params:{id: video.id}}" class="stretched-link"></router-link>
           <template v-slot:footer>
                <small class="text-muted">Uploaop</small>
            </template>
          </b-card>
        </b-card-group>
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