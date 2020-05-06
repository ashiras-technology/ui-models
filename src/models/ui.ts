export interface Property {
  name: string; // Entity で定義されている名称
  label: string; // 表示名(画面に表示するラベル)
  component: string;
  icon?: string;
  width?: string;
  required?: boolean; // 必須バリデーション
  regex?: string; // 表現バリデーション
  format?: string; // フォーマット
  disabled?: boolean;
  event?: string[]; // 関連するイベント(click, dbclick, etc.)
}

export interface Section {
  part: string;
  properties: Property[];
}

export interface UI {
  id: string;
  section: Section[];
}
