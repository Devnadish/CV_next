export const getCounter = async () => {
  try {
    const response = await fetch("http://localhost:3000/backend/blog/visitor", {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred during the fetch request:", error);
    return null;
  }
};