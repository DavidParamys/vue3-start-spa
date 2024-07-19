import {createRouter, createWebHashHistory} from 'vue-router'
import PageViewer from './components/PageViewer.vue'
import CreatePage from './components/CreatePage.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:index?',
            name: 'Home',
            component: PageViewer
        },
        {
            path: '/create',
            name: 'Create',
            component: CreatePage
        }
    ]
})

export default router