import React from 'react';
import './overlay.css';
import avataaars from '../../components/assets/avataaars.png'

function OverLay({ tableUsersData, loading }) {
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
                                <p>{firstObject? firstObject?.nameF: "مركز 2"}</p>   <span>:المركز</span>
                            </div>
                            <div className='info-description'>
                            <p>{firstObject? firstObject?.dName : "عطوه عبد الستار"}</p>   <span>:{firstObject ? firstObject?.dGrd : "استاذ"}</span>
                            </div>
                            <div className='info-description'>
                                <p>{firstObject? firstObject?.phone : "01111111111"}</p>   <span>:تلفون</span>
                            </div>
                            <div className='info-description'>
                                <p>{firstObject ? firstObject?.adrs : "عنوان مركز 2 مركز 2 مركز 12 مركز 2"}</p>   <span>:العنوان</span>
                            </div>

                        </div>
                    )}

                </div>
            </div>

        </div>
    )
}

export default OverLay