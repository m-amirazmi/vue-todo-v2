<template>
  <!-- Modal -->
  <div class="modal fade" id="modalDescription" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalDescriptionLabel">{{ task.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger text-white" @click="handleSubmit" data-bs-dismiss="modal">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['task'],
  methods:{
    handleSubmit(){
      const getTasks = JSON.parse(localStorage.getItem('tasks'))
      const removeTask = getTasks.filter((t)=>t.id!==this.task.id)
      localStorage.setItem('tasks', JSON.stringify(removeTask))
      this.$emit('updated')
    }
  }
}
</script>

<style>

</style>