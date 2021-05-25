import {Component} from '@angular/core';
import {HttpRequestService} from './http-request.service'
import {DataAdapter} from './model'
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpRequestService]
})
export class AppComponent {
  displayedColumns: string[] = ['category'];
  dataSource: MatTableDataSource<DataAdapter>

  constructor(private httpRequestService: HttpRequestService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.httpRequestService.getData().subscribe((item: DataAdapter[]) => {
      this.dataSource = new MatTableDataSource(item);
    })
  }
}
