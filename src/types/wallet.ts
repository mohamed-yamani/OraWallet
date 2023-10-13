// Carousel data

type UpgradeApplication = {
    applicationId: string;
    reason: string;
    status: string;
    type: string;
};

export type Account = {
    accountNumber: string;
    rib: string;
    productCode: string;
};

export type Wallet = {
    accounts: Account[] | undefined;
    cardNumber: string;
    clientNumber: string;
    embossedName: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    switchDefault: string;
    upgradeApplication: UpgradeApplication;
    walletBalance: string;
};


// history of transactions

export type Transaction = {
    reference: string;
    amount: string; // If the amount can be a number, then change to 'number'
    phonenum: string;
    accountNumber: string;
    status: string;
    statusdate: string; // If you're sure it'll always be in this format, then string is fine.
    statusYear: string;
    type: string;
    transSign: string;
    lastName: string;
    firstName: string;
    libelle: string;
};

export type TransactionsData = {
    transactions: Transaction[];
    balance: number;
};


