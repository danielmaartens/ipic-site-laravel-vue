<template>

    <div class="footer-container">
        <router-link class="left terms-link" to="/terms">Terms of Use</router-link>
        <span class="right">Ipic (Pty) Ltd © 2008-2020 All rights reserved.</span>
    </div>

</template>

<script>

    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">

    .footer-container {
        background-color: #050065;
        color: white;
        height: 20px;
        line-height: 20px;
        font-size: 10px;
        padding: 0px 5px 0 5px;
        border-top: 1px solid white;
    }

    .terms-link {
        cursor: pointer;
    }

    @media (max-width: 650px) {
        .footer-container {
            position: fixed;
            bottom: 0;
            width: 98vw;
        }
    }
</style>
