export interface BillingProperties {
  address_1: string;
  address_2?: string;
  city: string;
  company?: string;
  country: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  postcode: string;
  state: string;
}

export interface ShippingProperties {
  address_1: string;
  address_2?: string;
  city: string;
  company?: string;
  country: string;
  first_name: string;
  last_name: string;
  postcode: string;
  state: string;
}

export interface MetaDataProperties {
  id: number;
  key: string;
  value: string;
}

export interface LineItemProperties {
  id: number;
  meta_data: MetaDataProperties[] | MetaDataProperties;
  name: string;
  price: string;
  product_id: number;
  quantity: number;
  sku: string;
  subtotal_tax: string;
  subtotal: string;
  tax_class: string;
  taxes: any[];
  total_tax: string;
  total: string;
  variation_id: number;
}

export interface TaxLinesProperties {
  id: number;
  rate_code: string;
  rate_id: string;
  label: string;
  compound: boolean;
  tax_total: string;
  shipping_tax_total: string;
  meta_data: MetaDataProperties[] | MetaDataProperties;
}

export interface ShippingLinesProperties {
  id: number;
  method_title: string;
  method_id: string;
  total: string;
  total_tax: string;
  taxes: TaxLinesProperties[] | TaxLinesProperties;
  meta_data: MetaDataProperties[] | MetaDataProperties;
}

export interface FeeLinesProperties {
  id: number;
  name: string;
  tax_class: string;
  tax_status: string;
  total: string;
  total_tax: string;
  taxes: TaxLinesProperties[] | TaxLinesProperties;
  meta_data: MetaDataProperties[] | MetaDataProperties;
}

export interface CouponLinesProperties {
  id: number;
  code: string;
  discount: string;
  discount_tax: string;
  meta_data: MetaDataProperties[] | MetaDataProperties;
}

export interface RefundsProperties {
  id: number;
  reason: string;
  total: string;
}

export interface TaxesProperties {
  id: number;
  rate_code: string;
  rate_id: string;
  label: string;
  compound: boolean;
  tax_total: string;
  shipping_tax_total: string;
  meta_data: MetaDataProperties[] | MetaDataProperties;
}

export interface Order {
  billing?: BillingProperties;
  cart_hash?: string;
  cart_tax?: string;
  coupon_lines?: CouponLinesProperties;
  created_via?: string;
  currencty?: string;
  customer_id?: number;
  customer_ip_address?: string;
  customer_note?: string;
  customer_user_agent?: string;
  date_completed_gmt?: Date;
  date_completed?: Date;
  date_created_gmt?: Date;
  date_created?: Date;
  date_modified_gmt?: Date;
  date_modified?: Date;
  date_paid_gtm?: Date;
  date_paid?: Date;
  discount_tax?: string;
  discount_total?: string;
  fee_lines?: FeeLinesProperties;
  id: number;
  line_items?: LineItemProperties;
  meta_data?: MetaDataProperties;
  number?: string;
  order_key?: string;
  parent_id?: number;
  payment_method_title?: string;
  payment_method?: string;
  prices_include_tax?: boolean;
  refunds?: RefundsProperties;
  set_paid?: boolean;
  shipping_lines?: ShippingLinesProperties;
  shipping_tax?: string;
  shipping_total?: string;
  shipping?: ShippingProperties;
  status?: string;
  tax_lines?: TaxLinesProperties;
  total_tax?: string;
  total?: string;
  transaction_id?: string;
  version?: string;
}
