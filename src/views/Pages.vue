<template>
    <p>{{data.counter}}</p>
    <button @click.prevent="click">click</button>
</template>
<script setup>
import {ref, reactive} from 'vue';

const data = reactive({counter: 0});

function click() {
    data.counter++;
}

// export default {
//     data(){
//         return {
//             counter: 0
//         };
//     },
//     methods: {
//         click() {
//             this.counter++;
//         }
//     }
// }
</script>