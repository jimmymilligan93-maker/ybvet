import { createServicePage } from "@/lib/create-service-page";

const { generateMetadata, default: MicrochippingPage } = createServicePage("microchipping");
export { generateMetadata };
export default MicrochippingPage;
