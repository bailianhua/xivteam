import { createRouter, createWebHashHistory } from "vue-router";
import Team from '../views/Team.vue';
import Party from '../views/Party.vue';


const routes = [
    { path: '/', component: Team },
    {
        path: '/party/:teamId',
        name: 'Party',
        component: Party,
        props: true

    }
]

const router = createRouter({
    history: createWebHashHistory('/xivteam/'),
    routes,
})

export default router;