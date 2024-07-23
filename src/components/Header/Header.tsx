import c from "./Header.module.scss";
import SearchInput from "@/components/SearchInput/SearchInput";
import React from "react";

interface HeaderProps {
  isMinimal?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isMinimal = false }) => {
  return (
    <header
      className={`bg-cover bg-center flex flex-col items-center justify-center ${isMinimal && c.minimalHeader} ${c.mainHeader}`}
      role="banner"
    >
      {!isMinimal && (
        <h1 className="text-2xl text-white font-medium mt-0 mb-4">
          Music Search
        </h1>
      )}
      <SearchInput />
    </header>
  );
};

export default Header;
