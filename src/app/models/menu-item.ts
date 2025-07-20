export interface MenuItem {
  label: string;
  route?: string;
  submenu?: { label: string; route: string; }[];
}
