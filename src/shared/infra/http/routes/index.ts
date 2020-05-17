import { Router } from 'express';

import { usersRouter } from '@modules/users/infra/http/routes/user.routes';
import { sessionRouter } from '@modules/users/infra/http/routes/sessions.routes';
import { appointmentsRouter } from '@modules/appointments/infra/http/routes/appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);

export { routes };
