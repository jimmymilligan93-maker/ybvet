import { createServicePage } from "@/lib/create-service-page";

const { generateMetadata, default: DentalCarePage } = createServicePage("dental-care");
export { generateMetadata };
export default DentalCarePage;
