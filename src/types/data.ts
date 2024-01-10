export interface IBook {
  imageUrl: string ;
  title: string ;
  author: string;
  id?: string ;
  _id?: string;
  handleOpen?: (event: any) => void;
  isLibraryBookCard?: boolean;
  isModalBookCard?: boolean;
  totalPages?: number;
  addToLib?: boolean;
  imgWidth?: any;
  imgHeight?: any;
}