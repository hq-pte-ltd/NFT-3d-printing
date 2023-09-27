module.exports = {
    apps: [
      {
        name: "nft-3d-printing",
        script: "./node_modules/.bin/react-app-rewired",
        args: "start",
        watch: false,
        autorestart: true,
      },
    ],
  };