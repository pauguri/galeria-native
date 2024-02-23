import "./App.css";
import { supabase } from "./utils/clientSupabase";
import Chat from "./components/Chat";
import { useEffect, useState } from "react";

function App() {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [session, setSession] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password } = userCredentials;
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: name,
        },
      },
    });
    !error ? console.log(data) : setErrorMsg(error.message);
  };

  const handleSignIn = async () => {
    const { email, password } = userCredentials;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setErrorMsg(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prev) => {
      const newCred = { ...prev, [name]: value };
      console.log(newCred);
      return newCred;
    });
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (event === "SIGNED_IN") {
        setSession(session);
      } else if (event === "SIGNED_OUT") {
        setSession(null);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <main>
      {session ? (
        <Chat session={session}/>
      ) : (
        <section className="form-container">
          {errorMsg && <div className="error">{errorMsg}</div>}
          <form>
            <label>
              Name:
              <input type="text" name="name" onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" onChange={handleChange} />
            </label>
            <label>
              Password:
              <input type="password" name="password" onChange={handleChange} />
            </label>
            <button type="button" onClick={handleSignUp}>
              Registrar-me
            </button>
            <button type="button" onClick={handleSignIn}>
              Entra
            </button>
          </form>
        </section>
      )}
    </main>
  );
}

export default App;
