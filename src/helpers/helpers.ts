export function formatCurrency(quantity: number) {
    const userLanguage = navigator.language || 'en-US';
    const countryCode = userLanguage.split('-')[1] || 'US';
    const currencyCode = countryToCurrency(countryCode);
    
    return new Intl.NumberFormat(userLanguage, {
        style: 'currency', currency: currencyCode
    }).format(quantity);
}

function countryToCurrency(countryCode: string): string {
    const currencyMap: { [key: string]: string } = {
        US: 'USD',
        MX: 'MXN',
        JP: 'JPY',
        ES: 'EUR',
        EU: 'EUR',
    };
    return currencyMap[countryCode] || 'USD'; // DEFAULT USD
}
