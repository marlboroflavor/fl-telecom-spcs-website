const nextConfig = {
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    cpus: 1,
    workerThreads: true
  }
};

module.exports = nextConfig;
