export const getCounter = async () => {
    try {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/blogvisitor`,{
      const response = await fetch(`/api/blog/blogvisitor`,{
        headers : {
          'method': 'GET',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      } ,{
        cache: 'no-store',
      });

      if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }
      return response.json();


      // const data = await response.json();
      // return data
    } catch (error) {
      console.error('An error occurred during the fetch request:', error);
      // Handle the error gracefully (e.g., show a fallback value or provide a default counter)
      return null;
    }
  };
