https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM

let shadow = this.attachShadow({mode: 'open'});

var para = document.createElement('p');
shadow.appendChild(para);
