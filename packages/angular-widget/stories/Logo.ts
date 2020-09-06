import {Component, NgModule, Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';

const HeadwayWidgetClassName = "HW_widget_component";
const HeadwayWidgetSelector = "." + HeadwayWidgetClassName;
const HeadwayWidgetTriggerClassName = "HW_trigger";
const HeadwayWidgetTriggerSelector = "." + HeadwayWidgetTriggerClassName;

@Component({
  selector: 'logo',
  template: `<div style="font-size: 32px;font-weight: bold; font-family: Helvetica; background: #FFB800; color: #223CFF; padding: 20px">Your logo</div>`
})
export class Logo {
}
