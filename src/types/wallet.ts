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


