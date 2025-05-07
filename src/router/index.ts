import { createRouter, createWebHashHistory } from 'vue-router'
import Quill from '@/views/vue-quill.vue';
import QuillTable from '@/views/vue-quill-table.vue';
import TinyMCE from '@/views/vue-tinymce.vue';

const routes = [
  { path: '/', component: TinyMCE },
  { path: '/quill', component: Quill },
  { path: '/quill-table', component: QuillTable },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})