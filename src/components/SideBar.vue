<template>
  <div class="bg-color mt-1">
    <div class="row">
      <div class="col-2">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link text-nowrap active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">DashBoard</button>
    <button class="nav-link text-nowrap" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
      <div>Upload</div>
      </button>
    <button class="nav-link text-nowrap" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Print Settings</button>
    <button class="nav-link text-nowrap" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Pos Settings</button>
  </div>
      </div>
      <div class="col-10">
        <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><DashBoard/></div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><uploads-page></uploads-page></div>
    <div class="tab-pane fade " id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <div class="w-100"><ChartsPage/></div>
      <div><echart-example></echart-example></div>
      <div><charts-example></charts-example></div>
      
      </div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><CurosalPage/></div>
  </div>
      </div>
    </div>
</div>
</template>
<script>
import UploadsPage from '@/maincomponents/UploadsPage.vue';
import DashBoard from '../maincomponents/DashBoard.vue';
import ChartsPage from '@/maincomponents/ChartsPage.vue';
import CurosalPage from '@/maincomponents/CurosalPage.vue';
import EchartExample from '@/maincomponents/EchartExample.vue';
export default {
components:{
  DashBoard,
UploadsPage,ChartsPage,CurosalPage,
EchartExample
}

};
</script>
