export interface TestimonyType {
  id: number;
  name: string;
  role: string;
  avatar?: string;
  testimony: string;
}

export interface PricingType {
  id: number;
  type: "Starter" | "Pro" | "Enterprise" | "Agency" | "Free";
  price?: number | string;
  time?: "month" | "annual";
  desc?: string;
  button: {
    text: string;
    action: () => void;
  },
  features: {
    label: string;
    isAvailable: boolean;
  }[];
  isActive?: string;
  isMoney: boolean;
}