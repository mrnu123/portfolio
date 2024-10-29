import { useEffect, useState } from "react";
import getCookie from "../../helper/getCookies";

const SwitchLanguage = () => {
  const languageCookie = getCookie("selectedLanguage");
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageCookie || "en"
  );
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedLanguage(e.target.value);

    console.log("Language changed to: ", e.target.value);
    document.cookie = `selectedLanguage=${e.target.value}`;
    window.location.reload();
  };
  return (
    <>
      <div className="col-lg-1 col-md-12">
        <select
          className="form-select form-select-sm"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value={"en"}>EN</option>
          <option value={"th"}>TH</option>
        </select>
      </div>
    </>
  );
};

export default SwitchLanguage;
