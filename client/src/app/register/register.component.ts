import { AccountService } from './../_services/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelregister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(res => {
      console.log(res);
      this.cancel();
    }, error => {
      console.log(error);
      this.toast.error(error.error);
    });
  }

  cancel() {
    this.cancelregister.emit(false);
  }

}
