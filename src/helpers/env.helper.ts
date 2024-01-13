export const env = (key: string) => {
  return {
    APP_NAME: "RON",
    API_URL: "http://localhost:3000",
  }[key];
};
