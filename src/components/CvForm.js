import React from 'react';
import GenInfo from './GenInfo';
import Education from './Education';
import Experience from './Experience';


const CvForm= props=>{
    const {
            
        printOrder,
        loadExample,
        reset,
        className,
        fillAddress,
      infos,
      fillFullName,
      fillEmail,
      fillPhone,
      fillDescription,
      fillAvatar,
      fillTitle,
      newEducation,
      fillSchoolName,
      fillDegree,
      fillSchoolStartDate,
      fillSchoolEndDate,
      fillCompanyName,
      fillPosition,
      fillWorkStartDate,
      fillWorkEndDate,
      newWork,
      deleteWork,
      deleteEducation
    } = props;
    return(
        <div className={className}>
            <h3 class="default-h3">General Information</h3>
            <GenInfo 
                fillFullName={fillFullName}
                fillEmail={fillEmail}
                fillPhone={fillPhone}
                fillAddress={fillAddress}
                fillDescription={fillDescription}
                fillTitle={fillTitle}
                fillAvatar={fillAvatar}
                infos={infos.general}
            />
            <div className="line-break"></div>
            <h3 class="default-h3">Experience</h3>
            {props.infos.work.map((item,i)=>{
                return <Experience 
                    fillCompanyName={fillCompanyName}
                    fillPosition={fillPosition}
                    fillWorkStartDate={fillWorkStartDate}
                    fillWorkEndDate={fillWorkEndDate}
                    newWork={newWork}
                    deleteWork={deleteWork}
                    key={i}
                    index={i}
                    infos={infos.work}
                />
            })}
            
            <div className="btn-container">
                <button className="btn btn-add" onClick={newWork}>Add </button>
            </div>
            <div className="line-break"></div>
            <h3 class="default-h3">Education</h3>
            {props.infos.education.map((item,i)=>{
                return <Education 
                    newEducation={newEducation}
                    deleteEducation={deleteEducation}
                    fillSchoolName={fillSchoolName}
                    fillDegree={fillDegree}
                    fillSchoolStartDate={fillSchoolStartDate}
                    fillSchoolEndDate={fillSchoolEndDate}                        
                    index={i} 
                    key={i}
                    infos={infos.education} 
                />
            })}
            <div className="btn-container">
                <button className="btn btn-add" onClick={newEducation}>Add </button>
            </div>
            <div className="line-break"></div>
            <div className="btn-container">
                <button className="btn btn-del" onClick={reset}>Reset </button>
            </div>
            <div className="btn-container">
                <button className="btn btn-example" onClick={loadExample}>Load Example </button>
            </div>

            <div className="btn-container">
                <button onClick={printOrder} className="btn btn-print">Generate PDF </button>
            </div>                
           
        </div>
    );
         
        
        
    
}

export default CvForm;