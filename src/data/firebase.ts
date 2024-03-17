import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { child, get, getDatabase, push, ref, remove } from "firebase/database";

export interface IFirebaseTransaction {
  id: string;
  transactionData: {
    amount: number;
    category: string;
    date: string;
    description: string;
    transactionType: string;
  };
}

const firebaseConfig = {
 apiKey: "AIzaSyBZiY20vQE6wK7CCPbqZbbYQDIYLuzYcq8",
  authDomain: "money-tracker-ab601.firebaseapp.com",
  databaseURL: "https://money-tracker-ab601-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "money-tracker-ab601",
  storageBucket: "money-tracker-ab601.appspot.com",
  messagingSenderId: "774230285930",
  appId: "1:774230285930:web:77ee6223a39bc2830b3413"
};

export function writeTransaction(
  userId: string,
  newTransaction: IFirebaseTransaction
) {
  const db = getDatabase();
  push(ref(db, "User/" + userId + "/transactions/"), {
    newTransaction,
  });
}

export function removeTransaction(userId: string, transactionId: string) {
  const db = getDatabase();
  remove(ref(db, "User/" + userId + "/transactions/" + transactionId));
}

export function getAllTransactions(
  userId: string
): Promise<IFirebaseTransaction> {
  return new Promise((resolve, reject) => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, "User/" + userId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          resolve(snapshot.val());
        } else {
          reject(new Error("No data available"));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);
