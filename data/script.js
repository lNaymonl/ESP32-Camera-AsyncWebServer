let webSocketCameraUrl = "ws://" + window.location.hostname + "/Camera";
let websocketCamera;

let cameraImage = document.querySelector("#cameraImage");

function initCameraWebSocket() {
  websocketCamera = new WebSocket(webSocketCameraUrl);
  websocketCamera.binaryType = "blob";
  websocketCamera.onopen = (event) => {};
  websocketCamera.onclose = (event) => {
    setTimeout(initCameraWebSocket, 2000);
  };

  websocketCamera.onmessage = (event) => {
    cameraImage.src = URL.createObjectURL(event.data);
  };
}

window.onload(initCameraWebSocket());
