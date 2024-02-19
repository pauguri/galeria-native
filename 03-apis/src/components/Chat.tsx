import { useEffect, useRef, useState } from 'react';
import { Message } from '../@types/types';
import { supabaseClient } from '../utils/supabaseClient';

export default function Chat() {
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
        const { error } = await supabaseClient.from('messages').insert({ content: message }).select();
        if (error) {
            console.error(error);
        } else {
            if (inputRef.current) inputRef.current.value = '';
            getMessages();
        }
    }

    const deleteMessage = async (id: number) => {
        const { error } = await supabaseClient.from('messages').delete().eq('id', id);
        if (error) {
            console.error(error);
        } else {
            getMessages();
        }
    }

    const parseDate = (date: string) => {
        const parsed = new Date(date);
        return parsed.toDateString() + ' ' + parsed.toLocaleTimeString();
    }

    useEffect(() => {
        getMessages();
        const subscription = supabaseClient.channel('messages').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, getMessages).subscribe();

        return () => {
            supabaseClient.removeChannel(subscription);
        }
    }, []);

    return (
        <section>
            <h1>Forocoches</h1>
            <ul className='messages'>
                {messages?.map((message) => (
                    <li key={message.id}>
                        {message.content}<br />
                        <time>{parseDate(message.created_at)}</time>
                        <button className='delete' onClick={() => deleteMessage(message.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={submitForm}>
                <input placeholder='envía un mensaje...' type='text' ref={inputRef} />
                <button type='submit'>Send</button>
            </form>
        </section>
    )
}
