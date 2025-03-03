const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


/* Snack 1 - Filtra e Modifica

Crea un array (longBooks) con i libri che hanno più di 300 pagine;
Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
Stampa in console ogni titolo nella console. */

const longBooks = books.filter(book => {
    return book.pages >= 300
})
console.log('Libri con più di 300 pagine:', longBooks)

const longBooksTitles = longBooks.map(bookTitle => {
    return bookTitle.title
})
console.log('Titoli di libri con più di 300 pagine:', longBooksTitles)


/* Snack 2 - Il primo libro scontato

Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi). */

const availableBooks = books.filter(book => {
    return book.available === true
})
console.log('Libri disponibili:', availableBooks)

const discountedBooks = availableBooks.map(book => {
    const prezzo = parseFloat(book.price)
    const sconto = prezzo * 20 / 100
    const prezzoScontato = (prezzo - sconto).toFixed(0)

    return {
        ...book,
        'prezzo scontato': `${prezzoScontato}€`
    }

})
console.log('Libri disponibili con prezzo scontato:', discountedBooks)

const fullPricedBook = discountedBooks.find(book => {
    const prezzo = parseFloat(book.price)
    return Number.isInteger(prezzo)
})
console.log('Primo libro con prezzo scontato:', fullPricedBook)


/* Snack 3 - Ordinare gli Autori

Creare un array (authors) che contiene gli autori dei libri.
Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente) */

const authors = books.map(book => {
    return book.author
})
console.log('Autori:', authors)

const areAuthorsAdults = books.every(author => author.age >= 18)
authors.sort((a, b) => {
    return b.age - a.age
})
console.log('Gli autori sono tutti maggiorenni?', areAuthorsAdults)
console.log('Autori in ordine di età decrescente:', authors)


/* Snack 4 - Calcola l’età media
Creare un array (ages) che contiene le età degli autori dei libri.
Calcola la somma delle età (agesSum) usando reduce.
Stampa in console l’età media degli autori dei libri. */

const ages = books.map(book => {
    return book.author.age
})
console.log('Età autori:', ages)

const agesSum = ages.reduce((acc, num) => {
    return acc + num
}, 0)
console.log('Somma età autori:', agesSum)

const agesMedia = agesSum / ages.length
console.log('Media età autori:', agesMedia)


