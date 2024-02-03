import {
  DocumentData,
  QueryDocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import Loader from "../Loader.tsx";
import { useCallback, useEffect, useState } from "react";

export default function ChatMessage({
  doc,
}: {
  doc: QueryDocumentSnapshot<DocumentData, DocumentData>;
}) {
  const data = doc.data();
  const [user, setUser] = useState<{ name: string; color: string } | null>(
    null
  );

  const getUser = useCallback(async () => {
    const userRef = await getDoc(data.user_ref);
    if (!userRef.exists()) return;
    const userData = userRef.data() as { name: string; color: string };
    setUser(userData);
  }, [data]);

  useEffect(() => {
    if (user) return;
    getUser();
  }, [getUser, user]);

  const messageTime = new Date(
    data.created_at.seconds * 1000
  ).toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex gap-2">
      <div className="flex-1 flex flex-col bg-neutral-700 rounded-md p-2 border-solid border-b-neutral-800 border-r-neutral-800 border-2 border-t-neutral-600 border-l-neutral-600">
        <p>{data.body}</p>
        <p className="self-end text-sm opacity-50">{messageTime}</p>
      </div>
      <div
        className={`rounded-full w-10 h-10 ${
          user ? user.color : "bg-neutral-700"
        } border border-solid border-white flex justify-center items-center font`}
      >
        {user ? user.name[0] : <Loader />}
      </div>
    </div>
  );
}
