import { suite, test } from 'mocha-typescript';

interface IExample {
    foo?: string;
    bar?: string;
}

@suite
class ExampleTest {

    private data: IExample;

    public static before() {
        let chai = require("chai");
        chai.should();
    }

    constructor() {
        this.data = {
            foo: "f00",
            bar: "b4r"
        };
    }

    @test("should test example data")
    public example() {
        let data: IExample = {};
        data.foo = "f00";
        data.bar = "b4r";

        data.foo.should.equal(this.data.foo);
        data.bar.should.equal(this.data.bar);
    }
}
