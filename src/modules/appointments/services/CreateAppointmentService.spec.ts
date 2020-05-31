import 'reflect-metadata';

import { AppError } from '@shared/errors/AppError';
import { CreateAppointmentService } from './CreateAppointmentService';
import { FakeAppointmentsRepository } from '../repositories/fakes/FakeAppointmentsRepository';

let fakeAppointmentRepository: FakeAppointmentsRepository;
let createAppointmentRepository: CreateAppointmentService;

describe('CreateAppointmentService', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentsRepository();
    createAppointmentRepository = new CreateAppointmentService(
      fakeAppointmentRepository
    );
  });
  it('should be able to create a new appoinment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    const appointment = await createAppointmentRepository.execute({
      provider_id: 'provider_id',
      user_id: 'user_id',
      date: new Date(2020, 4, 10, 13),
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('provider_id');
  });

  it('should not be able to create two appointments on the same time', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 10).getTime();
    });

    const appoinmentDate = new Date(2020, 4, 10, 11);

    await createAppointmentRepository.execute({
      provider_id: 'provider_id',
      user_id: 'user_id',
      date: appoinmentDate,
    });

    await expect(
      createAppointmentRepository.execute({
        provider_id: 'provider_id',
        user_id: 'user_id',
        date: appoinmentDate,
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointmentRepository.execute({
        provider_id: 'provider_id',
        user_id: 'user_id',
        date: new Date(2020, 4, 10, 11),
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment with same user as provider', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointmentRepository.execute({
        provider_id: 'user_id',
        user_id: 'user_id',
        date: new Date(2020, 4, 10, 13),
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment before 8am and after 5pm', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointmentRepository.execute({
        provider_id: 'provider_id',
        user_id: 'user_id',
        date: new Date(2020, 4, 11, 7),
      })
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointmentRepository.execute({
        provider_id: 'provider_id',
        user_id: 'user_id',
        date: new Date(2020, 4, 10, 18),
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
