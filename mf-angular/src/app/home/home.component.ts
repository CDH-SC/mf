import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-copyright',
  template: `
    <div class="modal-header">
      <h2 class="modal-title"><strong>DO YOU AGREE?</strong></h2>
    </div>
    <div class="modal-body">
      <p>
      Continuing to use this resource registers your agreement to recognize and abide by the permissions restrictions described in the 'About' section of the site. Please ensure you have read and are familiar with them.
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="agree()">AGREE</button>
    </div>
  `
})
export class CopyrightComponent {
  constructor(public activeModal: NgbActiveModal) { }

  agree() {
    document.cookie = 'copyright=true';
    this.activeModal.close();
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  diary: String;

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit() {
    this.http.get('/api/diaries').subscribe(data => {
      this.diary = data['data']['docs'];
    });

    if (document.cookie.split(';').filter(item => item.includes('copyright=')).length) {
      // Cookie "copyright" exists
      if (document.cookie.split(';').filter(item => item.includes('copyright=false')).length) {
        this.showCopyright();
      }
    } else {
      this.showCopyright();
    }
  }

  showCopyright() {
    this.modalService.open(CopyrightComponent, { centered: true });
  }

}
