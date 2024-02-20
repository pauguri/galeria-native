export type SRMColors = {
  [key: string]: string;
};

// PUNK API TYPES

type Volume = {
  value: number;
  unit: string;
};

type Temperature = {
  value: number;
  unit: string;
};

type MashTemp = {
  temp: Temperature;
  duration: number;
};

type Fermentation = {
  temp: Temperature;
};

type Method = {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: null | string;
};

type Amount = {
  value: number;
  unit: string;
};

type Malt = {
  name: string;
  amount: Amount;
};

type Hop = {
  name: string;
  amount: Amount;
  add: string;
  attribute: string;
};

type Ingredients = {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
};

type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};