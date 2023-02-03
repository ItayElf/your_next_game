export const fetchPost = async (
  url: string,
  body?: object,
  headers?: object
) => {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(body ?? {}),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
};
