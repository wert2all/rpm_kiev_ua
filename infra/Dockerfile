FROM node:19-alpine
ENV DATE=20230522
ENV PNPM_VERSION=8.3.1

WORKDIR /app
RUN apk update && apk upgrade \
    && apk add curl bash rsync openssh-client
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/download/v${PNPM_VERSION}/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm fetch
