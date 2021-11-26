import React from 'react';


const Experience=props=>{
    

    
        const {  
            infos,
            index,
            fillCompanyName,
            fillPosition,
            fillWorkStartDate,
            fillWorkEndDate,
            deleteWork            
          } = props;
          let deleteButton=index>0?<button className="btn btn-del" onClick={deleteWork.bind(this,index)}>Delete</button>:null;
          let lineBreak=index===1?<div className="line" ></div>:null;
          let lineBreak2=index>0?<div className="line" ></div>:null;
          
        return(
            
            <form  action="">
                {lineBreak}
                <div className="input-div">
                    <input value={infos[index].companyname} onChange={fillCompanyName.bind(this,index)} type="text" minLength="2" maxLength="40" placeholder="Company's name" id="companyname" required/>
                </div>
                <div className="input-div">
                    <input value={infos[index].position} onChange={fillPosition.bind(this,index)} type="text" minLength="2" maxLength="40" placeholder="Title" id="title" required/>
                </div>
                <div className="date-div">
                    <label>From</label>
                    <input value={infos[index].startdate} onChange={fillWorkStartDate.bind(this,index)} type="date" name="from" id="from" required />
                </div>
                <div className="date-div">
                    <label >To</label>
                    <input value={infos[index].enddate} onChange={fillWorkEndDate.bind(this,index)} type="date" name="to" id="to" required />
                </div>
                {lineBreak2}
                <div className="btn-container">
                    {deleteButton}
                </div>
            </form>
               

            
           
        )
    

}

export default Experience;