import React, { useEffect, useState } from "react"
import Footer from "./Footer"
import CountryList from "./CountryList"
import { changeFilter } from '../redux/reducers'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../redux/fetchDataReducer'

const Countries = function () {

    const filterVal = useSelector((state) => {
        return state.commonReducer
    })

    const dispatch = useDispatch();

    const loading = useSelector(state => state?.getDataSlice?.loading);
    const error = useSelector(state => state?.getDataSlice?.error);

    const [mobSubMenu, setMobSubMenu] = useState(false);

    const [fetchData, setFetchData] = useState([])

    //Fetch data from api call
    useEffect(() => {
        const fetchData = dispatch(getData());
        setMobSubMenu(false)

        fetchData.then(async (data) => {
            let draftData = data?.payload

            //Filter data based on user filter action
            let filteredData = []
            if (filterVal === 'All') {
                filteredData = draftData
            } else {
                draftData.forEach(element => {
                    if (element.region === filterVal) {
                        filteredData.push(element)
                    }
                });
            }

            setFetchData(filteredData)
        })
    }, [dispatch,filterVal])

    //Mobile menu toggle
    const toggleMenu = () => {
        setMobSubMenu(current => !current)  
    }

    return (
        <div className="container page-container">
            {loading ? (
                <div className="spinner">
                    <div className="spinner-grow spinnerSub" role="status">
                        <span className="sr-only">.</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="header-container">
                        <h2>Countries</h2>
                        <div className="web-nav">
                            <ul>
                                <li className={filterVal === 'All' ? 'active' : ''} onClick={() => {
                                    dispatch(changeFilter('All'))
                                }}>All</li>
                                <li className={filterVal === 'Asia' ? 'active' : ''} onClick={() => {
                                    dispatch(changeFilter('Asia'))
                                }}>Asia</li>
                                <li className={filterVal === 'Europe' ? 'active' : ''} onClick={() => {
                                    dispatch(changeFilter('Europe'))
                                }}>Europe</li>
                            </ul>
                        </div>
                        <div className='mob-nav'>
                            <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <line x1="4" y1="11" x2="20" y2="11" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="4" y1="5" x2="20" y2="5" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="4" y1="17" x2="20" y2="17" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className={mobSubMenu ? 'sub-menu-active' : 'sub-menu'}>
                                <div onClick={() => {
                                    dispatch(changeFilter('All'))
                                }}>All</div>
                                <div onClick={() => {
                                    dispatch(changeFilter('Asia'))
                                }}>Asia</div>
                                <div onClick={() => {
                                    dispatch(changeFilter('Europe'))
                                }}>Europe</div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3 body-main-container">
                        {
                            error !== '' ? (<div className='erroData'>{error}</div>) : (
                                fetchData?.map((items, index) => (
                                    <CountryList fetchData={items} key={index} />
                                ))
                            )
                        }
                    </div>

                </>
            )}

            <Footer />
        </div>
    )
}

export default Countries;