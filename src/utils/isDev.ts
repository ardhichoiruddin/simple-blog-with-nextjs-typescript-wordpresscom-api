const isDev = (): boolean => {
  return process.env.DEV_MODE === "true";
};

export default isDev;
