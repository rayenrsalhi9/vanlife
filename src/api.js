import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBQcS91av3jWnhVGJ_6Ec_3Pc3YMBAJsqw",
    authDomain: "vanlife-20b50.firebaseapp.com",
    projectId: "vanlife-20b50",
    storageBucket: "vanlife-20b50.firebasestorage.app",
    messagingSenderId: "535691318715",
    appId: "1:535691318715:web:625148d722c03e5d6ae09e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, 'vans')

// refactoring the fetching functions

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr
}

export async function getVanDetails(id) {
    const docRef = doc(db, 'vans', id) //  (e.g. db > vans > 1)
    const vanSnapshot = await getDoc(docRef)
    const vanObject = {...vanSnapshot.data(), id: vanSnapshot.id}

    return vanObject
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}