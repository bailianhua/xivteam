import { createRouter, createWebHistory } from "vue-router";

import About from '../views/About.vue';
import Team from '../views/Team.vue';
import Party from '../views/Party.vue';


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Team },
    { path: '/about', component: About },
    {
        path: '/party/:teamid',
        name: 'Party',
        component: Party,
        props: true

    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory('/xivteam/'),
    routes,
})

export default router;