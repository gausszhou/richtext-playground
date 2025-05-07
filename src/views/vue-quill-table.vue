<template>
    <div>QuillTable</div>
    <div id="quill-editor"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Quill, { type QuillOptions } from "quill";
import TableUp, {
    defaultCustomSelect,
    TableAlign,
    TableMenuContextmenu,
    TableResizeBox,
    TableResizeScale,
    TableSelection,
    TableVirtualScrollbar,
} from "quill-table-up";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css"; // 引入 snow.css 文件
import 'quill-table-up/index.css';
import 'quill-table-up/table-creator.css';
// Quill.register({ 'modules/table-up': TableUp }, true);
console.log(TableUp.moduleName);

Quill.register({ [`modules/${TableUp.moduleName}`]: TableUp }, true);

const toolbarOptions = [
    [ // use picker to enable the customSelect option
        { 'table-up': [] }
    ],
    ["clean"], // remove formatting button
];

const options: QuillOptions = {
    debug: "info",
    modules: {
        toolbar: toolbarOptions,
        table: true,
        'table-up': {
            scrollbar: TableVirtualScrollbar,
            align: TableAlign,
            resize: TableResizeBox,
            resizeScale: TableResizeScale,
            customSelect: defaultCustomSelect,
            selection: TableSelection,
            selectionOptions: {
                tableMenu: TableMenuContextmenu,
            }
        }
    },
    placeholder: "Compose an epic...",
    theme: "snow",
};
onMounted(() => {
    const quill = new Quill("#quill-editor", options);
    console.log(quill);
});
</script>

<style lang="scss">
#quill-editor {
    height: 600px;
}
</style>
