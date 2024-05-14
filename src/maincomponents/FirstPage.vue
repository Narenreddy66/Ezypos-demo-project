<template>
  <nav class="navbar navbar-expand">
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
      <div
        class="collapse navbar-collapse d-flex justify-content-end"
        id="collapsibleNavId"
      >
        <ButtonComp @click="logOut()" :btnprop="Logout"></ButtonComp>
      </div>
    </div>
  </nav>
  <SideBar />
</template>

<script >
import ButtonComp from "./ButtonComp";
import SideBar from "../components/SideBar";
import axiosInstance from "@/shared/interceptors";
import apiUrls from "@/shared/apiUrls";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// import axiosInstance from "../shared/interceptors";
export default {
  components: {
    ButtonComp,
    SideBar,
  },
  data() {
    return {
      Logout: "Logout",
    };
  },
  mounted() {},
  methods: {
    logOut() {
      axiosInstance
        .get(apiUrls.logout)
        .then((res) => {
          console.log(res);
          localStorage.removeItem("user");
          window.location.reload();
          toast.success("Logout Successful", {
            position: "top-right",
          });

          setTimeout(() => {
            this.$router.push({ name: "LoginPage" });
          }, 10000);

          console.log(res);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
};
</script>