import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const GET_PROPERTY_DATA = 'GET_PROPERTY_DATA';
const PROPERTY_DATA_REQUESTED = 'PROPERTY_DATA_REQUESTED';
const PROPERTY_DATA_SUCCESS = 'PROPERTY_DATA_SUCCESS';

export default new Vuex.Store({
  state: {
      recaptachaTestCredentials: {
          key: '6Lc3YsAUAAAAALZiKKzuIvLK9wyQQFnqSS9rB0fZ',
        secret: '6Lc3YsAUAAAAAA7hIS-2ev1JbZMvE5-PpofBlklu'
      },
      propertyImages: {
          all: [
              'property_images/aurora/001.png',
              'property_images/aurora/002.png',
              'property_images/aurora/Untitled-1.png',
              'property_images/dieboord/010.png',
              'property_images/dieboord/020.png',
              'property_images/dieboord/030.png',
              'property_images/dieboord/040.png',
              'property_images/habitat/001.png',
              'property_images/habitat/002.png',
              'property_images/habitat/003.png',
              'property_images/habitat/004.png',
              'property_images/heritagehouse/001.png',
              'property_images/heritagehouse/002.png',
              'property_images/hermanus/001.png',
              'property_images/hermanus/002.png',
              'property_images/hermanus/003.png',
              'property_images/hermanus/004.png',
              'property_images/kenridge/001.png',
              'property_images/kenridge/002.png',
              'property_images/kenridge/003.png',
              'property_images/soneike/001.png',
              'property_images/soneike/002.png',
              'property_images/soneike/003.png',
              'property_images/sonstraal/001.png',
              'property_images/sonstraal/002.png',
              'property_images/sonstraal/003.png',
              'property_images/vredenburg/001.png',
              'property_images/vredenburg/002.png',
              'property_images/vredenburg/003.png',
          ],
          indexedImages: {
              1: [
                  'property_images/aurora/001.png',
                  'property_images/aurora/002.png',
                  'property_images/aurora/Untitled-1.png',
              ],
              2: [
                  'property_images/dieboord/010.png',
                  'property_images/dieboord/020.png',
                  'property_images/dieboord/030.png',
                  'property_images/dieboord/040.png',
              ],
              3: [
                  'property_images/soneike/001.png',
                  'property_images/soneike/002.png',
                  'property_images/soneike/003.png',
              ],
              4: [
                  'property_images/hermanus/001.png',
                  'property_images/hermanus/002.png',
                  'property_images/hermanus/003.png',
                  'property_images/hermanus/004.png',
              ],
              5: [
                  'property_images/kenridge/001.png',
                  'property_images/kenridge/002.png',
                  'property_images/kenridge/003.png',
              ],
              6: [
                  'property_images/sonstraal/001.png',
                  'property_images/sonstraal/002.png',
                  'property_images/sonstraal/003.png',
              ],
              7: [
                  'property_images/vredenburg/001.png',
                  'property_images/vredenburg/002.png',
                  'property_images/vredenburg/003.png',
              ],
              8: [
                  'property_images/heritagehouse/001.png',
                  'property_images/heritagehouse/002.png',
              ],
              9: [
                  'property_images/habitat/001.png',
                  'property_images/habitat/002.png',
                  'property_images/habitat/003.png',
                  'property_images/habitat/004.png',
              ]
          }
      },
      selectedProperty: null,
      propertyDataRequested: false,
      propertyDataSuccess: false,
  },
  mutations: {
      [PROPERTY_DATA_REQUESTED](state) {
          state.selectedProperty = null;
          state.propertyDataRequested = true;
          state.propertyDataSuccess = false;
      },
      [PROPERTY_DATA_SUCCESS](state, {data}) {
          const rx = /&ll=(.+)&s/g;
          const latlong = rx.exec(data.info.map_url)[1].split(',');

          data.info.location = {
              lat: Number(latlong[0]),
              lng: Number(latlong[1])
          };

          state.propertyDataRequested = false;
          state.propertyDataSuccess = true;
          state.selectedProperty = data;
      },
  },
  actions: {
      async getPropertyData({commit, state}, id){
          console.log('STORE');
          commit(PROPERTY_DATA_REQUESTED);
          const propertyData = await axios.get(`/api/property?id=${id}`);
          commit(PROPERTY_DATA_SUCCESS, propertyData)
      }

  }
});
