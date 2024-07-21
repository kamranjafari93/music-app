import c from "./Header.module.scss";
import SearchInput from "@/components/SearchInput/SearchInput";

function Header() {
  return (
    <header
      className={`${c.mainHeader} bg-cover bg-center flex flex-col items-center justify-center`}
    >
      <h1 className="text-2xl text-white font-medium mt-0 mb-4">
        Music Search
      </h1>
      <SearchInput />
    </header>
  );
}

export default Header;
