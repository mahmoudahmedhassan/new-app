import React from 'react';
import './overlay.css';
import avataaars from '../../components/assets/avataaars.png'

function OverLay({ tableUsersData, loading }) {
    console.log('tableUsersData',tableUsersData)
    let firstObject =tableUsersData&& tableUsersData[0];
 
    return (
        <div>
            <div className='overlay'>
                <div className='contant'>
                    <div>
                        <img src={avataaars} alt="profile" height='130px' />
                    </div>
                    {loading ? <div className='text-center'>loading...</div> : (
                        <div className='info'>
                            <div className='info-description-adrs'>
                                <p>{firstObject? firstObject?.nameF: tableUsersData.nameF}</p>   <span>:المركز</span>
                            </div>
                            <div className='info-description'>
                            <p>{firstObject? firstObject?.dName : tableUsersData.dName}</p>   <span>:{firstObject ? firstObject?.dGrd :tableUsersData.dGrd}</span>
                            </div>
                            <div className='info-description'>
                                <p>{firstObject? firstObject?.phone : tableUsersData.phone}</p>   <span>:تلفون</span>
                            </div>
                            <div className='info-description'>
                                <p>{firstObject ? firstObject?.adrs : tableUsersData.adrs}</p>   <span>:العنوان</span>
                            </div>

                        </div>
                    )}
                 </div>
            </div>
         </div>
    )
}

export default OverLay