import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MarvelService } from "src/app/services/marvel.service";

@Component({
  selector: "search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.scss"]
})
export class SearchInputComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private marvelService: MarvelService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ""
    });

    this.searchForm.valueChanges.subscribe(res => {
      setTimeout(() => {
        if (res.search !== "") {
          this.marvelService.getSearch(res.search);
        } else {
          this.marvelService.getCharacters();
        }
      }, 1000);
    });
  }
}
