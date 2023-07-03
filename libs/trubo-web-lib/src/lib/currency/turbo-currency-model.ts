export interface TurboCurrencyModel {
    decimalSeparator: string;
    groupSeparator: string;
    groupSize: number[];
    identifier: string;
    identifierPadding: false;
    identifierPosition: string;
    maximumFraction: number;
    minimumFraction: number;
    currencyCode: string;
    currencySymbol?: string;
    countryCode: string;
    countryName: string;
    locale?: string;
}