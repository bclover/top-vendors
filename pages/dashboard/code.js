import { mapGetters } from 'vuex'
import {GET_VENDOR_DATA} from '@/constants/store';

export default{
  data () {
    return {
      headers: [
        {
          text: 'Vendor',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {text: 'Sales', value: 'sales'},
        {text: 'Growth', value: 'sales-growth'},
        {text: 'Basket Growth', value: 'basket-growth'},
        {text: 'Cost', value: 'cost'},
        {text: 'Rec-vs-Ly', value: 'rec-vs-ly'},
      ],
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      vendors: GET_VENDOR_DATA || []
    })
  }
}
