import { Table } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersTableData } from '../../redux/tableUsersData';
import OverLay from './OverLay';
import { useNavigate } from "react-router-dom";

import './table.css'
function Users() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { tableUsersData, loading, error } = useSelector(state => state.tapleDataSlice)
    console.log(tableUsersData);

    useEffect(() => {
        dispatch(fetchUsersTableData())
    }, [dispatch])

    const handleClick =()=>{
        navigate('/user')

    }

    return (
        <div>
            <OverLay tableUsersData={tableUsersData } loading={loading} error={error}/>
            <div style={{ paddingTop: '200px' }}>
                {loading ? <div className="text-center">loading...</div> : (
                    <table id="customers">
                        <tr>
                            <th>Sd</th>
                            <th>Name</th>
                        </tr>
                        {tableUsersData &&
                            tableUsersData.map(el => (
                                <tr onClick={handleClick}>
                                    <td>{el.sd}</td>
                                    <td>{el.dName}</td>
                                </tr>
                            ))
                        }

                    </table>
                )}


            </div>
        </div>
    )
}

export default Users