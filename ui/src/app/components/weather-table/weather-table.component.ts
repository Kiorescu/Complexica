import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {WeatherDay} from "../../core/model/weather-day.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnInit, AfterViewInit, OnChanges{

  @Input()
  weatherDays: Array<WeatherDay> = new Array<WeatherDay>();
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['city', 'countryCode', 'temperature', 'clouds', 'rain', 'dt']
  dataSource = new MatTableDataSource(this.weatherDays);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(changes.weatherDays.currentValue);
    this.dataSource.sort = this.sort;
  }

}
