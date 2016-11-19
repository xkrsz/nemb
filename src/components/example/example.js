export default class {
  status (req, res) {
    res.status(200)
    res.send('OK')
    return true
  }
}