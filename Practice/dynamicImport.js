https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import

import('/modules/my-module.js')
  .then((module) => {
    // Do something with the module.
});

// if using react / react-native

const placeholder = '' // path to placeholder

const [ src, setSrc ] = useState(placeholder)

const importImg = (path) => {
  import(path).then(src => setSrc(src || placeholder))
}

useEffect(importImg, [])
