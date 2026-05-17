import { CLINIC } from "@/lib/data";

const destination = encodeURIComponent(CLINIC.address);
const coords = `${CLINIC.lat},${CLINIC.lng}`;

/** Google Maps links and embed URL (no API key required). */
export const CLINIC_MAP = {
  embedUrl: `https://www.google.com/maps?q=${coords}&z=16&hl=en&output=embed`,
  openUrl: `https://maps.google.com/?q=${destination}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
} as const;
