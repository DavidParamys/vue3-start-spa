<template>
    <h4>Edit {{page.pageTitle}}</h4>
    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input type="text" class="form-control" v-model="page.pageTitle" />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Content
                    </label>
                    <textarea type="text" class="form-control" rows="5" v-model="page.content"></textarea>

                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text
                    </label>
                    <input type="text" class="form-control" v-model="page.link.text" />
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="page.published">
                        <label class="form-check-label" for="gridCheck1">
                            Published
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-3">
            <button 
                class="btn btn-primary me-2"
                @click.prevent="submit"
            >Edit</button>
            <button class="btn btn-secondary" to="/pages">Cancel</button>
        </div>
    </form>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const pages = inject('$pages')

const {index} = defineProps(['index']);

let page = pages.getSinglePage(index);
function submit() {
    pages.editPage(index, page);
}

</script>