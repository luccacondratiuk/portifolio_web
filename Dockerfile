# Stage 1: build the application
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source files and build
COPY . .
RUN npm run build:ssr

# Stage 2: run the application
FROM node:20-alpine AS runner
WORKDIR /app

# Install production dependencies only
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

ENV PORT=4000
EXPOSE 4000
CMD ["node", "dist/personal-landing-page/server/server.mjs"]
