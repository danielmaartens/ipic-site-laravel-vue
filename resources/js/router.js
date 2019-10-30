import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import GroupOverview from "@/views/GroupOverview";
import Investments from "@/views/Investments";
import Properties from "@/views/Properties";
import Property from "./views/Property";
import AssetManagement from "./views/AssetManagement";
import Charity from "./views/Charity";
import Careers from "./views/Careers";
import ContactUs from "./views/ContactUs";
import TermsOfUse from "./views/TermsOfUse";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/overview',
      name: 'overview',
      component: GroupOverview,
    },
    {
      path: '/investments',
      name: 'investments',
      component: Investments,
    },
    {
      path: '/properties',
      name: 'properties',
      component: Properties,
    },
    {
      path: '/property/:id',
      name: 'property',
      component: Property,
    },
    {
      path: '/asset-management',
      name: 'asset-management',
      component: AssetManagement,
    },
    {
      path: '/charity',
      name: 'charity',
      component: Charity,
    },
    {
      path: '/careers',
      name: 'careers',
      component: Careers,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs,
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsOfUse,
    }
  ]
})
