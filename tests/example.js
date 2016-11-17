const should = require('should')
const sinon = require('sinon')

describe('Example component tests: ', function () {
    describe('Status', function () {
        it('should return status code 200 and message "OK"', function () {
            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }
            
            let Example = require('../components/example/example.js')
            Example = new Example()
            
            Example.status(null, res)
            
            res.status.calledWith(200).should.equal(true, 'Bad status' + res.status.args[0][0])
            res.send.calledWith('OK').should.equal(true, 'Wrong message' + res.send.args[0][0])
        })
    })
})