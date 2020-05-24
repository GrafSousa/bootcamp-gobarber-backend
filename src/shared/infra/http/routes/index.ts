import { Router } from 'express';

import { usersRouter } from '@modules/users/infra/http/routes/user.routes';
import { sessionRouter } from '@modules/users/infra/http/routes/sessions.routes';
import { appointmentsRouter } from '@modules/appointments/infra/http/routes/appointments.routes';
import { passwordRouter } from '@modules/users/infra/http/routes/password.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);
routes.use('/password', passwordRouter);

export { routes };
