import firestore from "./../firebase";

export const getProducts = async () => {
	const collection = firestore.collection("products");
	const queryData = await collection.get();
	const documents = queryData.docs;
	const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));
	return data;
};

export const seedProducts = async (collectionName, records) => {
	const collection = firestore.collection(collectionName);
	const promises = records.map(async (record) => {
		return await collection.add(record);
	});

	const resolvedPromises = await Promise.all(promises);
};

export const updateProduct = async (id, record, collectionName) => {
	// Gives us access to a specific document in our collection
	const docRef = firestore.collection(collectionName).doc(id);
	await docRef.update(record);
};
