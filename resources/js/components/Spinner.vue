<template>
    <div class="hollow-dots-spinner">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</template>

<script>
    export default {
        name: "Spinner"
    }
</script>

<style scoped>
    .hollow-dots-spinner, .hollow-dots-spinner * {
        box-sizing: border-box;
    }

    .hollow-dots-spinner {
        margin-top: 20px;
        height: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .hollow-dots-spinner .dot {
        width: 10px;
        height: 10px;
        margin: 0 calc(10px / 2);
        background-color: #495057;
        /*border: calc(15px / 5) solid #ff1d5e;*/
        border-radius: 50%;
        float: left;
        transform: scale(0);
        animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
    }

    .hollow-dots-spinner .dot:nth-child(1) {
        animation-delay: calc(300ms * 1);
    }

    .hollow-dots-spinner .dot:nth-child(2) {
        animation-delay: calc(300ms * 2);
    }

    .hollow-dots-spinner .dot:nth-child(3) {
        animation-delay: calc(300ms * 3);

    }

    @keyframes hollow-dots-spinner-animation {
        50% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
