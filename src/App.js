import './App.css';
import React,{useState} from 'react';
import CvForm from './components/CvForm';
import Preview from './components/Preview';
import ryan from './img/ryan.jpg';


const App=props=>{

  const [cvState,setCvState]=useState({
    general:{
      fullname:'',
      email:'',
      address:'',
      phone:'',
      avatar:'',
    },
    education:[
      {
        schoolname:'',
        degree:'',
        startdate:'',
        enddate:'',          
      },
    ],
    work:[
      {
        companyname:'',
        position:'',
        startdate:'',
        enddate:'',          
      },
    ]
  })
  
  
  const fillFullName=(e)=>{    
    setCvState(prevState=>{
      let tempGen=prevState.general;
      tempGen.fullname=e.target.value;
      return {
        ...prevState,
        general:tempGen
      }
    });
  };
  const fillAddress=(e)=>{    
    setCvState(prevState=>{
      let tempGen=prevState.general;
      tempGen.address=e.target.value;
      return {
        ...prevState,
        general:tempGen
      }
    });
  };
  const fillEmail=(e)=>{    
    setCvState(prevState=>{
      let tempGen=prevState.general;
      tempGen.email=e.target.value;
      return {
        ...prevState,
        general:tempGen
      }
    });
  };

  const fillPhone=(e)=>{    
    setCvState(prevState=>{
      let tempGen=prevState.general;
      tempGen.phone=e.target.value;
      return {
        ...prevState,
        general:tempGen
      }
    });
  };

  const fillTitle=(e)=>{    
    setCvState(prevState=>{
      let tempGen=prevState.general;
      tempGen.title=e.target.value;
      return {
        ...prevState,
        general:tempGen
      }
    });
  };
  
  const fillDescription=(e)=>{    
    setCvState(prevState=>{
      let tempGen=prevState.general;
      tempGen.description=e.target.value;
      return {
        ...prevState,
        general:tempGen
      }
    });
  };
  const fillAvatar=(e)=>{   
    setCvState(prevState=>{
      let tempGen=prevState.general;
      let av=URL.createObjectURL(e.target.files[0])
      tempGen.avatar=av;
      return {...prevState,
        general:tempGen
      }
    });
  };

  const fillSchoolStartDate=(index,e)=>{    
    setCvState(prevState=>{
      let tempEd=[...prevState.education];
      tempEd[index].startdate=e.target.value;
      return {...prevState,
        education:tempEd
      }
    });
  };
  const fillSchoolEndDate=(index,e)=>{    
    setCvState(prevState=>{
      let tempEd=[...prevState.education];
      tempEd[index].enddate=e.target.value;
      return {...prevState,
        education:tempEd
      }
    });
  };

  const fillDegree=(index,e)=>{
    setCvState(prevState=>{
      let tempEd=[...prevState.education];
      tempEd[index].degree=e.target.value;
      return {...prevState,
        education:tempEd
      }
    });
  };

  const fillSchoolName=(index,e)=>{
    setCvState(prevState=>{
      let tempEd=[...prevState.education];
      tempEd[index].schoolname=e.target.value;
      return {...prevState,
        education:tempEd
      }
    });
  }
  const newEducation=(e)=>{
    e.preventDefault();
    setCvState(prevState=>{
      return {...prevState,
        education:[...prevState.education,{}]
      }
    });
  }

  const fillCompanyName=(index,e)=>{
    setCvState(prevState=>{
      let tempWork=[...prevState.work];
      tempWork[index].companyname=e.target.value;
      return {...prevState,
        work:tempWork
      }
    });
  };
  const  fillPosition=(index,e)=>{
    setCvState(prevState=>{
      let tempWork=[...prevState.work];
      tempWork[index].position=e.target.value;
      return {...prevState,
        work:tempWork
      }
    });
  };
  const  fillWorkStartDate=(index,e)=>{
    setCvState(prevState=>{
      let tempWork=[...prevState.work];
      tempWork[index].startdate=e.target.value;
      return {...prevState,
        work:tempWork
      }
    });
  };
  const fillWorkEndDate=(index,e)=>{
    setCvState(prevState=>{
      let tempWork=[...prevState.work];
      tempWork[index].enddate=e.target.value;
      return {...prevState,
        work:tempWork
      }
    });
  };
  
  const newWork=(e)=>{
    e.preventDefault();
    setCvState(prevState=>{
      return {...prevState,
        work:[...prevState.work,{}]
      }
    });
  }
  const deleteWork=(index,e)=>{
    e.preventDefault();
    setCvState(prevState=>{      
      let tempWork=[...prevState.work];
      tempWork.splice(index,1);
     
      return {...prevState,
        work:tempWork
      }
    });
  };

  const deleteEducation=(index,e)=>{
    e.preventDefault();
    setCvState(prevState=>{
      let tempEd=[...prevState.education];
      tempEd.splice(index,1);      
      return {...prevState,
        education:tempEd
      }
    });
  };

  
  const reset=()=>{
    
    setCvState({
      general:{
        fullname:'',
        email:'',
        address:'',
        phone:'',
        avatar:'',
        title:'',
        description:''
      },
      education:[
        {
          schoolname:'',
          degree:'',
          startdate:'',
          enddate:''
        },
      ],
      work:[
        {
          companyname:'',
          position:'',
          startdate:'',
          enddate:''
        },
      ]
    });
  };

  

  const loadExample=()=>{
    setCvState({
      general:{
        fullname:'John Doe',
        email:'JohnDoe@gmail.com',
        address:'US Hollywood street 45 Groove street',
        phone:'+12548796218',
        avatar:ryan,
        title:'Software Developer',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus ut dolor at mattis. Quisque leo nulla, fermentum quis velit ac, dictum porttitor ex. Curabitur varius ac orci ut semper. Sed et maximus sem. Quisque at sem erat. Aliquam sit amet purus diam. Suspendisse suscipit est sed consequat mollis. Pellentesque a condimentum justo, in hendrerit sapien. Morbi at est sit amet augue sollicitudin bibendum eu sagittis diam. Suspendisse rhoncus fringilla aliquam. Sed ac velit sed elit egestas tincidunt. Ut id nunc vitae leo commodo egestas accumsan a velit. Mauris luctus ultricies semper. Quisque efficitur felis quis ultricies vulputate. Integer sed mollis lacus.'
      },
      education:[
        {
          schoolname:'Kwantlen Polytechnic University',
          degree:'Computer Science',
          startdate:'2000-01-01',
          enddate:'2004-05-05'
        },
        {
          schoolname:'Yale University',
          degree:'Masters of Computer Science ',
          startdate:'2005-05-01',
          enddate:'2006-05-05'
        },
      ],
      work:[
        {
          companyname:'Facebook',
          position:'Junior Software Developer',
          startdate:'2007-02-03',
          enddate:'2016-01-01'
        },
        {
          companyname:'Google',
          position:'CEO',
          startdate:'2016-02-03',
          enddate:'2018-01-01'
        },
      ]
    })
  }

  const  printOrder = () => {
    const printableElements = document.getElementById('printme').innerHTML;
    const orderHTML = '<html><body>' + printableElements + '</body></html>'
    const oldPage = document.body.innerHTML;
    document.body.innerHTML = orderHTML;
    window.print();
    document.body.innerHTML = oldPage;
    window.location.reload(false);
}


  
    return (
      <div className="App">
        <CvForm className="cv-form box"
          infos={cvState} 
          newEducation={newEducation}
          fillSchoolName={fillSchoolName}
          fillDegree={fillDegree}
          fillSchoolStartDate={fillSchoolStartDate}  
          fillSchoolEndDate={fillSchoolEndDate}
          fillFullName={fillFullName}  
          fillEmail={fillEmail}  
          fillPhone={fillPhone} 
          fillAddress={fillAddress}
          fillTitle={fillTitle}
          fillDescription={fillDescription} 
          fillAvatar={fillAvatar}
          fillCompanyName={fillCompanyName}  
          fillPosition={fillPosition}  
          fillWorkStartDate={fillWorkStartDate}  
          fillWorkEndDate={fillWorkEndDate}
          newWork={newWork}
          deleteWork={deleteWork}  
          deleteEducation={deleteEducation}
          reset={reset}
          loadExample={loadExample}
          printOrder={printOrder}
          
          />
          
        
        <Preview className="preview "
          infos={cvState}    
          printableId='printme'     
        />
      </div>
    );
  
}

export default App;
