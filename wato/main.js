
const CHANCES = [
    {
        event: 'winning in a coin flip',
        percentage: 50.00,
        decimal: 2,
        gif: ''
    },
    {
        event: 'die from a random bullet',
        percentage: 0.012,
        decimal: 4,
        gif: ''
    },
    {
        event: 'getting injured by a toilet',
        percentage: 0.010,
        decimal: 4,
        gif: ''
    },
    {
        event: 'chance of being murdered this year',
        percentage: 0.0049,
        decimal: 5,
        gif: ''
    },
    {
        event: 'find a pearl in an oyster',
        percentage: 0.0083,
        decimal: 5,
        gif: ''
    },
    {
        event: 'die from an aircrash',
        percentage: 0.00048,
        decimal: 6,
        gif: ''
    },
    {
        event: 'get killed by a fireworks',
        percentage: 0.00029,
        decimal: 6,
        gif: ''
    },
    {
        event: 'having a royal flush in poker',
        percentage: 0.00015,
        decimal: 6,
        gif: ''
    },
    {
        event: 'date a supermodel',
        percentage: 0.00011,
        decimal: 6,
        gif: ''
    },
    {
        event: 'get struck by lightning',
        percentage: 0.00010,
        decimal: 6,
        gif: ''
    },
    {
        event: 'become a billionaire',
        percentage: 0.000030,
        decimal: 7,
        gif: ''
    },
    {
        event: 'be a movie star',
        percentage: 0.000067,
        decimal: 7,
        gif: ''
    },
    {
        event: 'attacked by a shark',
        percentage: 0.000086,
        decimal: 7,
        gif: ''
    },
    {
        event: 'meeting your partner in a blind date',
        percentage: 2.89,
        decimal: 2,
        gif: ''
    },
    {
        event: 'a person is right-handed',
        percentage: 90.90,
        decimal: 2,
        gif: ''
    },
    {
        event: 'get kissed in your first date',
        percentage: 52.60,
        decimal: 2,
        gif: ''
    },
    {
        event: 'a person is an only child',
        percentage: 4.78,
        decimal: 2,
        gif: ''
    },
    {
        event: 'chance of dying every year',
        percentage: 0.74,
        decimal: 3,
        gif: ''
    },
    {
        event: 'a person is a vegan/vegetarian',
        percentage: 4.00,
        decimal: 2,
        gif: ''
    },
    {
        event: 'die on your birthday',
        percentage: 14.00,
        decimal: 2,
        gif: ''
    },
].sort((a,b) => b.percentage - a.percentage);

window.addEventListener('load', ()=>{
    document.getElementById('app').innerHTML = 
    `<div class="app__header">
        <h1>What are the odds?</h1>
    </div>
    <div class="app__content">
        <div class="app__content-body">
            <i class="fa-solid fa-arrow-left" onclick="NumberDown()"></i>
            <img src="${CHANCES[0].gif}" alt="pic" id="gif">
            <i class="fa-solid fa-arrow-right" onclick="NumberUp()"></i>
            <h1 id="percentage">${CHANCES[0].percentage.toFixed(2)}%</h1>
        </div>
        <div class="app__content-footer">
            <p id="event">${CHANCES[0].event}</p>
        </div>
    </div>
    <div class="app__footer">
        <h1>Did you learn something?</h1>
        <p>go to <a href='./index.html'>jaine.space</a> for more</p>

        <div class="support">
            <a href="https://www.buymeacoffee.com/josephjainelim">support my coffee addiction</a>
        </div>
    </div>
    `
})




let current = 0;
const NumberUp = () => {
    if(current === CHANCES.length - 1) return
    current++; 

    let a = CHANCES[current-1].percentage;
    let b = CHANCES[current].percentage;
    let c = (a - b) / 200; 

    document.getElementById('event').innerText = `${CHANCES[current].event}`
    document.getElementById('gif').src = ``;
    document.getElementById('gif').src = `${CHANCES[current].gif}`
    
    let i = 0;
    const interval = setInterval(() => {
        if (i >= 200) {
            clearInterval(interval);
            return;
        }
        a -= c; 
        document.getElementById('percentage').innerText = `${a.toFixed(CHANCES[current].decimal)}%`;
        i++;
    }, 1);
}

const NumberDown = () => {
    if(current === 0) return
    current--;

    let a = CHANCES[current].percentage;
    let b = CHANCES[current+1].percentage;
    let c = (a - b) / 200; 
    
    document.getElementById('event').innerText = `${CHANCES[current].event}`
    document.getElementById('gif').src = ``;
    document.getElementById('gif').src = `${CHANCES[current].gif}`
    let i = 0;
    const interval = setInterval(() => {
        if (i === 200) {
            clearInterval(interval);
            return;
        }
        b += c; 
        document.getElementById('percentage').innerText = `${b.toFixed(CHANCES[current].decimal)}%`;
        i++;
    }, 1);
}