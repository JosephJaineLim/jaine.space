
const CHANCES = [
    {
        event: 'win in a coin flip',
        percentage: 50.00,
        decimal: 2,
        gif: 'https://media1.giphy.com/media/f3Gbeer73m3JV7bwEz/giphy.gif?cid=ecf05e47wazihn7oyuvhgctium5cqfsfrievdwhujsjwcr5d&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'die from a random bullet',
        percentage: 0.012,
        decimal: 4,
        gif: 'https://media1.giphy.com/media/dqKDx0VUGKgGA/giphy.gif?cid=ecf05e47gosmnkghta38567651xgcsgn35ev2xoewkj234u6&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'get injured by a toilet',
        percentage: 0.010,
        decimal: 4,
        gif: 'https://media3.giphy.com/media/3ohs4qw8hkPShGeanS/giphy.gif?cid=ecf05e47nhdmf3erq4zorob885yo8iwsxovopq6h7jg0cikn&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'your chance of being murdered this year',
        percentage: 0.0049,
        decimal: 5,
        gif: 'https://media1.giphy.com/media/Wr2747CnxwBSqyK6xt/giphy.gif?cid=ecf05e47j9vtnwol1mvzwm1sij0i3ixnjmeoz6vqatq8js5o&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'to find a pearl in an oyster',
        percentage: 0.0083,
        decimal: 5,
        gif: 'https://media1.giphy.com/media/Ckuv6OR6UuQz2Gipqk/giphy.gif?cid=ecf05e47tagk8adrx5i8v12zwc9yl2t918b2k70wtodi836g&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'die from an airplane crash',
        percentage: 0.00048,
        decimal: 6,
        gif: 'https://media3.giphy.com/media/A5cMONNFFwPgA/giphy.gif?cid=ecf05e47gzjo87zofnp557dpwnhshphxu1u7u0beuyijozng&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'get killed by a fireworks',
        percentage: 0.00029,
        decimal: 6,
        gif: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGUzeTl5anc4MWl2ODJ5NGpqZXpnNXZsbjc1Y3RnZ3AwMWlvOHhubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RKrJIIxY7hcha/giphy.gif'
    },
    {
        event: 'having a royal flush in poker',
        percentage: 0.00015,
        decimal: 6,
        gif: 'https://media2.giphy.com/media/xT9DPlAUKTl1GeZjC8/giphy.gif?cid=ecf05e47dbdzzyf7wbpg9cjpca4sforxbry3acr0xsjj6ofm&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'date a supermodel',
        percentage: 0.00011,
        decimal: 6,
        gif: 'https://media4.giphy.com/media/W4owNlWp35JE0xaWtE/giphy.gif?cid=ecf05e47zud8h8y2rc7xfq44d0pidom08sad2gtoxj6cm7p7&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'get struck by lightning',
        percentage: 0.00010,
        decimal: 6,
        gif: 'https://media4.giphy.com/media/iLdNyukd3uxsk/giphy.gif?cid=ecf05e47387o80nk82pz9vm36cm8niwek9c98tuf6uv18whs&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'become a billionaire',
        percentage: 0.000030,
        decimal: 7,
        gif: 'https://media0.giphy.com/media/h0MTqLyvgG0Ss/giphy.gif?cid=ecf05e47r1qaz8alg6o1si6jsugwx9f2oxnwq98b4lryrl5p&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'be a movie star',
        percentage: 0.000067,
        decimal: 7,
        gif: 'https://media3.giphy.com/media/v3PxWX2KLo1BKJNa2e/giphy.gif?cid=ecf05e47lztdlcpjmhmb8hyl2p03tealq6twv8kp8choz5ce&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'attacked by a shark',
        percentage: 0.000086,
        decimal: 7,
        gif: 'https://media2.giphy.com/media/Ycr587EkQo8KY/giphy.gif?cid=ecf05e47cmko2seuyiczwivz2ljz99a90lu6u6a6ex27f8mu&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'meeting your partner in a blind date',
        percentage: 2.89,
        decimal: 2,
        gif: 'https://media0.giphy.com/media/26u494m0y9yW2gD04/giphy.gif?cid=ecf05e47uvo2l8861a68vi91nhuyeu1cx99ji0j0w8yz1600&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'a person is right-handed',
        percentage: 90.90,
        decimal: 2,
        gif: 'https://media4.giphy.com/media/kFHip28IrejZZKJiWr/giphy.gif?cid=ecf05e47qnsiw4xpneeuo9mzx0uv1y97xmsymt67iodf555r&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'get kissed on your first date',
        percentage: 52.60,
        decimal: 2,
        gif: 'https://media2.giphy.com/media/3ohze3kG5qO9DcTUbe/giphy.gif?cid=ecf05e472jbq9noakzkl5pzym9hushxp359qslixh0wsu3yi&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'your chance of dying every year',
        percentage: 0.74,
        decimal: 3,
        gif: 'https://media4.giphy.com/media/3o6Mb5WxERQyuy7qJa/giphy.gif?cid=ecf05e4782yye8o4glu2f8tuby2mfwzrlnrto80jeod8hqvh&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'a person is a vegan/vegetarian',
        percentage: 4.00,
        decimal: 2,
        gif: 'https://media1.giphy.com/media/yWTrzwWVS9x1zHPIwT/giphy.gif?cid=ecf05e47ayk4hx3y1t31dt8spqkdp15vhrxlskmmkoz4ut3f&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
        event: 'dying on the same day as your birthday',
        percentage: 14.00,
        decimal: 2,
        gif: 'https://media1.giphy.com/media/O3A3Y6GRkGoZa/giphy.gif?cid=ecf05e47pqdmf3oa50g9hpu7g24l95wnus1k1z644t13d0z2&ep=v1_gifs_search&rid=giphy.gif&ct=g'
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