import Index from '.'
class News extends Index{
    constructor() {
        super()
        this.name = "张三"
    }
    read() {
        const arr = [1, 2, 3]
        console.log(arr.map(item => item * 2));
        console.log(`${this.name}---- read`);
    }
}

const n = new News()
n.test()
n.read()


