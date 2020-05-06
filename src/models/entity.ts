export interface Entity {
  name: string; // 名称
  id: string; // 物理名
  type: string; // 型(string, number, boolean, etc., none: ボタンなど型が無い場合)
  value?: string;
  length?: string;
  desc?: string;
}

export interface Entities {
  entities: Entity[];
}
