export interface Project {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  cover: Cover;
  description: string;
  github: string;
  live: string;
  title: string;
}

export interface Cover {
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}
