var absTime;
function setHTML(d, h, m, s) {
    document.getElementById('day').innerText = `${d} days`;
    document.getElementById('hr').innerText = `${h} hrs`;
    document.getElementById('min').innerText = `${m} min`;
    document.getElementById('sec').innerText = `${s} sec`;
}

function calculate(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds - (min * 60);

    let hrs = Math.floor(min / 60);
    min = min - (hrs * 60);

    let days = Math.floor(hrs / 24);
    hrs = hrs - days * 24;

    setHTML(days, hrs, min, sec);
    // console.log(`days: ${days}, hrs: ${hrs}, minutes: ${min}, seconds: ${sec}`);
}

function process() {
    let now = new Date().getTime();
    let diff = Math.floor((absTime - now) / 1000);
    if (diff <= 0) {
        clearInterval(id);
        setHTML("--", "--", "--", "--");
        document.getElementsByTagName('link')[0].setAttribute('href', 'style2.css');
        console.log('i');
        return;
    }
    calculate(diff);
}

function getTime() {
    let input = document.getElementsByTagName('input')[0].value;
    console.log(input);
    [date, time] = input.split('T');
    absTime = new Date(`${date} ${time}:00`).getTime();
}

function main() {
    console.log("i");
    getTime();
    id = setInterval(process, 1000);
}

document.getElementById('submit').addEventListener('click', main);