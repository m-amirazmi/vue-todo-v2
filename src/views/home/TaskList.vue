<template>
   <div class="ongoing col-md-6">
      <div class="task">
        <h5>{{title}}</h5>
        <div class="mb-4" v-for="category in categories" :key="category.id">
          <TaskCard :title="category.name" :path="category.name" :category="category" :parentTasks="parentTasks"/>
        </div>
      </div>
    </div>
</template>

<script>
import TaskCard from './TaskCard.vue'

export default {
  components:{ TaskCard },
  props:['title', 'parentTasks'],
  data(){
    return{
      categories: []
    }
  },
  created(){
    const categories = localStorage.getItem('categories')
    this.categories = JSON.parse(categories)
  }
}
</script>

<style lang="scss" scoped>

</style>