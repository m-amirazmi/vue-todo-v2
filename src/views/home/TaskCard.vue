<template>
  <div class="card card-body border-0 rounded-3">
    <div class="header mb-0 pb-3">
      <span class="text-capitalize">{{title}} Tasks</span>
      <router-link :to="{path:path}" class="btn btn-outline-primary ms-auto">More</router-link>
    </div>
  
    <div v-for="task in tasks" :key="task.id" class="each-task d-flex flex-row align-items-center card card-body border-0 shadow mb-3 rounded-3">
      <div class="confirm-icon fs-2 me-3">
        <i class="bi bi-square"></i>
      </div>
      <div class="task-info">
        <p class="task-name mb-0 fs-4">{{task.name}}</p>
        <small class="mb-0">
          <span>Completed by: </span>
          <span class="me-1 fw-bold text-primary">{{dateFormat(task.deadline)}}</span>
          <span class="fw-bold text-primary">| {{timeFormat(task.deadline)}}</span>
        </small>
      </div>
      
      <div class="task-more ms-auto fs-4 text-primary">
        <i class="bi bi-eye"></i>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props:['title', 'path', 'category', 'parentTasks'],
  data(){
    return{
      tasks: []
    }
  },
  created(){
    this.getTasks()
  },
  update(){
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
    getTasks(){
      const filteredTask = this.parentTasks?.filter((task)=> task.category === this.category.id)
      const sortedTask = filteredTask?.sort((t1,t2)=>{
        if(t1.deadline > t2.deadline) return 1
        if(t1.deadline < t2.deadline) return -1
      })
      this.tasks = sortedTask?.slice(0, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.header{
  font-size: 1.6rem;
  display: flex;
  align-items    : center;
}
i{
  cursor: pointer;
}
.confirm-icon{
  color: $primary-opacity;
  &:hover{
    color: $primary;
  }
}
.each-task{
  cursor: pointer;
  &:hover{
    // background: $primary-opacity;
    border: 1px $primary solid !important;
  }
}
</style>