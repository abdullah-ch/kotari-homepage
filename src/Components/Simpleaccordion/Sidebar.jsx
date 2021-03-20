import React,{useState,useEffect} from "react";
import "./simpleAccordion.css";
import SimpleAccordion from "./simpleAccordion"

import data from "../Data/Data.json";




function Sidebar(){
    const myBrand = new Set();
    const myStore = new Set();
  
    const [array, setArray] = useState([]);
  
    const [arrayPrice, setArrayPrice] = useState([]);
  
    const [arrayBrand, setArrayBrand] = useState([]);
  
     const [arrayStore, setArrayStore] = useState([]);
  
     function ManageArray(){
      const arraySorting = () => {
        data.forEach((object) => {
          console.log("objectsss", object);
          if (object.approved === "true") {
            array.push(object);
          }
        });
  
        array.forEach((object) => {
          if (object.sellerType === "brand") {
            // arrayBrand.push(object.sellerName);
            myBrand.add(object.sellerName);
            arrayPrice.push(object.price);
          } else if (object.sellerType === "store") {
            myStore.add(object.sellerName);
            //arrayStore.push(object.sellerName);
            arrayPrice.push(object.price);
          }
        });
  
        console.log("Simple Array in which data was pushed", array);
  
        // console.log("Brand array has these names", myBrand.values());
  
        // console.log("Store array has these names", myStore);
  
        console.log("Price array has these names", arrayPrice);
  
        myBrand.forEach((object) => {
          console.log("I am BRAAAAAAAAAAAAAAAAND", object);
          arrayBrand.push(object);
        });
        myStore.forEach((object) => {
          console.log("I am BRAAAAAAAAAAAAAAAAND", object);
          arrayStore.push(object);
        });
  
        const maxPrice = Math.max(...arrayPrice);
        const minPrice = Math.min(...arrayPrice);
        console.log("Max and Min", maxPrice, minPrice);
      };
      arraySorting();
  
      console.log("Brand array has these names", arrayBrand);
     }
  
    useEffect(() => {
  
       ManageArray();
      // eslint-disable-next-line
    }, []);
    return(
        <div className="sidenav">
        <SimpleAccordion children="Brands" arrayName={arrayBrand} loopCounter={4}/>
        <SimpleAccordion children="Store" arrayName={arrayStore} loopCounter={1}/>
        </div>
    );

}

export default Sidebar;