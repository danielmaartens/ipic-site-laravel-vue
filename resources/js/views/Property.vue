<template>
    <div>
        <div v-if="images && images.length > 0">
            <ImageSlider :images="images"/>
        </div>
        <div class="container">
            <div v-if="propertyDataRequested" class="table__spinner">
                <Spinner/>
                <div class="spinner-text">Loading Data...</div>
            </div>
            <div v-if="propertyDataSuccess" class="clear-left info-wrapper">
                <h3>{{selectedProperty.info.name}}</h3>
                <div id="top-info-box" class="info-box info-box-top right">
                    <div class="address-trading-info">
                        <h4 class="h-trading-margin">Trading Hours</h4>
                        <div>{{selectedProperty.info.trading_hours}}</div>
                        <h4 class="h-address-margin">Address</h4>
                        <div>{{selectedProperty.info.address1}}</div>
                        <div>{{selectedProperty.info.address2}}</div>
                        <div>{{selectedProperty.info.address3}}, {{selectedProperty.info.postcode}}</div>
                        <div>{{selectedProperty.info.region}}</div>
                        <div>South Africa</div>
                        <div v-if="mobile">
                            <h4 class="h-emergency">Emergency Contact</h4>
                            <div><a class="h-emergency-link" :href="`tel:${selectedProperty.info.emergency_number}`">{{selectedProperty.info.emergency_number}}</a>
                            </div>
                        </div>
                    </div>

                    <div class="google-map-container">
                        <GmapMap
                            :options="{
                               zoomControl: true,
                               mapTypeControl: false,
                               scaleControl: false,
                               streetViewControl: false,
                               rotateControl: false,
                               fullscreenControl: true,
                               disableDefaultUi: false
                             }"
                            :center="selectedProperty.info.location"
                            :zoom="15"
                            map-type-id="roadmap"
                            id="google-map"
                        >
                            <GmapMarker
                                :position="google && new google.maps.LatLng(selectedProperty.info.location.lat, selectedProperty.info.location.lng)"
                                :clickable="true"
                            />
                        </GmapMap>
                    </div>

                    <div v-if="!mobile">
                        <h4 class="h-emergency">Emergency Contact</h4>
                        <a class="h-emergency-link" :href="`tel:${selectedProperty.info.emergency_number}`">{{selectedProperty.info.emergency_number}}</a>
                    </div>
                </div>

                <div id="overview"></div>
                <div class="bottom-container">
                    <div class="table">
                        <h2 class="h-tenants">Tenants</h2>
                        <data-table v-if="selectedProperty" :items="selectedProperty.tenants"
                                    :perPage="selectedProperty.tenants.length">
                            <data-column field="name" label="Tenant" width="50%">
                                <template slot-scope="props">
                                    <a rel="nofollow" class="tenant-url" v-if="props.item.url" :href="props.item.url"
                                       target="_blank">{{props.item.name}}</a>
                                    <div v-else>{{props.item.name}}</div>
                                </template>
                            </data-column>
                            <data-column field="shopNumber" label="Shop No" width="25%"/>
                            <data-column field="contactNumber" label="Contact">
                                <template slot-scope="props">
                                    <a class="contact-number" :href="`tel:${props.item.contactNumber}`">{{props.item.contactNumber}}</a>
                                </template>
                            </data-column>
                        </data-table>
                    </div>
                    <div class="info-box info-box-bottom right enquiries">

                        <h2 class="h-enquiries">Enquiries</h2>
                        <p>Please feel free to contact us if you require further information.</p>
                        <div class="enquiry-table-container">
                            <div class="enquiry-input-table">

                                <label for="enquiry-department">Re:</label>
                                <select
                                    id="enquiry-department"
                                    class="enquiry-select-css"
                                    v-model="department"
                                >
                                    <option v-for="department in departments"
                                            v-bind:key="`--division-${department.id}`">
                                        {{department.name}}
                                    </option>
                                </select>

                                <label for="enquiry-name">Name:</label>

                                <input id="enquiry-name" type="text" class="enquiry-input" v-model="name"/>

                                <label for="enquiry-surname">Surname:</label>

                                <input
                                    id="enquiry-surname"
                                    type="text"
                                    class="enquiry-input"
                                    v-model="surname"
                                    required
                                />

                                <label for="enquiry-phone">Phone:</label>

                                <input
                                    id="enquiry-phone"
                                    type="text"
                                    class="enquiry-input"
                                    v-model="phone"
                                />

                                <label for="enquiry-email">Email:</label>
                                <input
                                    id="enquiry-email"
                                    type="email"
                                    class="enquiry-input"
                                    v-model="email"
                                />


                                <textarea
                                    class="enquiry-message-container"
                                    v-model="message"
                                >
                                    </textarea>


                                <div>
                                    <div id="recaptcha" class="g-recaptcha"></div>
                                    <a id="enquiry-activate-email" href="#" style="display: none;"></a>
                                    <button class="enquiry-email-button" @click.prevent="createMailtoLink">Mail Us
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="bottom-space"></div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>

    import {gmapApi} from "vue2-google-maps";
    import {DataTable, DataColumn} from 'vue-teible';
    import {mapActions, mapState} from 'vuex';
    import Spinner from "../components/Spinner";
    import ImageSlider from "../components/ImageSlider";
    import '../css/vueteible.css';

    export default {
        name: "Property",
        components: {
            DataTable,
            DataColumn,
            Spinner,
            ImageSlider
        },
        data() {
            return {
                images: [],
                mobile: false,
                message: null,
                phone: null,
                name: null,
                surname: null,
                email: null,
                department: 1,
                departments: [
                    {
                        id: 1,
                        name: 'Centre Management'
                    },
                    {
                        id: 2,
                        name: 'Letting Enquiries',
                    },
                    {
                        id: 3,
                        name: 'Events &amp; Marketing',
                    },
                    {
                        id: 4,
                        name: 'Security &amp; Cleaning',
                    },
                    {
                        id: 5,
                        name: 'Other',
                    }
                ]
            }
        },
        async mounted() {
            console.log('property');
            const anchor = $('#rc-anchor-alert');
            const width = window.innerWidth;
            if (width <= 650) {
                this.mobile = true;
            }

            const id = this.$route.params.id;
            this.images = this.propertyImages.indexedImages[id];
            await this.getPropertyData(id);

            $('#overview').html(this.selectedProperty.info.overview);

            if (this.mobile) {
                $('#google-map').height($('#top-info-box').height() + 5);
                $('#google-map').width($('#top-info-box').width() * 0.6);
            }

            const key = this.recaptachaTestCredentials.key;
            const size = this.mobile ? 'normal' : 'compact';

            let _captchaTries = 0;

            function recaptchaOnload() {
                _captchaTries++;
                if (_captchaTries > 9)
                    return;
                if ($('.g-recaptcha').length > 0) {
                    grecaptcha.render("recaptcha", {
                        sitekey: key,
                        size: size,
                        callback: function () {
                            console.log('recaptcha callback');
                        }
                    });
                    return;
                }
                window.setTimeout(recaptchaOnload, 1000);
            }

            recaptchaOnload();

            setTimeout(() => {
                $('#rc-anchor-alert').css('display', 'none');
            }, 1000)
        },
        computed: {
            ...mapState([
                'propertyImages',
                'recaptachaTestCredentials',
                'selectedProperty',
                'propertyDataRequested',
                'propertyDataSuccess'
            ]),
            google: gmapApi,
        },
        methods: {
            ...mapActions([
                'getPropertyData'
            ]),
            createMailtoLink(e) {
                const lineBreak = '%0D%0A';

                const subject = `ENQUIRY: ${this.selectedProperty.info.name} - ${this.department}`;

                let body = 'To whom it may concern' + lineBreak.repeat(2);
                body += `My name is ${this.name} and I have a ${this.department} enquiry relating to ${this.selectedProperty.info.name}.` + lineBreak.repeat(2);
                body += `My enquiry is as follows:` + lineBreak.repeat(2);
                body += this.message + lineBreak.repeat(2);
                body += 'Regards' + lineBreak.repeat(2);
                body += `${this.name} ${this.surname}` + lineBreak;
                body += `${this.email}` + lineBreak;
                body += `${this.phone}`;

                const el = document.getElementById('enquiry-activate-email');
                el.href = `mailto:info@ipicgroup.com?subject=${subject}&body=${body}`;
                el.click();
            }
        }
    }
