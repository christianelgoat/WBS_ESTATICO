export interface WBSItem {
  id: string;
  name: string;
  responsible: string;
  tools?: string;
  isDeliverable?: boolean;
  children?: WBSItem[];
}

export interface BusinessObjective {
  title: string;
  items: WBSItem[];
}
