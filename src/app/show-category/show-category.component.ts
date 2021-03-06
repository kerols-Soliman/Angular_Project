import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { NgxSpinner, NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ICategroy } from '../interface/Categroy';
import { CategroyService } from '../service/categroy.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {

  constructor(private categoryService:CategroyService,private route:Router
    ,private spinner:NgxSpinnerService) 
    {
      
     }

  AllCategory:ICategroy[];
  ngOnInit(): void {
    this.spinner.show()
    this.categoryService.getAllCategories().subscribe(data=>{
      this.AllCategory=data;
      this.spinner.hide()
    })
  }

  remove(id:number){
    this.categoryService.DeleteCategory(id).subscribe(data=>console.log(data));
    this.route.navigate(["/Category"]).then(() => {
      window.location.reload();
    });
  }

  EditCategory(id:number)
  {
      this.route.navigate(['EditCategory',id]);
  }

}
