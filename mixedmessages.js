// Arrays containing part of sentences with a selection things to say
const intro = ['I', 'She', 'He', 'They', 'Maybe you', 'Definitely', 'Best you', 'Someone', 'You'];
const doOrDont = ['should', 'shouldn\'t'];
const verb = ['like', 'hate', 'love', 'play with', 'sleep with', 'fiddle', 'hustle', 'join with'];
const noun = ['the bed', 'the lake', 'the pan', 'the saucepan', 'the bedpan', 'a rubber duck', 'a pencil'];
const end = ['today.', 'tomorrow.', 'on Sunday.', 'at all.', 'next week.'];

// Return a random array element
function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* For testing (node mixedmessages.js)
console.log(`${randomElement(intro)} ${randomElement(doOrDont)} ` +
    `${randomElement(verb)} ${randomElement(noun)} ${randomElement(end)}`);
*/

window.onload = () => {
    document.getElementById('generate').onclick = () => {
        document.getElementById('message').innerHTML = `${randomElement(intro)} ` + 
        `${randomElement(doOrDont)} ${randomElement(verb)} ${randomElement(noun)} ${randomElement(end)}`;
    };
};