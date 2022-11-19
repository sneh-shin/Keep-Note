import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { note } from '../model/note';
import { NOTES } from '../model/notes';
import { NoteService } from '../services/note.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  notes:note[]=[]


  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  searchNote:string="";
  isControl=false;
  id:number| undefined=0;

  getNotes(){
    this.noteService.getNotes().subscribe(value=>this.notes=value)
  }
  getData(data:any){
    this.notes=data
  }

  deleteNote(id: number | undefined) {
    if (id) {
      this.noteService.deleteNote(id).subscribe(value => {
        this.getNotes();
    })
  }    
  }

}
