import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {
  }

  showToast(message: string, panelClass: string[], duration: number): void {
    const snackBarConfig: MatSnackBarConfig = {
      duration,
      panelClass,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    };

    this.snackBar.open(message, undefined, snackBarConfig);
  }
}
