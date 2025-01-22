import { Injectable } from '@angular/core';
import {
  Doctor,
  DoctorType,
  FilterOption,
  TimeSlot,
} from '../entities/doctors.entities';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  constructor() {}

  // Interfaces remain the same as before

  // Mock Data
  mockTimeSlots: TimeSlot[] = [
    { startTime: '10:00', endTime: '10:20', isAvailable: true },
    { startTime: '10:20', endTime: '10:40', isAvailable: true },
    { startTime: '10:40', endTime: '11:00', isAvailable: false },
    { startTime: '11:00', endTime: '11:20', isAvailable: true },
    { startTime: '11:20', endTime: '11:40', isAvailable: true },
    { startTime: '11:40', endTime: '12:00', isAvailable: true },
    { startTime: '12:00', endTime: '12:20', isAvailable: true },
    { startTime: '11:40', endTime: '12:00', isAvailable: false },
    { startTime: '12:00', endTime: '12:20', isAvailable: true },
  ];

  mockDoctors: Doctor[] = [
    {
      id: 1,
      name: 'ალექსანდრე მამულაშვილი',
      imageUrl: 'assets/images/doctor1.jpg',
      specialty: 'პირადი ექიმი',
      clinicInfo: 'კურაციო',
      experienceYears: 16,
      slots: [...this.mockTimeSlots],
      type: DoctorType.PERSONAL,
    },
    {
      id: 2,
      name: 'ნინო ოქროპირიძე',
      imageUrl: 'assets/images/doctor2.jpg',
      specialty: 'ორთოპედიული',
      clinicInfo: 'კურაციო',
      experienceYears: 16,
      slots: [...this.mockTimeSlots],
      type: DoctorType.ORTHOPEDIST,
    },
    {
      id: 3,
      name: 'ნინო ოქროპირიძე',
      imageUrl: 'assets/images/doctor3.jpg',
      specialty: 'ყველა სპეციალისტი',
      clinicInfo: 'გულის',
      experienceYears: 16,
      slots: [...this.mockTimeSlots],
      type: DoctorType.ALL_SPECIALIST,
    },
    {
      id: 4,
      name: 'გიორგი ბერიძე',
      imageUrl: 'assets/images/doctor4.jpg',
      specialty: 'პედიატრი',
      clinicInfo: 'ღუდუშაური',
      experienceYears: 12,
      slots: [...this.mockTimeSlots],
      type: DoctorType.PEDIATRICIAN,
    },
    {
      id: 5,
      name: 'მარიამ კვარაცხელია',
      imageUrl: 'assets/images/doctor5.jpg',
      specialty: 'კარდიოლოგი',
      clinicInfo: 'ღუდუშაური',
      experienceYears: 20,
      slots: [...this.mockTimeSlots],
      type: DoctorType.CARDIOLOGIST,
    },
    // Adding 5 more doctors
    {
      id: 6,
      name: 'თამარ გიორგაძე',
      imageUrl: 'assets/images/doctor6.jpg',
      specialty: 'პირადი ექიმი',
      clinicInfo: 'გულის',
      experienceYears: 14,
      slots: [...this.mockTimeSlots],
      type: DoctorType.PERSONAL,
    },
    {
      id: 7,
      name: 'დავით ჩიხლაძე',
      imageUrl: 'assets/images/doctor7.jpg',
      specialty: 'ორთოპედიული',
      clinicInfo: 'გულის',
      experienceYears: 18,
      slots: [...this.mockTimeSlots],
      type: DoctorType.ORTHOPEDIST,
    },
    {
      id: 8,
      name: 'სოფიკო მესხი',
      imageUrl: 'assets/images/doctor8.jpg',
      specialty: 'კარდიოლოგი',
      clinicInfo: 'კურაციო',
      experienceYears: 15,
      slots: [...this.mockTimeSlots],
      type: DoctorType.CARDIOLOGIST,
    },
    {
      id: 9,
      name: 'ლევან კაპანაძე',
      imageUrl: 'assets/images/doctor9.jpg',
      specialty: 'პედიატრი',
      clinicInfo: 'ღუდუშაური',
      experienceYears: 22,
      slots: [...this.mockTimeSlots],
      type: DoctorType.PEDIATRICIAN,
    },
    {
      id: 10,
      name: 'ანა წერეთელი',
      imageUrl: 'assets/images/doctor10.jpg',
      specialty: 'ყველა სპეციალისტი',
      clinicInfo: 'გულის',
      experienceYears: 19,
      slots: [...this.mockTimeSlots],
      type: DoctorType.ALL_SPECIALIST,
    },
  ];

  // Filters remain the same
  mockClinics: string[] = ['კურაციო', 'გულის', 'ღუდუშაური'];
}
