<template>
    <div id="app-container">
        <div class="header">

            <div @click.prevent="navigate('/')" class="header-logo">

                <div class="header-logo-ipic">
                    <img src="/images/logos/nav_logo_ipic.png"/>
                </div>
                <div class="nav-logo-group">
                    <img src="/images/logos/nav_logo_group.png"/>

                </div>
<!--                <div id="menu-icon-wrapper">-->
<!--                <img id="menu-icon" @click.prevent="toggleMenu" src="/images/menu-button.png"/>-->
<!--                </div>-->
            </div>
            <img id="menu-icon" @click.prevent="toggleMenu" src="/images/menu-button.png"/>
<!--            <div class="middle-header-container"></div>-->



        </div>

        <div id="main-container">
            <div id="nav">

                <div class="nav-container">
                    <div class="nav-link-main-container">
                        <div class="nav-link-main">
                            <div @click.prevent="navigate('/overview')">group overview</div>
                        </div>
                    </div>
                    <div class="nav-link-main-container">
                        <div class="nav-link-main">
                            <div @click.prevent="navigate('/investments')">Investments</div>
                        </div>
                        <div class="links-container">
                            <div class="nav-link" @click.prevent="navigate('/properties')">Properties</div>
                            <div class="nav-link" @click.prevent="navigate('/asset-management')">Asset Management</div>
                        </div>
                    </div>
                    <div class="nav-link-main-container">
                        <div class="nav-link-main no-link">
                            IPIC Active
                        </div>
                        <div class="links-container">
                            <div><a class="nav-link" href="http://www.ipicplay.co.za" target="_blank">Ipic Play</a>
                            </div>
                            <div><a class="nav-link" href="https://www.ipicactive.com" target="_blank">Ipic
                                Active/Fitness</a></div>
                            <div><a class="nav-link" href="https://perfecthealth.co.za/soneike" target="_blank">Perfect
                                Health Soneike</a></div>
                            <div><a class="nav-link" href="https://www.kneadbakery.co.za" target="_blank">Knead
                                Bakery</a></div>
                        </div>
                    </div>
                    <div class="nav-link-main-container">
                        <div class="nav-link-main" @click.prevent="navigate('/charity')">
                            Ipic Help
                        </div>
                    </div>
                    <div class="nav-link-main-container">
                        <div class="nav-link-main no-link">
                            <div>Contact Us</div>
                        </div>
                        <div class="links-container">
                            <div class="nav-link" @click.prevent="navigate('/contact')">Get In Touch</div>
                            <div class="nav-link" @click.prevent="navigate('/careers')">Careers</div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="main">
                <Main/>

<!--                <div v-if="mobile">-->
<!--                    <Footer/>-->
<!--                </div>-->

            </div>

        </div>

            <Footer/>

    </div>
</template>

<script>
    // @ is an alias to /src
    import * as VueGoogleMaps from 'vue2-google-maps';
    import Main from '@/components/Main.vue';
    import Footer from '@/components/Footer.vue';

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyD1EUgIzLcg8vL_9acdI9G54M22kQ5YbXQ',
            libraries: 'places,drawing,visualization',
        },
    });

    export default {
        name: 'app',
        components: {
            Main,
            Footer,
        },
        mounted() {

            console.log('App');
            const headerHeight = 48;
            const quoteHeight = 55;

            const width = window.innerWidth;

            $('#menu-icon').css('left', width-45);

            if (width <= 650) {
                this.mobile = true;
                // $('#nav').width(width);
            }

        },
        data() {
            return {
                showMenu: false,
                mobile: false
            }
        },
        methods: {
            toggleMenu() {
                this.showMenu = !this.showMenu;

                const nav = $('#nav');
                const main = $('#main');

                if (this.showMenu) {
                    $('#menu-icon').removeClass('spin-left').addClass('spin-right');
                    main.css('left', '100%');
                    nav.css('right', 0);
                } else {
                    $('#menu-icon').addClass('spin-right').addClass('spin-left');
                    main.css('left', 0);
                    nav.css('right', '100%');
                }
            },

            navigate(path) {
                this.showMenu = false;
                $('#menu-icon').removeClass('spin-left').removeClass('spin-right');
                $('#nav').css('right', '100%');
                $('#main').css('left', 0);
                this.$router.push(path);

                // setTimeout(() => {
                // const mainContainerHeight = $('#content-container').height();
                // $('#app').height(mainContainerHeight+86);
                // }, 100);
            }
        }
    }
</script>

