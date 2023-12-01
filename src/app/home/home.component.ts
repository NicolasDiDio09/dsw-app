import { Component, OnInit } from '@angular/core';
import Package from '../models/package';
import { Property } from '../models/property';
import { Car } from '../models/car';
import { MedicalAssistance } from '../models/medical-assistance';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  packageList: Package[] = [];
  propertyList: Property[] = [];
  carList: Car[] = [];
  asistMedList: MedicalAssistance[] = [];

  constructor(
    private readonly route : ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ propertyList, packages, cars, medAssists }) => {
      this.propertyList = propertyList;
      this.packageList = packages;
      this.carList = cars;
      this.asistMedList = medAssists;
    })
  }
}
