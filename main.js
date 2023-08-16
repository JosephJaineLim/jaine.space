
const APPS = [
    {
        name: 'timeline of aviation',
        desc: 'explore the captivating evolution of flight',
        url: 'http://127.0.0.1:8080/timeline-of-aviation.html',
        image: 'photo1.png',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
    {
        name: '',
        desc: '',
        url: '',
        image: 'none',
    },
]


window.addEventListener('load',() => {
    document.getElementById('app').innerHTML = `
        <div class="app__header">
            <h1 id="content-title">jaine.space</h1>
            <p id="content-desc">where learning isn't boring</p>
        </div>
        <div class="app__content">
            <div class="app__content-grid" id="content">
            </div>
        </div>
    `;



    APPS.forEach((el,ind)=>{
        document.getElementById('content').innerHTML += `
        <div 
            class="box" 
            style="
                background-image: url('./assets/${el.image}');
                ${el.image === 'none' ? 'border: solid #efece6 1px': 'border:none'}" 
            onclick="OpenLink('${el.url}')"
            onmouseover="ShowTitle('${el.name}','${el.desc}')"
            onmouseout="ClearTitle()"
        >
        </div>`
    })
});

const OpenLink = (param) => {
    if(param === '') return
    window.open(`${param}`,"_self")
};

const ShowTitle = (x,y) => {
    if(x === '') return
    document.getElementById('content-title').innerHTML = x;
    document.getElementById('content-desc').innerHTML = y;
} 

const ClearTitle = () => {
    document.getElementById('content-title').innerHTML = 'jaine.space';
    document.getElementById('content-desc').innerHTML = "where learning isn't boring";
} 
