export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  chiefComplaint: string;
  history: string[];
  symptoms: string[];
  room: string;
}
