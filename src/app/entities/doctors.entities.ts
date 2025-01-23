export interface TimeSlot {
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Doctor {
  name: string;
  hospital: string;
  language: string[];
  field: string;
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
