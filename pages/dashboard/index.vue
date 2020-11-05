<template>
  <v-container>
    <v-row class="fill-height">
      <!-- TOP ROW -->
      <v-row align-content="center" justify="center">
        <!-- LEFT COLUMN -->
        <v-col cols="7" class="mr-3 pa-0">
          <!-- INSTRUCTIONS -->
          <div class="mb-3 text-body-1 font-weight-black accent--text">
            Instructions: Click on a vendor in the list below to view more
            details.
          </div>

          <!-- DATATABLE -->
          <v-card outlined>
            <v-card-title class="text-h6 primary--text font-weight-bold">
              Vendor Overview:
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="vendors"
              :items-per-page="5"
              :search="search"
              class="elevation-1"
              dense
              @click:row="onVendorClicked($event)"
            >
            </v-data-table>
          </v-card>
        </v-col>

        <!-- RIGHT COLUMN -->
        <v-col cols="4" class="mt-7 mx-5 pa-5 rounded-lg details-area">
          <v-row>
            <v-col cols="6">
              <div class="text-h6 primary--text font-weight-bold">
                Vendor Details:
              </div>
            </v-col>
            <v-col cols="6">
              <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on }">
                  <v-btn
                    outlined
                    :disabled="!selectedItem"
                    v-on="on"
                  >
                    <v-icon left>mdi-plus-circle</v-icon>
                    More Details
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">Additional Details for: {{ selectedItemName }}</v-card-title>
                  <v-card-text>Put additional details not shown in here.</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>

          <!-- DETAILS - LEFT -->
          <v-row>
            <v-col cols="6">
              <div class="pr-2 pt-2 secondary--text">Aged Inventory:</div>
              <div class="pr-5 info--text">{{ invAged }}</div>

              <div class="pr-2 pt-2 secondary--text">Inventory Days:</div>
              <div class="pr-5 info--text">{{ invDays }}</div>

              <div class="pr-2 pt-2 secondary--text">Inventory Growth:</div>
              <div class="pr-5 info--text">{{ invGrowth }}</div>

              <div class="pr-2 pt-2 secondary--text">Shrink Retail:</div>
              <div class="pr-5 info--text">{{ shrinkRetail }}</div>
            </v-col>

            <!-- DETAILS - RIGHT -->

            <v-col cols="6">
              <div class="pr-2 pt-2 secondary--text">Damage Cost:</div>
              <div class="pr-5 info--text">{{ dmgCost }}</div>

              <div class="pr-2 pt-2 secondary--text">Damage Rate:</div>
              <div class="pr-5 info--text">{{ dmgRate }}</div>

              <div class="pr-2 pt-2 secondary--text">Damage ALW Rate:</div>
              <div class="pr-5 info--text">{{ dmgAlw }}</div>

              <div class="pr-2 pt-2 secondary--text">Damage Gap:</div>
              <div class="pr-5 info--text">{{ dmgGap }}</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- BOTTOM ROW -->
      <v-row class="text-h6 primary--text font-weight-bold  mx-5">
        <v-col>
          <div>Store - Sales:</div>
          <div id="salesByStore" />
        </v-col>
        <v-col>
          <div>Totals - Growth:</div>
          <div>
            <JSCharting :options="growthOptions" class="total-chart"></JSCharting>
          </div>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<!-- CODE -->
<script src="./code.js" />

<!-- STYLES -->
<style lang="sass" scoped src="./styles.sass"></style>
