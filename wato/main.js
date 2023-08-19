
const CHANCES = [
    {
        event: 'winning in a coin flip',
        percentage: 50,
        decimal: 0,
        gif: 'https://media2.giphy.com/media/Y4cMaANkENnOxDEPe6/giphy.gif?cid=ecf05e47qqnvok3mwisms5u39qy0ruozj2src8orv0lnnb8k&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'predicting the outcome of a die roll',
        percentage: 16.7,
        decimal: 1,
        gif: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWluczQwam11N3QyY3loZmVudXFubmFlMGVsYWo4cDY0NWRlOXVhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H4uFElBB9Nt7zq3RZ9/giphy.gif'
    },
    {
        event: 'falling to your death',
        percentage: 0.8,
        decimal: 2,
        gif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJzZXoxbTFyOTQ1ZTdzcXR1enJzazd0d3d4ZmQwcGNyeXVjeWxuZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/B1FAKSmfWqRA4/giphy.gif'
    },
    {
        event: 'being born with 11 fingers',
        percentage: 0.2,
        decimal: 2,
        gif: 'https://media1.giphy.com/media/148402lxfLRxXa/giphy.gif?cid=ecf05e47cwzf2ammon2o7idz4k22zdyo23qpmvq98rri6247&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'getting hit by a random bullet',
        percentage: 0.03,
        decimal: 3,
        gif: 'https://media1.giphy.com/media/ZQsizWJ3SOUzImzPkE/giphy.gif?cid=ecf05e47e6wr7a9qviea7etna0ipd7ps3qjl72exkj7jtbbu&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'being injured by a toilet',
        percentage: 0.01,
        decimal: 3,
        gif: 'https://media3.giphy.com/media/3ohs4qw8hkPShGeanS/giphy.gif?cid=ecf05e472afiblwucftm6ez1wv3w4696uepe40f34cym6mo2&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'struck by lightning in your lifetime',
        percentage: 0.007,
        decimal: 4,
        gif: 'https://media0.giphy.com/media/3o6Mbr42EN2qXR3cis/giphy.gif?cid=ecf05e47z139iuugac68cfcku0ek4cz5daawri7y9at6fq0f&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'dying in an airplane crash',
        percentage: 0.0005,
        decimal: 5,
        gif: 'https://media1.giphy.com/media/WGqaq4lbMeh1e/giphy.gif?cid=ecf05e47zml3vh3cz2bb42kji9b64lc0u6tra83rl2atsqyu&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'die from a fireworks',
        percentage: 0.0003,
        decimal: 5,
        gif: 'https://media3.giphy.com/media/4TnV4pzLvM7NAx39oG/giphy.gif?cid=ecf05e47ahg711nabjw1jjozrfa9jv559ax6gxhi31pgp58r&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'to be a billionaire',
        percentage: 0.00003,
        decimal: 6,
        gif: 'https://media4.giphy.com/media/h0MTqLyvgG0Ss/giphy.gif?cid=ecf05e472p6gbz52mngzcfg270xdbs4wed01qihquei9uoyq&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'get attacked by a shark',
        percentage: 0.000009,
        decimal: 7,
        gif: 'https://media1.giphy.com/media/jfrpOhemvE4Qkxfo8A/giphy.webp?cid=dda24d50339pch17n2au8npwhvolyh0skiw94caau3thhpty&ep=v1_gifs_gifId&rid=giphy.webp&ct=g,'
    }
];

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
            <h1 id="percentage">${CHANCES[0].percentage}%</h1>
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