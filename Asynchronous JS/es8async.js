// example
async function playerStart(){
    await movePlayer(100, 'left') // wait this get something back before go to next line
    await movePlayer(300, 'right')
    await movePlayer(200, 'left')
    const variable = await movePlayer(500, 'left') // one more advantage is you can assign variable to it
}

async function fetchUsers(){
    const response = await fetch('something')
    const data = await response.json()
}
fetchUsers()


// Lets say you have list of urls to call
const urls = [
    'something1.com',
    'something2.com',
    'something3.com'
]

const getData = async function(){
    const [receivedFromUrls, receivedFromUrls2, receivedFromUrls3] = await Promise.all(urls.map(url => {
        fetch(url).then(resp => resp.json())
    }))
}

// In async await, we use try catch block to capture any error