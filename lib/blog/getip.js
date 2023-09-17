export const getIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };