import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../../../firebase.ts";
import Loader from "../Loader.tsx";
import ChatMessage from "./ChatMessage.tsx";

export default function Chat() {
  const [value, loading, error] = useCollection(
    collection(firestore, "messages")
  );

  return (
    <div className="flex relative w-1/4 rounded-xl bg-neutral-800 p-4 border-solid border-t-neutral-900 border-l-neutral-900 border-2 border-b-neutral-700 border-r-neutral-700">
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold opacity-10">
        CHAT
      </h2>

      {loading && <Loader />}

      {error && <p>Error: {error.message}</p>}

      {value && (
        <div className="flex-1 flex flex-col-reverse gap-4 justify-end overflow-y-scroll">
          {value.docs.map((doc) => (
            <ChatMessage key={doc.id} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
