/**
 * Dual-Exchange Arbitrage Example
 * Demonstrates price comparison between Binance and KuCoin
 */

import { Spot as BinanceSpot } from '@binance/spot';
import {
    ClientOptionBuilder,
    DefaultClient,
    GlobalApiEndpoint,
    Spot as KuCoinSpot,
} from 'kucoin-universal-sdk';

interface PriceComparison {
    symbol: string;
    binancePrice: number;
    binanceVolume: number;
    kuCoinPrice: number;
    kuCoinVolume: number;
    priceDifference: number;
    percentageDifference: number;
    arbitrageOpportunity: boolean;
}

/**
 * Fetch Binance ticker information
 */
async function getBinancePrice(symbol: string): Promise<{
    price: number;
    volume: number;
}> {
    try {
        const client = new BinanceSpot({
            configurationRestAPI: {
                apiKey: process.env.BINANCE_API_KEY,
                apiSecret: process.env.BINANCE_API_SECRET,
            },
        });

        const ticker = await client.restAPI.getTicker24hr({ symbol });
        return {
            price: parseFloat(ticker.lastPrice),
            volume: parseFloat(ticker.quoteAssetVolume),
        };
    } catch (error) {
        console.error(`Error fetching Binance price for ${symbol}:`, error);
        throw error;
    }
}

/**
 * Fetch KuCoin ticker information
 */
async function getKuCoinPrice(symbol: string): Promise<{ price: number; volume: number }> {
    try {
        const clientOption = new ClientOptionBuilder()
            .setKey(process.env.KUCOIN_API_KEY || '')
            .setSecret(process.env.KUCOIN_API_SECRET || '')
            .setPassphrase(process.env.KUCOIN_API_PASSPHRASE || '')
            .setSpotEndpoint(GlobalApiEndpoint)
            .build();

        const client = new DefaultClient(clientOption);
        const marketApi = client.restService().getSpotService().getMarketApi();

        // KuCoin uses hyphenated symbol format (e.g., BTC-USDT)
        const kuCoinSymbol = symbol
            .replace('USDT', '-USDT')
            .replace('BUSD', '-BUSD')
            .replace('USDC', '-USDC');

        const ticker = await marketApi.getTicker({ symbol: kuCoinSymbol });
        return {
            price: parseFloat(ticker.price),
            volume: parseFloat(ticker.volValue || '0'),
        };
    } catch (error) {
        console.error(`Error fetching KuCoin price for ${symbol}:`, error);
        throw error;
    }
}

/**
 * Compare prices between Binance and KuCoin
 */
async function comparePrices(binanceSymbol: string): Promise<PriceComparison | null> {
    try {
        console.log(`\nComparing prices for ${binanceSymbol}...`);

        const [binanceData, kuCoinData] = await Promise.all([
            getBinancePrice(binanceSymbol),
            getKuCoinPrice(binanceSymbol),
        ]);

        const priceDifference = binanceData.price - kuCoinData.price;
        const percentageDifference = (priceDifference / kuCoinData.price) * 100;

        // Arbitrage opportunity: price difference > 0.5%
        const arbitrageThreshold = 0.5;
        const hasArbitrage = Math.abs(percentageDifference) > arbitrageThreshold;

        const comparison: PriceComparison = {
            symbol: binanceSymbol,
            binancePrice: binanceData.price,
            binanceVolume: binanceData.volume,
            kuCoinPrice: kuCoinData.price,
            kuCoinVolume: kuCoinData.volume,
            priceDifference,
            percentageDifference,
            arbitrageOpportunity: hasArbitrage,
        };

        return comparison;
    } catch (error) {
        console.error(`Failed to compare prices for ${binanceSymbol}:`, error);
        return null;
    }
}

/**
 * Display price comparison results
 */
function displayResults(comparisons: (PriceComparison | null)[]) {
    console.log('\n╔════════════════════════════════════════════════════════════════╗');
    console.log('║               DUAL-EXCHANGE PRICE COMPARISON RESULTS             ║');
    console.log('╚════════════════════════════════════════════════════════════════╝\n');

    const validComparisons = comparisons.filter((c) => c !== null) as PriceComparison[];

    if (validComparisons.length === 0) {
        console.log('No valid comparisons available.');
        return;
    }

    validComparisons.forEach((comparison) => {
        console.log(`📊 ${comparison.symbol}`);
        console.log(`   Binance Price:  $${comparison.binancePrice.toFixed(8)}`);
        console.log(`   KuCoin Price:   $${comparison.kuCoinPrice.toFixed(8)}`);
        console.log(
            `   Difference:     $${comparison.priceDifference.toFixed(8)} (${comparison.percentageDifference.toFixed(2)}%)`
        );

        if (comparison.arbitrageOpportunity) {
            console.log(`   ⚡ ARBITRAGE OPPORTUNITY DETECTED!`);
            if (comparison.percentageDifference > 0) {
                console.log(`      → Buy on KuCoin, Sell on Binance`);
            } else {
                console.log(`      → Buy on Binance, Sell on KuCoin`);
            }
        } else {
            console.log(`   ℹ️  No significant arbitrage opportunity`);
        }
        console.log();
    });

    // Summary
    const withArbitrage = validComparisons.filter((c) => c.arbitrageOpportunity);
    console.log(`\n📈 Summary: ${withArbitrage.length} of ${validComparisons.length} pairs show arbitrage opportunities`);
}

/**
 * Main execution
 */
async function main() {
    console.log('=== Dual-Exchange Arbitrage Detector ===');
    console.log('Comparing prices between Binance and KuCoin\n');

    // Symbols to compare (Binance format)
    const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'ADAUSDT'];

    try {
        const comparisons = await Promise.all(symbols.map((symbol) => comparePrices(symbol)));
        displayResults(comparisons);
    } catch (error) {
        console.error('Error in arbitrage detection:', error);
    }
}

// Run the main function
main().catch(console.error);
