import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../../../firebase.ts";
import Loader from "../Loader.tsx";

function Message({
  doc,
}: {
  doc: QueryDocumentSnapshot<DocumentData, DocumentData>;
}) {
  const data = doc.data();

  return (
    <div key={doc.id}>
      <p>{data.body}</p>
    </div>
  );
}

export default function Chat() {
  const [value, loading, error] = useCollection(
    collection(firestore, "messages")
  );
  return (
    <div className="w-1/4 rounded-xl bg-neutral-800 p-4 border-solid border-t-neutral-900 border-l-neutral-900 border-2 border-b-neutral-700 border-r-neutral-700">
      <h2>Chat</h2>

      {loading && <Loader />}

      {error && <p>Error: {error.message}</p>}

      {value && (
        <div>
          {value.docs.map((doc) => (
            <Message doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
