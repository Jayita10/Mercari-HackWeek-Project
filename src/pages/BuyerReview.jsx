import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { buyerReviewsData, buyerReviewsGrid } from '../data/dummy';
import { Header } from '../components';

const BuyerReview = () => {
  return (
    <div className='m-2 md:m-10 md:p-10 bg-white rounded-3xl'>
      <Header category='Pages/Reviews' title='Buyer Reviews' />
      <GridComponent id='gridcomp' dataSource={buyerReviewsData} allowPaging allowSorting>
        <ColumnsDirective>
          {buyerReviewsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]} />
      </GridComponent>
    </div>
  )
}

export default BuyerReview

