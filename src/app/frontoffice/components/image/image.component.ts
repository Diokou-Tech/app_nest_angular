import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { finalize, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor(
    private readonly httpClient: HttpClient
  ) {}
  // variables
  imageFile = new FormControl('');
  nameImage = new FormControl('');
  filename : string ='';
  url_img:string | ArrayBuffer = '';
  file?:File;
  formData = new FormData();
  uploadProgress?:number;
  ngOnInit(): void {
  }

  onFileSelected(e:any){
    this.file = e.target.files[0];
    if(this.file){
      console.log(this.file);
      this.filename = this.file.name;
      this.formData.append("fileImage",this.file);
      // view image 
      // verif file type image 
      if(this.file.type.indexOf('image') !== -1){
        const reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = (_event)=> {this.url_img = reader.result ?? ''}    
      }
    }
  }
  uploadFile(){
    const name = this.nameImage.value ?? '';
    this.formData.append('name', name);

    const upload = this.httpClient.post('http://localhost:3000/image/',this.formData,{
      reportProgress: true,
      observe: 'events',
    });
    // event type value progress
    upload.subscribe(data => {
      // get progression request 
      if (data.type == HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round((100 / (data.total || 0) * data.loaded));
        console.log({ 'uploadProgess' : this.uploadProgress});
      }else if (data.type == HttpEventType.Response){
        console.log({"data" : data.body})
        this.reset()
      }
    },(error) =>{
        console.log({"error" : error.error});
        this.uploadProgress=0;
        this.reset()
      }
      );
  }

  reset(){
    this.nameImage = new FormControl('');
    this.url_img="";
    this.filename = "";
    this.file=undefined;
  }

  cancelUpload(){
    // cancel upload 
    // this.uploadSub.unsubscribe();
    this.reset();
  }
}
