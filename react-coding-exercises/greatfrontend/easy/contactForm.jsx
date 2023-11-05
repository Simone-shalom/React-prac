import './styles.css';
import submitForm from './submitForm';
import {useState} from 'react'

export default function App() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

console.log(name)
console.log(email)
console.log(message)



  return (
    <form
      onSubmit={submitForm}>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
      <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <textarea placeholder='messages'value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
      <button>
        Send
      </button>
    </form>
  );
}
