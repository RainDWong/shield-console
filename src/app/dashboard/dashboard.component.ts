import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  optionTraffic = {
    title: {
      text: 'Traffic'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      max: function (value) {
        // console.info(value);
        return value.max * 2;
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        // formatter: 
        fontSize: 10,
      },
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  };

  optionErrors = {
    title: {
      text: 'Errors'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      max: function (value) {
        return value.max * 2 <= 100 ? value.max * 2 : 100;
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value}%'
      },
    },
    series: [{
      data: [1, 2, 2, 3, 4, 4, 3],
      type: 'line'
    }]
  };

  optionMedianLatency = {
    title: {
      text: 'Median Latency'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      max: function (value) {
        // console.info(value);
        return value.max * 2;
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        // formatter: '{value}%'
      },
    },
    series: [{
      data: [0.2, 0.3, 0.5, 0.8, 1, 1, 0.9],
      type: 'line'
    }]
  };



  constructor() {
  }

  ngOnInit() {
  }
}
