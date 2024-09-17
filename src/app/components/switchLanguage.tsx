const SwitchLanguage = () => {
    return <>
        <div className="col-lg-1 col-md-12">
            <select className="form-select form-select-sm" >
                <option value={"en"} selected >EN</option>
                <option value={"th"} >TH</option>
            </select>
        </div>
    </>
}

export default SwitchLanguage;