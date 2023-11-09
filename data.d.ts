declare module "data" {
  export interface Movie {
    name: string;
    year: string;
    category: string;
    category2: string;
    img: string;
    marked: boolean;
  }

  const data: Movie[];
  export default data;
}
