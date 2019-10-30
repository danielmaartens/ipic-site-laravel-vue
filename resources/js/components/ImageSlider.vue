<template>

    <div class="carousel">
        <agile v-if="images" :autoplay-speed="5000" :speed="2500" fade autoplay>
            <div class="slide" v-for="(imageLink, index) in images" :key="`image--${index}`">
                <img class="image" :src="`${getImage ? getImage(imageLink) : `/images/${imageLink}`}`" :alt="`image--${index}`">
            </div>
            <template v-slot:prevButton>
                <img class="chevron-left" height="30px" width="30px" src="/images/chevron-left.svg">
            </template>
            <template v-slot:nextButton>
                <img height="30px" width="30px" src="/images/chevron-right.svg">

            </template>
        </agile>
    </div>



</template>

<script>

    import { VueAgile } from 'vue-agile'

    export default {
        name: 'ImageSlider',
        components: {
            agile: VueAgile,
        },
        props: {
            getImage: Function,
            images: {
                type: Array,
                required: true
            }
        },
        mounted() {
            console.log('Image Slider');
            const agileActions = $('.agile__actions');
            const carousel = $('.carousel');
            const width = carousel.width();
            const height = width/2;

            const image = $('.image');

            carousel.height(height);
            image.height(height);
            agileActions.height(height);
            agileActions.width(width);
        },
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss">

    $cardWidth: 500px;
    $bottomWidth: 502px;
    $carouselHeight: 350px;

    .agile {
        height: $carouselHeight;
    }

        .agile__nav-button {
            background: transparent;
            border: none;
            color: #fff;
            cursor: pointer;
            font-size: 24px;
            height: 100%;
            position: absolute;
            top: 0;
            transition-duration: 0.3s;
            width: 40px;
    }

        .agile__nav-button:hover {
            background-color: rgba(0, 0, 0, .5);
            opacity: 1;
    }

        .agile__nav-button--prev {
            left: 0;
    }

        .agile__nav-button--next {
            right: 0;
    }

        .agile__dots {
            bottom: 10px;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
            margin-bottom: 0;
    }

        .agile__dot {
            margin: 0 1px;
    }

        .agile__dot button {
            background-color: transparent;
            border: 1px solid rgba(#fff, .5);
            border-radius: 50%;
            cursor: pointer;
            display: block;
            height: 10px;
            font-size: 0;
            line-height: 0;
            margin: 0;
            padding: 0;
            transition-duration: 0.3s;
            width: 10px;
    }

        .agile__dot--current, .agile__dot:hover button {
            background-color: #fff;
            border-radius: 50%;
    }

        .agile .slide {
            display: block;
            object-fit: cover;
            width: 100%;
    }

        .carousel {
            overflow: hidden;
            min-width: 100%;
            width: 0;
            height: $carouselHeight;
    }

        .agile__actions {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
    }

        .image {
            width: 100%;
    }

</style>
