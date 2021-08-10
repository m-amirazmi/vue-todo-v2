<template>
  <div class="ongoing mb-3 col-md-6">
    <div class="task">
      <h5>{{title}}</h5>
       <div class="card card-body border-0 rounded-3">
      
        <div v-for="task in filterIsCompleted()" :key="task.id" class="each-task d-flex flex-row align-items-center card card-body border-0 shadow mb-3 rounded-3">
          <div class="confirm-icon fs-2 me-3" @click="updateTask(task)">
            <i v-if="!task.isCompleted" class="bi bi-square"></i>
            <i v-if="task.isCompleted" class="bi bi-check2-square"></i>
          </div>
          <div class="task-info">
            <p class="task-name mb-0 fs-4">{{task.name}}</p>
            <small class="mb-0">
              <span>Deadline: </span>
              <span class="me-1 fw-bold text-primary">{{dateFormat(task.deadline)}}</span>
              <span class="fw-bold text-primary">| {{timeFormat(task.deadline)}}</span>
            </small>
          </div>
          
          <div class="task-more ms-auto fs-4 text-primary" data-bs-toggle="modal" data-bs-target="#modalDescription" @click="selectTask(task)">
            <i class="bi bi-eye"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['title', 'tasks', 'isCompleted'],
  methods:{
    dateFormat(date){
      const today = new Date().toLocaleDateString()
      if(new Date(date).toLocaleDateString() === today) return 'Today'

      return new Date(date).toLocaleDateString('en-MY', {  year: 'numeric', month: 'long', day: 'numeric' })
    },
    timeFormat(date){
      return new Date(date).toLocaleTimeString('en-MY')
    },
    filterIsCompleted(){
      const filterCompleted = this.tasks?.filter((task)=>task.isCompleted === this.isCompleted)
      const sortedTask = filterCompleted?.sort((t1,t2)=>{
        if(t1.deadline > t2.deadline) return 1
        if(t1.deadline < t2.deadline) return -1
      })
      return sortedTask
    },
    updateTask(task){
      const foundTask = this.tasks.find((t)=>t.id===task.id)
      if(!foundTask.isCompleted) {
        foundTask.isCompleted = true
      }else{
        foundTask.isCompleted = false
      }

      const allTasks = JSON.parse(localStorage.getItem('tasks'))

      const removeTask = allTasks.filter((t)=>t.id!==task.id)
      removeTask.push(foundTask)
      localStorage.setItem('tasks', JSON.stringify(removeTask))
    },
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.confirm-icon, .task-more i{
  color: $primary-opacity;
  &:hover{
    color: $primary;
  }
}
</style>