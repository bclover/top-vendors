<template>
    <v-col cols="12" class="ma-0 pa-0">
      <v-row align="center">
        <v-col cols="5">
          <div class="text-h3 primary--text text-center text-weight-bold ml-5 pl-5 py-5">
            Welcome to Top Vendors!
          </div>
        </v-col>
        <v-col cols="7">
          <v-row class="ml-5 pl-5" align="center" justify="center">
            <div>
              An application built with vue, nuxt, vuex, ramda, vuetify and jscharting.
            </div>
            <v-col class="ml-5 pl-5">
              <v-btn
                class="mr-5 primary--text"
                outlined
                @click="onViewDashboardClicked()"
              >
                <v-icon left>mdi-plus-circle</v-icon>
                View Dashboard
              </v-btn>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
      <v-row>
        <v-img src="https://www.powrcdn.com/app_images%2Fresizable%2FHomepage-B_ad72c253_1588078449862.png"></v-img>
      </v-row>
    </v-col>
</template>


<!-- CODE -->
<script src="./code.js" />

<!-- STYLES -->
<!--<style lang="sass" scoped src="./styles.sass"></style>-->
