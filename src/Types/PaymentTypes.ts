 export interface PaymentInteraface {
   /** Цена за процент занятой площади парковки в час */
  priceForOnePercentInHour: number;
  /** Общая стоимость парковки машины */
  cost: number;
  /** Скидка */
  discount: number;
}