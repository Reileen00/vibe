
import { projectsRouter } from '@/modules/projects/server/procedure';
import { createTRPCRouter } from '../init';

import { messagesRouter } from '@/modules/messages/server/procedure';
import { usageRouter } from '@/modules/usage/server/procedures';

export const appRouter = createTRPCRouter({
  usage:usageRouter,
  messages:messagesRouter,
  projects:projectsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;