<template>
    <div class="home">
        <Header/>
        <ImageSlider :get-image="getImage" :images="propertyImages.all"/>
        <div class="buttons">
            <router-link class="home-button" to="/investments">
                <span class="home-button-title">IPIC Investments</span>
                <p class="home-button-description">Wealth creation and preservation</p>
            </router-link>
            <a class="home-button middle-home-button" href="https://www.ipicactive.com/" target="_blank">
                <span class="home-button-title">IPIC Active</span>
                <p class="home-button-description">Health and fitness clubs, and an in-door family adventure centre</p>
            </a>
            <router-link class="home-button" to="/charity">
                <span class="home-button-title">IPIC Help</span>
                <p class="home-button-description">&quot;Helping others to be and to make heroes...&quot;</p>
            </router-link>
        </div>
        <div class="content-fill"></div>


    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import ImageSlider from "../components/ImageSlider";
    import Header from '@/components/Header.vue';

    export default {
        name: 'home',
        components: {
            ImageSlider,
            Header
        },
        mounted() {

        },
        data() {
            return {}
        },
        computed: {
            ...mapState(['propertyImages'])
        },
        methods: {
            getImage(location) {
                return `/images/${location}`;
            }
        }
    }
</script>

<style lang="scss">

    .home {
        height: 100%;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        color: white;
        border: {
            top: 1px solid white;
            bottom: 1px solid white;
        }

    }

    .home-button {
        align-items: center;
        flex-grow: 1;
        padding: 10px 5px 10px 5px;
        width: 30%;
        text-align: center;
        background-image: linear-gradient(0deg, #040065, #49458F);
        text-decoration: none;
        color: white;

    }

    .middle-home-button {
        border-left: 1px solid white;
        border-right: 1px solid white;
    }

    .home-button-title {
        font-size: 1em;
        font-weight: bold;
    }

    .home-button-description {
        font-style: italic;
        font-size: 0.6em;
        margin: 0;
    }

    .content-fill {
        height: 100%;
        // background-image: linear-gradient(180deg, #040065, #49458F 70%);
        background-color:  #040065;

        @media (max-width: 650px) {
            height: 50%;
        }
    }
</style>
