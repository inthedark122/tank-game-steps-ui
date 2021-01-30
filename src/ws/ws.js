export const ws = new WebSocket("ws://localhost:8080")
export const tankId = +new Date();

ws.onopen = function (event) {
   console.log(event)
   ws.send(JSON.stringify({
       type: "init",
       tankId: tankId
   }))
 }

ws.onmessage = function (event) {
   console.log(event)
}
