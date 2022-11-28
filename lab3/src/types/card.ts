export interface Card {
  id: number;
  image: string;
  title: string;
  desc: string;
  comics?: number[];
  series?: number[];
  characters?: number[];
}
