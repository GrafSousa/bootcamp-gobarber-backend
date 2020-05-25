interface ITempleateVariables {
  [key: string]: string | number;
}

export interface IParseMailTempleateDTO {
  file: string;
  variables: ITempleateVariables;
}
