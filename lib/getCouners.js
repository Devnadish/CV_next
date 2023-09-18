export const getCounter = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/blogvisitor`,{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      } ,{
        cache: 'no-store',
      });

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }
      return res.json();


      // const data = await response.json();
      // return data
    } catch (error) {
      console.error('An error occurred during the fetch request:', error);
      // Handle the error gracefully (e.g., show a fallback value or provide a default counter)
      return null;
    }
  };
