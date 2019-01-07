<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text  border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}

          </span>

        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" >
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item  border-1px">
              <div class="icon">
                <img :src="food.icon" alt="" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="food-number">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="nowPrice">￥{{food.price}}</span>
                  <span  class="oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>

            </li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 /* eslint-disable*/
  import axios from 'axios'
  import BScroll from 'better-scroll'
export default{

    props:{
        seller:{
           type:Object
        }
    },
  data(){
        return{
            goods:[],
            listHeight:[],
            scrollY: 0
        }
  },
  created(){
        this.classMap=['decrease', 'discount', 'special', 'invoice', 'guarantee']
        axios.get('/api/goods').then((res)=>{
            this.goods=res.data.data;
            this.$nextTick(()=>{
              this._initScroll();
              this._calculaHeight();
            })
          console.log(this.$refs.menuWrapper)
        })

  },
  methods:{
      _initScroll(){
          this.meunScroll=new BScroll(this.$refs.menuWrapper,{});
          this.foodsScroll=new BScroll(this.$refs.foodsWrapper,{});
    },
    _calculaHeight(){

    }

  }
}
</script>