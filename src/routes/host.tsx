import { collection, deleteDoc, getDocs } from "firebase/firestore";
import Chat from "../components/host/Chat";
import Users from "../components/host/Users";
import { firestore } from "../../firebase";
import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "../components/Button";

export default function Host() {
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
        <div className="flex-1 rounded-xl bg-neutral-700 p-4 border-solid border-b-neutral-800 border-r-neutral-800 border-2 border-t-neutral-600 border-l-neutral-600">
          <h2>Presentation slides</h2>
        </div>
        <Chat />
      </div>
      <Users />
    </div>
  );
}
