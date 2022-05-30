import React from 'react';

import { ChartsHeader, LineChart } from '../../components';
import BarChart from '../../components/Charts/BarChart';

const Line = () => (
  //Line chart
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Views" title="Product views" />
    <div className="w-full">
      <LineChart />
    </div>

    {/*Bar Chart*/}
    <ChartsHeader category="Likes" title="Product Likes" />
      <div className=" w-full">
        <BarChart />
      </div>
  </div>

);
  

export default Line;