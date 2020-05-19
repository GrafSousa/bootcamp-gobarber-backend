import 'reflect-metadata';

import { AppError } from '@shared/errors/AppError';
import { CreateAppointmentService } from './CreateAppointmentService';
import { FakeAppointmentsRepository } from '../repositories/fakes/FakeAppointmentsRepository';

describe('CreateAppointmentService', () => {
  it('should be able to create a new appoinment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentsRepository();
    const createAppointmentRepository = new CreateAppointmentService(
      fakeAppointmentRepository
    );

    const appointment = await createAppointmentRepository.execute({
      provider_id: '12323213213',
      date: new Date(),
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12323213213');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentRepository = new FakeAppointmentsRepository();
    const createAppointmentRepository = new CreateAppointmentService(
      fakeAppointmentRepository
    );

    const appoinmentDate = new Date(2020, 4, 15, 11);

    await createAppointmentRepository.execute({
      provider_id: '12323213213',
      date: appoinmentDate,
    });

    expect(
      createAppointmentRepository.execute({
        provider_id: '12323213213',
        date: appoinmentDate,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
