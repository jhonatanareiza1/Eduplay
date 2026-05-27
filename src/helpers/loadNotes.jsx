import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const loadNotes = async (uid) => {
  const notesSnapshot = await getDocs(collection(db, `${uid}/eduPlay/notes`));

  const notes = [];

  notesSnapshot.forEach((doc) => {
    notes.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  console.log(notes);

  return notes;
};
