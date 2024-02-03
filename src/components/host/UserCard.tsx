import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export default function UserCard({
  doc,
}: {
  doc: QueryDocumentSnapshot<DocumentData, DocumentData>;
}) {
  const { name, color } = doc.data();

  return (
    <div
      className={`${color} min-w-60 rounded-xl p-2 flex justify-center items-center`}
    >
      <h1 className="text-xl">{name}</h1>
    </div>
  );
}
