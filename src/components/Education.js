import React from 'react';


const Education=props=>{
   

    
        
        const {infos,index,fillSchoolName,fillDegree,fillSchoolStartDate,fillSchoolEndDate,deleteEducation}=props;
        let deleteButton=index>0?<button className="btn btn-del" onClick={deleteEducation.bind(this,index)}>Delete</button>:null;        
        let lineBreak=index===1?<div className="line" ></div>:null;
        let lineBreak2=index>0?<div className="line" ></div>:null;
        
        
        return(    
            
                <form  action="">
                    {lineBreak}
                    <div className="input-div">
                        <input value={infos[index].schoolname} onChange={fillSchoolName.bind(this,index)} type="text" minLength="2" maxLength="15" placeholder="School's  name" id="schoolname" required/>                        
                    </div>
                    <div className="input-div">
                        <input value={infos[index].degree} onChange={fillDegree.bind(this,index)} type="text" minLength="2" maxLength="15" placeholder="Degree" id="degree" required/>                        
                    </div>
                    <div className="date-div">
                        <label>From</label>
                        <input value={infos[index].startdate} onChange={fillSchoolStartDate.bind(this,index)} type="date" name="from" id="from" required />                        
                    </div>
                    <div className="date-div">
                        <label>To</label>
                        <input value={infos[index].enddate} onChange={fillSchoolEndDate.bind(this,index)} type="date" name="to" id="to" required /> 
                    </div>
                    
                    {lineBreak2}
                    <div className="btn-container">
                        {deleteButton}                 
                    </div>
                </form>
                
            
           
        )
    

}

export default Education;