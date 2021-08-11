<template>
   <div class="alert d-flex align-items-center" :class="`alert-${color}`">
    <p class="mb-0">{{text}}</p>
    <button v-if="showAddBtn" type="button" class="btn btn-light text-primary ms-auto" data-bs-toggle="modal" data-bs-target="#addNew">
      <i class="bi bi-plus-square me-2"></i>
      <span>Add a Task</span>
    </button>
  </div>
</template>

<script>
export default {
  props:['text', 'showAddBtn', 'color']
}
</script>

<style lang="scss" scoped>
@media (max-width: 576px) {
  .d-flex{
    flex-direction: column;
  }
  .ms-auto{
    margin-left: 0 !important;
    margin-top: 12px;
  }
  p{
    text-align: center;
  }
}
</style>
