module.exports = {
  // Your other configurations...
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add snapshot.managedPaths option to address warnings
    config.snapshot = {
      managedPaths: [
        'D:/Portfolio/nextjs/node_modules/@next/swc-win32-ia32-msvc',
        'D:/Portfolio/nextjs/node_modules/@next/swc-win32-arm64-msvc',
        // ... other paths
      ],
    };

    return config;
  },
};
