FROM node:20-alpine

WORKDIR /usr/src/app

# COPY pnpm-lock.yaml ./

# COPY package.json ./

# COPY apps/web/package.json ./apps/web/package.json

# COPY apps/server/package.json ./apps/server/package.json

# COPY packages/db/package.json ./packages/db/package.json

# COPY packages/eslint-config/package.json ./packages/eslint-config/package.json

# COPY packages/tailwind-config/package.json ./packages/tailwind-config/package.json

# COPY packages/types/package.json ./packages/types/package.json

# COPY packages/typescript-config/package.json ./packages/typescript-config/package.json

# COPY packages/ui/package.json ./packages/ui/package.json

RUN npm install -g pnpm nodemon dotenv

# RUN pnpm install

COPY . .

# RUN pnpm install --frozen-lockfile

RUN pnpm install

EXPOSE 3000 5173

# Command to run your Turborepo dev environment
CMD ["pnpm", "dev"]
