<template>
<div>
    <form class="form-inline justify-content-center" v-on:submit.prevent="">
            <div class="search">
                <input
                class="form-control "
                type="text"
                @input="onChange"
                v-model="search"
                placeholder="... movie search 🔍" >
            </div>
    </form>
    <div class="flexbox back">
    <MovieItem v-for="movie in moviesResults" :movie="movie" :key="movie.id" ></MovieItem>
    </div>
</div>
</template>

<script>

import MovieItem from '@/components/MovieItem.vue'

export default {
  components: {
    MovieItem
  },
  data () {
    return {
      isOpen: false,
      search: ''
    }
  },
  methods: {
    searchMovie (query) {
      if (query !== '') {
        this.$store.dispatch('searchMovie', query)
        this.isOpen = true
      }
    },
    onChange () {
      this.searchMovie(this.search)
      this.searchStatus()
    },
    onSelected () {
      this.isOpen = false
      this.search = ''
    },
    searchStatus () {
      if (this.search) {
        this.$store.dispatch('actionSearchActive', true)
        if (!this.$store.state.search.length) {
          this.$store.dispatch('actionNullSearch', true)
        } else {
          this.$store.dispatch('actionNullSearch', false)
        }
      } else {
        this.$store.dispatch('actionSearchActive', false)
      }
    }
  },
  computed: {
    moviesResults () {
      return this.$store.state.search
    }
  }
}
</script>

<style scoped>
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
.back {
  background: #f1f1f1 !important;
  margin-top: 20px;
}
</style>
