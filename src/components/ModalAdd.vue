<template>
  <!-- Modal -->
  <div class="modal fade" id="addNew" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addNewLabel">{{title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary text-white" @click="handleSubmit" data-bs-dismiss="modal">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['title'],
  methods:{
    handleSubmit(){
      this.$emit('handleSubmit')
    }
  }
}
</script>

<style>

</style>