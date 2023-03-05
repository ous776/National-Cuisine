import { createRouter, createWebHistory} from 'vue-router'
import CountryList from "../components/CountryList.vue";
import CuisineDetails from "../components/CuisineDetails.vue";

const routes = [
  {
     path: "/",
      component: CountryList 
    },
  { 
    path: "/:country/:cuisine",
    name: 'cuisineDetails',
     component: CuisineDetails,
     props: true
}
];


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router