import { propOr } from "ramda";
import { mapGetters } from "vuex";
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
      trnGrowth: "No vendor selected."
    };
  },

  computed: {
    ...mapGetters({
      vendors: GET_VENDOR_DATA || []
    })
  },

  mounted() {
    if (this.vendors) {
      this.getTotals();
      this.createTotalsBarChart();
      this.createDamagesBarChart();
    } else {
      this.vendors = this.jsonData;
    }
  },

  methods: {
    createTotalsBarChart() {
      this.totalsOptions = {
        type: "vertical column",
        options: { color: "#00ee00" },
        series: [
          {
            points: [
              {
                x: "Sales",
                y: this.createValue(this.totals[0], "sales")
              },
              {
                x: "Cost",
                y: this.createValue(this.totals[0], "cost")
              },
              {
                x: "Retail Inv",
                y: this.createValue(this.totals[0], "retail-inv")
              },
              {
                x: "Damage",
                y: this.createValue(this.totals[0], "retail-inv")
              }
            ]
          }
        ]
      };
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
