<template>
    <h4>Pages</h4>
    <div class="text-end">
            <router-link
            to="/pages/create"
            class="btn btn-primary btn-sm" 
            >New Page</router-link>  
    </div>
    <table class="table table-striped table-hover">
        <thead>
            <th>Title</th>
            <th>Link Text</th>
            <th>Is Published</th>
        </thead>
        <tbody>
            <tr
                v-for="(page, index) in $pages.getAllPages()"
                :key="index"
                @click="goToPage(index)"
            >
                <td>{{ page.pageTitle }}</td>
                <td>{{ page.link.text }}</td>
                <td>{{ page.published? 'Yes' : 'No' }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import { ref, reactive, inject } from 'vue';
import { useRouter } from 'vue-router';

const $pages = inject('$pages');
const router = useRouter();

function goToPage(index) {
    router.push({path: `pages/${index}/edit`});
};

</script>

<style scope>
.table.table-hover {
    cursor: pointer;
}
</style>