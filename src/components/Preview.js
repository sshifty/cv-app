import React from 'react';
import emptyAvatar from '../img/empty_avatar.png'

const Preview =props=>{
    
    
        const {className,infos}=props;
        let {avatar}=infos.general;
        if(!avatar){
            avatar=emptyAvatar;
        }
        return(
            <div className={className} id={props.printableId}>
                <div className="preview-navbar">
                    <div className="full-name">
                        <h2>{infos.general.fullname}</h2>
                    </div>
                    <div >
                        <h4 className="navbar-title">{infos.general.title}</h4>
                    </div>
                </div>
                <div className="main">
                    <div className="left">
                        <div className="desc">
                            <h4 className="h4-title">Description</h4>
                            <p className="desc-p">{infos.general.description}</p>
                        </div>
                        <h4 className="h4-title">Experience</h4>
                        <div className="container">
                            {infos.work.map(item=>{
                                return(
                                    <div className="item">
                                        <div className="date">
                                            <p className="start">{item.startdate} -</p>
                                            <p className="end">{item.enddate}</p>
                                        </div>
                                        <div className="item-container">
                                            <h4 className="title">{item.position}</h4>
                                            <p className="name">{item.companyname}</p>
                                        </div>
                                    </div>
                                )
                            })}                            
                        </div>
                        <h4 className="h4-title">Education</h4>
                        <div className="container">
                            {infos.education.map(item=>{
                                return(
                                    <div className="item">
                                        <div className="date">
                                            <p className="start">{item.startdate} -</p>
                                            <p className="end">{item.enddate}</p>
                                        </div>
                                        <div className="item-container">
                                            <h4 className="title">{item.schoolname}</h4>
                                            <p className="name">{item.degree}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className="right">
                        <div className="img-container">
                            <img className="avatar" src={avatar} alt="personal photo" />
                        </div>
                        <div className="personal-details">
                            <div className="personal-item">
                                <h4>Address</h4>
                                <p>{infos.general.address}</p>
                            </div>
                            <div className="personal-item">
                                <h4>Phone Number</h4>
                                <p>{infos.general.phone}</p>
                            </div>
                            <div className="personal-item">
                                <h4>Email</h4>
                                <p>{infos.general.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default Preview;