export interface Property {
  _id:string
  capacity:      number;
  address:       string;
  pricePerNight: PricePerNight;
  propertyType:  string;
  image: File;
}
export interface PricePerNight {
  price: number;
  date:  string;
}
