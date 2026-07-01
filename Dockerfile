FROM node:22-alpine AS build

WORKDIR /app

ENV HUSKY=0

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --allow-build=esbuild

COPY . .
RUN pnpm build-storybook

FROM nginx:1.27-alpine AS runtime

COPY --from=build /app/storybook-static /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
