export interface IProduct {
  category: number;
  id: number;
  logo: string;
  name: string;
  quantity: number;
  description: string;
}

export interface IProducts {
  products?: IProduct[];
}
