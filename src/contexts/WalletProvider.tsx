import React, {useState, ReactNode} from 'react';
import WalletContext from './WalletContext';

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({children}) => {
  const [walletPin, setWalletPin] = useState<string>('');
  const [otp, setOtp] = useState<string>('');

  const walletId: string = '0606060606';

  const createWalletDataToSend = {
    pin: walletPin,
    setWalletPin,
    otp,
    setOtp,
    walletId,
  };

  return (
    <WalletContext.Provider value={{createWalletDataToSend}}>
      {children}
    </WalletContext.Provider>
  );
};

export interface WalletContextValue {
  createWalletDataToSend: {
    pin: string;
    setWalletPin: (pin: string) => void;
    otp: string;
    setOtp: (otp: string) => void;

    walletId: string;
  };
}
