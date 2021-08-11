<template>
  <div class="d-flex align-items-center">
    <h3 class="text-capitalize">{{category}} Tasks</h3>
    <button class="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#addNew">
       <i class="bi bi-plus-square me-2"></i>
        <span>Add a Task</span>
    </button>
  </div>

  <div class="row mt-5">
    <TaskList title="Ongoing Task" :tasks="tasks" :isCompleted="false" @selected="getSelectedTask"/>
    <TaskList title="Completed Task" :tasks="tasks" :isCompleted="true" @selected="getSelectedTask"/>
  </div>

  <AddTask @refresh="getTasks" :title="`Add a new ${category} Task`" :parentCategory="category"/>

  <ModalDescription :task="selectedTask" :update="true" @updated="getTasks">
    <template v-slot:content>
      <div>
        <p class="badge fs-5" :class="{'bg-primary':selectedTask.isCompleted, 'bg-secondary':!selectedTask.isCompleted}" >
          {{selectedTask.isCompleted ? 'Completed' : 'Not Complete'}}
        </p>
      </div>
      <div>
        <span>Description:</span>
        <p class="py-3 bg-light px-3 rounded-3 mt-2 border border-primary">{{selectedTask.description}}</p>
        <p>Deadline: {{dateFormat(selectedTask.deadline)}} | {{timeFormat(selectedTask.deadline)}}</p>
      </div>
    </template>
  </ModalDescription>

</template>

<script>
import TaskList from './TaskList.vue'
import AddTask from '../home/AddTask.vue'
import ModalDescription from '../../components/ModalDescription.vue'

export default {
  props:['category'],
  components:{ TaskList, AddTask, ModalDescription },
  data(){
    return{
      tasks:[],
      stateCategory: '',
      selectedTask:{}
    }
  },
  updated(){
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
    },
    getSelectedTask(task){
      this.selectedTask = task
    },
    dateFormat(date){
      const today = new Date().toLocaleDateString()
      if(new Date(date).toLocaleDateString() === today) return 'Today'

      return new Date(date).toLocaleDateString('en-MY', {  year: 'numeric', month: 'long', day: 'numeric' })
    },
    timeFormat(date){
      return new Date(date).toLocaleTimeString('en-MY')
    },
  }
}
</script>

<style>

</style>