<template>
  <div class="card shadow mt-3" >
    <table class="table table-bordered w-100 mt-5">
      <thead>
        <tr>
          <th scope="col">S.no</th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.name"
              class="form-control"
              placeholder="Search Name"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.email"
              class="form-control"
              placeholder="Search Email"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.idNo"
              class="form-control"
              placeholder="Search Id.no"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.status"
              class="form-control"
              placeholder="Search Status"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.dateOfJoining"
              class="form-control"
              placeholder="Search Date Of Joining"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.mobileNo"
              class="form-control"
              placeholder="Search Mobile No"
            />
          </th>
        </tr>
        <tr class="mt-3">
          <th scope="col">S.no</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Id.No</th>
          <th scope="col">Status</th>
          <th scope="col">Date of Joining</th>
          <th scope="col">Mobile_no</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in filteredEmployees" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.personal_email }}</td>
          <td>{{ employee.employee_number }}</td>
          <td>{{ employee.docstatus }}</td>
          <td>{{ employee.date_of_joining }}</td>
          <td>{{ employee.mobile }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosInstance from '@/shared/interceptors';
import { ApiUrls, Doctypes } from '@/shared/apiUrls';

export default {
  data() {
    return {
      Logout: 'Logout',
      employeeData: [],
      filters: {
        name: '',
        email: '',
        idNo: '',
        status: '',
        dateOfJoining: '',
        mobileNo: '',
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    filteredEmployees() {
      return this.employeeData.filter(employee => {
        return (
          employee.name.toLowerCase().includes(this.filters.name.toLowerCase()) &&
          employee.personal_email.toLowerCase().includes(this.filters.email.toLowerCase()) &&
          employee.employee_number.toString().includes(this.filters.idNo) &&
          // employee.docstatus.toLowerCase().includes(this.filters.status.toLowerCase()) &&
          employee.date_of_joining.includes(this.filters.dateOfJoining) &&
          employee.mobile.includes(this.filters.mobileNo)
        );
      });
    },
  },
  methods: {
    fetchData() {
      let queryParams = { filters: [] };
      queryParams.fields = JSON.stringify(['*']);
      queryParams.limit_page_length = 'none';
      axiosInstance
        .get(ApiUrls.resource + '/' + Doctypes.employee, {
          params: queryParams,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        .then(res => {
          this.employeeData = res.data;
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
.table {
  width: 100% !important;
  border-radius: 10px;
}
</style>
