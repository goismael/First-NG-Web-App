import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { url } from 'inspector';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
pagePhotos:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
onSearch(dataForm){
return this.http.get(url:"https://pixabay.com/api/?key=13045701-fb549345f957e65ae30ec0fc8&q="+ dataForm.word +"&per_page=10&page=1")


.map(resp=>resp.json())
.subscribe(next: data=>{
  console.log(data);
  this.pagePhotos= data;
})
}
}
