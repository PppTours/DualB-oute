import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PocService } from '../shared/service/pocservice.service';

@Component({
  selector: 'app-poc',
  imports: [],
  templateUrl: './poc.component.html',
  styleUrl: './poc.component.css'
})
export class PocComponent implements OnInit {
  data: any;  
  show = false;
  title: string = "";
  description: string = ""
  media: string = ""

  @ViewChild('informationDiv', { static: false }) informationDiv!: ElementRef<HTMLDivElement>;

  constructor(private pocService: PocService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.pocService.getAll().subscribe(
      (response) => {
        this.data = response; 
      },
      (error) => {
        console.error('Error loading data', error); 
      }
    );
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
          this.show = true; 
          this.title = this.data[i].title;
          this.description = this.data[i].description;
          this.media = this.data[i].image;
        }
      }
    }
  }
}