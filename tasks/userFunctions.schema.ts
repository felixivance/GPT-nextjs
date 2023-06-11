interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: Address;
    interests: string[];
    precisionServicePreferences: PrecisionServicePreferences;
  }
  
  interface Address {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  
  interface PrecisionServicePreferences {
    serviceType: string;
    preferredTime: string;
    budgetRange: BudgetRange;
  }
  
  interface BudgetRange {
    min: number;
    max: number;
  }