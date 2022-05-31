import React from 'react';

import { ChartsHeader, LineChart, PieChart } from '../../components';
import BarChart from '../../components/Charts/BarChart';
import { useStateContext } from '../../contexts/ContextProvider';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { dropdownData, pieChartData } from '../../data/dummy';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Line = () => {
  const { currentColor, currentMode } = useStateContext();
  return (<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Views" title="Product views" />
    <div className="flex justify-between items-center gap-2 mb-10">
            {/* <p className="text-xl font-semibold">Sales Overview</p> */}
            <DropDown currentMode={currentMode} />
          </div>
    <div className="w-full">
      <LineChart />
    </div>

    {/*Bar Chart*/}
    <ChartsHeader category="Profit" title="% Profit per Categories" />
      <div className=" w-full">
        <BarChart />
      </div>
    
  {/*Pie chart*/}
    <ChartsHeader category="Product Analysis" title="Current Status" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>

  </div>);

};
  

export default Line;