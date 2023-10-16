import React, { createContext } from 'react';
import { WalletContextValue } from './WalletProvider';




const WalletContext = React.createContext<WalletContextValue | undefined>(undefined);


export default WalletContext;
