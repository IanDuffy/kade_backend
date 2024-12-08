// utils/generateSlug.ts
export const generateSlug = (title: string) => {
    return title
      .toLowerCase() // Convert to lower case
      .replace(/[^a-z0-9 -]/g, '') // Remove special characters
      .trim() // Trim whitespace from start and end
      .replace(/\\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with a single one
      .substring(0, 100); // Limit to 100 characters if needed
  };
  