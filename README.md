# Terminal UI

## PrgressBar

```js
const log = require('single-line-log').stdout
const ProgressBar = require('./src/progress-bar')

const progress = new ProgressBar()
let c = 0, total = 97
const prog = setInterval(() => {
    if(c > total) {
        clearInterval(prog)
        return
    }
    const str = progress.render(c++, total) + '\n'
    log(str)

}, 100)
```

```bash
13.40% ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 13/97
```
