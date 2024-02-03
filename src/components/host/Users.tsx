import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../../../firebase.ts";
import Loader from "../Loader.tsx";
import UserCard from "./UserCard.tsx";

export default function Users() {
  const [value, loading, error] = useCollection(collection(firestore, "users"));
  return (
    <div className="flex relative h-1/6 rounded-xl bg-neutral-800 p-4 border-solid border-t-neutral-900 border-l-neutral-900 border-2 border-b-neutral-700 border-r-neutral-700">
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold opacity-10">
        USERS
      </h2>

      {loading && <Loader />}

      {error && <p>Error: {error.message}</p>}

      {value && (
        <div className="flex-1 flex overflow-x-scroll gap-4 z-10">
          {value.docs.map((doc) => (
            <UserCard key={doc.id} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
