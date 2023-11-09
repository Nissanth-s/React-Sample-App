import React from "react"

 const CountryList = function (props) {
    const {fetchData} = props

    return (
        <div className="col-md-6 col-sm-12">
            <div className="body-container">
                <img src={fetchData.flag} alt="Flag" />
                <div>
                    <h3>{fetchData?.name}</h3>
                    <h4>{fetchData?.region}</h4>
                </div>
            </div>
        </div>
    )
}

export default CountryList