//https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js

//https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js

const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
  const myWorker = new Worker("worker.js");
  
  const handlePost = () => {
    myWorker.postMessage([first.value, second.value]);
	  console.log('Message posted to worker');
  }

	first.onchange = handlePost
  second.onchange = handlePost
  
  const handleMessage = ({ data }) => {
		result.textContent = data;
		console.log('Message received from worker');
	}

	myWorker.onmessage = handleMessage
} else {
	console.log('Your browser doesn\'t support web workers.')
}
