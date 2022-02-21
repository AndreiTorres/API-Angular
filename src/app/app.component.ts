import { Component, OnInit } from '@angular/core';
import { BusquedaService } from './servicios/busqueda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ServicioBuscarService : BusquedaService) {
    this.ServicioBuscarService = ServicioBuscarService;
  }

  ngOnInit(): void {
      this.ServicioBuscarService.busqueda('q').then((response) => {
        alert("Total: " + response.total_count);
      }, (error) => {
        alert("Error: " + error.statusText)
      })
  }
  title = 'GitHub Browser';
}
