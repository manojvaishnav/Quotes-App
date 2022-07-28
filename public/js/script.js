const page1 = document.getElementById('page_1');
const page2 = document.getElementById('page_2');
const author1 = document.getElementById('author_1');
const author2 = document.getElementById('author_2');
const next = document.getElementById('next');
const share = document.getElementById('share');


const api = 'https://type.fit/api/quotes';

const rendomIndex = () => {
    const index = Math.floor(Math.random() * 1642);
    return index;
}
const quotes = async () => {
    let data = await fetch(api);

    try {
        const realData = await data.json();
        const indexOf = await rendomIndex();

        const quote_1 = realData[indexOf].text;
        const quote_2 = realData[indexOf + 1].text;
        let author_1 = realData[indexOf].author;
        let author_2 = realData[indexOf + 1].author;

        if (!author_1) {
            author_1 = 'Unknown'
            return author_1;
        }
        if (!author_2) {
            author_2 = 'Unknown'
            return author_2;
        }
        page1.innerText = `${quote_1}`;
        page2.innerText = `${quote_2}`;
        author1.innerText = `${author_1}`;
        author2.innerText = `${author_2}`;

        return quote_1;
    } catch (error) {
        console.log(error);
    }
}

next.addEventListener('click', quotes);

const quoteShare = async () => {
    let q = await quotes();
    let tweetme = await `https://twitter.com/intent/tweet?text=${q}`;
    window.open(tweetme);
};

share.addEventListener('click', quoteShare);