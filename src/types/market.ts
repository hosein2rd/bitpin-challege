type Market = {
  id: number;
  currency1: any;
  currency2: any;
  tradable: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: any;
  internal_price_info: any;
  price_info: any;
  price: string;
  title: string;
  code: string;
  title_fa: string;
  trading_view_source: string;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
  volume_24h: string;
  market_cap: string;
  circulating_supply: string;
  all_time_high: string;
};

export default Market;
