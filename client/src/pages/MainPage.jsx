import React, { useState } from "react";
import CardList from "../components/Card/CardList";
import SideBar from "../components/SideBar";
const MainPage = () => {
  const [data, setData] = useState(null);  

  const handleDataChange = (newData) => {  
    setData(newData); 
  }
  return (
    <div className="flex justify-between gap-5">
        <SideBar onDataChange={handleDataChange}/>
        {data && <CardList data={data} />}
    </div>
  );
};

export default MainPage;
