import { propOr } from "ramda";
import embed from 'vega-embed'
import { mapGetters } from "vuex";
import salesByStoreChartConfig from '~/charts/bar/sales-by-store-chart.json'
import data from "~/data/vendors.json";
import JSCharting from "jscharting-vue";
import { GET_VENDOR_DATA } from "@/constants/store";

export default {
  components: {
    JSCharting
  },
  data() {
    return {
      dialog: false,
      dmgAlw: "No vendor selected.",
      dmgCost: "No vendor selected.",
      dmgGap: "No vendor selected.",
      dmgRate: "No vendor selected.",
      growthOptions: null,
      headers: [
        {
          text: "Vendor",
          align: "start",
          sortable: true,
          value: "name"
        },
        { text: "Sales", value: "sales" },
        { text: "Growth", value: "sales-growth" },
        { text: "Basket Growth", value: "basket-growth" },
        { text: "Cost", value: "cost" },
        { text: "Rec-vs-Ly", value: "rec-vs-ly" }
      ],
      inStock: "No vendor selected.",
      invAged: "No vendor selected.",
      invDays: "No vendor selected.",
      invGrowth: "No vendor selected.",
      jsonData: propOr("no vendors", "vendors", data),
      name: "totalCharts",
      totalsOptions: null,
      search: "",
      selectedItem: null,
      selectedItemName: "",
      shrinkRetail: "No vendor selected.",
      totals: null,
      def: null,
      trnGrowth: "No vendor selected."
    };
  },

  computed: {
    ...mapGetters({
      vendors: GET_VENDOR_DATA || []
    })
  },

  watch:{
    def(vega){
      if(vega) this.draw()
    }
  },

  async mounted() {
    if (this.vendors) {
      this.getTotals();
      this.createTotalsBarChart();
      this.createDamagesBarChart();
    } else {
      this.vendors = this.jsonData;
    }
  },

  methods: {
    async createTotalsBarChart() {
      await embed('#salesByStore', salesByStoreChartConfig, {actions:false})
    },

    createDamagesBarChart() {
      this.growthOptions = {
        type: "horizontal column",
        series: [
          {
            points: [
              {
                x: "Sales Growth",
                y: this.createValue(this.totals[0], "sales-growth")
              },
              {
                x: "Basket Growth",
                y: this.createValue(this.totals[0], "basket-growth")
              },
              {
                x: "Net Margin",
                y: this.createValue(this.totals[0], "net-margin-growth")
              }
            ]
          }
        ]
      };
    },

    createValue(theTotal, prop) {
      const rawData = propOr(0, prop, theTotal);
      const noDollarSign = rawData.replace(/\$/g, "");
      const noPercent = noDollarSign.replace(/\%/g, "");
      const numbersOnly = noPercent.replace(/,/g, "");
      return Number(numbersOnly);
    },

    async draw(){
      let def = JSON.parse(salesByStoreChartConfig)
      await embed('#storeSales', def, {actions:false})
    },

    getTotals() {
      this.totals = this.vendors.slice(0, 3);
    },

    onVendorClicked(item) {
      this.selectedItem = item;
      this.dmgAlw = propOr("No data", "dmg-alw-rate", this.selectedItem);
      this.dmgCost = propOr("No data", "dmg-cost", this.selectedItem);
      this.dmgGap = propOr("No data", "dmg-gap", this.selectedItem);
      this.dmgRate = propOr("No data", "dmg-rate", this.selectedItem);
      this.inStock = propOr("No data", "in-stock", this.selectedItem);
      this.invAged = propOr("No data", "aged-inv", this.selectedItem);
      this.invDays = propOr("No data", "inv-days", this.selectedItem);
      this.invGrowth = propOr("No data", "inv-growth", this.selectedItem);
      this.selectedItemName = propOr("", "name", this.selectedItem);
      this.shrinkRetail = propOr("No data", "shrink-retail", this.selectedItem);
      this.trnGrowth = propOr("No data", "turn-growth", this.selectedItem);
    }
  }
};

const vlSpec = {
  $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  data: {
    values: [
      {a: 'C', b: 2},
      {a: 'C', b: 7},
      {a: 'C', b: 4},
      {a: 'D', b: 1},
      {a: 'D', b: 2},
      {a: 'D', b: 6},
      {a: 'E', b: 8},
      {a: 'E', b: 4},
      {a: 'E', b: 7}
    ]
  },
  mark: 'bar',
  encoding: {
    y: {field: 'a', type: 'nominal'},
    x: {
      aggregate: 'average',
      field: 'b',
      type: 'quantitative',
      axis: {
        title: 'Average of b'
      }
    }
  }
};
