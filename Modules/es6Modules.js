// Native module support

// import module1 from 'module1'
// import module2 from 'module2'

const harry = 'potter' // only the one working on this file can access these variables
const voldemort = 'ok ok'

export function fight(char1, char2){
    const attack1 = Math.floor(Math.random()*char1.length)
    const attack2 = Math.floor(Math.random()*char2.length)
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}
// in your html file, you just need import { fight } from 'script'
// another way to export is do export default function

// Doing this you get error, you need some tricks to make this work:
// Define <script type="module"> import {fight} from './script.js'</script>
// Still error because we need module to served it as a server
// install live-server from npm