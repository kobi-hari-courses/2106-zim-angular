import * as rawText from './jokes.json';

interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

let jokes = rawText.jokes as Joke[];

let categories = jokes.map(j => j.type);
let types: {[key: string]: boolean} = {};

for (const iterator of categories) {
    types[iterator] = true;
}



console.log(Object.keys(types));