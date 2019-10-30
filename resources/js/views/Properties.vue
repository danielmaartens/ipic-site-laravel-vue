<template>
    <div class="container clear-left">
        <img class="right content-logo" src="images/logos/ipic_properties.gif">
        <h2 class="heading">Properties</h2>
        <h3 class="heading">Vision</h3>
        <p class="content">Dedicated to provide friendly, convenient market places where the community prefer to connect.</p>
        <h3 class="heading">Mission</h3>
        <p class="content">Actively manage, enhance and develop shopping centres to provide friendly convenient market places.</p>
        <p class="content"><b>Ipic Properties is the leading private investor in neighbourhood shopping centres in the Western Cape.</b></p>
        <div>
            <a href="http://www.ipicshopping.co.za/" target="_blank">
                <h3 class="header-with-icon">Ipic Shopping Centres</h3>
                <img class="web-link-icon" src="/images/weblink.png">
            </a>
        </div>
        <div class="property-links">
            <router-link to="/property/1">Ipic Shopping Centre Aurora</router-link>
            <br>
            <router-link to="/property/2">Ipic Shopping Centre Die Boord</router-link>
            <br>
            <router-link to="/property/5">Ipic Shopping Centre Hermanus</router-link>
            <br>
            <router-link to="/property/6">Ipic Shopping Centre Kenridge</router-link>
            <br>
            <router-link to="/property/7">Ipic Shopping Centre Soneike</router-link>
            <br>
            <router-link to="/property/8">Ipic Shopping Centre Sonstraal</router-link>
            <br>
            <router-link to="/property/9">Ipic Shopping Centre Vredenburg</router-link>
            <br>
            <router-link to="/property/3">Habitat Centre @ the mall</router-link>
            <br>
        </div>

        <h3 class="heading">Other Properties</h3>
        <div class="property-links">
            <router-link to="/property/4">Heritage House Office Building</router-link>
            <br>
        </div>

        <h3 class="heading">A Clear Focus</h3>
        <p>The Group has a clear focus on providing high quality neighbourhood shopping centres in or near prime residential areas, thereby servicing the everyday needs of the local community. Its long-term goal is to actively invest in diverse property-related income streams and development opportunities across the globe.</p>

        <h3 class="heading">A Value Creation approach</h3>
        <p class="content">Ipic Properties aims to maximise shareholder value and return on investment through creative acquisitions, proactive management, and a high level of expertise in managing minor and major development or refurbishment projects.
        </p>
        <p class="content">Ipic Properties’ investment strategy focuses on neighbourhood and community centres located in first class markets. As at September 2019 the Group has 8 shopping centres and one office building totalling 60 581,4 m² of Gross Lettable Area. Due to their high profile and customer traffic levels (around 8.8 million visits per year at seven centres), these shopping centres have become extremely attractive to top South African national and regional retail chains.</p>
        <p>The Group’s employees work towards a common target: compounding wealth through growth in Net Operating Income.</p>

        <h3 class="heading">Our Values</h3>
        <ul>
            <li>Commitment, responsiveness and initiative</li>
            <li>Creativity and innovation</li>
            <li>A customer-focused approach</li>
            <li>Pooling of cross-functional skills and the ability to work in project mode</li>
        </ul>

        <h3 class="heading">Our main fields of action</h3>
        <ul>
            <li>Providing the best services to our clients</li>
            <li>Optimizing the market positioning of our properties</li>
        </ul>

        <h3 class="heading">A Call to Action</h3>
        <h4 class="heading">Customers of Ipic Shopping Centres</h4>
        <p class="content">In an effort to provide you with a shopping environment that suits you, we would appreciate your input in terms of what you would like us to implement at our centres in order to improve your shopping trip. Besides the physical appearance of the building we welcome your ideas about the tenant offering, the parking facility, as well as the cleaning and security services.</p>
        <h4 class="heading">Leasing Brokers</h4>
        <p class="content">Register as a broker and earn additional income by placing appropriate tenants in our shopping centres.</p>
        <h4 class="heading">Retailers</h4>
        <p class="content">Expand your retail footprint with a shop at one of our shopping centres.</p>
        <h4 class="heading">Shopping Centre Owners</h4>
        <p class="content">Looking to sell your shopping centre? Ipic Properties welcomes your potential business. Ipic Properties will enter negotiations with owners of retail centres which achieve a Net Operating Income of at least R12m per annum.</p>
        <h4 class="heading">Commercial Property Brokers</h4>
        <p class="content">Register as a broker and earn commission when we purchase one of your client’s properties. Ipic Properties will enter negotiations with owners of retail centres which achieve a Net Operating Income of at least R12m per annum.</p>

    </div>
</template>

<script>
    export default {
        name: "Properties"
    }
</script>

<style scoped lang="scss">
    .property-links {
        color: darkblue;
        a {
            text-decoration: underline;
        }
    }

    .heading {
        margin-bottom: 0;
    }

    .content {
        margin-top: 0;
    }

    .separation-dots {
        text-align: center;
    }

    .dot {
        height: 5px;
        margin: {
            right: 2px;
            left: 2px;
        }
    }

    .web-link-icon {
        height: 20px;
    }

    @media (max-width: 650px) {
        .web-link-icon {
            height: 15px;
        }

        .property-links {
            font-size: 14px;
        }
    }
</style>
