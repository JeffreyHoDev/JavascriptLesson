const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
]

// Finally - new keyword

Promise.all(urls.map(url => {
    return fetch(url).then(people=>people.json())
}))
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => console.log('extra')) // Usually empty parameter, and we put it normally at the end

// Try throw an error, the finally will still run. 
// Finally is good for you still want to do something no matter success or failed, for example send email etc.


// for await of

const getData = async function(){
    const [receivedFromUrls, receivedFromUrls2, receivedFromUrls3] = await Promise.all(urls.map(url => {
        fetch(url).then(resp => resp.json())
        .then(data=>console.log(data))
    }))
}

// This is for of
const loopThroughUrls = urls => {
    for(url of urls) {
        console.log(url)
    }
}

// We try mimic getData()
const getData2 = async function(){
    const arrayOfPromises = await urls.map(url => fetch(url))
    for await(let request of arrayOfPromises) {
        const data = await request.json()
        console.log(data)
    }
}