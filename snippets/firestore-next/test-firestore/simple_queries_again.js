// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/simple_queries_again.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_simple_queries_again]
import { collection, query, where } from "firebase/firestore";
const citiesRef = collection(db, "cities");

const q = query(citiesRef, where("capital", "==", true));
// [END modular_simple_queries_again]