class Clock {
    render() {
        const now = new Date()
        const year = now.getFullYear().toString().padStart(4, '0')
        const month = (now.getMonth() + 1).toString().padStart(2, '0')
        const date = now.getDate().toString().padStart(2, '0')

        const h = now.getHours().toString().padStart(2, '0')
        const m = now.getMinutes().toString().padStart(2, '0')
        const s = now.getSeconds().toString().padStart(2, '0')

        const str = `${year}/${month}/${date} ${h}:${m}:${s}`
        return str
    }
}

module.exports = Clock