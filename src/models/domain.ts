export interface Domain {
  id: string;
  name: string;
  module: string;
  prefix: string;
  desc?: string;
}

export interface Domains {
  domain: Domain[];
}
