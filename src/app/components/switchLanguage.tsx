import { useState } from "react";

const SwitchLanguage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(e.target.value);
        console.log("Language changed to: ", e.target.value);
    }
    return <>
        <div className="col-lg-1 col-md-12">
            <select className="form-select form-select-sm" value={selectedLanguage} onChange={handleLanguageChange} >
                <option value={"en"} defaultValue={'en'} >EN</option>
                <option value={"th"} >TH</option>
            </select>
        </div>
    </>
}

export default SwitchLanguage;