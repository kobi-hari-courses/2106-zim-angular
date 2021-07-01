import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  form = new FormGroup({
    caption: new FormControl('', Validators.required), 
    description: new FormControl('', Validators.required),
    poster: new FormControl('', Validators.required)
  })

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  async save() {
    let movie: Movie = {
      ...this.form.value
    }
    await this.data.addMovie(movie);
  }

}
