import React from "react";
import CardList from "../components/CardList";
import { MultiList } from "@appbaseio/reactivesearch";
const MainPage = () => {
  return (
    <>
      {/* <MultiList
        componentId="authorsfilter"
        dataField="authors.keyword"
        title="Filter by Authors"
        aggregationSize={5}
      /> */}
      <CardList />
    </>
  );
};

export default MainPage;
