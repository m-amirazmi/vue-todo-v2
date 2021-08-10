<template>
  <Banner/>
  <div class="todos row mt-5">
    <TaskList v-if="load===2" title="Ongoing Tasks" :parentTasks="tasks"/>
    <div class="completed col-md-6">
      <div>
        <h5>Completed Tasks</h5>
      </div>
    </div>
  </div>

  <AddTask @refresh="getTasks"/>

</template>

<script>
import AddTask from './AddTask.vue'
import Banner from './Banner.vue'
import TaskList from './TaskList.vue'

export default {
  components:{ AddTask, Banner, TaskList },
  data(){
    return{
      load:1,
      tasks: []
    }
  },
  created(){
    this.getTasks()
  },
  methods:{
    async getTasks(){
      console.log('something happens')
      this.load = 1
      const tasks = await localStorage.getItem('tasks')
      this.tasks = JSON.parse(tasks)
      this.load = 2
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_variables.scss';
  .alert{
    p{
      margin: 0;
      font-size: 1.2rem;
    }
  }

</style>