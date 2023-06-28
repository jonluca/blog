module.exports = {

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
