import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClasseAddGQL, DeleteClasseGQL, FetchCLassesGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {

  constructor(
    private readonly classeAddGql: ClasseAddGQL,
    private readonly fetchClassesGql: FetchCLassesGQL,
    private readonly deleteClasseGql: DeleteClasseGQL
  ) { }
  inputClass="border-3 focus:border-4 w-full transition ease-in-out focus:outline-none p-1 border rounded-lg border-cyan-400";  
  formClass = new FormGroup({
    id : new FormControl(''),
    code : new FormControl('',[Validators.required]),
    nomination : new FormControl('',[Validators.required])
  });
  listCLasses : any;

  ngOnInit(): void {
    this.getAll();
  }

  addClasse()
  {
    let data = {...this.formClass.value};
    console.log(data);
    this.classeAddGql.mutate({classeinput : {code: data.code ?? '', nomination: data.nomination ?? ''}}).subscribe(
      (result)=>{
        console.log(result);
        this.listCLasses.push(result.data?.createClasse);
      },
      (error)=>{
        alert(error.message);
      }
    )
  }
  delete(item:any){
    console.log(item);
    this.deleteClasseGql.mutate({id: item.id}).subscribe(
      (result)=>{
        console.log(result);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    )
  }
  getAll(){
    this.fetchClassesGql.fetch().subscribe(
      (result) => {
        this.listCLasses = result.data.findClasses;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  edit(item:any){
    console.log(item);
  }
}
