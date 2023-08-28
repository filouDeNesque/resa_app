import { PrismaClient } from "@prisma/client";
import { env } from "~/env.mjs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};


// //test
// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log:
//       env.PRISMA_CLIENT_ENGINE_TYPE === "query" ||
//       env.PRISMA_CLIENT_ENGINE_TYPE === "error" ||
//       env.PRISMA_CLIENT_ENGINE_TYPE === "warn"
//         ? [env.PRISMA_CLIENT_ENGINE_TYPE]
//         : ["error"],
//   });

// if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

