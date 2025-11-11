import { PricingType } from "@/types";

export const homePricing: PricingType [] = [
  {
    id: 1,
    type: "Starter",
    button: {
      text: "Get Started",
      action: () => {}
    },
    price: "0",
    desc: "For individuals and hobby projects.",
    time: "month",
    features: [
      {
        label: "1 Project",
        isAvailable: true
      },
      {
        label: "AI Architecture Map",
        isAvailable: true
      },
      {
        label: "Basic UI Kit",
        isAvailable: true
      }
    ],
    isMoney: true
  },
  {
    id: 2,
    isActive: "MOST POPULAR",
    type: "Pro",
    button: {
      text: "Start Free Trial",
      action: () => {}
    },
    price: 49,
    time: "month",
    desc: "For professionals and small teams.",
    features: [
      {
        label: "Unlimited Projects",
        isAvailable: true
      },
      {
        label: "Advanced Architecture",
        isAvailable: true
      },
      {
        label: "Customizable UI Kits",
        isAvailable: true
      },
      {
        label: "Code Export",
        isAvailable: true
      }
    ],
    isMoney: true
  },
  {
    id: 3,
    type: "Enterprise",
    price: "Contact Us",
    desc: "For large organizations and agencies.",
    button: {
      text: "Contact Sales",
      action: () => {}
    },
    features: [
      {
        label: "Everything in Pro",
        isAvailable: true
      },
      {
        label: "Team Collaboration",
        isAvailable: true
      },
      {
        label: "Dedicated Support",
        isAvailable: true
      }
    ],
    isMoney: false
  }
];

export const PricingPrices: PricingType[] = [
  {
    id: 1,
    type: "Free",
    time: "month",
    price: "0",
    features: [
      {
        label: "1 project",
        isAvailable: true
      },
      {
        label: "Basic architecture mapping",
        isAvailable: true
      },
      {
        label: "5 AI generations per month",
        isAvailable: true
      },
      {
        label: "Community support",
        isAvailable: true
      },
      {
        label: "Export capabilities",
        isAvailable: false
      },
      {
        label: "Advanced components",
        isAvailable: false
      }
    ],
    button: {
      action: () => {},
      text: "Get Started"
    },
    isMoney: true
  },

  {
    id: 2,
    isMoney: true,
    time: "month",
    type: "Pro",
    price: 29,
    isActive: "Most Popular",
    features: [
      {
        label: "Unlimited projects",
        isAvailable: true
      },
      {
        label: "Advanced architecture mapping",
        isAvailable: true
      },
      {
        label: "500 AI generations per month",
        isAvailable: true
      },
      {
        label: "Priority support",
        isAvailable: true
      },
      {
        label: "Full export capabilities",
        isAvailable: true
      },
      {
        label: "Advanced component library",
        isAvailable: true
      },
    ],
    button: {
      action: () => {},
      text: "Start Free Trial"
    }
  },

  {
    id: 3,
    time: "month",
    isMoney: true,
    type: "Agency",
    price: 99,
    button: {
      action: () => {},
      text: 'Contact Sales'
    },
    features: [
      {
        label: "Unlimited projects",
        isAvailable: true
      },
      {
        label: "Team collaboration",
        isAvailable: true
      },
      {
        label: "Unlimited AI generations",
        isAvailable: true
      },
      {
        label: "24/7 premium support",
        isAvailable: true
      },
      {
        label: "White-label exports",
        isAvailable: true
      },
      {
        label: "Custom integrations",
        isAvailable: true
      }
    ]
  }
];
