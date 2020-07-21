import React from "react";
import AvailableOptions from './AvailableOptions'
import SelectedOptions from './SelectedOptions'

function TrasferList() {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Available options" />
      <SelectedOptions title="Selected options" />
    </div>
  );
}



export default TrasferList;