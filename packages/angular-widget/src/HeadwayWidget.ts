import {
  Component,
  NgModule,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from "@angular/core";

interface WidgetOptions {
  trigger?: string;
}

const HeadwayWidgetClassName = "HW_widget_component";
const HeadwayWidgetSelector = "." + HeadwayWidgetClassName;
const HeadwayWidgetTriggerClassName = "HW_trigger";
const HeadwayWidgetTriggerSelector = "." + HeadwayWidgetTriggerClassName;

@Component({
  selector: "headway-widget",
  template: `<div
    class="{{ headwayWidgetClassName }}"
    style="position: relative; display: inline-block"
  >
    <ng-content></ng-content>
  </div>`,
})
export class HeadwayWidget implements OnInit, OnDestroy {
  @Input() id: string = "widget-1";
  @Input() account: string;
  @Input() trigger: boolean = false;
  @Input() badgePosition: string = "bottom-right";
  @Input() widgetPosition: string = "bottom-right";
  @Input() translations = {};
  @Input() options: WidgetOptions = {};
  @Output() widgetReady = new EventEmitter<boolean>();
  @Output() showWidget = new EventEmitter<boolean>();
  @Output() showDetails = new EventEmitter<boolean>();
  @Output() readMore = new EventEmitter<boolean>();
  @Output() hideWidget = new EventEmitter<boolean>();
  headwayWidgetClassName = HeadwayWidgetClassName;

  initHeadway() {
    const hwConfig = {
      selector: HeadwayWidgetSelector,
      account: this.account,
      trigger: this.trigger
        ? HeadwayWidgetSelector + `_${this.id}`
        : this.options.trigger || HeadwayWidgetTriggerSelector + `_${this.id}`,
      callbacks: {
        onWidgetReady: (widget) => this.widgetReady.emit(widget),
        onShowWidget: () => this.showWidget.emit(),
        onShowDetails: (changelog) => this.showDetails.emit(changelog),
        onReadMore: (changelog) => this.readMore.emit(changelog),
        onHideWidget: () => this.hideWidget.emit(),
      },
      __component: true,
      badgePosition: this.badgePosition,
      widgetPosition: this.widgetPosition,
      translations: this.translations,
      ...this.options
    };
    (this as any).widget = (window as any).Headway.getNewWidget();
    (this as any).widget.init(hwConfig);
  }

  ngOnDestroy(): void {
    (this as any).widget.destroy();
  }

  ngOnInit(): void {
    if ((window as any).Headway) {
      this.initHeadway();
    } else {
      const head = document.getElementsByTagName("head")[0];
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = () => {
        this.initHeadway();
      };
      //script.src = "https://cdn.headwayapp.co/widget.js";
      script.src = "https://cdn.headwaystaging.com/widget.js";
      head.appendChild(script);
    }
  }
}

@Component({
  selector: "headway-widget-trigger",
  template: `<div
    class="{{ headwayWidgetTriggerClassName + '_' + widgetId }}"
    style="position: relative; display: inline-block"
  >
    <ng-content></ng-content>
  </div>`,
})
export class HeadwayWidgetTrigger {
  @Input() widgetId: string = "widget-1";
  headwayWidgetTriggerClassName = HeadwayWidgetTriggerClassName;
}

@NgModule({
  imports: [],
  exports: [HeadwayWidget, HeadwayWidgetTrigger],
  declarations: [HeadwayWidget, HeadwayWidgetTrigger],
})
export class Headway {}
