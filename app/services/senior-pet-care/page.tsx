import { createServicePage } from "@/lib/create-service-page";

const { generateMetadata, default: SeniorPetCarePage } = createServicePage("senior-pet-care");
export { generateMetadata };
export default SeniorPetCarePage;
