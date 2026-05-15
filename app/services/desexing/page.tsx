import { createServicePage } from "@/lib/create-service-page";

const { generateMetadata, default: DesexingPage } = createServicePage("desexing");
export { generateMetadata };
export default DesexingPage;
