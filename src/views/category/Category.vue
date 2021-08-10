<template>
  <div class="d-flex align-items-center">
    <h3 class="text-capitalize">{{category}} Tasks</h3>
    <button class="btn btn-outline-primary ms-auto">
       <i class="bi bi-plus-square me-2"></i>
        <span>Add a Task</span>
    </button>
  </div>
</template>

<script>
export default {
  props:['category']
}
</script>

<style>

</style>