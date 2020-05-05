<template>
  <div>
    <b-navbar type="light">
      <b-nav-form v-on:submit.prevent="searchVideo">
        <b-form-input
          class="mr-sm-2"
          placeholder="Search"
          v-model="videoSearch.name"
          id="nameSearch"
        ></b-form-input>
        <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
    </b-navbar>
  </div>
</template>

<script>
import * as videoService from "../services/video_service";
import videoSearch from "../views/VideoSearch";

export default {
  name: "search",
  data() {
    return {
      videoSearch: {
        name: ""
      },
      videos: {}
    };
  },
  methods: {
    searchVideo: async function() {
      try {
        if (this.videoSearch.name == "") {
          this.flashMessage.error({
            message: "Please enter the search results"
          });
        }
        const response = await videoService.getSearchVideo(this.videoSearch);
        this.videos = response.data;
        const videos = this.videos;
        const nameSearch = this.videoSearch.name;
        this.$router.push({
          name: "search",
          params: { nameSearch: nameSearch, videos: videos }
        });
        this.videoSearch.name = "";
      } catch (error) {
        this.videoSearch.name = "";
        this.flashMessage.error({
          title: "Error Message Title",
          message: "Not Found Video",
          time: 5000
        });
      }
    }
  }
};
</script>

