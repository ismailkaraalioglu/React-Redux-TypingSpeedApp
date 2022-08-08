import { useState } from "react";

function Header() {
  const [lang, setLang] = useState("Turkish");

  return (
    <header>
      <h1 className="text-center text-3xl font-bold py-12">Typing Speed App</h1>
      <div className="text-center">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="pr-10 py-2 border-b-2 border-black outline-none hover:cursor-pointer"
        >
          <option value="Turkish">Türkçe</option>
          <option value="English">English</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
