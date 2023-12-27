export interface IBook {
  imageUrl: string ;
  title: string ;
  author: string;
  id: string ;
  handleOpen?: (event: any) => void;
  totalPages?: number;
}