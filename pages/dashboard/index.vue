<template>
  <v-container>
    <v-row class="fill-height">
      <v-row class="text-h6 primary--text font-weight-bold">
        <v-col>
          <div>Totals:</div>
          <div><JSCharting :options="totalsOptions" class="total-chart"></JSCharting></div>
        </v-col>
        <v-col>
          <div>Growth:</div>
          <div><JSCharting :options="growthOptions" class="total-chart"></JSCharting></div>
        </v-col>
      </v-row>
      <v-col cols="12" class="mr-5 pa-0">
        <v-row align="center">
          <v-col class="mr-5 px-5 pb-0 ">
            <div class="text-body-1">
              Click on a vendor in the list below to view more details.
            </div>
          </v-col>
        </v-row>
        <v-row align="center" justify="start">
          <v-col cols="7" class="mr-5 px-5">
            <v-card>
              <v-card-title class="text-h6 primary--text font-weight-bold">
                Vendor Overview
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
              >
              </v-data-table>
            </v-card>
          </v-col>
          <v-col cols="4">

          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<!-- CODE -->
<script src="./code.js" />

<!-- STYLES -->
<style lang="sass" scoped src="./styles.sass"></style>
