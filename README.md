# PowerStack Apollo

Custom mutations server for PowerStack backends

⚡️ [PowerStack: a powerful fullstack web3 development framework](https://powerstack.xyz).

_Disclaimer: This is a work in progress. Will be finalized soon._

## General

https://www.apollographql.com/docs/apollo-server/api/apollo-server/

## Requirements

- Docker https://www.docker.com
- Docker Compose https://docs.docker.com/compose
- Task https://taskfile.dev

## Conventions

https://github.com/blockmatic/powerstack-playbook

## Directory Structure

```
.
├── src/ ................................................ source code
├── taskfile.yaml........................................ dev tasks config
└── .env ................................................ environment variables ([ hasura variables] )
```

## Getting Started

### Docker

```
git clone git@github.com:blockmatic/powerstack-apollo.git
cd powerstack-apollo
cp .env-sample .env # and edit the environment variables
task build
task run
```

### NodeJS

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3301](http://localhost:3301) with your browser to see the result.

You can start editing the page by modifying `app/routes/index.tsx`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3301`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code

## Docker

```
# Build the image
docker build -t powerstack-apollo:local .

# Start a container
docker run --name powerstack-apollo --env-file .env -p 3301:3301 -d powerstack-apollo:local

# Get container ID
docker ps -aqf "name=^powerstack-apollo$"

# Print app output
docker logs -f powerstack-apollo

# Stop, start, restart, kill
docker stop powerstack-apollo
docker start powerstack-apollo
docker restart powerstack-apollo
docker kill powerstack-apollo
```

## Deployment

...

## Learn

https://learn.blockmatic.io

## Blockmatic

Blockmatic is building a robust ecosystem of people and tools for the development of blockchain applications.

[blockmatic.io](https://blockmatic.io)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![Blockmatic Twitter][1.1]][1]
[![Blockmatic Facebook][2.1]][2]
[![Blockmatic Github][3.1]][3]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png 'twitter icon with padding'
[2.1]: http://i.imgur.com/P3YfQoD.png 'facebook icon with padding'
[3.1]: http://i.imgur.com/0o48UoR.png 'github icon with padding'

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png 'twitter icon without padding'
[2.2]: http://i.imgur.com/fep1WsG.png 'facebook icon without padding'
[3.2]: http://i.imgur.com/9I6NRUm.png 'github icon without padding'

<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
