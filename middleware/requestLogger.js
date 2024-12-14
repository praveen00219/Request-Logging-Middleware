const requestLogger = (req, res, next) => {
  const { method, url, ip } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
  next(); // Move to the next middleware or route handler
};

module.exports = requestLogger;
