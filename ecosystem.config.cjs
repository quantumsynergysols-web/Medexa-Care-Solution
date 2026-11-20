// PM2 process file for the VPS. Start with: pm2 start ecosystem.config.cjs
// `next start` reads .env.production from this folder automatically.
module.exports = {
  apps: [
    {
      name: "medexa-web",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start --port 3000 --hostname 127.0.0.1",
      env: { NODE_ENV: "production" },
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "700M",
      autorestart: true,
      restart_delay: 3000,
      time: true,
    },
  ],
};
