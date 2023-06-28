module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "blog",
      script: "start.sh",
      args: "--no-autorestart",
      exec_interpreter: "zsh",
      exec_mode: "fork_mode",
      autorestart: false,
    },
  ],
};
