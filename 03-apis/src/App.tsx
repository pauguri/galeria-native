import { useEffect, useRef, useState } from 'react';
import './App.css'
import { Message } from './@types/types';
import { supabaseClient } from './utils/supabaseClient';

function App() {
  const [messages, setMessages] = useState<Message[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getMessages = async () => {
    const { data, error } = await supabaseClient.from('messages').select("*");
    if (error) {
      console.error(error);
    } else {
      setMessages(data as Message[]);
    }
  }

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      sendMessage(inputRef.current.value);
    }
  }

  const sendMessage = async (message: string) => {
    const { error } = await supabaseClient.from('messages').insert({ content: message });
    if (error) {
      console.error(error);
    } else {
      if (inputRef.current) inputRef.current.value = '';
      getMessages();
    }
  }

  const parseDate = (date: string) => {
    const parsed = new Date(date);
    return parsed.toDateString() + ' ' + parsed.toLocaleTimeString();
  }

  useEffect(() => {
    getMessages();
  }, [])

  return (
    <main>
      <h1>Forocoches</h1>
      <ul className='messages'>
        {messages?.map((message) => (
          <li key={message.id}>{message.content}<br /><time>{parseDate(message.created_at)}</time></li>
        ))}
      </ul>
      <form onSubmit={submitForm}>
        <input placeholder='envía un mensaje...' type='text' ref={inputRef} />
        <button type='submit'>Send</button>
      </form>
    </main>
  )
}

export default App
