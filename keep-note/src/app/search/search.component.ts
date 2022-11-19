import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  notes:note[]=[]

  constructor(private noteService:NoteService) { }

  @Output()
  key2=new EventEmitter<note[]>()

  ngOnInit(): void {}
  searchNote=''

onSearchTextChanged(){
    this.noteService.getNotes().subscribe(value=>this.notes=value)
    this.notes=this.notes.filter(note=>note.title?.startsWith(this.searchNote))
    this.sendNote()
}

sendNote(){
  this.key2.emit(this.notes)
}
  
}
