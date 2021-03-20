import React,{useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
 import AddIcon from '@material-ui/icons/Add';
 import CloseIcon from '@material-ui/icons/Close';
 import {Button,Checkbox} from '@material-ui/core';
import "./simpleAccordion.css";

export default function SimpleAccordion(props) {

   const Arrray=props.arrayName;  

   console.log("I am Array",Arrray)
  const items=[];
  for(var i=0;i<props.loopCounter;i++)
  {
    items.push(<div>
      <Checkbox  value="checkedA"/>
      <span style={{color:"#999999"}}>{Arrray[i]}</span>
      </div>)
  }
    
   const[iconName,setIcon]= useState(false);
   const[extra,setExtra]= useState(true);
   function handleClick(){
     setIcon(!iconName);
     setExtra(true);
   }
   function handleExtra(){
     setExtra(!extra);
   }

    return (
       
      <React.Fragment>
    
        <Accordion style={{boxShadow:"0px 0px 0px "}} >
          <AccordionSummary expandIcon={iconName ? <CloseIcon /> : <AddIcon/>} onClick={handleClick}>
            <Typography style={{color:"#333333",fontWeight:"bolder"}}>{props.children}</Typography >
          </AccordionSummary>
          <AccordionDetails >
            <Typography>
             {extra ? items :    props.arrayName.map((brand,key)=> {
           return(  <div key ={key}>
               <Checkbox key={key} value="checkedA"/>
               <span style={{color:"#999999"}} key={key}>{brand}</span>
               </div>)
             })}  
             <Button style={{color:"#FF7F7F",textTransform:"lowercase"}} onClick={handleExtra}>+{extra ? props.arrayName.length-props.loopCounter : 0} more</Button> 
             

           </Typography>
          </AccordionDetails>
          </Accordion>
          </React.Fragment>
    
  );
}