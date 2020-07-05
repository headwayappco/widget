import {
  Component,
  NgModule,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from "@angular/core";

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
  @Input() name: string;
  @Input() account: string;
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
      trigger: HeadwayWidgetSelector,
      callbacks: {
        onWidgetReady: () => this.widgetReady.emit(),
        onShowWidget: () => this.showWidget.emit(),
        onShowDetails: () => this.showDetails.emit(),
        onReadMore: () => this.readMore.emit(),
        onHideWidget: () => this.hideWidget.emit(),
      },
      krzysztof: true,
      badgePosition: "top-right",
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
      script.src = "https://cdn.headwayapp.co/widget.js";
      head.appendChild(script);
    }
  }
}

@NgModule({
  imports: [],
  exports: [HeadwayWidget],
  declarations: [HeadwayWidget],
})
export class Headway {}
