import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../../../firebase.ts";
import Loader from "../Loader.tsx";

export default function Users() {
  const [value, loading, error] = useCollection(collection(firestore, "users"));
  return (
    <div className="h-1/6 rounded-xl bg-neutral-800 p-4 border-solid border-t-neutral-900 border-l-neutral-900 border-2 border-b-neutral-700 border-r-neutral-700">
      <h2>Users</h2>

      {loading && <Loader />}

      {error && <p>Error: {error.message}</p>}

      {value && (
        <div>
          {value.docs.map((doc) => (
            <div key={doc.id}>
              <p>{JSON.stringify(doc.data())}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
