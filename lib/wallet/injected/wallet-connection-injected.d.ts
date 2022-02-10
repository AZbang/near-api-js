import { RequestSignTransactionsOptions, SignInOptions, WalletConnection } from "../wallet-connection";
import { Near } from '../../near';
import { Account } from '../../account';
export declare class WalletConnectionInjected extends WalletConnection {
    private injecteWallet;
    constructor(near: Near, appKeyPrefix: string | null, walletName: string);
    requestSignTransactions({ transactions }: RequestSignTransactionsOptions): Promise<void>;
    requestSignIn({ contractId, methodNames, successUrl, failureUrl }: SignInOptions): Promise<void>;
    isSignedIn(): boolean;
    getAccountId(): string;
    signOut(): boolean;
    account(): Account;
}