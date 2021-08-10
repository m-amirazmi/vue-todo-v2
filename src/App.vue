<template>
  <div class="container-fluid row">
    <aside class="sidebar-container col-md-2">
      <div class="sidebar">
        <div class="links">
            <router-link :class="{active: $route.name === 'home'}" :to="{name:'home'}">
              <div class="link">
                  <i class="bi bi-columns-gap"></i>
                  <span>Home</span>
              </div>
            </router-link>
          <div v-for="category in categories" :key="category.id">
            <router-link :to="{name:'category', params: {category:category.name}}">
              <div class="link d-flex align-items-center" :class="{active: $route.params.category === category.name}">
                <i class="bi bi-check2-circle"></i>
                <span>{{category.name}}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </aside>

    <main class="col-md-10">
      <div class="content">
        <div class="links-mobile">
            <router-link class="text-decoration-none text-uppercase" :class="{active: $route.name === 'home'}" :to="{name:'home'}">
              <div class="link">
                  <span>Home</span>
              </div>
            </router-link>
          <div v-for="category in categories" :key="category.id">
            <router-link class="text-decoration-none text-uppercase" :to="{name:'category', params: {category:category.name}}">
              <div class="link d-flex align-items-center" :class="{active: $route.params.category === category.name}">
                <span>{{category.name}}</span>
              </div>
            </router-link>
          </div>
        </div>
      <div class="">
          <router-view/>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  data(){
    return{
      categories:[
        { id:1, name:'personal' },
        { id:2, name:'job' },
        { id:3, name:'groceries' },
      ]
    }
  },
  created(){
    const categories = JSON.stringify(this.categories)
    localStorage.setItem('categories', categories)
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/_variables.scss';
  body{
    background: $gray !important;
  }
  .links-mobile{
    display: none;
  }
  .sidebar{
    position: sticky;
    top: 0;
    height: 100vh;
    background: white;
    padding: 40px 28px;

    .links{
      display: flex;
      flex-direction: column;

      .link{
        padding: 12px;
        margin: 4px;

      }
      .active {
        background: $primary;
        i,span{
          color: white;
        }
        border-radius: $border-radius;
        box-shadow: $box-shadow-sm;
      }

      i{
        padding-right: 12px;
      }
    }

    .links i, .links a{
      text-transform: capitalize;
      text-decoration: none;
      font-size: 1.2rem;
      color: $primary;
    }
  }
  .content{
    padding: 48px 100px;
  }

  @media (max-width: 576px) {
    .sidebar-container{
      display: none;
    }
    .content{
      padding: 10px;
    }
    .container-fluid.row{
      --bs-gutter-x:none;
    }
    .links-mobile{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      margin-bottom: 12px;
      .link{
        padding: 8px;
        margin: 4px;

      }
      .active {
        background: $primary;
        span{
          color: white;
        }
        border-radius: $border-radius;
        box-shadow: $box-shadow-sm;
      }

    }
  }
</style>
