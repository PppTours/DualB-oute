import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { PocService } from '../shared/service/pocservice.service';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { SvgComponent } from '../feature/svg/svg.component';

@Component({
  selector: 'app-poc',
  imports: [
    NgOptimizedImage,
    NgIf,
    SvgComponent
  ],
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit, AfterViewInit {
  show = false;
  title: string = "";
  description: string = "";
  media: string = "";
  data: any;
  afterViewInit = false;
  afterInit = false;

  @ViewChild('svgElement', { static: false, read: ElementRef }) svgElement!: ElementRef<SVGElement>;

  constructor(private pocService: PocService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.pocService.getAll().subscribe((data: any) => {
      this.data = data;
      this.afterInit = true;
      this.addClickListenersToSvgElements()
    });
  }

  ngAfterViewInit(): void {
    const svgElement = document.querySelector('svg');
    if (svgElement) {
      this.svgElement = new ElementRef(svgElement);
    } else {
      console.error('No SVG element found');
    }
    this.afterViewInit = true;
    this.addClickListenersToSvgElements();
  }

  addClickListenersToSvgElements(): void {
    if (!this.afterViewInit || !this.afterInit) {
      return;
    }
    if (this.svgElement && this.data) {
      const svg = this.svgElement.nativeElement;
      const tooltip = document.getElementById('tooltip');
      for (let item of this.data) {
        const elements = svg.querySelectorAll(`#${item.svg_id}`);
        if (elements) {
          elements.forEach((element) => {
            element.addEventListener('click', (event) => {
              this.loadInformations(event);
            });
            const allChildren = element.querySelectorAll('*');
            allChildren.forEach((child) => {
              child.addEventListener('click', (event) => {
                this.loadInformations(event);
              });
            });
          });
        }
      }
    }
  }

  closeInformation(): void {
    this.show = false;
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
    this.loadInformations(event);
  }

  loadInformations(event: Event): void {
    if (event.target !== null) {
      const element = event.target as HTMLElement;
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].svg_id == element.id) {
          console.log(this.data[i]);
          this.show = true;
          this.title = this.data[i].title;
          this.description = this.data[i].description;
          this.media = this.data[i].image;
        }
      }
    }
  }
}
