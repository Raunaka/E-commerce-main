const customFetch = async (url, { body, ...rest }) => {
  const config = {
    ...rest,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      ...(rest.headers || {}), // Preserve any additional headers provided
    },
    body: body ? JSON.stringify(body) : undefined, // Simplified assignment
  };

  try {
    let response = await fetch(url, config);
    let data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(`Request failed with status: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error for handling
  }
};

export default customFetch;
