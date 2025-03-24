export const TimeUnit = {
    MILLISECOND: 'MILLISECOND',
    millisecond: 'millisecond',
    MICROSECOND: 'MICROSECOND',
    microsecond: 'microsecond',
} as const;
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];

// Spot constants
export const SPOT_REST_API_PROD_URL = 'https://api.binance.com';
export const SPOT_REST_API_TESTNET_URL = 'https://testnet.binance.vision';
export const SPOT_WS_API_PROD_URL = 'wss://ws-api.binance.com:443/ws-api/v3';
export const SPOT_WS_API_TESTNET_URL = 'wss://ws-api.testnet.binance.vision/ws-api/v3';
export const SPOT_WS_STREAMS_PROD_URL = 'wss://stream.binance.com:9443';
export const SPOT_WS_STREAMS_TESTNET_URL = 'wss://stream.testnet.binance.vision';
export const SPOT_REST_API_MARKET_URL = 'https://data-api.binance.vision';
export const SPOT_WS_STREAMS_MARKET_URL = 'wss://data-stream.binance.vision';

// Algo constants
export const ALGO_REST_API_PROD_URL = 'https://api.binance.com';
export const ALGO_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Auto Invest constants
export const AUTO_INVEST_REST_API_PROD_URL = 'https://api.binance.com';
export const AUTO_INVEST_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// C2C constants
export const C2C_REST_API_PROD_URL = 'https://api.binance.com';
export const C2C_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Convert constants
export const CONVERT_REST_API_PROD_URL = 'https://api.binance.com';
export const CONVERT_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Copy Trading constants
export const COPY_TRADING_REST_API_PROD_URL = 'https://api.binance.com';
export const COPY_TRADING_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Crypto Loan constants
export const CRYPTO_LOAN_REST_API_PROD_URL = 'https://api.binance.com';
export const CRYPTO_LOAN_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Derivatives Trading (COIN-M Futures) constants
export const DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL = 'https://dapi.binance.com';
export const DERIVATIVES_TRADING_COIN_FUTURES_REST_API_TESTNET_URL =
    'https://testnet.binancefuture.com';
export const DERIVATIVES_TRADING_COIN_FUTURES_WS_API_PROD_URL =
    'wss://ws-dapi.binance.com/ws-dapi/v1';
export const DERIVATIVES_TRADING_COIN_FUTURES_WS_API_TESTNET_URL =
    'wss://testnet.binancefuture.com/ws-dapi/v1';
export const DERIVATIVES_TRADING_COIN_FUTURES_WS_STREAMS_PROD_URL = 'wss://dstream.binance.com';
export const DERIVATIVES_TRADING_COIN_FUTURES_WS_STREAMS_TESTNET_URL =
    'wss://dstream.binancefuture.com';

// Derivatives Trading (USDS Futures) constants
export const DERIVATIVES_TRADING_USDS_FUTURES_REST_API_PROD_URL = 'https://fapi.binance.com';
export const DERIVATIVES_TRADING_USDS_FUTURES_REST_API_TESTNET_URL =
    'https://testnet.binancefuture.com';
export const DERIVATIVES_TRADING_USDS_FUTURES_WS_API_PROD_URL =
    'wss://ws-fapi.binance.com/ws-fapi/v1';
export const DERIVATIVES_TRADING_USDS_FUTURES_WS_API_TESTNET_URL =
    'wss://testnet.binancefuture.com/ws-fapi/v1';
export const DERIVATIVES_TRADING_USDS_FUTURES_WS_STREAMS_PROD_URL = 'wss://fstream.binance.com';
export const DERIVATIVES_TRADING_USDS_FUTURES_WS_STREAMS_TESTNET_URL =
    'wss://stream.binancefuture.com';

// Derivatives Trading (Options) constants
export const DERIVATIVES_TRADING_OPTIONS_REST_API_PROD_URL = 'https://eapi.binance.com';
export const DERIVATIVES_TRADING_OPTIONS_WS_STREAMS_PROD_URL =
    'wss://nbstream.binance.com/eoptions';

// Derivatives Trading (Portfolio Margin) constants
export const DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL = 'https://papi.binance.com';
export const DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_TESTNET_URL =
    'https://testnet.binancefuture.com';

// Derivatives Trading (Portfolio Margin Pro) constants
export const DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_PROD_URL =
    'https://fapi.binance.com';
export const DERIVATIVES_TRADING_PORTFOLIO_MARGIN_PRO_REST_API_TESTNET_URL =
    'https://testnet.binancefuture.com';

// Dual Investment constants
export const DUAL_INVESTMENT_REST_API_PROD_URL = 'https://api.binance.com';
export const DUAL_INVESTMENT_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Fiat constants
export const FIAT_REST_API_PROD_URL = 'https://api.binance.com';
export const FIAT_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Gift Card constants
export const GIFT_CARD_REST_API_PROD_URL = 'https://api.binance.com';
export const GIFT_CARD_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Margin Trading constants
export const MARGIN_TRADING_REST_API_PROD_URL = 'https://api.binance.com';
export const MARGIN_TRADING_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Mining constants
export const MINING_REST_API_PROD_URL = 'https://api.binance.com';
export const MINING_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// NFT constants
export const NFT_REST_API_PROD_URL = 'https://api.binance.com';
export const NFT_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Pay constants
export const PAY_REST_API_PROD_URL = 'https://api.binance.com';
export const PAY_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Rebate constants
export const REBATE_REST_API_PROD_URL = 'https://api.binance.com';
export const REBATE_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Simple Earn constants
export const SIMPLE_EARN_REST_API_PROD_URL = 'https://api.binance.com';
export const SIMPLE_EARN_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Staking constants
export const STAKING_REST_API_PROD_URL = 'https://api.binance.com';
export const STAKING_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Sub Account constants
export const SUB_ACCOUNT_REST_API_PROD_URL = 'https://api.binance.com';
export const SUB_ACCOUNT_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// VIP Loan constants
export const VIP_LOAN_REST_API_PROD_URL = 'https://api.binance.com';
export const VIP_LOAN_REST_API_TESTNET_URL = 'https://testnet.binance.vision';

// Wallet constants
export const WALLET_REST_API_PROD_URL = 'https://api.binance.com';
export const WALLET_REST_API_TESTNET_URL = 'https://testnet.binance.vision';
