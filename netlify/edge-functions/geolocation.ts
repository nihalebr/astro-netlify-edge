import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  
  // Get the page content
  const response = await context.next();
  const page = await response.text();

  // Search for the placeholder
  const regex = /COUNTRYNAME/i;

  // Replace the content
  const countryName = Object.values(context) || "somewhere in the world";

  const updatedPage = page.replace(regex, countryName);
  return new Response(updatedPage, response);
};
