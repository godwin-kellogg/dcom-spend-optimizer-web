export interface LoginScreenProps {
  onClickClickhere: () => void;
  onClickLogin: () => void;
  onTempRedirect : ()=>void;
}
export interface MSButtonProps {
  title: string;
  onClick?: () => void;
  color?: any;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large" | string;
  disabled?: boolean;
  endIcon?:any;
  startIcon?:any;
  sx?:any;
}
export interface HeaderContentProps {
  open: boolean;
  handleDrawerOpen: any;
  handleOpenUserMenu: any;
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: () => void;
  onClickLogout: () => void;
  isCurrentPath: boolean;
  headerText: string;
  toggleDrawer:any;
}
export interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
}
export interface DashboardLayoutProps {
  children: React.ReactNode;
};



export interface TPOChips {
  value:string|number;
  boolVal:boolean;
};

export interface TPOChipComponent {
  value:string|number;
  color:string;
  backGroundColor? : string;
  sx?:any|string;
};


export interface TPODetailsCard {
  budget:string|number;
  title:string;
  chipLabel:string;
  isChipActive:boolean;
  scenarios:number|string;
  titleClick:()=>void;
  visibleClick? : ()=>void;
  addClick?:()=>void;
  deleteClick?:()=>void;
}


export interface LinearProgressData {
  values:any;
  progress:number
}

export interface MSOCards {
  allocated:string|number;
  actual:string|number;
  imgUrl:string;
  productName:string;
}


interface buttons {
  name:string;
  navigation:string;
  variant?: "contained" | "outlined" | "text";
}
export interface LandingCard{
  img : string;
  header:string;
  subHeader:srting;
  buttons:buttons[];
}

export interface CardProps  {
  header:string;
  subHeader:string;
  bgColor?:string;
  actionLeft?:number|string;
  actionRight?:number|string;
  rightColor?: string;
  arrowIcon?:any;
};

export interface TPOData{
  cardTitle:string;
  titleChip:string;
  titleChipColor:any;
  budget:string|number;
  skuVal:string;
  chipCategory:any
  isData:boolean;
  onClickHeader?:() => void;
  onClickButton?:()=>void;
}

export interface AccordionData {
  icon: string;
  title: string;
  panel: string;
  toggleDrawer : (open:boolean) => () => void;
  content:any[];
};

export interface ComptetiorCardData {
  id:number;
  imgSrc : string;
  textData :string;
};

export interface calendarProps {
  onDateSelect?: (value: any) => void;
  isFrom?: boolean;
  timeframe?:string[];
}
export interface DropdownProps {
  initialValue:any;
  menuItem:any[];
  onChange?:(value:any)=>void;
};