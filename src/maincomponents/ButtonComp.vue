<template>
    <button class="btn border-0 bg-danger text-white ">{{btnprop}}</button>
</template>
<script >
export default{
    name:'ButtonComp',
    props:{
btnprop:{
    type:String,
     required:true
}
    },
    data(){
        return{

        }
    }
}



</script>