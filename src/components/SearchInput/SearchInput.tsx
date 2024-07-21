import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch as faSearchSolid } from "@fortawesome/free-solid-svg-icons";

function SearchInput() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-11/12 max-w-3xl">
        <FontAwesomeIcon
          icon={faSearchSolid}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5"
        />
        <input
          type="text"
          placeholder="Search by artist or album"
          className="w-full bg-white p-3 pl-10 rounded-md"
        />
      </div>
    </div>
  );
}

export default SearchInput;
