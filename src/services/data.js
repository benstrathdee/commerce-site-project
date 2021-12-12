import firestore from "../firebase";

export const getData = async (collectionName) => {
	const collection = firestore.collection(collectionName);
	const queryData = await collection.get();
	const documents = queryData.docs;
	const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));
	return data;
};

export const updateData = async (id, record, collectionName) => {
	const docRef = firestore.collection(collectionName).doc(id);
	await docRef.update(record);
};

export const createData = async (record, collectionName) => {
	const collection = firestore.collection(collectionName);
	await collection.add(record);
};

export const deleteData = async (id, collectionName) => {
	const docRef = firestore.collection(collectionName).doc(id);
	await docRef.delete(id);
};
