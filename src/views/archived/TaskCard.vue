<template>
  <div class="card card-body border-0 shadow mb-3 rounded-3">
    <div>
      <p class="badge bg-secondary mb-2 text-uppercase">{{getCategory().name}}</p>
    </div>
    <div class="d-flex flex-row align-items-center">
      <!-- <div class="confirm-icon fs-2 me-3" @click="updateTask(task)">
        <i v-if="!task.isCompleted" class="bi bi-square"></i>
        <i v-if="task.isCompleted" class="bi bi-check2-square"></i>
      </div> -->
      <div class="task-info">
        <p class="task-name mb-0 fs-4">{{task.name}}</p>
        <small class="mb-0">
          <span>Deadline: </span>
          <span class="me-1 fw-bold text-secondary">{{dateFormat(task.deadline)}}</span>
          <span class="fw-bold text-secondary">| {{timeFormat(task.deadline)}}</span>
        </small>
      </div>
      
      <div class="task-more ms-auto fs-4 text-secondary" data-bs-toggle="modal" data-bs-target="#modalDescription" @click="selectTask(task)">
        <i class="bi bi-eye"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['task', 'categories'],
  methods:{
    dateFormat(date){
      const today = new Date().toLocaleDateString()
      if(new Date(date).toLocaleDateString() === today) return 'Today'

      return new Date(date).toLocaleDateString('en-MY', {  year: 'numeric', month: 'long', day: 'numeric' })
    },
    timeFormat(date){
      return new Date(date).toLocaleTimeString('en-MY')
    },
    selectTask(task){
      this.$emit('selected', task)
    },
    getCategory(){
      const findCategory = this.categories.find((c)=>c.id===this.task.category)
      return findCategory
    }
  }
}
</script>

<style>

</style>