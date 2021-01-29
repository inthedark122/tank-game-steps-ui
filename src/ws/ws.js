export const ws = new WebSocket("ws://localhost:8080")

ws.onopen = function (event) {
   console.log(event)
}

ws.onmessage = function (event) {
   console.log(event)
}
