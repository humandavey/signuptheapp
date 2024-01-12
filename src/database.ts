import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  increment,
} from "firebase/firestore";

import * as firebaseConfig from './config.json';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
