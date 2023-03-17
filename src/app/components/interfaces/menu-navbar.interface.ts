export interface MenuNavbar {
  link: string;
  label: string;
  icon?: string;
  active?: boolean;
  children?: MenuItem[];
}

export interface MenuItem {
  title: string;
  link?: string;
  icon?: string;
}
