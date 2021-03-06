import propOr from "ramda/src/propOr";
import data from "~/static/data/vendors.json";
import { SET_VENDOR_DATA } from "@/constants/store";
import { DASHBOARD } from "~/constants/routes";

export default {
  data() {
    return {
      jsonData: propOr("no vendors", "vendors", data)
    };
  },
  mounted() {
    // save the imported vendor JSON into vuex store
    this.$store.dispatch(SET_VENDOR_DATA, this.jsonData);
  },
  methods: {
    onViewDashboardClicked() {
      this.$router.push(DASHBOARD);
    }
  }
};
