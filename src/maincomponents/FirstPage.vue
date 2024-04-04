<template>
   <nav
    class="navbar navbar-expand"
   >
    <div class="container-fluid">
        <a class="navbar-brand text-danger" href="#">EzyPos</a>
        <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end " id="collapsibleNavId">
        
         
            <ButtonComp @click='logOut()' :btnprop='Logout'></ButtonComp>
        </div>
    </div>
   </nav>
   
   
        <SideBar/>
  
   
</template>

<script >
import ButtonComp from './ButtonComp';
import SideBar from '../components/SideBar'
import axiosInstance from '@/shared/interceptors';
import {ApiUrls} from '@/shared/apiUrls';
// import axiosInstance from "../shared/interceptors";
export default{
    components:{
        ButtonComp,SideBar
    },
    data(){
        return{
            Logout:'Logout',
           
        }
    },
    mounted(){
       
    },
    methods:{
      logOut(){
        axiosInstance.get(ApiUrls.logout).then(
            (res)=>{
                localStorage.removeItem('user');
                this.$router.push({ name: 'LoginPage'})
                console.log(res);
            }
        )
      }
    }
}




</script>