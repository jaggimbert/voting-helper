import { getGoogleApiKey } from "../constants/keys";

export async function findElectionsNearMe(address) {
    // Replace YOUR_API_KEY with your actual Google Civic Information API Key
    const apiKey = getGoogleApiKey();
    const url = new URL('https://www.googleapis.com/civicinfo/v2/voterinfo');
  
    // Build the query parameters
    url.searchParams.append('key',apiKey);
    url.searchParams.append('address', address);
    // You can add additional parameters like electionId here
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
  
    return response.json();
  }