</script>

<style scoped lang="scss">

    #overview {
        margin-top: 20px;
    }

    .table {
        width: 60%;
        font-size: 12px;
        display: inline-block;

    }

    .sk-spinner {
        height: 30px;

        div {
            height: 30px;
        }
    }

    .spinner-text {
        margin-top: 10px;
        text-align: center;
        font-size: 16px;
    }

    .google-map-container {
        padding-top: 10px;
    }

    #google-map {
        width: 100%;
        height: 200px;
    }

    .info-box {
        display: inline-block;
        width: 20%;
        border: 1px solid grey;
        background-color: white;
        padding: 0 5px 5px 5px;
        font-size: 12px;
        border-radius: 10px;


    }

    .bottom-container {
        width: 100%;
        margin: {
            top: 100px;
            bottom: 10px;
        }
    }

    .h {
        &-address-margin {
            margin-bottom: 0;
            margin-top: 5px;
        }

        &-trading-margin {
            margin-top: 5px;
            margin-bottom: 0;
        }

        &-tenants {
            margin-top: 0;
        }

        &-emergency {
            color: #d30707;
            margin-top: 5px;
            margin-bottom: 0;

            &-link {
                text-decoration: underline !important;
                color: #040065 !important;
            }
        }

        &-enquiries {
            margin-top: 5px;
        }

    }

    .contact-number, .tenant-url {
        text-decoration: underline;
        color: #040065;
    }

    input, textarea {
        font-family: inherit;
    }

    textarea {
        resize: vertical;
    }

    .align-left {
        text-align: left;
        padding-left: 5px;
        width: 35%;
    }

    .align-right {
        text-align: right;
        width: 15%;
        font-weight: bold;
    }

    .enquiry-select-css {
        font-weight: 100;
        display: block;
        font-size: 14px;
        color: #444;
        padding-left: 8px;
        height: 30px;
        width: 100%;
        margin-bottom: 3px;
        box-sizing: border-box;
        border: 1px solid #cccccc;
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
        border-radius: 5px;
        appearance: none;
        background-color: #fff;
        background-repeat: no-repeat, repeat;
        background-position: right .7em top 50%, 0 0;
        background-size: .65em auto, 100%;
    }

    .enquiry-select-css::-ms-expand {
        display: none;
    }

    .enquiry-select-css:hover {
        border-color: #888;
    }

    .enquiry-select-css:focus {
        border-color: #aaa;
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
        color: #222;
        outline: none;
    }

    .enquiry-select-css option {
        font-weight: normal;
    }

    .enquiry-input {
        width: 100%;
        height: 30px;
        padding-left: 8px;
        border-radius: 5px;
        font-size: 14px;
        border: 1px solid #cccccc;
        color: #444;
        margin-bottom: 3px;
    }

    .enquiry-message-label {
        vertical-align: top;
    }

    .enquiry-message-container {
        min-width: 100%;
        max-width: 100%;
        font-size: 14px;
        min-height: 90px;
        border-radius: 5px;
        border: 1px solid #cccccc;
        padding: 8px;
        font-weight: 100;
        color: #444;
        margin-top: 10px;
        margin-bottom: 7px;
    }

    .enquiry-input-table {
        margin: 0 auto;
        padding-top: 20px;
        width: 80%;
    }

    .enquiry-email-button {
        font-size: 15px;
        width: 100%;
        background-color: #2b981e;
        color: white;
        height: 35px;
        border-radius: 5px;
        margin-top: 5px;
    }

    .enquiry-table-container {
        margin: 0 auto;
        width: 100%;
    }

    .enquiries {
        font-size: 12px;
        width: 38%;
    }

    #recaptcha {
        width: 100%;
    }

    .bottom-space {
        height: 50px;
    }

    @media (max-width: 650px) {
        .table {
            width: 100%;
            font-size: 10px;
        }

        .datatable__column-icon {
            top: 4px !important;
        }

        .enquiry-message-container {
            min-width: 100%;
            max-width: 100%;
        }

        .email-button {
            width: 90%;
        }

        .enquiry-input-table {
            width: 100%;
        }

        .enquiries {
            width: 100%;
            display: block;
            margin-top: 10px;
        }

        .info-box {
            display: block;
            width: 100%;
            margin-bottom: 10px;

            &-top {
                padding: 0 0 5px 5px;
            }

            &-bottom {
                margin-bottom: 10%;
            }
        }

        .info-wrapper {
            clear: none;
        }

        .address-trading-info {
            float: left;
            width: 40%;
        }

        #google-map {
            width: 60%;
            position: absolute;
            display: inline-block;
            border-radius: 10px !important;
        }

        .google-map-container {
            /*padding-top: 10px;*/
            display: inline;
            /*position: relative;*/
            /*top: 6px;*/
            border-radius: 10px !important;
        }

        .vue-map-container .vue-map {
            border-radius: 10px !important;
        }
    }
</style>
