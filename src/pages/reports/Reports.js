import React from 'react'
import classes from './index.module.css'
import { useSelector } from 'react-redux';

function Reports() {
    const { reports, loading } = useSelector(state => state.reportsSlice)

    return (
        <div className={classes.reports}>
            <div>
                {loading ? ("تحميل ...") : (

                    reports ? reports.map((el, index) => (
                        <div className={classes.reports_container}>
                            <img key={index} src={`data:image/jpeg;base64,${el?.img}`} alt="hdh" className={classes.tables_img} />
                        </div>
                    )) : null

                )}
            </div>
        </div>
    )
}

export default Reports