import { ApiClient } from "./ApiClient";

const url = process.env.NODE_ENV === 'production' ? location.origin : "https://localhost:5011"
export const FamilyTreeApi = new ApiClient(url)

