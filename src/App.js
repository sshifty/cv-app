import './App.css';
import React from 'react';
import CvForm from './components/CvForm';
import Preview from './components/Preview';
import ryan from './img/ryan.jpg';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
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
    }
  }

  
  fillFullName=(e)=>{    
    this.setState(prevState=>{
      let tempGen=prevState.general;
      tempGen.fullname=e.target.value;
      return {
        general:tempGen
      }
    });
  };
  fillAddress=(e)=>{    
    this.setState(prevState=>{
      let tempGen=prevState.general;
      tempGen.address=e.target.value;
      return {
        general:tempGen
      }
    });
  };
  fillEmail=(e)=>{    
    this.setState(prevState=>{
      let tempGen=prevState.general;
      tempGen.email=e.target.value;
      return {
        general:tempGen
      }
    });
  };

  fillPhone=(e)=>{    
    this.setState(prevState=>{
      let tempGen=prevState.general;
      tempGen.phone=e.target.value;
      return {
        general:tempGen
      }
    });
  };

  fillTitle=(e)=>{    
    this.setState(prevState=>{
      let tempGen=prevState.general;
      tempGen.title=e.target.value;
      return {
        general:tempGen
      }
    });
  };
  
  fillDescription=(e)=>{    
    this.setState(prevState=>{
      let tempGen=prevState.general;
      tempGen.description=e.target.value;
      return {
        general:tempGen
      }
    });
  };
  fillAvatar=(e)=>{   
    console.log(e.target.files[0]) 
    this.setState(prevState=>{
      let tempGen=prevState.general;
      let av=URL.createObjectURL(e.target.files[0])
      tempGen.avatar=av;
      return {
        general:tempGen
      }
    });
  };

  fillSchoolStartDate=(index,e)=>{    
    this.setState(prevState=>{
      let tempEd=[...prevState.education];
      tempEd[index].startdate=e.target.value;
      return {
        education:tempEd
      }
    });
  };
  fillSchoolEndDate=(index,e)=>{    
    this.setState(prevState=>{
      let tempEd=[...prevState.education];
      tempEd[index].enddate=e.target.value;
      return {
        education:tempEd
      }
    });
  };

  fillDegree=(index,e)=>{
    this.setState(prevState=>{
      let tempEd=[...prevState.education];
      tempEd[index].degree=e.target.value;
      return {
        education:tempEd
      }
    });
  };

  fillSchoolName=(index,e)=>{
    this.setState(prevState=>{
      let tempEd=[...prevState.education];
      tempEd[index].schoolname=e.target.value;
      return {
        education:tempEd
      }
    });
  }
  newEducation=(e)=>{
    e.preventDefault();
    this.setState(prevState=>{
      return {
        education:[...prevState.education,{}]
      }
    });
  }

  fillCompanyName=(index,e)=>{
    this.setState(prevState=>{
      let tempWork=[...prevState.work];
      tempWork[index].companyname=e.target.value;
      return {
        work:tempWork
      }
    });
  };
  fillPosition=(index,e)=>{
    this.setState(prevState=>{
      let tempWork=[...prevState.work];
      tempWork[index].position=e.target.value;
      return {
        work:tempWork
      }
    });
  };
  fillWorkStartDate=(index,e)=>{
    this.setState(prevState=>{
      let tempWork=[...prevState.work];
      tempWork[index].startdate=e.target.value;
      return {
        work:tempWork
      }
    });
  };
  fillWorkEndDate=(index,e)=>{
    this.setState(prevState=>{
      let tempWork=[...prevState.work];
      tempWork[index].enddate=e.target.value;
      return {
        work:tempWork
      }
    });
  };
  
  newWork=(e)=>{
    e.preventDefault();
    this.setState(prevState=>{
      return {
        work:[...prevState.work,{}]
      }
    });
  }
  deleteWork=(index,e)=>{
    e.preventDefault();
    this.setState(prevState=>{      
      let tempWork=[...prevState.work];
      tempWork.splice(index,1);
     
      return {
        work:tempWork
      }
    });
  };

  deleteEducation=(index,e)=>{
    e.preventDefault();
    this.setState(prevState=>{
      let tempEd=[...prevState.education];
      tempEd.splice(index,1);      
      return {
        education:tempEd
      }
    });
  };

  
  reset=()=>{
    
    this.setState({
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


  loadExample=()=>{
    this.setState({
      general:{
        fullname:'Ryan Reynolds',
        email:'ryanreyndols@HOT.com',
        address:'US Hot streeet 69 rim street',
        phone:'+12548796218',
        avatar:ryan,
        title:'Actor',
        description:`Hey I'm Ryan Reynolds. I think you already know me, hot ugy hehe hire me! Ákos is my favourite fan haha!`
      },
      education:[
        {
          schoolname:'Kwantlen Polytechnic University',
          degree:'Acting',
          startdate:'2000-01-01',
          enddate:'2004-05-05'
        },
        {
          schoolname:'Sexy University',
          degree:'Rimjob Specialist',
          startdate:'2005-05-01',
          enddate:'2006-05-05'
        },
      ],
      work:[
        {
          companyname:'Marvel Studio',
          position:'Actor',
          startdate:'2014-02-03',
          enddate:'2016-01-01'
        },
        {
          companyname:'Marvel Studio',
          position:'Actor',
          startdate:'2017-02-03',
          enddate:'2018-01-01'
        },
      ]
    })
  }

  printOrder = () => {
    const printableElements = document.getElementById('printme').innerHTML;
    const orderHTML = '<html><body>' + printableElements + '</body></html>'
    const oldPage = document.body.innerHTML;
    document.body.innerHTML = orderHTML;
    window.print();
    document.body.innerHTML = oldPage;
    window.location.reload(false);
}

  render(){
    return (
      <div className="App">
        <CvForm className="cv-form box"
          infos={this.state} 
          newEducation={this.newEducation}
          fillSchoolName={this.fillSchoolName}
          fillDegree={this.fillDegree}
          fillSchoolStartDate={this.fillSchoolStartDate}  
          fillSchoolEndDate={this.fillSchoolEndDate}
          fillFullName={this.fillFullName}  
          fillEmail={this.fillEmail}  
          fillPhone={this.fillPhone} 
          fillAddress={this.fillAddress}
          fillTitle={this.fillTitle}
          fillDescription={this.fillDescription} 
          fillAvatar={this.fillAvatar}
          fillCompanyName={this.fillCompanyName}  
          fillPosition={this.fillPosition}  
          fillWorkStartDate={this.fillWorkStartDate}  
          fillWorkEndDate={this.fillWorkEndDate}
          newWork={this.newWork}
          deleteWork={this.deleteWork}  
          deleteEducation={this.deleteEducation}
          reset={this.reset}
          loadExample={this.loadExample}
          printOrder={this.printOrder}
          />
          
        
        <Preview className="preview "
          infos={this.state}    
          printableId='printme'     
        />
      </div>
    );
  }
}

export default App;
