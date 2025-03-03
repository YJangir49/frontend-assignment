const fetchProjectsData = async () => {
  try {
    console.log("Fetching data...");
    const url =
      "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

export default fetchProjectsData;
