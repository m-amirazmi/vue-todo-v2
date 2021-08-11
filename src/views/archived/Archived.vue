<template>
  <Banner text="This is archived section where all your deleted task shows here." color="warning"/>
  <h5 class="mt-5">Archived Tasks</h5>

  <div class="tasks row">
    <div class="task-container col-md-6" v-for="task in archivedTasks" :key="task.id">
      <TaskCard :task="task" :categories="categories" @selected="selected"/>
    </div>
  </div>

  <ModalDescription :task="selectedTask" :update="false">
    <template v-slot:content>
      <div>
        <p class="badge fs-5 bg-secondary" >
          {{selectedTask.isArchived && 'Archived'}}
        </p>
      </div>
      <div>
        <span>Description:</span>
        <p class="py-3 bg-light px-3 rounded-3 mt-2 border border-primary">{{selectedTask.description}}</p>
        <p class="mb-1">Deadline: {{dateFormat(selectedTask.deadline)}} | {{timeFormat(selectedTask.deadline)}}</p>
        <p class="mb-1">Archived: {{dateFormat(selectedTask.timestampArchived)}} | {{timeFormat(selectedTask.timestampArchived)}}</p>
      </div>
    </template>
  </ModalDescription>

</template>

<script>
import Banner from '../home/Banner.vue'
import TaskCard from '../archived/TaskCard.vue'
import ModalDescription from '../../components/ModalDescription.vue'

export default {
  components:{ Banner, TaskCard, ModalDescription },
  data(){
    return{
      categories:[],
      archivedTasks:[],
      selectedTask:{}
    }
  },
  created(){
    this.getArchivedTasks()
    this.getCategories()
  },
  methods:{
    dateFormat(date){
      const today = new Date().toLocaleDateString()
      if(new Date(date).toLocaleDateString() === today) return 'Today'

      return new Date(date).toLocaleDateString('en-MY', {  year: 'numeric', month: 'long', day: 'numeric' })
    },
    timeFormat(date){
      return new Date(date).toLocaleTimeString('en-MY')
    },
    getArchivedTasks(){
      const archivedTasks = JSON.parse(localStorage.getItem('archived'))
      this.archivedTasks = archivedTasks
    },
    getCategories(){
      const categories = JSON.parse(localStorage.getItem('categories'))
      this.categories = categories
    },
    selected(task){
      this.selectedTask = task
    }
  }
}
</script>

<style>

</style>