import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { firestore } from "../../../firebase";
import Loader from "../Loader";
import Button from "../Button";

export default function ActionPad() {
  const [user, setUser] = useState<{ name: string; color: string } | null>(
    null
  );

  const getUser = useCallback(async () => {
    const userId = atob(localStorage.getItem("userId") ?? "");
    const ref = await getDoc(doc(firestore, "users", userId));
    if (!ref.exists()) return;
    const userData = ref.data() as { name: string; color: string };
    setUser(userData);
  }, []);

  useEffect(() => {
    const isTimeout = JSON.parse(localStorage.getItem("isTimeout") ?? "false");
    if (isTimeout) startTimeout();
    if (user) return;
    getUser();
  }, [getUser, user]);

  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (!message || !user) return;
      const res = await addDoc(collection(firestore, "messages"), {
        body: message,
        created_at: new Date(),
        user_ref: doc(
          firestore,
          "users",
          atob(localStorage.getItem("userId") ?? "")
        ),
      });
      if (!res) return;

      setMessage("");
      startTimeout();
    } finally {
      setSubmitting(false);
    }
  };

  const startTimeout = () => {
    setIsTimeout(true);
    localStorage.setItem("isTimeout", "true");
    setTimeout(() => {
      setIsTimeout(false);
      localStorage.setItem("isTimeout", "false");
    }, 10 * 1000);
  };

  if (!user) return <Loader />;

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-xl">Fawaka, {user.name}!</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <textarea
          placeholder="Message"
          value={message}
          className="text-black p-2 text-lg rounded-md min-h-20 max-h-40"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          title="Yeet message"
          buttonClass="primary"
          type="submit"
          disabled={submitting || isTimeout}
        />
        {isTimeout && <p className="text-sm opacity-50">10 second cooldown</p>}
      </form>
    </div>
  );
}
