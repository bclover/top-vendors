import propOr from 'ramda/src/propOr'
import data from '~/data/vendors.json'
import {SET_VENDOR_DATA} from '@/constants/store';

export default{
  data(){
    return{
      jsonData: propOr('no vendors', 'vendors', data)
    }
  },
  mounted() {
    // save the imported vendor JSON into vuex store
    this.$store.dispatch(SET_VENDOR_DATA, this.jsonData)
  }
}
