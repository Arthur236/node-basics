const WS = new WebSocket('ws://localhost:9111');

const displayTitle = (title) => {
  document.querySelector('h3').innerHTML = title;
};

const displayMessage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;

  document.querySelector('div.messages').appendChild(p);
};

WS.onmessage = (payload) => {
  displayMessage(payload.data);
};

WS.onopen = () => {
  displayTitle('Connected To Server');
};

WS.onclose = () => {
  displayTitle('Server Disconnected');
};

document.forms[0].onsubmit = () => {
  const input = document.getElementById('message');

  WS.send(input.value);
};
