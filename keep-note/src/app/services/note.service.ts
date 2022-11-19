import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { note } from '../model/note';
import { NOTES } from '../model/notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  URL:string="http://localhost:3000/notes"

  constructor(private httpclient:HttpClient) { }

  getNotes():Observable<Array<note>>{
    return this.httpclient.get<Array<note>>(this.URL)
  }
  addNote(data:note){
    return this.httpclient.post(this.URL,data)
  }

  deleteNote(id:number){
     return this.httpclient.delete(this.URL + "/" + id)
  }
  
}
