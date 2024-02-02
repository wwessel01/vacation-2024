import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../../firebase.ts";

export default function Host() {
  const [value, loading, error] = useCollection(
    collection(firestore, "messages")
  );
  return (
    <div>
      <h1>Host page!</h1>
      <div>
        <h2>Chat</h2>

        {loading && <p>Loading...</p>}

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
    </div>
  );
}
