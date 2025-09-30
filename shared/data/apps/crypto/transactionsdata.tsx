export interface TransactionType {
    id: number;
    transactionsId: string;
    date: string;
    type: string;
    amount: string;
    status: string;
    currency: string;
    image: string;
    address: string;
    typeColor: string;
    statusColor: string;
}

export const TransactionsData: TransactionType[] = [
    { id: 1, transactionsId: 'TXN123456789', date: '2024-06-01 10:15:22', typeColor: 'danger', type: 'Withdrawal', amount: '0.5 BTC', statusColor: 'primary', status: 'Completed', currency: 'Bitcoin (BTC)', image: '../../../assets/images/crypto-currencies/regular/Bitcoin.svg', address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', },
    { id: 2, transactionsId: 'TXN987654321', date: '2024-06-02 14:30:45', typeColor: 'success', type: 'Deposit', amount: '10.0 ETH', statusColor: 'secondary', status: 'Pending', currency: 'Ethereum (ETH)', image: '../../../assets/images/crypto-currencies/regular/Ethereum.svg', address: '0x32Be343B94f860124dC4fEe278FDCBD38C102D88', },
    { id: 3, transactionsId: 'TXN567890123', date: '2024-06-03 09:45:10', typeColor: 'info', type: 'Buy', amount: '50.0 LTC', statusColor: 'primary', status: 'Completed', currency: 'Litecoin (LTC)', image: '../../../assets/images/crypto-currencies/regular/litecoin.svg', address: 'MV3rLMY1Tep6Rhbt4x8fZ2rERKx1CBYKFz', },
    { id: 4, transactionsId: 'TXN246801357', date: '2024-06-04 16:20:55', typeColor: 'secondary', type: 'Sell', amount: '1000 XRP', statusColor: 'success', status: 'Failed', currency: 'Ripple (XRP)', image: '../../../assets/images/crypto-currencies/regular/Ripple.svg', address: 'rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh', },
    { id: 5, transactionsId: 'TXN654321789', date: '2024-06-05 11:55:30', typeColor: 'warning', type: 'Transfer', amount: '1.2 BTC', statusColor: 'primary', status: 'Completed', currency: 'Bitcoin (BTC)', image: '../../../assets/images/crypto-currencies/regular/Bitcoin.svg', address: '3BbDtxBSjgfTRxaBUgRqAeW1XVo8JpEzYy', },
    { id: 6, transactionsId: 'TXN135790246', date: '2024-06-06 08:10:18', typeColor: 'danger', type: 'Withdrawal', amount: '5.5 ETH', statusColor: 'secondary', status: 'Pending', currency: 'Ethereum (ETH)', image: '../../../assets/images/crypto-currencies/regular/Ethereum.svg', address: '0x1dF62f291b2E969f6B5e158bcCC90eD80720D82e', },
    { id: 7, transactionsId: 'TXN789012345', date: '2024-06-07 15:20:35', typeColor: 'success', type: 'Deposit', amount: '0.8 BTC', statusColor: 'primary', status: 'Completed', currency: 'Bitcoin (BTC)', image: '../../../assets/images/crypto-currencies/regular/Bitcoin.svg', address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX', },
    { id: 8, transactionsId: 'TXN456789012', date: '2024-06-08 12:55:50', typeColor: 'secondary', type: 'Sell', amount: '25.0 LTC', statusColor: 'primary', status: 'Completed', currency: 'Litecoin (LTC)', image: '../../../assets/images/crypto-currencies/regular/litecoin.svg', address: 'LPnPZ8qY2TAnYXUTtrBMHK5h8BQ4mP51sU', },
    { id: 9, transactionsId: 'TXN901234567', date: '2024-06-09 09:30:05', typeColor: 'info', type: 'Buy', amount: '500 XRP', statusColor: 'secondary', status: 'Pending', currency: 'Ripple (XRP)', image: '../../../assets/images/crypto-currencies/regular/Ripple.svg', address: 'rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg', },
    { id: 10, transactionsId: 'TXN234567890', date: '2024-06-10 14:45:22', typeColor: 'warning', type: 'Transfer', amount: '1.0 BTC', statusColor: 'primary', status: 'Completed', currency: 'Bitcoin (BTC)', image: '../../../assets/images/crypto-currencies/regular/Bitcoin.svg', address: '3CwTjvdAx2T1ZCFjHoUYaX6jTEy4d8BQsE', },
];
