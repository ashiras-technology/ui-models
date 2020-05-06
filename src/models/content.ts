export interface Content {
  domain: string;
  name: string;
  id: string;
  desc?: string;
}

export interface Contents {
  contents: Content[];
}
