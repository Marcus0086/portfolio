/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    skills: process.env.skills,
    userConfig: process.env.userConfig,
  },
};

module.exports = nextConfig;
