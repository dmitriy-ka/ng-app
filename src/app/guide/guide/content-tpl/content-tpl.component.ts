import { ContentTpl } from '../../@types/guide.config';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'lv-content-tpl',
  templateUrl: './content-tpl.template.html',
  styleUrls: ['./content-tpl.component.scss']
})
export class ContentTplComponent implements OnInit, OnChanges, OnDestroy {
  private onDestroy: Subject<void> = new Subject();

  @Input() contentTpl: ContentTpl;

  @ViewChild('componentHost', { read: ViewContainerRef })
  componentHost: ViewContainerRef;
  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngOnChanges({ contentTpl }: SimpleChanges) {
    if (
      contentTpl.currentValue &&
      contentTpl.currentValue.type === 'component'
    ) {
      this.createComponent(contentTpl.currentValue.content);
    }
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  createComponent(component) {
    this.componentHost.clear();
    const factory = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.componentHost.createComponent(factory);
    this.componentRef.instance.message = `Hello world`;
  }

  private destroyComponent() {
    this.componentRef.destroy();
  }
}
