import React from 'react';
import classes from './index.module.css'
import { useSelector, useDispatch } from 'react-redux';

function Tables() {
    const { tables, loading, error } = useSelector(state => state.tablesSlice)
    console.log('tables', tables)

    return (
        <div className={classes.table}>
            {loading ? ("تحميل ...") : (

                tables  ? tables.map((el, index) => (
                    <div className={classes.table_container} >
                        <img key={index} src={`data:image/jpeg;base64,${el?.img}`} alt="hdh" className={classes.tables_img} />
                    </div>
                )) : null

            )}
        </div>
    )
}

export default Tables