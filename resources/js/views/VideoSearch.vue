<template>
  <div class="container">
    <br />
    <h3 style="color:blue">Video Result</h3>
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
              <small class="text-muted">Upload by...</small>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["videos"]
};
</script>