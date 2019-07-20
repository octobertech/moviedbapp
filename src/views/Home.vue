<template>
<div>

  <h1 class="headtitle">Movie DB App</h1>
  <Search />
  <div v-if="searchActive" class="back">
    <div class="flexbox">
      <div class="flexbox status" v-if="!nullSearch">
        <p>Search results loading...</p>
      </div>
      <div class="flexbox status" v-else>
        <p>Search not found any results, sorry!</p>
      </div>
    </div>
  </div>
  <div v-else >
  <div v-if="isLoading" class="back">
    <div class="flexbox">
      <MovieItem v-for="movie in moviesNowPopular" :movie="movie" :key="movie.id"></MovieItem><br>
    </div>
    <button v-on:click="loadMore" type="button" class="btn btn-primary loadmore">Load More</button>
  </div>
  <div v-else>
    <div class="flexbox">
      <div class="flexitem">
        <p>LOADING...</p>
      </div>
    </div>
  </div>
  </div>

</div>
</template>

<script>
// @ is an alias to /src
import MovieItem from '@/components/MovieItem.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  components: {
    MovieItem,
    Search
  },
  data () {
    return {
    }
  },
  computed: {
    moviesNowPopular () {
      return this.$store.state.moviesNowPopular
    },
    isLoading () {
      return this.$store.state.moviesNowPopular.length
    },
    searchActive () {
      return this.$store.state.searchActive
    },
    nullSearch () {
      return this.$store.state.nullSearch
    }
  },
  created () {
    this.$store.dispatch('getPopularMovies')
  },
  methods: {
    loadMore () {
      this.$store.dispatch('getPopularMovies')
    }
  }
}
</script>

<style scoped>
.headtitle {
 margin-bottom: 30px;
}
.flexbox {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}
.flexitem {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  margin: 10px;
  border-radius: 5px;

}
.loadmore {
  margin: 50px 0;
}
.back {
  background: #f1f1f1 !important;
}
.status {
  padding: 50px 0;
}
</style>
