<template>
    <div>
        <div class="quote1 header-quote">
            <div class="quote">
                <div>
                    <em>
                        <span class="quote-text">
                            &quot;All sustainable success in life comes from being knowledgeable,
            obtaining wisdom and systematically implementing wise decisions.&quot;
                        </span>
                        <span class="quote-author">Rian Maartens 2008</span>
                    </em>
                </div>
            </div>
        </div>
        <div class="quote2 header-quote">
            <div class="quote">
                <div>
                    <em>
                        <span class="quote-text">
                        &quot;All positive progress depends on your ability to recalibrate what you regard as success, knowledge, wisdom and wise decisions.&quot;
                    </span>
                        <span class="quote-author">Rian Maartens 2019</span>
                    </em>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header",
        mounted() {

            const deactivate = () => {
                setTimeout(function () {
                    $(".quote2").css('display', 'none');
                    $(".quote1").css('display', 'table');
                    activate();
                }, 10000);
            };
            const activate = () => {
                setTimeout(function () {
                    $(".quote2").css('display', 'table');
                    $(".quote1").css('display', 'none');
                    deactivate();
                }, 10000);
            };

            activate();
        }
    }
</script>

<style scoped lang="scss">

    .header-quote {
        background-image: url(/images/header_fade.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 72px;
        display: table;
        width: 100%;
    }

    .quote {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        word-wrap: normal;
        padding: {
            right: 10px;
            left: 10px;
        }

    }

    .quote-author {
        font-size: 12px;
    }

    .quote-text {
        font-size: 12px;
        font-weight: bold;
    }

    .quote1 {
        display: none;
    }

    @media (max-width: 750px) {
        .header-quote {
            height: 80px;
        }

        .quote {
            padding-right: 20px;
            padding-left: 20px;
        }
    }

</style>
