import { createContext } from "react";
import { useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const [search, setSearch] = useState("");
	const data = { search, setSearch };

	return (
		<SearchContext.Provider value={data}>{children}</SearchContext.Provider>
	);
};
