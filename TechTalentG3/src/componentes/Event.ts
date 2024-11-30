export interface Event {
    imageUrl: string;
    name: string;
    description: string;
    date: string;
    postalCode?: string; // Opcional
    coordinates?: [number, number]; // Opcional
  }
  