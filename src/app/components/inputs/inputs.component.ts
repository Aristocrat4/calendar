import { Component, inject } from '@angular/core';
import { DoctorsService } from '../../services/doctors.service';
import { Doctor } from '../../entities/doctors.entities';

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
  languages = ['ქართული', 'ინგლისური', 'რუსული'];
  doctors: Doctor[] = [
    {
      name: 'დონალდ ტრამპი',
      hospital: 'კურაციო',
      language: ['ინგლისური', 'ქართული'],
      field: 'ოფთალმოლოგი',
    },
    {
      name: 'ბიძნა ივანიშვილი',
      hospital: 'გული',
      language: ['რუსული'],
      field: 'ფსიქოლოგი',
    },
    {
      name: 'იაგო ხვიჩია',
      hospital: 'ავერსი',
      language: ['ქართული'],
      field: 'ნევროლოგი',
    },
    {
      name: 'მიხეილ სააკაშვილი',
      hospital: 'სული',
      language: ['ქართული', 'ინგლისური'],
      field: 'ქირურგი',
    },
    {
      name: 'ალექსანდრე რაქვიაშვილი',
      hospital: 'ავერსი',
      language: ['ქართული', 'ინგლისური'],
      field: 'კარდიოლოგი',
    },
    {
      name: 'ზურაბ ჯაფარიძე',
      hospital: 'გული',
      language: ['ქართული', 'ინგლისური'],
      field: 'ანესთეზიოლოგი',
    },
    {
      name: 'ირაკლი კობახიძე',
      hospital: 'კურაციო',
      language: ['ქართული', 'რუსული'],
      field: 'ვენეროლოგი',
    },
    {
      name: 'ნინო ბურჯანაძე',
      hospital: 'გული',
      language: ['ქართული', 'რუსული'],
      field: 'თერაპევტი',
    },
  ];
  uniqueFields = new Set(this.doctors.map((doctor) => doctor.field));
}
