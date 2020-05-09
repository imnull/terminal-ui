const log = require('single-line-log').stdout

class ProgressBar {

    constructor(config = {}) {
        const {
            C0 = '░', C1 = '█',
            BLOCK = 32,
        } = config

        this.C0 = C0
        this.C1 = C1
        this.BLOCK = BLOCK


    }

    render(complete, total) {
        const percent = Math.max(0, Math.min(1, complete / total))
        const c1 = Math.round(percent * this.BLOCK)
        const c0 = this.BLOCK - c1
        const bar = this.C1.repeat(c1) + this.C0.repeat(c0)
        const str = (percent * 100).toFixed(2).padStart(6) + '%' + ' ' + bar + ' ' + `${complete}/${total}`
        return str
    }
}

module.exports = ProgressBar