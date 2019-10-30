<template>
    <div>
        <img id="contact-image" src="/images/table_mountain.jpg">

        <div class="container">
        <div class="table-container">
        <table class="contact-input-table">
            <tr>
                <td class="align-right">Division:</td>
                <td class="align-left">
                    <select
                        class="select-css"
                        v-model="division"
                    >
                        <option v-for="division in divisions" v-bind:key="`--division-${division.id}`">
                            {{division.name}}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="align-right">I am a ...</td>
                <td class="align-left">
                    <select class="select-css" v-model="capacity" required>
                        <option v-for="capacity in capacities" v-bind:key="`--capacity-${capacity.id}`">
                            {{capacity.name}}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="align-right">Name:</td>
                <td class="align-left">
                    <input type="text" class="session-input" v-model="name"/>
                </td>
            </tr>
            <tr>
                <td class="align-right">Surname:</td>
                <td class="align-left">
                    <input
                        type="text"
                        class="session-input"
                        v-model="surname"
                        required
                    />
                </td>
            </tr>
            <tr>
                <td class="align-right">Phone:</td>
                <td class="align-left">
                    <input
                        type="text"
                        class="session-input"
                        v-model="phone"
                    />
                </td>
            </tr>
            <tr>
                <td class="align-right">Email:</td>
                <td class="align-left">
                    <input
                        type="text"
                        class="session-input"
                        v-model="email"
                    />
                </td>
            </tr>
            <tr>
                <td class="align-right message-label">Message:</td>
                <td class="align-left">
                    <textarea
                        class="message-container"
                        v-model="message"
                    >
                    </textarea>
                </td>
            </tr>
            <tr>
                <td class="align-right message-label"></td>
                <td class="align-left">
                    <div id="recaptcha" class="g-recaptcha"></div>
                        <a id="activate-email" href="#" style="display: none;"></a>
                        <button class="email-button" @click.prevent="createMailtoLink">Mail Us</button>

                </td>
            </tr>
        </table>
        </div>
        </div>


    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "ContactUs",
        mounted() {
            console.log('ContactUs');

            const image = $('#contact-image');
            image.height(image.width()/2);

            const key = this.recaptachaTestCredentials.key;

            let _captchaTries = 0;
            function recaptchaOnload() {
                _captchaTries++;
                if (_captchaTries > 9)
                    return;
                if ($('.g-recaptcha').length > 0) {
                    grecaptcha.render("recaptcha", {
                        sitekey: key,
                        size: 'normal',
                        callback: function() {
                            console.log('recaptcha callback');
                        }
                    });
                    return;
                }
                window.setTimeout(recaptchaOnload, 1000);
            }

            recaptchaOnload();
        },
        data() {
            return {
                email: '',
                division: null,
                capacity: null,
                name: '',
                surname: '',
                phone: '',
                message: '',
                subject: '',
                divisions: [
                    {
                        id: 1,
                        name: 'Ipic Property Investment'
                    },
                    {
                        id: 2,
                        name: 'Ipic Active'
                    },
                    {
                        id: 3,
                        name: 'Ipic Help'
                    },
                    {
                        id: 4,
                        name: 'General Enquiry'
                    },
                ],
                capacities: [
                    {
                        id: 1,
                        name: 'Private Individual'
                    },
                    {
                        id: 2,
                        name: 'Shopping Centre Owner'
                    },
                    {
                        id: 3,
                        name: 'Retailer'
                    },
                    {
                        id: 4,
                        name: 'Service Provider'
                    },
                    {
                        id: 5,
                        name: 'Professional Person'
                    },
                    {
                        id: 6,
                        name: 'Job Applicant'
                    },
                ]
            }
        },
        computed: {
            ...mapState([
                'recaptachaTestCredentials',
            ])
        },
        methods: {
            createMailtoLink(e) {
                const lineBreak = '%0D%0A';

                const subject = `SUPPORT: ${this.division} - ${this.capacity}`;

                let body = 'Dear Ipic Support' + lineBreak.repeat(2);

                body += `My name is ${this.name} and I am a ${this.capacity}.` + lineBreak.repeat(2);

                body += this.message + lineBreak.repeat(2);

                body += 'Regards' + lineBreak.repeat(2);
                body += `${this.name} ${this.surname}` + lineBreak;
                body += `${this.email}` + lineBreak;
                body += `${this.phone}`;

                const el = document.getElementById('activate-email');
                el.href = `mailto:info@ipicgroup.com?subject=${subject}&body=${body}`;
                el.click();
            }
        }
    }
</script>

<style scoped lang="scss">
    $width: 100%;

    img {
        width: 100%;
        height: $width/2;
        padding-top: 15px;
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

    .select-css {
        font-weight: 100;
        display: block;
        font-size: 16px;
        color: #444;
        padding-left: 8px;
        height: 35px;
        width: 300px;

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

    .select-css::-ms-expand {
        display: none;
    }

    .select-css:hover {
        border-color: #888;
    }

    .select-css:focus {
        border-color: #aaa;
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
        color: #222;
        outline: none;
    }

    .select-css option {
        font-weight: normal;
    }

    .session-input {
        width: 300px;
        height: 31px;
        padding-left: 8px;
        border-radius: 5px;
        font-size: 16px;
        border: 1px solid #cccccc;
        color: #444;
    }

    .message-label {
        vertical-align: top;
    }

    .message-container {
        min-width: 300px;
        max-width: 300px;
        font-size: 16px;
        min-height: 90px;
        border-radius: 5px;
        border: 1px solid #cccccc;
        padding: 8px;
        font-weight: 100;
        color: #444;
    }

    .contact-input-table {
        margin: 0 auto;
        padding-top: 20px;
        width: 80%;
    }

    .email-button {
        font-size: 15px;
        width: 300px;
        background-color: #2b981e;
        color: white;
        height: 35px;
        border-radius: 5px;
        margin-top: 5px;
    }

    .table-container {
        margin: 0 auto;
        width: 100%;
    }

    @media (max-width: 650px) {
        .select-css {
            width: 85.5%;
        }

        .session-input {
            width: 85.5%;
        }

        .message-container {
            min-width:  85.5%;
            max-width:  85.5%;
        }

        .email-button {
            width: 85.5%;
        }

        .contact-input-table {
            width: 100%;
        }

        .align-right{
            width: 10%;
        }
    }
</style>
