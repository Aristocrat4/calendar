export interface TimeSlot {
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Doctor {
  id: number;
  name: string;
  imageUrl: string;
  specialty: string;
  clinicInfo: string;
  experienceYears: number;
  slots: TimeSlot[];
  type: DoctorType;
}

export enum DoctorType {
  PERSONAL = 'პირადი ექიმი',
  ORTHOPEDIST = 'ორთოპედიული',
  ALL_SPECIALIST = 'ყველა სპეციალისტი',
  PEDIATRICIAN = 'პედიატრი',
  CARDIOLOGIST = 'კარდიოლოგი',
}
export interface FilterOption {
  id: number;
  label: string;
  value: string;
}
