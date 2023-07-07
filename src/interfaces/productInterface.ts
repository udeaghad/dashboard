export interface IProduct {
  business_model: {id: number, name: string};
  categories: {id: number, name: string}[];
  company: {
    address: {
      city: {name: string};
      country: {name: string};
      house: string;
      latitude: string;
      longitude: string;
      street: string;
      zipCode: string;
    };
    logo: string;
    name: string;    
  };
  description: string;
  id: number;
  implementationEffortText: string | null;
  investmentEffort: string;
  name: string; 
  picture: string;
  trl: {id: number, name: string};
  type: {id: number, name: string};
  user: {
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    position: string;
    profilePicture: string;
    sex: number;
  };
  video: string;
}