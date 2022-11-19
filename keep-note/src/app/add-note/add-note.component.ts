import { Component, OnInit } from '@angular/core';
import { note } from '../model/note';
import {NOTES} from '../model/notes';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  notes:note={}
  noteTitle:string='';
  noteContent:string='';
  panelOpenState=false;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

  addNote(){
    if(this.notes.title){
    this.noteService.addNote(this.notes).subscribe(
      {next(x) {alert("Note added successfully")},
    error(){alert("Error Occured")}}
    )
    } 
    this.clearForm  
  }
  clearForm(){
    this.notes={} 
  }

}
