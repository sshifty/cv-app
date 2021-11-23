import React from 'react';


class GenInfo extends React.Component{
    

    render(){
        let phoneRegex=/^\+?(?:[0-9] ?){6,14}[0-9]$/;
        const {infos,fillAvatar,fillTitle,fillDescription,fillFullName,fillEmail,fillPhone,fillAddress}=this.props;
        return(
            <form  action="">
                <div className="input-div">
                    <input value={infos.fullname} onChange={fillFullName} type="text" minLength="2" maxLength="30" placeholder="Your name" id="fname" required/> 
                </div>
                <div className="input-div">
                    <input value={infos.email} onChange={fillEmail} type="email" name="email" id="email" placeholder="email" required/>
                </div>                               
                <div className="input-div">
                    <input value={infos.phone} onChange={fillPhone} type="text" id="phone" pattern={phoneRegex.source} placeholder="phone" required/>
                </div>
                <div className="input-div">
                    <input value={infos.address} onChange={fillAddress} type="text" minLength="2" maxLength="30" id="address"  placeholder="Address" required/>
                </div>
                <div className="input-div">
                    <input value={infos.title} onChange={fillTitle} type="text" minLength="2" maxLength="30" id="currentTitle"  placeholder="Position you are applying for!" required/>
                </div>
                <div className="input-div">
                    <textarea value={infos.description} onChange={fillDescription} name="desc" id="desc" cols="30" rows="10" placeholder="Description" minLength="10" maxLength="100" required></textarea>
                </div>
                <div className="input-div input-avatar">
                    <label htmlFor="myAvatar">
                        Upload a photo of yourself!                      
                        
                    </label>
                    <input onChange={fillAvatar} type="file" id="myAvatar" accept="image/png, image/jpeg"/>
                    
                </div>

            </form>
        )
    }

}

export default GenInfo;