interface ITempleateVariables {
  [key: string]: string | number;
}

export interface IParseMailTempleateDTO {
  template: string;
  variables: ITempleateVariables;
}
