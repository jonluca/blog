module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [ // First application
        {
            name: 'blog',
            script: 'start.sh',
            args: '--no-autorestart',
            exec_interpreter: "bash",
            exec_mode: "fork_mode"
        }

    ]
};
