<template>
   <div class="alert alert-primary d-flex align-items-center">
    <p class="mb-0">You got something new need to be done? Let's add a new task now.</p>
    <button type="button" class="btn btn-light text-primary ms-auto" data-bs-toggle="modal" data-bs-target="#addNew">
      <i class="bi bi-plus-square me-2"></i>
      <span>Add a Task</span>
    </button>
  </div>
</template>

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
