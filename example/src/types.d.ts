import { WalletDaemonProvider } from 'tari.js/src/providers/wallet_daemon/index';

export { };

declare global {
    interface Window {
        tari: TariProvider;
        ethereum: MetaMaskInpageProvider;
    }
}