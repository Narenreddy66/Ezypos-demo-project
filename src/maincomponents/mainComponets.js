import FirstPage from "../maincomponents/FirstPage.vue";
import DashBoard from "../maincomponents/DashBoard.vue";
import CurosalPage from "./CurosalPage.vue";
import ChartsPage from "./ChartsPage.vue";
import EchartExample from "./EchartExample.vue";
import ChartsExample from './ChartsExample.vue'

const mainrouter = [
  {
    name: "FirstPage",
    path: "/first",
    component: FirstPage,
  },
  {
    name: "DashBoard",
    path: "/DashBoard",
    component: DashBoard,
  },
  {
    name: "Curosal",
    path: "/Curosal",
    component: CurosalPage,
  },
  {
    name: "ChartsPage",
    path: "/ChartsPage",
    component: ChartsPage,
  },
  {
    path: "/EchartExample",
    component: EchartExample,
  },
  {
    path: "/ChartsExample",
    component: ChartsExample,
  },
];
export default mainrouter;
// const mainrouter=[
//     {
//         name:'FirstPage',
//         path:'/first',
//         component:FirstPage,
//         redirect:'/first/DashBoard',
//         children:[
//             {
//                 name:'DashBoard',
//                 path:'/DashBoard',
//                 component:DashBoard
//                     },
//                     {
//                         name:'upload',
//                         path:'/upload',
//                         component:UploadsPage
//                     }
//         ]
//             },

// ]
