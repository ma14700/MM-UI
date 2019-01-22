<template>
    <div>
        <w-alert></w-alert>
    </div>
</template>

<script>
// import WAlert from './alert/src/alert'
import {getImg} from './mixins.js'
export default {
    data(){
        return {

        }
    },
    created() {
        // console.log(WAlert)
    },
    mixins: [getImg],
    components: {
        // WAlert
    }
}
</script>
