const log = require('single-line-log').stdout;

const ProgressBar = require('./src/progress-bar')
const Clock = require('./src/clock')

const progress = new ProgressBar()
const clock = new Clock()


let c = 0
let total = 97

const prog = setInterval(() => {
    if(c > total) {
        clearInterval(prog)
        return
    }
    const str = progress.render(c++, total)
    + '\n'
    + '\n'
    + clock.render()
    + '\n'
    + '\n'

    log(str)
}, 100)