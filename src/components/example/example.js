'use strict'

module.exports =  {
  status: (req, res) => {
    return res.status(200).send('ok')
  }
}
