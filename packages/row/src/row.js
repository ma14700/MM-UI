export default {
    name: 'MRow',
  
    componentName: 'MRow',
    
    props: {
    //tag 代表div，也可以设置为其他内容
      tag: {
        type: String,
        default: 'div'
      },
    //gutter代表左右margin
      gutter: Number,
      type: String,
    //设置just代表flex样式
      justify: {
        type: String,
        default: 'start'
      },
      align: {
        type: String,
        default: 'top'
      }
    },
  
    computed: {
      style() {
        var ret = {};
        if (this.gutter) {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }
        return ret;
      }
    },
  
    render(h) {
      return h(this.tag, {
        class: [
          'w-row',
          this.justify !== 'start' ? `is-justify-${this.justify}` : '',
          this.align !== 'top' ? `is-align-${this.align}` : '',
          { 'w-row--flex': this.type === 'flex' }
        ],
        style: this.style
      }, this.$slots.default);
    }
  };
  