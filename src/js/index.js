import '../css/index.css'
import '../fonts/font-awesome.min.css'
import banner from '../images/banner.png'

class Index {
    constructor() {
    }

    render() {
        const divs = document.querySelector('div');
        divs.style.backgroundImage = `url(${banner})`
        divs.style.height = '200px'
    }

    test() {
        console.log(`test`);
    }
}

const page = new Index()
page.render()