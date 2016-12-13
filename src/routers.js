import Index from './components/index.vue'
import Detail from './components/detail.vue'
import List from './components/list.vue'
import MomentList from './components/momentlist.vue'
import CommingList from './components/comminglist.vue'
import Compare from './components/compare.vue'
import Login from './components/login.vue'
import Cinema from './components/cinema.vue'
import CinemaDetail from './components/cinemaDetail.vue'
export default [
{path:'/',name:'index',component:Index},
{name:'detail',path:'/detail/:id',component:Detail},
{name:'cinema',path:'/cinema/:id',component:CinemaDetail},
{name:'list',path:'/list',component:List,
	children:[
		{path:'momentlist',component:MomentList},
		{path:'comminglist',component:CommingList}
	]

},
{path:'/cinema',component:Cinema},
{path:'/card',component:Compare},
{path:'/login',component:Login}
]