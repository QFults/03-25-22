module.exports = {
  format_time: str => {
    const date = new Date(str)
    return date.toLocaleTimeString()
  },
  format_date: str => {
    const date = new Date(str)
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }
}