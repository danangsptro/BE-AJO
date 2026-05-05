declare class SalesItemDto {
    product_id: number;
    qty: number;
    price: number;
    discount?: number;
}
export declare class CreateSalesDto {
    date: string;
    outlet_id: number;
    channel_id: number;
    items: SalesItemDto[];
}
export {};
