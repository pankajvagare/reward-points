import React, { useEffect, useState } from 'react'
import { TRANSACTION_API } from '../../helpers/constants';
import utils from '../../helpers/utils';
import { TranscationService } from '../../services/TranscationService';

export default function Transcations() {
    const [transactions, setTransactions] = useState([])
    const [totalRewards, setTotalRewards] = useState(0)

    useEffect(() => {
        TranscationService.
            getCustomerTranscation(TRANSACTION_API).then((res) => {
                setTransactions(res.transactions)
                let rewardsPoints = utils.getTotalcalculatePoints(res.transactions)
                setTotalRewards(rewardsPoints)
            })
    }, [])

    return (
        <div>
            <table id='transactions'>
                <thead>
                    <th>
                        Sr No
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Points
                    </th>
                </thead>
                <tbody>
                    {
                        transactions.map(item => {

                            return <tr>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.currency}{item.price}
                                </td>
                                <td>
                                    {item.rewardPoints}
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div id='total'>
                Total Reward Points : {totalRewards}
            </div>
        </div>
    )
}
