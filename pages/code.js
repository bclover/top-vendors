
export default {

  mounted() {
    this.socket = this.$nuxtSocket({

      // socket.io-client opts:
      reconnection: false
    })
    this.getDataFromSocketIO()
  },
  methods: {
    getDataFromSocketIO() {
      this.socket.emit('getData', (data) => {
        console.log('data:', data)
      })
    }
  }
}

