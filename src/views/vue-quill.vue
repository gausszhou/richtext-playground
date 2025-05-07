<template>
    <div>Quill</div>
    <div id="quill-editor"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Quill, { type QuillOptions } from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css"; // 引入 snow.css 文件

const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["table", "clean"], // remove formatting button
];

const options: QuillOptions = {
    debug: "info",
    modules: {
        toolbar: toolbarOptions,
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
