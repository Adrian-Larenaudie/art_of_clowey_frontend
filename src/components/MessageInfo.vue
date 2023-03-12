<template>
<div class="message_info_block">
    <p class="message_info_block_content">Voici un message informatif</p>
</div>
</template>

<script>

</script>

<style scoped>
.message_info_block {
    display: none;
    z-index: 10000;
    position: absolute;
    background-color: rgb(134, 198, 134);
    border: solid 1px rgb(31, 116, 31);
    border-radius: .2rem;
    width: 100%;
    padding: .6rem 1rem;
    top: 0;
    text-align: center;
}
.message_info_block_content {
    font-weight: 600;
}
</style>