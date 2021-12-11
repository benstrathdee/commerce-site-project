import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";

const Search = () => {
	const { setSearch } = useContext(SearchContext);
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleClick = () => {
		setSearch(searchTerm);
	};

	return (
		<div className={styles.Search}>
			<input
				type="text"
				onChange={handleChange}
				className={styles.Search_Searchbar}
			/>
			<Link to="/">
				<button
					onClick={handleClick}
					className={styles.Search_SearchBtn}
				>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</Link>
		</div>
	);
};

export default Search;
