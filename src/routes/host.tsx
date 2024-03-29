import { collection, deleteDoc, getDocs } from "firebase/firestore";
import Chat from "../components/host/Chat";
import Users from "../components/host/Users";
import { firestore } from "../../firebase";
import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";
import { useState } from "react";
import Presentation from "../components/host/Presentation";

export default function Host() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");

  const clearAllMessages = async () => {
    const collectionRef = collection(firestore, "messages");
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  };

  const clearAllUsers = async () => {
    const collectionRef = collection(firestore, "users");
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  };

  const tryUnlock = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_PASSWORD) {
      setUnlocked(true);
    }
  };

  if (!unlocked) {
    return (
      <form
        onSubmit={tryUnlock}
        className="flex-1 flex flex-col gap-2 justify-center items-center"
      >
        <input
          type="password"
          placeholder="Wachtwoordje, anders ophoepelen oeleh"
          className="text-black p-2 text-lg rounded-md w-1/3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          title="Unlock"
          buttonClass="primary"
          type="submit"
          className="w-1/3"
        />
      </form>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-hidden">
      <div className="flex justify-end">
        <div className="flex gap-4">
          <Button
            title="Clear all messages"
            buttonClass="danger"
            icon={<TrashIcon className="h-4 w-4" />}
            onClick={clearAllMessages}
          />
          <Button
            title="Clear all users"
            buttonClass="danger"
            icon={<TrashIcon className="h-4 w-4" />}
            onClick={clearAllUsers}
          />
        </div>
      </div>
      <div className="flex-1 flex gap-4 overflow-hidden">
        <Presentation />
        <Chat />
      </div>
      <Users />
    </div>
  );
}
