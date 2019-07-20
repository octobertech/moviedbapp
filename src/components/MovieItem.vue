<template>

    <div class="flexitem">
      <div class="fleximg">
        <router-link :to="'/movie/' + movie.id">
          <img :src="getPoster()" width="250" height="auto" class="imgposter"/>
        </router-link>
      </div>
      <div class="flexinfo">
        <router-link :to="'/movie/' + movie.id">
          <p class="movietitle">{{movie.original_title}}</p>
        </router-link>
        <p class="moviedesc">{{movie.overview }}</p>
        <router-link :to="'/movie/' + movie.id">More info</router-link>
      </div>
    </div>

</template>
<script>
export default {
  name: 'MovieItem',

  props: {
    movie: Object
  },
  methods: {
    getPoster () {
      return 'https://image.tmdb.org/t/p/original/' + this.movie.poster_path
    }
  }

}
</script>
<style scoped>

.flexitem {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  margin: 10px;
  border-radius: 5px;

}
.fleximg {
  flex:1;
  width: 250px;
  margin: 0;
  padding: 0;
}
.imgposter {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.flexinfo {
  flex: 1;
  width: 300px;
  padding: 20px;

}
.movietitle {
  font-size: 1.6em;
  color: #000;
}
</style>
