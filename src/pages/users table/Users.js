import { Table } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersTableData } from '../../redux/tableUsersData';
import {fetchTables } from '../../redux/tables/tables'
import {fetchReports } from '../../redux/reports/reports'
import {userDataAction} from '../../redux/userData';
import OverLay from './OverLay';
import { useNavigate } from "react-router-dom";

import './table.css'
function Users() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { tableUsersData, loading, error } = useSelector(state => state.tapleDataSlice)
    const tableDataSlice = tableUsersData.slice(1, tableUsersData.length)
 
    useEffect(() => {
        dispatch(fetchUsersTableData())
    }, [dispatch])

    const handleClick = (data) => {
        console.log(data.sd)
        dispatch(userDataAction(data)) 
        dispatch(fetchTables(data.sd))
        dispatch(fetchReports(data.sd))
        navigate('/user');
     }

    return (
        <div>
            <OverLay tableUsersData={tableUsersData} loading={loading} error={error} />
            <div style={{ paddingTop: '200px',marginBottom:"20px" }}>
                {loading ? <div className='text-center'>تحميل ...</div>: (
                    <table id="customers">
                        {/* <tr>
                            <th>...</th>
                            <th>...</th>
                        </tr> */}
                        {tableDataSlice &&
                            tableDataSlice.map(el => (
                                <tr onClick={() => handleClick(el)}>
                                    <td>{el.sd}</td>
                                    <td>{el.nameF}</td>
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