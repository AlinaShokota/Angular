import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ImageService} from '../shared/service/image.service';
import {Image} from '../shared/model/image';
import {TripService} from '../shared/service/trip.service';
import {Trip} from '../shared/model/trip';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.css']
})
export class ImageEditorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private imageService: ImageService,
              private tripService: TripService) { }

  image: Image = new Image();
  trips: Trip[] = new Array();

  ngOnInit() {
    this.tripService.getAllTrips().subscribe(value => {
      this.trips = value;
    });
  }
  onSave(): void {
    console.log(this.image);
    this.imageService.save(this.image).subscribe(value => {
      alert('Image was added');
      window.location.href = 'image-editor';
    });
  }
  exit(): void {
    window.location.href = '/';
  }
  submitExit(): void {
    console.log(this.image);
    this.imageService.save(this.image).subscribe(value => {
      alert('Image was added');
      window.location.href = '/';
    });
  }

}
