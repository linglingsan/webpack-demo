import '../css/news.css'
class News {
    constructor() {
        this.name = "张三"
    }
    read() {
        const arr = [1, 2, 3]
        console.log(arr.map(item => item * 2));
        console.log(`${this.name}---- read`);
    }
}

const n = new News()
n.read()


