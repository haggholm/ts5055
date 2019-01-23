import { foo } from "@scope/child1";

export { bar } from "./something";
import { bar } from "./something";
export default foo + bar;
