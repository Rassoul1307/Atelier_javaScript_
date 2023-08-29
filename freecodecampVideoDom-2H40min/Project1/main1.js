let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {
        quote: "RESPIRATOR, n. An apparatus fitted over the nose and mouth of an inhabitant of London, whereby to filter the visible universe in its passage to the lungs.",
        person: "Ambrose Gwinett Bierce"
    },
    {
        quote:"So when the only domestic social policy is tax cuts that mostly benefit the wealthiest Americans, we say, 'Where is faith being put into action here?'",
        person:"Jim Wallis"
    },
    {
        quote:"I'm a big fan of Courtney Love. I love Hole and I love her acting and I love her attitude. I just hope I never meet her in a dark alley.",
        person:"Jeff Ross"
    },
    {
        quote:"I think Gina Rowlands is an amazing actress.",
        person:"Angela Sarafyan"
    },
    {
        quote:"I would talk in iambic pentameter if it were easier.",
        person:"Howard Nemerov"
    },
    {
        quote:"It would be incredibly presumptuous and self-serving of me to believe that Facebook was the end of history. The only way it could possibly be the end of history is if it becomes some sort of artificial super intelligence that takes over the world.",
        person:"Sean Parker"
    },
    {
        quote:"Leadership - mobilization toward a common goal.",
        person:"Gary Wills"
    },
    {
        quote:"So when bands work with me and it's 10 o'clock, usually you'd have to be getting out of the studio, we could go on until 2 in the morning cause it's my place!",
        person:"Billy Sherwood"
    },
    {
        quote:"Even knowledge has to be in the fashion, and where it is not, it is wise to affect ignorance.",
        person:"Baltasar Gracian"
    },
    {
        quote:"My dad is a nurse midwife, one of about only 50 male midwives in the U.S., I think.",
        person:"Matthew Morrison"
    },
];
btn.addEventListener('click', function() {
    let random = Math.floor(Math.random()*quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})