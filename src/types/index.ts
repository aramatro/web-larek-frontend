interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

interface IProductList {
  total: number;
  items: IProduct[];
}

interface IOrder {
  id: string;
  payment: PaymentType;
  address: string;
  email: string;
  phone: string;
  total: number; 
  items: IProduct[];
}
type PaymentType =  'online' | 'onDelivery';

type OrderResponse = ISuccessOrder | IErrorOrder;

interface ISuccessOrder {
  id: string;
  total: number;
}

interface IErrorOrder {
  error: string;
}