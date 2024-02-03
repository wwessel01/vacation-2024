import { addDoc, collection, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { useState } from "react";
import Loader from "../components/Loader";

export default function Join() {
  const [username, setUsername] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (!username) return;
      const res = await addDoc(collection(firestore, "users"), {
        name: username,
      });

      if (!res) return;
      const user = await getDoc(res);

      if (!user.exists()) return;
      const data = user.data();

      if (!data.name) return;
      localStorage.setItem("username", btoa(data.name));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Join</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" disabled={submitting}>
          {submitting ? <Loader /> : "Join"}
        </button>
      </form>
    </div>
  );
}
