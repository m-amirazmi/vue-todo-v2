<template>
  <ModalAdd title="Add a New Task" @handleSubmit="save">
    <template v-slot:content>
        <div class="mb-3">
          <label for="name" class="form-label">Task Name</label>
          <input type="text" class="form-control" id="name" placeholder="The task name..." v-model="name">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Task Description</label>
          <textarea class="form-control" id="description" rows="3" v-model="description" placeholder="The task description..."></textarea>
        </div>
        <div class="row">
          <div class="col-md-8">
            <div class="mb-3">
              <label for="deadline" class="form-label">Task Deadline</label>
              <input type="datetime-local" class="form-control" id="deadline" v-model="deadline">
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="category" class="form-label">Task Category</label>
              <select class="form-select text-capitalize" id="category" v-model="category">
                <option value="" disabled>Pick A Category</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
              </select>
            </div>
          </div>
        </div>
    </template>
  </ModalAdd>
</template>

<script>
import ModalAdd from '../../components/ModalAdd.vue'

export default {
  components:{ ModalAdd },
  data(){
    return{
      categories:[],
      name:'',
      description:'',
      deadline:'',
      category:'',
    }
  },
  created(){
    const categories = localStorage.getItem('categories')
    this.categories = JSON.parse(categories)
  },
  methods:{
    save(){
      const existingTasks = localStorage.getItem('tasks')
      const task = {
        name: this.name,
        description: this.description,
        deadline: this.deadline,
        category: this.category,
        isCompleted: false
      }
      if(!existingTasks){
        const tasks = []
        task.id = tasks.length + 1
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
      }
      if(existingTasks){
        const tasks = JSON.parse(existingTasks)
        task.id = tasks.length + 1
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
      }
      this.$emit('refresh')  
    },
  }
}
</script>

<style>

</style>