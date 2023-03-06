import getFlags from './flags'

console.log(`Hello ${getFlags('--name')}. ${getFlags('--greetings')}`)