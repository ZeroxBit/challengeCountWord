// count the words
const splittedReduce = (acc, el) => {
    if (acc[el]) {
        acc[el]++;
    } else {
        acc[el] = 1;
    }

    return acc;
}

// defines the word that is repeated the most
const countMaxWord = (acc, el) => (acc[1] > el[1] ? acc : el);

// convert the obj in array and return the max word repited
const moreRepeated = (obj) => {
    return Object.entries(obj).reduce(countMaxWord);
}

const repeated = (str) => {
    const lower = str.toLowerCase().trim();
    const splitted = lower.split(" ");
    const reduced = splitted.reduce(splittedReduce, {});

    return moreRepeated(reduced);
}

console.log(repeated(" this is repeated word test count this b this"))
// result = ['this', 3]