import firestore from "./../firebase";

// CRUD - Create, Read, Update, Delete

// Create - seed my database with some data

const products = [
	{
		name: "POÄNG",
		isFav: false,
		price_per_unit: 149,
		quantity: 100,
		ref_image:
			"https://www.ikea.com/au/en/images/products/poaeng-armchair-white-stained-oak-veneer-skiftebo-dark-grey__0937026_pe793532_s5.jpg?f=xxs",
		variants: [
			"anthracite",
			"dark blue",
			"dark grey",
			"hillared beige",
			"knisa black",
			"light beige",
			"skiftebo yellow",
		],
	},
	{
		name: "ADDE",
		isFav: false,
		price_per_unit: 15,
		quantity: 100,
		ref_image:
			"https://www.ikea.com/au/en/images/products/adde-chair-black__0728277_pe736167_s5.jpg?f=xxs",
		variants: ["black", "white"],
	},
	{
		name: "INGOLF",
		isFav: false,
		price_per_unit: 79,
		quantity: 100,
		ref_image:
			"https://www.ikea.com/au/en/images/products/ingolf-chair-white-hallarp-beige__0926877_pe789566_s5.jpg?f=xxs",
		variants: ["white"],
	},
	{
		name: "VEDBO",
		isFav: false,
		price_per_unit: 199,
		quantity: 100,
		ref_image:
			"https://www.ikea.com/au/en/images/products/vedbo-armchair-gunnared-light-green__0949818_pe800035_s5.jpg?f=xxs",
		variants: [
			"gunnared light green",
			"gunnared blue",
			"gunnared dark grey",
			"gunnared light brown-pink",
		],
	},
	{
		name: "NOLMYRA",
		isFav: false,
		price_per_unit: 49,
		quantity: 100,
		ref_image:
			"https://www.ikea.com/au/en/images/products/nolmyra-easy-chair-birch-veneer-grey__0152020_pe310348_s5.jpg?f=xxs",
		variants: ["birch veneer/grey", "black/black"],
	},
	{
		name: "EKENÄSET",
		isFav: false,
		price_per_unit: 299,
		quantity: 100,
		ref_image:
			"https://www.ikea.com/au/en/images/products/ekenaeset-armchair-hillared-anthracite__0729143_pe736711_s5.jpg?f=xxs",
		variants: ["hillared anthracite"],
	},
	{
		name: "LERHAMN",
		isFav: false,
		price_per_unit: 39,
		quantity: 100,
		ref_image:
			"https://www.ikea.com/au/en/images/products/lerhamn-chair-light-antique-stain-vittaryd-beige__0728161_pe736119_s5.jpg?f=xxs",
		variants: ["light antique stain/vittaryd beige"],
	},
	{
		name: "TOBIAS",
		isFav: false,
		price_per_unit: 99,
		quantity: 100,
		ref_image:
			"https://www.ikea.com/au/en/images/products/tobias-chair-transparent-chrome-plated__0727342_pe735614_s5.jpg?f=xxs",
		variants: [
			"transparent/chrome-plated",
			"grey/chrome-plated",
			"blue/chrome-plated",
		],
	},
	{
		name: "VOXLÖV",
		isFav: false,
		price_per_unit: 119,
		quantity: 100,
		ref_image:
			"https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__0948161_pe798889_s5.jpg?f=xxs",
		variants: ["light bamboo"],
	},
];
// Check if collection has any documents, if not, sends our static array of products to the database
export const seedProducts = async () => {
	const collection = firestore.collection("products");
	const data = await collection.get();
	const promises = products.map(async (student) => {
		return await collection.add(student);
	});

	const resolvedPromises = await Promise.all(promises);
};

// Create - create a single document in our collection
export const createStudent = async (record) => {
	// https://firebase.google.com/docs/reference/js/v8/firebase.firestore?authuser=0
	// returns a CollectionReference
	const collection = firestore.collection("products");
	await collection.add(record);
};

// Read - getting all the data in the database collection
export const getProducts = async () => {
	const collection = firestore.collection("products");
	// returns a QuerySnapshot
	const queryData = await collection.get();
	// returns QueryDocumentSnapshot
	const documents = queryData.docs;
	// returns an array of objects containing all fields in the document, object destructured to add in the doc.id key pair
	const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));

	return data;
};

// Update - Updating a single documentin our collection
export const updateStudent = async (id, record) => {
	// Gives us access to a specific document in our collection
	const docRef = firestore.collection("products").doc(id);
	await docRef.update(record);
};

// Delete - deleting a single document in our collection
export const deleteStudent = async (id) => {
	const docRef = firestore.collection("products").doc(id);
	await docRef.delete(id);
};
