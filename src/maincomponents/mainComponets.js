import FirstPage from '../maincomponents/FirstPage.vue';
import DashBoard from '../maincomponents/DashBoard.vue';
const mainrouter=[
    {
        name:'FirstPage',
        path:'/first',
        component:FirstPage
            },
            {
                name:'DashBoard',
                path:'/DashBoard',
                component:DashBoard
                    }
]
export default mainrouter