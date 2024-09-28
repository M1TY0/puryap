import IProductModel from "./IProductModel";

export default class ProductModel implements IProductModel {
  id: number;
  name: string;
  code: string;
  info: string;
  photo: string;
  type: string;
  subType: string;
  description: string
  numberOfPhotos: number;
  constructor();
  constructor(obj?: IProductModel);
  constructor(obj?: any) {
    this.id = obj && obj.id;
    this.name = obj && obj.name;
    this.code = obj && obj.code;
    this.info = obj && obj.info;
    this.photo = obj && obj.photo;
    this.type = obj && obj.type;
    this.subType = obj && obj.subType;
    this.description = obj && obj.description;
    this.numberOfPhotos = obj && obj.numberOfPhotos;
  }
}
