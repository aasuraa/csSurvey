import React, { useState } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';

import Header from '../../header';

function ResultLayoutMain(props) {

    const [valuesRates, setValuesRates] = useState([]);
    const [valuesComments, setValuesComments] = useState([]);
    // console.log(props.numberOfParts);
    for (const [x, y] of props.value.entries()) {
        if (y.q_type === "Rate") {

            let rateArr = [y.rate['0'], y.rate['1'], y.rate['2'], y.rate['3'], y.rate['4'], y.rate['5']];
            let total = [y.rate['0'] * 0, y.rate['1'] * 1, y.rate['2'] * 2, y.rate['3'] * 3, y.rate['4'] * 4, y.rate['5'] * 5];
            let sumTotal = total.reduce((a, b) => a+b, 0);
            let rateAvg = sumTotal / props.numberOfParts;
            let perArr = rateArr.map(element => element/props.numberOfParts);
            //Object.keys(total).map(total => total/props.numberOfParts);

            valuesRates.push({
                id: x+1,
                title: y.q_title,
                rate0: rateArr[0],
                rate1: rateArr[1],
                rate2: rateArr[2],
                rate3: rateArr[3],
                rate4: rateArr[4],
                rate5: rateArr[5],
                avg: rateAvg.toPrecision(3),
                per0: perArr[0].toPrecision(3),
                per1: perArr[1].toPrecision(3),
                per2: perArr[2].toPrecision(3),
                per3: perArr[3].toPrecision(3),
                per4: perArr[4].toPrecision(3),
                per5: perArr[5].toPrecision(3),
            });
        } else {
            valuesComments.push({
                id: x+1,
                title: y.q_title,
                comment: y.comment+" "
            });
        }
    }

    const columnsRates = [{
        dataField: 'id',
        text: '#',
        sort: true
      }, {
        dataField: 'title',
        text: 'Question',
        sort: true,
        headerStyle: {
          width: '60%', textAlign: 'center'
        }
      }, {
        dataField: 'rate5',
        text: '5'
      }, {
        dataField: 'rate4',
        text: '4'
      }, {
        dataField: 'rate3',
        text: '3'
      }, {
        dataField: 'rate2',
        text: '2'
      }, {
        dataField: 'rate1',
        text: '1'
      }, {
        dataField: 'rate0',
        text: 'N/A'
      }, {
        dataField: 'avg',
        text: 'Avg'
      }, {
        dataField: 'per5',
        text: '5%'
      }, {
        dataField: 'per4',
        text: '4%'
      }, {
        dataField: 'per3',
        text: '3%'
      }, {
        dataField: 'per2',
        text: '2%'
      }, {
        dataField: 'per1',
        text: '1%'
      }, {
        dataField: 'per0',
        text: 'N/A%'
      }];

      const columnsComments = [{
        dataField: 'id',
        text: '#',
        sort: true
      }, {
        dataField: 'title',
        text: 'Question',
        sort: true,
        headerStyle: {
          width: '70%', textAlign: 'center'
        }
      }, {
        dataField: 'comment',
        text: 'Comments'
      }];

    return (
      <>
        <BootstrapTable 
            keyField="id"
            data={ valuesRates }
            columns={ columnsRates } />
            <br />
          <BootstrapTable 
              keyField="id"
              data={ valuesComments }
              columns={ columnsComments } />
      </>
    );
}

export default ResultLayoutMain;