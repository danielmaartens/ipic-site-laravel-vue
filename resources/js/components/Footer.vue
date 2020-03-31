<template>

    <div id="footer-container">
        <router-link class="left terms-link" to="/terms">Terms of Use</router-link>
        <span class="right">Ipic (Pty) Ltd © 2008-2020 All rights reserved.</span>
    </div>

</template>

<script>

    export default {
        name: "Footer",
        mounted() {

            $('#footer-container').width($('#main-container').width()-10);

        }
    }
</script>

<style scoped lang="scss">

    #footer-container {
        background-color: #050065;
        color: white;
        flex: 0 1 23px;
        /*line-height: 23px;*/
        font-size: 10px;
        padding: 0 5px 0 5px;
        border-top: 1px solid white;
        position: fixed;
        bottom: 0;
        border-bottom: 1px solid white;
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
