<template>
    <nav 
        :class="[`navbar-${theme}`, `bg-${theme}`, `navbar`, `navbar-expand-lg`]"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <navbar-link 
                    v-for="(page, index) in publishedPages" class="nav-item" :key="index"
                    :page="page"
                    :index="index"
                ></navbar-link>

                <li>
                    <router-link
                    to="/pages"
                    class="nav-link" 
                    active-class="active"
                    aria-current="page" 
                    >Pages</router-link>  
                </li>

            </ul>
            <form class="d-flex">
                <button 
                    class="btn btn-primary" 
                    @click.prevent="changeTheme()"
                >Toggle Theme
                </button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';

export default {
    components:{
        NavbarLink
    },
    inject: ['$pages', '$bus'],
    data() {
        return {
            pages: [],
            theme: 'light',
        }
    },
    created(){
        this.getThemeSetting();

        this.pages = this.$pages.getAllPages();

        this.$bus.$on('page-updated', () => {
            this.pages = [...this.$pages.getAllPages()];
        });
    },
    computed:{
        publishedPages() {
            if (!Array.isArray(this.pages)) {
                return [];
            }
            return this.pages.filter(p => p.published);
        }
    },
    methods: {
        changeTheme() {
            if (this.theme == 'light') {
                this.theme = 'dark';
            }
            else {
                this.theme = 'light';
            }
            this.storeThemeSetting();
        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme');
            if (theme) {
                this.theme = theme;
            }
        }
    }
}
</script>


