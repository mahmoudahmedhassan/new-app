import React from 'react';
import './overlay.css';
function OverLay({ tableUsersData, loading }) {
    console.log('tableUsersData',tableUsersData)
    let firstObject =tableUsersData&& tableUsersData[0];
 
    return (
        <div>
            <div className='overlay'>
                <div className='contant'>
                    <div>
                        <img src={firstObject ? `data:image/jpeg;base64,${firstObject?.img}` : `data:image/jpeg;base64,${tableUsersData?.img}` } alt="profile" height='130px' />
                    </div>
                    {loading ? <div className='text-center'>تحميل ...</div> : (
                        <div className='info'>
                            <div className='info-description-adrs'>
                                <span> المركز :</span> <p>{firstObject? firstObject?.nameF: tableUsersData.nameF}</p>  
                            </div>
                            <div className='info-description'>
                            <span>{firstObject ? firstObject?.dGrd :tableUsersData.dGrd} :</span> <p>{firstObject? firstObject?.dName : tableUsersData.dName}</p>   
                            </div>
                            <div className='info-description'>
                            <span> تلفون :</span> <p>{firstObject? firstObject?.phone : tableUsersData.phone}</p>
                            </div>
                            <div className='info-description'>
                            <span>العنوان :</span>   <p>{firstObject ? firstObject?.adrs : tableUsersData.adrs}</p>  
                            </div>

                        </div>
                    )}
                 </div>
            </div>
         </div>
    )
}

export default OverLay