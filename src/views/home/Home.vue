<template>
  <Banner/>
  <div class="todos row mt-5">
    <TaskList v-if="load===2" title="Ongoing Tasks" :parentTasks="tasks" :isCompleted="false" @updated="getTasks" @getSelectedTask="getSelectedTask"/>
    <TaskList v-if="load===2" title="Completed Tasks" :parentTasks="tasks" :isCompleted="true" @updated="getTasks" @getSelectedTask="getSelectedTask"/>
  </div>

  <AddTask @refresh="getTasks"/>
  <ModalDescription :task="selectedTask" @updated="getTasks">
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
import AddTask from './AddTask.vue'
import Banner from './Banner.vue'
import TaskList from './TaskList.vue'
import ModalDescription from '../../components/ModalDescription.vue'

export default {
  components:{ AddTask, Banner, TaskList, ModalDescription },
  data(){
    return{
      load:1,
      tasks: [],
      selectedTask:{},
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
    },
    dateFormat(date){
      const today = new Date().toLocaleDateString()
      if(new Date(date).toLocaleDateString() === today) return 'Today'

      return new Date(date).toLocaleDateString('en-MY', {  year: 'numeric', month: 'long', day: 'numeric' })
    },
    timeFormat(date){
      return new Date(date).toLocaleTimeString('en-MY')
    },
    getSelectedTask(task){
      this.selectedTask = task
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