import React, { Component } from 'react'

import { Table } from 'antd';
import 'antd/lib/table/style/css';


import EndPointRecord from './EndPointRecord';



class CollectionInfo extends Component {
    render() {
        return (
            <div>
                <p>

                    <EndPointRecord></EndPointRecord>
                    <EndPointRecord></EndPointRecord>
                    <EndPointRecord></EndPointRecord>
                    <EndPointRecord></EndPointRecord>
                </p>
            </div>
        )
    }
}

export default CollectionInfo