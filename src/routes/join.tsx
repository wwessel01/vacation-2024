import { addDoc, collection, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ActionPad from "../components/join/ActionPad";
import Button from "../components/Button";

export default function Join() {
  const [username, setUsername] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  const colors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
  ];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (!username) return;
      const res = await addDoc(collection(firestore, "users"), {
        name: username,
        color: colors[Math.floor(Math.random() * colors.length)],
      });

      if (!res) return;
      const user = await getDoc(res);

      if (!user.exists()) return;

      localStorage.setItem("userId", btoa(user.id));
      setUserId(user.id);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUserId(userId);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      {isLoading || submitting ? (
        <Loader />
      ) : userId ? (
        <ActionPad />
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            value={username}
            className="text-black p-2 text-lg rounded-md"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            title="Join"
            buttonClass="primary"
            type="submit"
            disabled={submitting || !!userId}
          />
        </form>
      )}
    </div>
  );
}
