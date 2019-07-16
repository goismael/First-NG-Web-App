import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos:any={hits:[]};
  currentPage:number=1;
  size:number=12;
  totalPages:number;
  pages:Array<number>=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
 
  }

  //TO DISPLAY THE IMAGE
onSearch(dataForm){
this.http.get('https://pixabay.com/api/?key=13045701-fb549345f957e65ae30ec0fc8&q='+ dataForm.word +'&per_page='+this.size+'&page='+this.currentPage)
.subscribe((pagePhotos)=> {
this.pagePhotos = pagePhotos;
//this.totalPages = pagePhotos/this.size;
this.pages = new Array(this.totalPages);
console.log('I AM LISTENING')
})

}
}



