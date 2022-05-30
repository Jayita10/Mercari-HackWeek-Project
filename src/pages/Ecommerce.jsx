import React from 'react';
import { BsCurrencyDollar, BsArrowDownRightCircleFill,BsEmojiLaughing, BsFillEyeFill,  BiLike, BsFillStarFill } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


import { PieChart, Button, LineChart, BarChart ,SparkLine, Stacked} from '../components';
import { earningData, performance, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import { Header } from '../components';



const Ecommerce = () => {
  const { currentColor } = useStateContext();
  
  return (
    <div className='mt-12'>
      <div className='m-2 md:m-10 md:p-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='Pages/Dashboard' title='Main Dashboard' />
          {/* <p>Quick Overview< BsArrowDownRightCircleFill /></p> */}
          <span className='text-2xl font-semibold flex m-3 flex-wrap justify-between'> 
                    Quick Overview
                   
          </span>
          <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
            {earningData.map((item) => (
              <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg}} className='text-2xl opacity=0.9 rounded-full p-4 hover:drop-shadow-xl'>
                    {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
              </div>
            ))}
          </div>

          {/* <p>< BsArrowDownRightCircleFill />Performance Analysis</p> */}
          {/* <p className=''>Quick Overview</p> */}
          <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
            {performance.map((item) => (
              <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg}} className='text-2xl opacity=0.9 rounded-full p-4 hover:drop-shadow-xl'>
                    {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
              </div>
            ))}
          </div>

          {/* <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center'>
            <div className='flex justify-left items-center'>
              <div>
                <p className='font-bold text-gray-400'>Earnings</p>
                <p className='text-2xl'>¥63,448.78</p>
              </div>
            </div>
              <div className='mt-6'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  text='Download'
                  borderRadius='10px'
                  size='md'
                />
              </div>
            </div>
            </div> */}
      

      {/*Revenue section*/}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">Account Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Revenue</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Profit</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">¥10,450</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Total Profit</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">¥40,354</p>

                <p className="text-gray-500 mt-1">Account Balance</p>
              </div>

              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>

        </div>

        <div>
        <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">¥4,396</p>
                <p className="text-gray-200">Monthly Profit</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">Ratings</p>
              <p className="text-gray-400">Positive/Negative</p>
            </div>

            <div className="w-40">
              <PieChart id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Ecommerce