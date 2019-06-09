import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-infogeneral',
  templateUrl: './infogeneral.component.html',
  styleUrls: ['./infogeneral.component.scss']
})
export class InfogeneralComponent implements OnInit {

  muted;

  infoShow: boolean;
  constructor(private ServiceService: ServiceService) { }

  public chapters = this.ServiceService.getChapters();
  public chapter = this.chapters[1];
  ngOnInit() {
  }

  @ViewChild("myTrailer") myTrailer: ElementRef;
  onMute(){
    this.muted = !this.muted;
    if(this.muted){
      this.myTrailer.nativeElement.volume = 0;
    }else{
      this.myTrailer.nativeElement.volume = 1;
    }
    
  }
}
