<template>
  <v-col cols="12" class="ma-5 pa-0">
    <v-row align="center">
      <v-col class="mx-5 px-5 pb-0 ">
      <div class="text-h6">
        Click on a vendor in the list below to view more details.
      </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="start">
      <v-col cols="7" class="px-5 mx-5">
        <v-card>
          <v-card-title class="text-h6 primary--text font-weight-bold">
            Vendor Information
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
            :search="search"
            class="elevation-1">
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="4" class="px-5 mx-5">

      </v-col>
    </v-row>
  </v-col>
</template>

<!-- CODE -->
<script src="./code.js" />

<!-- STYLES -->
<style lang="sass" scoped src="./styles.sass"></style>
