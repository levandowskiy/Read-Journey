export interface IBook {
  imageUrl: string ;
  title: string ;
  author: string;
  id?: string ;
  _id?: string;
  handleOpen?: (event: any) => void;
  totalPages?: number;
  addToLib?: boolean;
}