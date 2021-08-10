<template>
  <div class="d-flex align-items-center">
    <h3 class="text-capitalize">{{category}} Tasks</h3>
    <button class="btn btn-outline-primary ms-auto">
       <i class="bi bi-plus-square me-2"></i>
        <span>Add a Task</span>
    </button>
  </div>

  <div class="row mt-5">
    <TaskList title="Ongoing Task" :tasks="tasks" :isCompleted="false"/>
    <TaskList title="Completed Task" :tasks="tasks" :isCompleted="true"/>
  </div>
</template>

<script>
import TaskList from './TaskList.vue'

export default {
  props:['category'],
  components:{ TaskList },
  data(){
    return{
      tasks:[],
      stateCategory: ''
    }
  },
  updated(){
    console.log('ada changes', this.tasks)
    if(this.category !== this.stateCategory){
      this.stateCategory = this.category
      this.getTasks()
    }
  },
  created(){
    this.stateCategory = this.category
    this.getTasks()
  },
  methods:{
    async getTasks(){
      const tasks = await JSON.parse(localStorage.getItem('tasks'))
      const categories = await JSON.parse(localStorage.getItem('categories'))
      const getCategory = categories.find((c)=>c.name===this.category)
      const filteredCategory = tasks.filter((t)=>t.category===getCategory.id)
      this.tasks = filteredCategory
    }
  }
}
</script>

<style>

</style>