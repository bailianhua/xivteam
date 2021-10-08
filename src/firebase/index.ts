import { initializeApp } from "firebase/app";
import { ref, onUnmounted } from "vue";
import { getFirestore, collection, addDoc, onSnapshot, doc } from "firebase/firestore";
import Team from "../interfaces/Team";
const firebaseConfig = {
  apiKey: "AIzaSyCT5sQl3QrZV91uysEFD2TEueGZf2c1ZZE",
  authDomain: "xivteam-daed1.firebaseapp.com",
  projectId: "xivteam-daed1",
  storageBucket: "xivteam-daed1.appspot.com",
  messagingSenderId: "695469596523",
  appId: "1:695469596523:web:5af47ec551da51e0bab62e",
  measurementId: "G-FRCG0ZMQT7",
};
const firebase = initializeApp(firebaseConfig);
const db = getFirestore();
const teamsCollection = collection(db, "teams");

export const createTeam = async (team: any) => {
  await addDoc(collection(db, "teams"), team);
};

// export const getTeam = async (id) => {
//   const team = await teamsCollection.doc(id).get();
//   return team.exists ? team.data() : null;
// };

// export const updateTeam = async (id, team) => {
//   return teamsCollection.doc(id).update(team);
// };

// export const deleteTeam = (id) => {
//   return teamsCollection.doc(id).delete();
// };

export const loadTeams = () => {
  const teams = ref([]<Team>);
  const close = onSnapshot(collection(db, "teams"), (snapshot) => {
    teams.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return teams.value
};
