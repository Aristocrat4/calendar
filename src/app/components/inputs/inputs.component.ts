import { Component, inject } from '@angular/core';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss',
})
export class InputsComponent {
  service = inject(DoctorsService);
  hospitals = ['კურაციო', 'ავერსი', 'გული', 'სული'];
  doctors = [
    {
      name: 'დონალდ ტრამპი',
      hospital: 'კურაციო',
      language: ['ინგლისური', 'ქართული'],
      field: 'ოფთალმოლოგი',
    },
    'ბიძნა ივანიშვილი',
    'იაგო ხვიჩია',
    'მიხეილ სააკაშვილი',
    'ალექსანდრე რაქვიაშვილი',
    'ზურაბ ჯაფარიძე',
    'ირაკლი კობახიძე',
    'ნინო ბურჯანაძე',
  ];
}
