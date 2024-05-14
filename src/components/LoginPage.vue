<template>
  <div class="d-flex justify-content-center align-items-center  bg-color1">
    <div class="card shadow w-25 p-2">
      <Form @submit="submitForm" :validation-schema="schema">
        <div class="mb-3">
          <label for="" class="form-label">Name:</label>
          <Field
            type="text"
            class="form-control"
            name="usr"
            id=""
            aria-describedby="emailHelpId"
            placeholder="name enter"
          />
          <ErrorMessage class="text-danger" name="usr" />
        </div>
        <!-- <div class="mb-3">
                    <label for="" class="form-label">Email</label>
                    <Field type="text" class="form-control" name="Email" id="" placeholder="" />
                    <ErrorMessage class="text-danger" name='Email' />
                </div> -->
        <div class="mb-3">
          <label for="" class="form-label">Password:</label>
          <Field
            type="password"
            class="form-control"
            name="pwd"
            id=""
            placeholder=""
          />
          <ErrorMessage class="text-danger" name="pwd" />
        </div>

        <button class="btn rounded-2 btn-danger">Submit</button>
      </Form>
    </div>
  </div>
</template>
<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import axiosInstance from "../shared/interceptors";

import * as yup from "yup";

import { useRouter } from "vue-router";
import  { ApiUrls } from "@/shared/apiUrls";
const router = useRouter();

const schema = yup.object({
  usr: yup.string().required().min(5),
  pwd: yup.string().required().min(3),
});

function submitForm(values) {
  axiosInstance
    .post(ApiUrls.login, values)
    .then((res) => {
      console.log(res);
      localStorage.setItem("user", JSON.stringify(values));
    
      toast.success("Login Successful", {
              position: "top-right",
            });
            setTimeout(() => {
              router.push({  name: "FirstPage"});
            }, 1000);
     
    }).catch((error)=>{
      console.error(error.message);
    })

  // if (response) {
  //     this.$router.push({ name: 'InterceptorsPage' });
}
</script>