export interface IProduct {
  businessModels: {id: number, name: string}[];
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

export interface IProductCard extends IProduct {
  isLoaded: boolean;
  GoogleMap: any;
  center: {lat: number; lng: number};
  map: any;
  setMap: React.Dispatch<React.SetStateAction<any>>;
  containerStyle: {width: string; height: string};
  Marker: any;
  showMap: boolean;
  configuration: { hasUserSection: boolean}
}

export interface NavBarProps {
  mainColor: string;
  navigation: { name: string; href: string; current: boolean }[];
  classNames: (...classes: string[]) => string;
}

export interface IEditOfferDetails extends IProduct {
  handleAddCategory: (e: React.KeyboardEvent<HTMLElement>) => void;
  categoriesRef: React.RefObject<HTMLInputElement>
  businessModelRef: React.RefObject<HTMLInputElement>
  handleAddBusinessModel: (e: React.KeyboardEvent<HTMLElement>) => void;
  getTRL: {id: string; name: string}[];
  selectedTRL: {id: string; name: string} | null; 
  setSelectedTRL: React.Dispatch<React.SetStateAction<{id: string; name: string} | null>>;  
  handeDeleteCategory: (id: number) => void;
  handleDeleteBusinessModel: (id: number) => void;
}

export interface IEditProductCard extends IProduct {
  setEditDescription: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateDescription: () => void;
  changed: boolean
}

export interface IEditVideoPlayer extends IProduct {
  handleVideoLinkChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  videoRef: React.RefObject<HTMLInputElement>;
}