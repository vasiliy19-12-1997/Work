
const api ="https://min-api.cryptocompare.com/data/price?";

type ExchangeRatePromise = Promise<{"USD": number} | {Response: "Error"}>;

export function requestExchangeRateByToken(titleExchangeRate: string): ExchangeRatePromise  {
    const token = `fsym=${titleExchangeRate}`;
    const sumbol = `&tsyms=USD`;
    const promise = fetch(api + token + sumbol)
      .then(answer => answer.json());

    return promise
}