<style lang="scss">


    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    @keyframes spin-right {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(180deg);
        }
    }

    @keyframes spin-left {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-180deg);
        }
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background-color: white;
        height: 100%;
    }

    #app-container {
        margin: 0 auto;
        width: 70%;
        background-color: white;
        padding: 5px;
        height: 100%;

        @media (max-width: 768px) {
                width: 100%;
                padding: 0;
        }
    }

    #main-container {
        display: flex;
        height: 100%;
    }

    #nav {
        // background-image: linear-gradient(-90deg, #040065, #444084);
        background-color:  #040065;
        width: 200px;
        color: white;
        vertical-align: top;
        border-right: 1px solid white;
        font-weight: bold;
    }

    #main {
        display: table-cell;
        flex: 1;
        overflow-y: scroll;
    }

    .content-logo {
        margin-left: 5px;
    }

    a, button {
        text-decoration: none;
        color: inherit;
    }

    img {
        vertical-align: middle;
    }


    #ipic-logo-big {
        img {
            display: block;
            height: 50px;
        }
    }

    #ipic-logo-small {
        display: none;
    }

    .header {
        border-bottom: 3px solid white;
        display: flex;
        /*background-image: linear-gradient(90deg, #040065 40%, #444084);*/
        background-color:  #040065;

        &-logo {
            display: flex;
            flex: 0.1;
            cursor: pointer;
        }
    }

    .middle-header-container {
        flex: 1;
        background-color: #040065;
    }

    .header-logo-ipic {
        display: inline-block;
        border-right: 3px solid white;

        img {
            height: 60px;
        }
    }

    .nav-logo-group {
        display: inline-block;
        flex: 0.95;
        background-color: #040065;

        img {
            height: 28px;
            position: relative;
            left: 16px;
            top: 19px;
        }
    }

    #menu-button {
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        flex: 0.1;
        background-color: #040065;

        img {
            height: 20px;
        }
    }

    #menu-icon {
        display: none;
        height: 20px;
        vertical-align: middle;
        top: 14px;
        right: 14px;
        position: absolute;
    }

    #menu-icon-wrapper {
        height: 100%;
        display: inline-block;
    }

    .spin-right {
        animation: spin-right 300ms linear;
    }

    .spin-left {
        animation: spin-left 300ms linear;
    }

    .open {

    }

    .container {
        padding: 0 20px 20px 20px;
        font-size: 14px;
        background-color: #fbfbfb;
        height: 100%;
        overflow-y: scroll;
    }

    .content-container {
        height: 100%;
        padding: 5px;
        overflow-y: scroll;
    }

    .nav-link-main {
        cursor: pointer;
        width: 91%;
        border-bottom: 1px solid #ede5cb;
        font-size: 16px;
        text-transform: uppercase;
        color: white;
        position: relative;
        left: 5%;
    }

    .no-link {
        cursor: default;
    }

    .nav-container {
        width: 100%;
        margin-top: 20px;
    }

    .nav-link-main a {
        text-decoration: none;
        color: white;

    }

    .nav-link {
        cursor: pointer;
        font-size: 14px;
        color: white !important;
        padding-left: 6%;
        text-decoration: none;
        display: block;
    }

    .nav-link-main-container {
        margin: 20px 0 20px 0;
    }

    .links-container {
        padding-top: 5px;
    }

    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .carousel {
        overflow: hidden;
        min-width: 100%;
        width: 0;
        height: 350px;
    }

    .clear-left {
        clear: left;
    }

    .clear-right {
        clear: right;
    }

    .header-with-icon {
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 7px;
        margin-top: 0;
    }

    .icon {
        vertical-align: middle;
    }

    h1, h2, h3, h4 {
        color: darkblue;
    }

    .headings {
        margin-bottom: 2px;
    }

    .content {
        margin-top: 0;
        font-size: 1em;
    }

    .info-wrapper {
        clear: left;
    }

    .bottom-space {
        height: 10%;
    }

    @media (max-width: 650px) {

        #app-container {
            width: 100%;
            padding: 0;
        }

        #nav {
            position: fixed;
            right: 100%;
            top: 50px;
            width: 100%;
            height: 100%;
            border: none;
            transition: right 0.5s ease-in-out;
        }

        #nav-link-main {
            padding-top: 10px;
        }

        #nav-container {
            margin-top: 30px;
        }

        #main {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            transition: left 500ms ease-in-out;
            top: 51px;
            overflow-y: scroll;
        }

        #app {
            background: none;
            padding: 0;
        }

        .nav-link {
            font-size: 17px;
            font-weight: 500;
        }

        .header-logo-ipic {
            img {
                height: 48px;
            }

        }

        .nav-logo-group {
            img {
                left: 6px;
                height: 22px;
                position: relative;
                top: 3px;

            }
        }

        #menu-icon {
            display: inline-block;
        }

        .container {
            font-size: 13px;
            padding: 0 10px 20px 10px;
            overflow-y: scroll;
        }

        .header {
            position: fixed;
            width: 100%;
            z-index: 1;

            &-logo {
                display: block;
                flex: none;
            }
        }

        .middle-header-container {
            display: none;
        }

        .header-logo-ipic {
            /*border: none;*/
        }
    }

</style>
