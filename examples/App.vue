<template>
  <div id="app">
    <mainSkeleton v-if="!init"></mainSkeleton>
    <div v-else>
      <mainHeader></mainHeader>
      <div class="container" v-if="!isIndex">
        <sideNav class="nav"></sideNav>
        <router-view class="view"></router-view>
      </div>
      <router-view class="page" v-else></router-view>
      <mainFooter v-if="!isIndex"></mainFooter>
    </div>
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
import mainFooter from './components/footer.vue'
import mainSkeleton from './main.skeleton.vue'
export default {
  name: 'app',
  data () {
    return {
      init: false,
      isIndex: true
    }
  },
  watch: {
    
  },
  mounted () {

  },
  components: {
    mainHeader,
    mainFooter,
    mainSkeleton
  }
}
</script>

<style lang="less">
  @import './assets/less/index.less';

</style>
